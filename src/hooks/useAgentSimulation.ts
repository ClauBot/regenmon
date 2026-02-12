import { useEffect, useRef } from 'react';
import type { AgentDashboardState, Agent, ZoneTask, TaskCategory } from '../agentTypes';
import { AGENT_ROLE_MAP } from '../agentRoles';
import { CONNECTIONS } from '../worldData';
import { findPath } from './usePathfinding';

const TICK_MS = 100;
const TRAVEL_SPEED = 0.05; // progress per tick (~2s per connection)
const BASE_WORK_SPEED = 0.5; // progress per tick
const ENERGY_DRAIN = 0.15; // per work tick
const ENERGY_RECOVER = 0.5; // per rest tick
const REST_THRESHOLD = 15; // rest when energy below this
const WAKE_THRESHOLD = 80; // wake when energy above this
const WARNING_THRESHOLD = 30; // warn when energy below this
const AUTO_ASSIGN_INTERVAL = 30; // ticks between auto-assign checks

// Get adjacent zone ids (direct connections)
function getAdjacentZones(zoneId: string): string[] {
  const adjacent: string[] = [];
  for (const conn of CONNECTIONS) {
    if (conn.from === zoneId) adjacent.push(conn.to);
    if (conn.to === zoneId) adjacent.push(conn.from);
  }
  return adjacent;
}

// Score a task for an agent based on role match and proximity
function scoreTask(agent: Agent, task: ZoneTask, categories: TaskCategory[]): number {
  let score = 0;
  // Category match
  if (categories.includes(task.category)) score += 10;
  // Same zone bonus
  if (task.zoneId === agent.currentZoneId) score += 5;
  // Adjacent zone
  else if (getAdjacentZones(agent.currentZoneId).includes(task.zoneId)) score += 2;
  // Difficulty preference: energetic agents prefer harder, poetic prefer easier
  if (agent.personalityId === 'energetic') score += task.difficulty;
  if (agent.personalityId === 'poetic') score += (6 - task.difficulty);
  // Small random factor
  score += Math.random() * 2;
  return score;
}

function autoAssignAgent(agent: Agent, tasks: ZoneTask[]): { taskId: string; zoneId?: string } | null {
  const role = AGENT_ROLE_MAP.get(agent.speciesId);
  const categories = role?.categories ?? [];

  // Find available tasks
  const available = tasks.filter((t) => t.status === 'pending' && !t.assignedAgentId);
  if (available.length === 0) return null;

  // Score and sort
  const scored = available.map((t) => ({ task: t, score: scoreTask(agent, t, categories) }));
  scored.sort((a, b) => b.score - a.score);

  const best = scored[0];
  if (!best) return null;

  // If task is in current zone, assign directly
  if (best.task.zoneId === agent.currentZoneId) {
    return { taskId: best.task.id };
  }

  // Otherwise, travel to the task's zone
  return { taskId: best.task.id, zoneId: best.task.zoneId };
}

export function useAgentSimulation(
  stateRef: React.RefObject<AgentDashboardState>,
  updateSimulation: (updater: (prev: AgentDashboardState) => AgentDashboardState) => void,
) {
  const tickRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      tickRef.current++;
      const tick = tickRef.current;

      updateSimulation((prev) => {
        let changed = false;
        const newAgents = prev.agents.map((agent) => {
          // ── TRAVELING ──
          if (agent.status === 'traveling' && agent.travelPath.length > 1) {
            const newProgress = agent.travelProgress + TRAVEL_SPEED;
            if (newProgress >= 1) {
              const nextStep = agent.travelStepIndex + 1;
              if (nextStep >= agent.travelPath.length - 1) {
                changed = true;
                return {
                  ...agent,
                  currentZoneId: agent.travelPath[agent.travelPath.length - 1],
                  targetZoneId: null,
                  travelPath: [],
                  travelStepIndex: 0,
                  travelProgress: 0,
                  status: 'idle' as const,
                };
              }
              changed = true;
              return {
                ...agent,
                currentZoneId: agent.travelPath[nextStep],
                travelStepIndex: nextStep,
                travelProgress: 0,
              };
            }
            changed = true;
            return { ...agent, travelProgress: newProgress };
          }

          // ── RESTING ──
          if (agent.status === 'resting') {
            const newEnergy = Math.min(100, agent.energy + ENERGY_RECOVER);
            if (newEnergy >= WAKE_THRESHOLD) {
              changed = true;
              return { ...agent, energy: newEnergy, status: 'idle' as const };
            }
            if (newEnergy !== agent.energy) {
              changed = true;
              return { ...agent, energy: newEnergy };
            }
          }

          // ── WORKING — drain energy ──
          if (agent.status === 'working') {
            const newEnergy = Math.max(0, agent.energy - ENERGY_DRAIN);
            if (newEnergy <= REST_THRESHOLD && agent.autoMode) {
              // Force rest — clear warning
              changed = true;
              return { ...agent, energy: newEnergy, status: 'resting' as const, currentTaskId: null, energyWarning: false };
            }
            if (newEnergy !== agent.energy) {
              changed = true;
              const warning = newEnergy < WARNING_THRESHOLD && newEnergy > REST_THRESHOLD;
              return { ...agent, energy: newEnergy, energyWarning: warning };
            }
          }

          return agent;
        });

        // Update task progress for working agents
        const newTasks = prev.tasks.map((task) => {
          if (task.status !== 'in_progress' || !task.assignedAgentId) return task;
          const agent = newAgents.find((a) => a.id === task.assignedAgentId);
          if (!agent || agent.status !== 'working') {
            // Agent stopped working (e.g. forced rest) — unassign
            if (agent && agent.status !== 'working' && agent.currentTaskId !== task.id) {
              changed = true;
              return { ...task, assignedAgentId: null, status: 'pending' as const };
            }
            return task;
          }

          const role = AGENT_ROLE_MAP.get(agent.speciesId);
          const speedMultiplier = role?.workSpeed ?? 1.0;
          const newProgress = Math.min(task.progress + BASE_WORK_SPEED * speedMultiplier, 100);

          if (newProgress !== task.progress) {
            changed = true;
            if (newProgress >= 100) {
              const idx = newAgents.findIndex((a) => a.id === agent.id);
              if (idx >= 0) {
                newAgents[idx] = { ...newAgents[idx], status: 'idle', currentTaskId: null };
              }
              return { ...task, progress: 100, status: 'completed' as const };
            }
            return { ...task, progress: newProgress };
          }
          return task;
        });

        // ── AUTO-ASSIGN idle agents ──
        if (tick % AUTO_ASSIGN_INTERVAL === 0) {
          for (let i = 0; i < newAgents.length; i++) {
            const agent = newAgents[i];
            if (agent.status !== 'idle' || !agent.autoMode) continue;
            if (agent.energy < REST_THRESHOLD) {
              // Too tired, rest instead
              newAgents[i] = { ...agent, status: 'resting' as const };
              changed = true;
              continue;
            }

            const assignment = autoAssignAgent(agent, newTasks);
            if (!assignment) continue;

            if (assignment.zoneId && assignment.zoneId !== agent.currentZoneId) {
              // Need to travel first
              const path = findPath(agent.currentZoneId, assignment.zoneId);
              newAgents[i] = {
                ...agent,
                targetZoneId: assignment.zoneId,
                travelPath: path,
                travelStepIndex: 0,
                travelProgress: 0,
                status: 'traveling' as const,
              };
              changed = true;
            } else {
              // Assign directly
              newAgents[i] = { ...agent, status: 'working' as const, currentTaskId: assignment.taskId };
              const taskIdx = newTasks.findIndex((t) => t.id === assignment.taskId);
              if (taskIdx >= 0) {
                newTasks[taskIdx] = { ...newTasks[taskIdx], assignedAgentId: agent.id, status: 'in_progress' as const };
              }
              changed = true;
            }
          }
        }

        if (!changed) return prev;
        return { ...prev, agents: newAgents, tasks: newTasks };
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [stateRef, updateSimulation]);
}

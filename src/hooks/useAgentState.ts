import { useState, useCallback, useRef, useEffect } from 'react';
import type { AgentDashboardState, Agent, ChatMessage } from '../agentTypes';
import { INITIAL_TASKS } from '../agentTasks';
import { STARTING_ROLES } from '../agentRoles';
import { findPath } from './usePathfinding';

const STORAGE_KEY = 'regenmon-agents-v2';

// Generate starting agents from roster
const DEFAULT_AGENTS: Agent[] = STARTING_ROLES.map((role, i) => ({
  id: `agent-${i + 1}`,
  name: role.agentName,
  speciesId: role.speciesId,
  personalityId: role.personalityId,
  currentZoneId: role.homeZoneId,
  targetZoneId: null,
  travelPath: [],
  travelProgress: 0,
  travelStepIndex: 0,
  status: 'idle' as const,
  currentTaskId: null,
  energy: 100,
  autoMode: true,
}));

const DEFAULT_STATE: AgentDashboardState = {
  agents: DEFAULT_AGENTS,
  tasks: INITIAL_TASKS,
  chatHistory: [],
  dashboardMode: 'observe',
  playerState: { speciesId: null, currentZoneId: 'nexo', facing: 'down' },
};

function loadState(): AgentDashboardState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as AgentDashboardState;
    // Validate saved state has agents
    if (!saved.agents || saved.agents.length === 0) return null;
    // Ensure new fields exist on loaded state
    if (!saved.dashboardMode) saved.dashboardMode = 'observe';
    if (!saved.playerState) saved.playerState = DEFAULT_STATE.playerState;
    // Ensure all agents have new fields
    for (const agent of saved.agents) {
      if (agent.energy === undefined) agent.energy = 100;
      if (agent.autoMode === undefined) agent.autoMode = true;
    }
    // Ensure tasks have new fields
    for (const task of saved.tasks) {
      if (task.difficulty === undefined) task.difficulty = 2;
      if (task.estimatedTicks === undefined) task.estimatedTicks = 80;
    }
    return saved;
  } catch { /* ignore */ }
  return null;
}

function saveState(state: AgentDashboardState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch { /* ignore */ }
}

export function useAgentState() {
  const [state, setState] = useState<AgentDashboardState>(() => {
    return loadState() ?? DEFAULT_STATE;
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  // Persist on change
  useEffect(() => {
    saveState(state);
  }, [state]);

  const moveAgent = useCallback((agentId: string, targetZoneId: string) => {
    setState((prev) => ({
      ...prev,
      agents: prev.agents.map((a) => {
        if (a.id !== agentId) return a;
        if (a.currentZoneId === targetZoneId) return a;
        return {
          ...a,
          targetZoneId,
          travelPath: findPath(a.currentZoneId, targetZoneId),
          travelStepIndex: 0,
          travelProgress: 0,
          status: 'traveling' as const,
          currentTaskId: null,
        };
      }),
      tasks: prev.tasks.map((t) => {
        const agent = prev.agents.find((a) => a.id === agentId);
        if (t.assignedAgentId === agentId && agent && agent.currentZoneId !== targetZoneId && t.status === 'in_progress') {
          return { ...t, assignedAgentId: null, status: 'pending' as const };
        }
        return t;
      }),
    }));
  }, []);

  const assignTask = useCallback((agentId: string, taskId: string) => {
    setState((prev) => ({
      ...prev,
      agents: prev.agents.map((a) =>
        a.id === agentId ? { ...a, status: 'working' as const, currentTaskId: taskId } : a,
      ),
      tasks: prev.tasks.map((t) =>
        t.id === taskId ? { ...t, assignedAgentId: agentId, status: 'in_progress' as const } : t,
      ),
    }));
  }, []);

  const completeTask = useCallback((taskId: string) => {
    setState((prev) => ({
      ...prev,
      agents: prev.agents.map((a) =>
        a.currentTaskId === taskId ? { ...a, status: 'idle' as const, currentTaskId: null } : a,
      ),
      tasks: prev.tasks.map((t) =>
        t.id === taskId ? { ...t, status: 'completed' as const, progress: 100 } : t,
      ),
    }));
  }, []);

  const restAgent = useCallback((agentId: string) => {
    setState((prev) => ({
      ...prev,
      agents: prev.agents.map((a) =>
        a.id === agentId ? { ...a, status: 'resting' as const, currentTaskId: null } : a,
      ),
    }));
  }, []);

  const sendChat = useCallback((agentId: string, role: 'user' | 'agent', text: string) => {
    const message: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      agentId,
      role,
      text,
      timestamp: Date.now(),
    };
    setState((prev) => ({
      ...prev,
      chatHistory: [...prev.chatHistory.slice(-200), message],
    }));
  }, []);

  const toggleAgentAuto = useCallback((agentId: string) => {
    setState((prev) => ({
      ...prev,
      agents: prev.agents.map((a) =>
        a.id === agentId ? { ...a, autoMode: !a.autoMode } : a,
      ),
    }));
  }, []);

  const updateSimulation = useCallback((updater: (prev: AgentDashboardState) => AgentDashboardState) => {
    setState(updater);
  }, []);

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  return {
    state,
    stateRef,
    moveAgent,
    assignTask,
    completeTask,
    restAgent,
    sendChat,
    toggleAgentAuto,
    updateSimulation,
    resetState,
  };
}

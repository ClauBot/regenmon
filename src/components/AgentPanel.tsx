import { useMemo } from 'react';
import { SPECIES_LIST, TYPE_CONFIG } from '../constants';
import { ZONE_MAP, ZONES } from '../worldData';
import { AGENT_ROLE_MAP, WORK_PARTICLES } from '../agentRoles';
import type { Agent, ZoneTask } from '../agentTypes';
import RegenmonCharacter from './RegenmonCharacter';

interface AgentPanelProps {
  agent: Agent;
  tasks: ZoneTask[];
  onAssignTask: (agentId: string, taskId: string) => void;
  onMoveAgent: (agentId: string, zoneId: string) => void;
  onRestAgent: (agentId: string) => void;
  onOpenChat: () => void;
  onToggleAuto: (agentId: string) => void;
  isDirectMode: boolean;
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  idle: { label: 'Libre', color: '#aaa' },
  traveling: { label: 'Viajando', color: '#FFC107' },
  working: { label: 'Trabajando', color: '#4CAF50' },
  resting: { label: 'Descansando', color: '#9C27B0' },
};

const CATEGORY_LABELS: Record<string, string> = {
  map: '\uD83D\uDDFA\uFE0F Mapa',
  mechanics: '\u2699\uFE0F Mecánicas',
  art: '\uD83C\uDFA8 Arte',
  audio: '\uD83C\uDFB5 Audio',
  integration: '\uD83D\uDD17 Integración',
};

export default function AgentPanel({
  agent,
  tasks,
  onAssignTask,
  onMoveAgent,
  onRestAgent,
  onOpenChat,
  onToggleAuto,
  isDirectMode,
}: AgentPanelProps) {
  const species = useMemo(
    () => SPECIES_LIST.find((s) => s.id === agent.speciesId)!,
    [agent.speciesId],
  );
  const config = TYPE_CONFIG[species.type];
  const zone = ZONE_MAP.get(agent.currentZoneId);
  const statusInfo = STATUS_LABELS[agent.status] ?? STATUS_LABELS.idle;
  const role = useMemo(() => AGENT_ROLE_MAP.get(agent.speciesId), [agent.speciesId]);

  const currentTask = useMemo(
    () => (agent.currentTaskId ? tasks.find((t) => t.id === agent.currentTaskId) : null),
    [agent.currentTaskId, tasks],
  );

  const availableTasks = useMemo(
    () => tasks.filter((t) => t.zoneId === agent.currentZoneId && t.status === 'pending' && !t.assignedAgentId),
    [tasks, agent.currentZoneId],
  );

  const connectedZones = useMemo(
    () => ZONES.filter((z) => z.id !== agent.currentZoneId),
    [agent.currentZoneId],
  );

  // Upcoming auto-assigned tasks (matching role categories in any zone)
  const upcomingTasks = useMemo(() => {
    if (!role) return [];
    return tasks
      .filter((t) => t.status === 'pending' && !t.assignedAgentId && role.categories.includes(t.category))
      .slice(0, 5);
  }, [tasks, role]);

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        border: `2px solid ${config.color}44`,
        borderRadius: 8,
        padding: '0.5rem',
        fontFamily: '"Press Start 2P", cursive',
        overflowY: 'auto',
        maxHeight: '100%',
      }}
    >
      {/* Agent header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
        <RegenmonCharacter species={species} size="sm" animate={agent.status !== 'resting'} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.9rem', color: '#fff' }}>{agent.name}</div>
          <div style={{ fontSize: '0.6rem', color: config.color, marginTop: 2 }}>
            {species.emoji} {species.speciesName}
          </div>
        </div>
        <div
          style={{
            fontSize: '0.55rem',
            color: statusInfo.color,
            backgroundColor: statusInfo.color + '20',
            padding: '0.15rem 0.3rem',
            borderRadius: 3,
          }}
        >
          {statusInfo.label}
        </div>
      </div>

      {/* Role & Specialty */}
      {role && (
        <div
          style={{
            backgroundColor: '#111',
            border: `1px solid ${config.color}22`,
            borderRadius: 6,
            padding: '0.25rem',
            marginBottom: '0.3rem',
          }}
        >
          <div style={{ fontSize: '0.65rem', color: config.color, marginBottom: 4 }}>
            {role.title}
          </div>
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            {role.categories.map((cat) => (
              <span
                key={cat}
                style={{
                  fontSize: '0.5rem',
                  color: '#aaa',
                  backgroundColor: '#1a1a1a',
                  padding: '0.1rem 0.2rem',
                  borderRadius: 3,
                  border: '1px solid #333',
                }}
              >
                {WORK_PARTICLES[cat]} {cat}
              </span>
            ))}
          </div>
          <div style={{ fontSize: '0.5rem', color: '#666', marginTop: 4 }}>
            Velocidad: {role.workSpeed}x
          </div>
        </div>
      )}

      {/* Energy bar */}
      <div style={{ marginBottom: '0.3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
          <span style={{ fontSize: '0.55rem', color: '#888' }}>Energía</span>
          <span style={{ fontSize: '0.55rem', color: agent.energy > 50 ? '#4CAF50' : agent.energy > 25 ? '#FFC107' : '#f44336' }}>
            {Math.round(agent.energy)}%
          </span>
        </div>
        <div style={{ height: 6, backgroundColor: '#000', borderRadius: 3, overflow: 'hidden' }}>
          <div
            style={{
              width: `${agent.energy}%`,
              height: '100%',
              backgroundColor: agent.energy > 50 ? '#4CAF50' : agent.energy > 25 ? '#FFC107' : '#f44336',
              borderRadius: 3,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        {agent.energyWarning && (
          <div style={{
            fontSize: '0.5rem',
            color: '#f44336',
            marginTop: 4,
            animation: 'energy-warning-pulse 1s ease-in-out infinite',
          }}>
            Energía baja
          </div>
        )}
      </div>

      {/* Location */}
      <div style={{ fontSize: '0.6rem', color: '#888', marginBottom: '0.3rem' }}>
        Zona: <span style={{ color: '#ddd' }}>{zone?.name ?? agent.currentZoneId}</span>
        {agent.status === 'traveling' && agent.targetZoneId && (
          <span style={{ color: '#FFC107' }}>
            {' \u2192 '}{ZONE_MAP.get(agent.targetZoneId)?.name ?? agent.targetZoneId}
          </span>
        )}
      </div>

      {/* Current task */}
      {currentTask && (
        <div
          style={{
            backgroundColor: '#111',
            border: `1px solid ${config.color}33`,
            borderRadius: 6,
            padding: '0.3rem',
            marginBottom: '0.4rem',
          }}
        >
          <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>Tarea actual:</div>
          <div style={{ fontSize: '0.65rem', color: '#ddd', marginBottom: 4 }}>{currentTask.title}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <div style={{ flex: 1, height: 4, backgroundColor: '#000', borderRadius: 2, overflow: 'hidden' }}>
              <div
                style={{
                  width: `${Math.round(currentTask.progress)}%`,
                  height: '100%',
                  backgroundColor: config.color,
                  borderRadius: 2,
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
            <span style={{ fontSize: '0.55rem', color: config.color }}>{Math.round(currentTask.progress)}%</span>
          </div>
          <div style={{ fontSize: '0.5rem', color: '#555', marginTop: 4 }}>
            {CATEGORY_LABELS[currentTask.category]} · Dificultad: {'★'.repeat(currentTask.difficulty)}{'☆'.repeat(5 - currentTask.difficulty)}
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="nes-btn is-primary"
          style={{ fontSize: '0.55rem', padding: '0.2rem 0.4rem' }}
          onClick={onOpenChat}
        >
          Chat
        </button>
        {agent.status !== 'resting' && (
          <button
            type="button"
            className="nes-btn"
            style={{ fontSize: '0.55rem', padding: '0.2rem 0.4rem' }}
            onClick={() => onRestAgent(agent.id)}
          >
            Descansar
          </button>
        )}
        {/* Auto/Manual toggle */}
        <button
          type="button"
          onClick={() => onToggleAuto(agent.id)}
          style={{
            fontSize: '0.5rem',
            padding: '0.15rem 0.3rem',
            backgroundColor: agent.autoMode ? '#1a3a1a' : '#3a1a1a',
            color: agent.autoMode ? '#4CAF50' : '#f44336',
            border: `1px solid ${agent.autoMode ? '#4CAF50' : '#f44336'}44`,
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: '"Press Start 2P", cursive',
          }}
        >
          {agent.autoMode ? '🤖 Auto' : '✋ Manual'}
        </button>
      </div>

      {/* Travel selector (shown in direct mode or when manual) */}
      {(isDirectMode || !agent.autoMode) && agent.status !== 'traveling' && (
        <div style={{ marginBottom: '0.4rem' }}>
          <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>Enviar a zona:</div>
          <select
            style={{
              width: '100%',
              fontSize: '0.55rem',
              padding: '0.2rem',
              backgroundColor: '#111',
              color: '#ddd',
              border: '1px solid #333',
              borderRadius: 4,
              fontFamily: '"Press Start 2P", cursive',
            }}
            value=""
            onChange={(e) => {
              if (e.target.value) onMoveAgent(agent.id, e.target.value);
            }}
          >
            <option value="">-- Seleccionar --</option>
            {connectedZones.map((z) => (
              <option key={z.id} value={z.id}>{z.name}</option>
            ))}
          </select>
        </div>
      )}

      {/* Available tasks in zone (direct mode or manual) */}
      {(isDirectMode || !agent.autoMode) && availableTasks.length > 0 && agent.status === 'idle' && (
        <div style={{ marginBottom: '0.4rem' }}>
          <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>
            Tareas disponibles ({availableTasks.length}):
          </div>
          <div style={{ maxHeight: 160, overflowY: 'auto' }}>
            {availableTasks.slice(0, 8).map((task) => (
              <div
                key={task.id}
                onClick={() => onAssignTask(agent.id, task.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  padding: '0.15rem 0.2rem',
                  marginBottom: 3,
                  backgroundColor: '#111',
                  border: '1px solid #222',
                  borderRadius: 4,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = config.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#222')}
              >
                <span style={{ fontSize: '0.5rem', color: '#888' }}>
                  {CATEGORY_LABELS[task.category] ?? task.category}
                </span>
                <span style={{ fontSize: '0.55rem', color: '#ddd', flex: 1 }}>{task.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming tasks (auto-assigned queue preview) */}
      {agent.autoMode && upcomingTasks.length > 0 && !currentTask && (
        <div>
          <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>
            Próximas tareas (auto):
          </div>
          <div style={{ maxHeight: 120, overflowY: 'auto' }}>
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  fontSize: '0.5rem',
                  color: '#555',
                  padding: '0.1rem 0.2rem',
                  marginBottom: 2,
                  backgroundColor: '#111',
                  borderRadius: 3,
                  border: '1px solid #1a1a1a',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {WORK_PARTICLES[task.category]} {task.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Idle + no tasks */}
      {availableTasks.length === 0 && agent.status === 'idle' && !currentTask && (
        <div style={{ fontSize: '0.55rem', color: '#555', textAlign: 'center', padding: '0.3rem' }}>
          No hay tareas pendientes en esta zona.
          {agent.autoMode && ' Buscará automáticamente.'}
        </div>
      )}

      <style>{`
        @keyframes energy-warning-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

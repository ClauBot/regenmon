import { useState, useCallback } from 'react';
import { useAgentState } from '../hooks/useAgentState';
import { useAgentSimulation } from '../hooks/useAgentSimulation';
import ZeldaWorldMap from './ZeldaWorldMap';
import ExploreMode from './ExploreMode';
import AgentPanel from './AgentPanel';
import AgentChat from './AgentChat';
import ProgressSummary from './ProgressSummary';
import { ZONE_MAP, REALM_COLORS } from '../worldData';
import { SPECIES_LIST } from '../constants';
import type { ZoneTask, Agent, DashboardMode } from '../agentTypes';
import type { MapZone } from '../worldData';

interface AgentDashboardProps {
  onClose: () => void;
}

type PanelView = 'panel' | 'chat' | 'zone';

const MODE_LABELS: Record<DashboardMode, { label: string; icon: string }> = {
  observe: { label: 'Observar', icon: '👁' },
  direct: { label: 'Dirigir', icon: '🎯' },
  explore: { label: 'Explorar', icon: '🎮' },
};

export default function AgentDashboard({ onClose }: AgentDashboardProps) {
  const {
    state,
    stateRef,
    moveAgent,
    assignTask,
    restAgent,
    sendChat,
    setDashboardMode,
    setPlayerSpecies,
    movePlayer,
    toggleAgentAuto,
    updateSimulation,
    resetState,
  } = useAgentState();

  useAgentSimulation(stateRef, updateSimulation);

  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [panelView, setPanelView] = useState<PanelView>('panel');

  const selectedAgent = state.agents.find((a) => a.id === selectedAgentId) ?? null;

  const handleSelectAgent = useCallback((id: string | null) => {
    setSelectedAgentId(id);
    setSelectedZoneId(null);
    setPanelView('panel');
  }, []);

  const handleSelectZone = useCallback((id: string | null) => {
    setSelectedZoneId(id);
    // In direct mode: click zone + selected agent = move agent there
    if (id && selectedAgentId && state.dashboardMode === 'direct') {
      moveAgent(selectedAgentId, id);
      return;
    }
    if (id && !selectedAgentId) {
      setPanelView('zone');
    }
  }, [selectedAgentId, state.dashboardMode, moveAgent]);

  const handleOpenChat = useCallback(() => {
    setPanelView('chat');
  }, []);

  const handleBackFromChat = useCallback(() => {
    setPanelView('panel');
  }, []);

  // Zone info panel
  const zoneTasks = selectedZoneId
    ? state.tasks.filter((t) => t.zoneId === selectedZoneId)
    : [];
  const zoneInfo = selectedZoneId ? ZONE_MAP.get(selectedZoneId) : null;

  // Stats
  const completedCount = state.tasks.filter((t) => t.status === 'completed').length;
  const workingCount = state.agents.filter((a) => a.status === 'working').length;
  const travelingCount = state.agents.filter((a) => a.status === 'traveling').length;
  const restingCount = state.agents.filter((a) => a.status === 'resting').length;
  const idleCount = state.agents.filter((a) => a.status === 'idle').length;

  const isExploreMode = state.dashboardMode === 'explore';
  const needsSpeciesSelection = isExploreMode && !state.playerState.speciesId;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: '#111',
        overflowY: 'auto',
        fontFamily: '"Press Start 2P", cursive',
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          backgroundColor: '#111',
          borderBottom: '2px solid #333',
          padding: '0.5rem 0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.2rem', margin: 0, color: '#FFC107' }}>
            Centro de Agentes
          </h1>
          <p style={{ fontSize: '0.6rem', color: '#888', margin: '0.2rem 0 0' }}>
            {workingCount} trabajando · {travelingCount} viajando · {restingCount} descansando · {idleCount} libres · {completedCount}/{state.tasks.length} tareas
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
          {/* Mode tabs */}
          <div style={{ display: 'flex', gap: '0.3rem' }}>
            {(Object.keys(MODE_LABELS) as DashboardMode[]).map((mode) => {
              const isActive = state.dashboardMode === mode;
              const info = MODE_LABELS[mode];
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setDashboardMode(mode)}
                  style={{
                    fontSize: '0.65rem',
                    padding: '0.3rem 0.5rem',
                    backgroundColor: isActive ? '#333' : '#1a1a1a',
                    color: isActive ? '#FFC107' : '#666',
                    border: `1px solid ${isActive ? '#FFC107' : '#333'}`,
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontFamily: '"Press Start 2P", cursive',
                    transition: 'all 0.2s',
                  }}
                >
                  {info.icon} {info.label}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="nes-btn is-warning"
            style={{ fontSize: '0.7rem', padding: '0.3rem 0.5rem' }}
            onClick={resetState}
          >
            Reset
          </button>
          <button
            type="button"
            className="nes-btn is-error"
            style={{ fontSize: '0.7rem', padding: '0.3rem 0.5rem' }}
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>

      {/* Species selection for explore mode */}
      {needsSpeciesSelection && (
        <SpeciesSelector onSelect={(id) => setPlayerSpecies(id)} />
      )}

      {/* Main content */}
      {!needsSpeciesSelection && (
        <div
          className="agent-dashboard-main"
          style={{
            display: 'flex',
            flexDirection: 'row',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0.5rem',
            gap: '0.5rem',
            minHeight: 'calc(100vh - 80px)',
          }}
        >
          {/* Left: Map or Explore view */}
          <div style={{ flex: '3 1 0%', minWidth: 0 }}>
            {isExploreMode ? (
              <ExploreMode
                agents={state.agents}
                tasks={state.tasks}
                playerState={state.playerState}
                onMovePlayer={movePlayer}
                onSelectAgent={(id) => handleSelectAgent(id)}
                selectedAgentId={selectedAgentId}
              />
            ) : (
              <>
                <ZeldaWorldMap
                  agents={state.agents}
                  tasks={state.tasks}
                  selectedAgentId={selectedAgentId}
                  selectedZoneId={selectedZoneId}
                  onSelectAgent={handleSelectAgent}
                  onSelectZone={handleSelectZone}
                />

                {/* Agent quick-select bar */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.4rem',
                    marginTop: '0.3rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {state.agents.map((agent) => {
                    const isSelected = selectedAgentId === agent.id;
                    return (
                      <button
                        key={agent.id}
                        type="button"
                        onClick={() => handleSelectAgent(isSelected ? null : agent.id)}
                        style={{
                          fontSize: '0.55rem',
                          padding: '0.2rem 0.35rem',
                          backgroundColor: isSelected ? '#333' : '#1a1a1a',
                          color: isSelected ? '#fff' : '#888',
                          border: `1px solid ${isSelected ? '#FFC107' : '#333'}`,
                          borderRadius: 4,
                          cursor: 'pointer',
                          fontFamily: '"Press Start 2P", cursive',
                          transition: 'all 0.2s',
                        }}
                      >
                        {agent.name}
                        <span style={{
                          color: agent.status === 'working' ? '#4CAF50' : agent.status === 'traveling' ? '#FFC107' : agent.status === 'resting' ? '#9C27B0' : '#666',
                          marginLeft: 4,
                        }}>
                          {agent.status === 'working' ? '\u25CF' : agent.status === 'traveling' ? '\u25B6' : agent.status === 'resting' ? '\uD83D\uDCA4' : '\u2B50'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Right: Panel */}
          <div
            style={{
              flex: '2 1 0%',
              minWidth: 0,
              maxHeight: 'calc(100vh - 100px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {selectedAgent && panelView === 'chat' ? (
              <AgentChat
                agent={selectedAgent}
                chatHistory={state.chatHistory}
                tasks={state.tasks}
                onSendChat={sendChat}
                onMoveAgent={moveAgent}
                onAssignTask={assignTask}
                onRestAgent={restAgent}
                onBack={handleBackFromChat}
              />
            ) : selectedAgent && panelView === 'panel' ? (
              <AgentPanel
                agent={selectedAgent}
                tasks={state.tasks}
                onAssignTask={assignTask}
                onMoveAgent={moveAgent}
                onRestAgent={restAgent}
                onOpenChat={handleOpenChat}
                onToggleAuto={toggleAgentAuto}
                isDirectMode={state.dashboardMode === 'direct'}
              />
            ) : selectedZoneId && zoneInfo ? (
              <ZoneInfoPanel zone={zoneInfo} tasks={zoneTasks} agents={state.agents} onSelectAgent={handleSelectAgent} />
            ) : (
              <div
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '2px solid #333',
                  borderRadius: 8,
                  padding: '0.5rem',
                  textAlign: 'center',
                  color: '#555',
                  fontSize: '0.65rem',
                  lineHeight: 2,
                }}
              >
                Selecciona un agente o zona en el mapa
                <br />
                para ver detalles y asignar tareas.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Progress summary */}
      {!needsSpeciesSelection && (
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 0.5rem 1rem' }}>
          <ProgressSummary tasks={state.tasks} agents={state.agents} />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .agent-dashboard-main {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Species Selector for Explore Mode ───

function SpeciesSelector({ onSelect }: { onSelect: (id: string) => void }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const types = ['seed', 'drop', 'spark'] as const;
  const typeLabels = { seed: 'Bosque', drop: 'Océano', spark: 'Cosmos' };
  const typeColors = { seed: '#4CAF50', drop: '#2196F3', spark: '#FFC107' };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '1rem auto',
        padding: '0.5rem',
        fontFamily: '"Press Start 2P", cursive',
      }}
    >
      <h2 style={{ fontSize: '0.9rem', color: '#FFC107', textAlign: 'center', marginBottom: '0.5rem' }}>
        Elige tu Regenmon para explorar
      </h2>
      <p style={{ fontSize: '0.6rem', color: '#666', textAlign: 'center', marginBottom: '0.8rem', lineHeight: 1.8 }}>
        Camina por el mundo con WASD o flechas. Habla con los agentes que encuentres.
      </p>
      {types.map((type) => (
        <div key={type} style={{ marginBottom: '0.5rem' }}>
          <div style={{ fontSize: '0.65rem', color: typeColors[type], marginBottom: '0.3rem' }}>
            {typeLabels[type]}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem' }}>
            {SPECIES_LIST.filter((s) => s.type === type).map((species) => (
              <button
                key={species.id}
                type="button"
                onClick={() => onSelect(species.id)}
                onMouseEnter={() => setHoveredId(species.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  padding: '0.2rem 0.3rem',
                  backgroundColor: hoveredId === species.id ? '#333' : '#1a1a1a',
                  border: `1px solid ${hoveredId === species.id ? typeColors[type] : '#333'}`,
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontFamily: '"Press Start 2P", cursive',
                  color: '#ddd',
                  fontSize: '0.55rem',
                  transition: 'all 0.2s',
                }}
              >
                {species.emoji} {species.speciesName}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Zone Info Sub-Panel ───

function ZoneInfoPanel({
  zone,
  tasks,
  agents,
  onSelectAgent,
}: {
  zone: MapZone;
  tasks: ZoneTask[];
  agents: Agent[];
  onSelectAgent: (id: string) => void;
}) {
  const colors = REALM_COLORS[zone.type] ?? REALM_COLORS.nexo;
  const agentsHere = agents.filter((a) => a.currentZoneId === zone.id);
  const pending = tasks.filter((t) => t.status === 'pending').length;
  const inProgress = tasks.filter((t) => t.status === 'in_progress').length;
  const completed = tasks.filter((t) => t.status === 'completed').length;

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        border: `2px solid ${colors.border}44`,
        borderRadius: 8,
        padding: '0.5rem',
        fontFamily: '"Press Start 2P", cursive',
        overflowY: 'auto',
      }}
    >
      <h3 style={{ fontSize: '0.9rem', color: colors.text, margin: '0 0 0.3rem' }}>
        {zone.isDungeon ? '\u2694\uFE0F ' : ''}{zone.name}
      </h3>
      <p style={{ fontSize: '0.55rem', color: '#888', lineHeight: 1.8, margin: '0 0 0.4rem' }}>
        {zone.description}
      </p>

      <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
        <StatPill label="Pendientes" value={pending} color="#888" />
        <StatPill label="En progreso" value={inProgress} color="#FFC107" />
        <StatPill label="Completadas" value={completed} color="#4CAF50" />
      </div>

      {agentsHere.length > 0 && (
        <div style={{ marginBottom: '0.4rem' }}>
          <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>Agentes aquí:</div>
          {agentsHere.map((a) => (
            <div
              key={a.id}
              onClick={() => onSelectAgent(a.id)}
              style={{
                fontSize: '0.6rem',
                color: '#ddd',
                padding: '0.1rem 0.2rem',
                cursor: 'pointer',
                backgroundColor: '#111',
                borderRadius: 3,
                marginBottom: 2,
                border: '1px solid #222',
              }}
            >
              {a.name} — {a.status}
            </div>
          ))}
        </div>
      )}

      <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>
        Tareas ({tasks.length}):
      </div>
      <div style={{ maxHeight: 200, overflowY: 'auto' }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.15rem',
              padding: '0.1rem 0.15rem',
              marginBottom: 2,
              backgroundColor: '#111',
              borderRadius: 3,
              border: '1px solid #1a1a1a',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: task.status === 'completed' ? '#4CAF50' : task.status === 'in_progress' ? '#FFC107' : '#333',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '0.55rem',
                color: task.status === 'completed' ? '#666' : '#ddd',
                textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {task.title}
            </span>
            {task.status === 'in_progress' && (
              <span style={{ fontSize: '0.5rem', color: '#FFC107' }}>{Math.round(task.progress)}%</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatPill({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div
      style={{
        fontSize: '0.5rem',
        color,
        backgroundColor: color + '15',
        padding: '0.15rem 0.3rem',
        borderRadius: 3,
        border: `1px solid ${color}33`,
      }}
    >
      {label}: {value}
    </div>
  );
}

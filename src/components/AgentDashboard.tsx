import { useState, useCallback, useMemo } from 'react';
import { useAgentState } from '../hooks/useAgentState';
import { useAgentSimulation } from '../hooks/useAgentSimulation';
import ZeldaWorldMap from './ZeldaWorldMap';
import AgentPanel from './AgentPanel';
import AgentChat from './AgentChat';
import ProgressSummary from './ProgressSummary';
import { ZONE_MAP, REALM_COLORS } from '../worldData';
import type { ZoneTask, Agent } from '../agentTypes';
import type { MapZone } from '../worldData';

interface AgentDashboardProps {
  onClose: () => void;
}

type PanelView = 'panel' | 'chat' | 'zone';

export default function AgentDashboard({ onClose }: AgentDashboardProps) {
  const {
    state,
    stateRef,
    moveAgent,
    assignTask,
    restAgent,
    sendChat,
    toggleAgentAuto,
    updateSimulation,
    resetState,
  } = useAgentState();

  useAgentSimulation(stateRef, updateSimulation);

  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [panelView, setPanelView] = useState<PanelView>('panel');
  const [panelOpen, setPanelOpen] = useState(false);

  const selectedAgent = state.agents.find((a) => a.id === selectedAgentId) ?? null;

  // Only active agents visible on map and quick-select
  const activeAgents = useMemo(
    () => state.agents.filter((a) => a.status === 'working' || a.status === 'traveling'),
    [state.agents],
  );

  const activeCount = activeAgents.length;

  const handleSelectAgent = useCallback((id: string | null) => {
    setSelectedAgentId(id);
    setSelectedZoneId(null);
    setPanelView('panel');
    setPanelOpen(id !== null);
  }, []);

  const handleSelectZone = useCallback((id: string | null) => {
    setSelectedZoneId(id);
    // Always direct mode: click zone + selected agent = move agent there
    if (id && selectedAgentId) {
      moveAgent(selectedAgentId, id);
      return;
    }
    if (id && !selectedAgentId) {
      setPanelView('zone');
      setPanelOpen(true);
    }
  }, [selectedAgentId, moveAgent]);

  const handleClosePanel = useCallback(() => {
    setPanelOpen(false);
    setSelectedAgentId(null);
    setSelectedZoneId(null);
  }, []);

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

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: '#111',
        fontFamily: '"Press Start 2P", cursive',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Minimal header */}
      <div
        style={{
          zIndex: 30,
          backgroundColor: '#111',
          borderBottom: '2px solid #333',
          padding: '0.3rem 0.6rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
          <h1 style={{ fontSize: '1rem', margin: 0, color: '#FFC107' }}>
            Centro de Agentes
          </h1>
          <span style={{ fontSize: '0.5rem', color: '#888' }}>
            {activeCount} activo{activeCount !== 1 ? 's' : ''}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
          <button
            type="button"
            onClick={resetState}
            style={{
              fontSize: '0.5rem',
              padding: '0.2rem 0.3rem',
              backgroundColor: '#1a1a1a',
              color: '#666',
              border: '1px solid #333',
              borderRadius: 4,
              cursor: 'pointer',
              fontFamily: '"Press Start 2P", cursive',
            }}
          >
            Reset
          </button>
          <button
            type="button"
            className="nes-btn is-error"
            style={{ fontSize: '0.6rem', padding: '0.2rem 0.4rem' }}
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>

      {/* Map-hero content */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* Full-viewport map */}
        <ZeldaWorldMap
          agents={activeAgents}
          tasks={state.tasks}
          selectedAgentId={selectedAgentId}
          selectedZoneId={selectedZoneId}
          onSelectAgent={handleSelectAgent}
          onSelectZone={handleSelectZone}
        />

        {/* Compact progress HUD — top-left corner */}
        <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 20, pointerEvents: 'none' }}>
          <ProgressSummary tasks={state.tasks} />
        </div>

        {/* Floating quick-select bar — bottom center */}
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            gap: '0.3rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '90%',
          }}
        >
          {activeAgents.length > 0 ? (
            activeAgents.map((agent) => {
              const isSelected = selectedAgentId === agent.id;
              return (
                <button
                  key={agent.id}
                  type="button"
                  onClick={() => handleSelectAgent(isSelected ? null : agent.id)}
                  style={{
                    fontSize: '0.5rem',
                    padding: '0.15rem 0.3rem',
                    backgroundColor: isSelected ? '#333ee' : '#1a1a1aee',
                    color: isSelected ? '#fff' : '#aaa',
                    border: `1px solid ${isSelected ? '#FFC107' : '#444'}`,
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontFamily: '"Press Start 2P", cursive',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.2s',
                  }}
                >
                  {agent.name}
                  <span style={{
                    color: agent.status === 'working' ? '#4CAF50' : '#FFC107',
                    marginLeft: 4,
                  }}>
                    {agent.status === 'working' ? '\u25CF' : '\u25B6'}
                  </span>
                </button>
              );
            })
          ) : (
            <div
              style={{
                fontSize: '0.5rem',
                color: '#666',
                backgroundColor: '#1a1a1aee',
                padding: '0.2rem 0.5rem',
                borderRadius: 4,
                border: '1px solid #333',
                backdropFilter: 'blur(4px)',
              }}
            >
              Esperando asignaciones...
            </div>
          )}
        </div>

        {/* Slide-in panel overlay */}
        {panelOpen && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: 'min(380px, 90vw)',
              backgroundColor: '#1a1a1aee',
              backdropFilter: 'blur(6px)',
              borderLeft: '2px solid #333',
              zIndex: 25,
              display: 'flex',
              flexDirection: 'column',
              animation: 'panel-slide-in 0.25s ease-out',
              overflowY: 'auto',
            }}
          >
            {/* Panel close button */}
            <button
              type="button"
              onClick={handleClosePanel}
              style={{
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-end',
                zIndex: 5,
                background: 'none',
                border: 'none',
                color: '#666',
                fontSize: '0.8rem',
                padding: '0.3rem 0.4rem',
                cursor: 'pointer',
                fontFamily: '"Press Start 2P", cursive',
              }}
            >
              X
            </button>

            <div style={{ flex: 1, padding: '0 0.4rem 0.4rem' }}>
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
                  onRestAgent={restAgent}
                  onOpenChat={handleOpenChat}
                  onToggleAuto={toggleAgentAuto}
                />
              ) : selectedZoneId && zoneInfo ? (
                <ZoneInfoPanel zone={zoneInfo} tasks={zoneTasks} agents={state.agents} onSelectAgent={handleSelectAgent} />
              ) : null}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes panel-slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
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
    <div style={{ fontFamily: '"Press Start 2P", cursive' }}>
      <h3 style={{ fontSize: '0.85rem', color: colors.text, margin: '0 0 0.3rem' }}>
        {zone.isDungeon ? '\u2694\uFE0F ' : ''}{zone.name}
      </h3>
      <p style={{ fontSize: '0.5rem', color: '#888', lineHeight: 1.8, margin: '0 0 0.4rem' }}>
        {zone.description}
      </p>

      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
        <StatPill label="Pendientes" value={pending} color="#888" />
        <StatPill label="Progreso" value={inProgress} color="#FFC107" />
        <StatPill label="Listo" value={completed} color="#4CAF50" />
      </div>

      {agentsHere.length > 0 && (
        <div style={{ marginBottom: '0.4rem' }}>
          <div style={{ fontSize: '0.5rem', color: '#666', marginBottom: 4 }}>Agentes aquí:</div>
          {agentsHere.map((a) => (
            <div
              key={a.id}
              onClick={() => onSelectAgent(a.id)}
              style={{
                fontSize: '0.55rem',
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

      <div style={{ fontSize: '0.5rem', color: '#666', marginBottom: 4 }}>
        Tareas ({tasks.length}):
      </div>
      <div style={{ maxHeight: 250, overflowY: 'auto' }}>
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
                fontSize: '0.5rem',
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
              <span style={{ fontSize: '0.45rem', color: '#FFC107' }}>{Math.round(task.progress)}%</span>
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
        fontSize: '0.45rem',
        color,
        backgroundColor: color + '15',
        padding: '0.1rem 0.2rem',
        borderRadius: 3,
        border: `1px solid ${color}33`,
      }}
    >
      {label}: {value}
    </div>
  );
}

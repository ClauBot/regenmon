import { useMemo, useCallback } from 'react';
import { ZONES, CONNECTIONS, REALM_COLORS, ZONE_MAP } from '../worldData';
import { SPECIES_LIST } from '../constants';
import { AGENT_ROLE_MAP } from '../agentRoles';
import type { Agent, ZoneTask, PlayerState } from '../agentTypes';
import { usePlayerMovement } from '../hooks/usePlayerMovement';
import RegenmonCharacter from './RegenmonCharacter';
import AgentSprite from './AgentSprite';

interface ExploreModeProps {
  agents: Agent[];
  tasks: ZoneTask[];
  playerState: PlayerState;
  onMovePlayer: (zoneId: string, facing: 'up' | 'down' | 'left' | 'right') => void;
  onSelectAgent: (id: string) => void;
  selectedAgentId: string | null;
}

export default function ExploreMode({
  agents,
  tasks,
  playerState,
  onMovePlayer,
  onSelectAgent,
  selectedAgentId,
}: ExploreModeProps) {
  const playerSpecies = useMemo(
    () => SPECIES_LIST.find((s) => s.id === playerState.speciesId),
    [playerState.speciesId],
  );

  const currentZone = useMemo(
    () => ZONE_MAP.get(playerState.currentZoneId),
    [playerState.currentZoneId],
  );

  const handleMove = useCallback(
    (zoneId: string, facing: 'up' | 'down' | 'left' | 'right') => {
      onMovePlayer(zoneId, facing);
    },
    [onMovePlayer],
  );

  usePlayerMovement(playerState.currentZoneId, true, handleMove);

  // Get adjacent zones for direction indicators
  const adjacentZones = useMemo(() => {
    const adj: { id: string; name: string; direction: string }[] = [];
    if (!currentZone) return adj;
    for (const conn of CONNECTIONS) {
      let targetId: string | null = null;
      if (conn.from === currentZone.id) targetId = conn.to;
      if (conn.to === currentZone.id) targetId = conn.from;
      if (!targetId) continue;
      const target = ZONE_MAP.get(targetId);
      if (!target) continue;
      const dx = target.cx - currentZone.cx;
      const dy = target.cy - currentZone.cy;
      let dir = '';
      if (Math.abs(dx) > Math.abs(dy)) dir = dx > 0 ? '→' : '←';
      else dir = dy > 0 ? '↓' : '↑';
      adj.push({ id: targetId, name: target.name, direction: dir });
    }
    return adj;
  }, [currentZone]);

  // Agents in current zone
  const agentsHere = useMemo(
    () => agents.filter((a) => a.currentZoneId === playerState.currentZoneId),
    [agents, playerState.currentZoneId],
  );

  // Zone tasks
  const zoneTasks = useMemo(
    () => tasks.filter((t) => t.zoneId === playerState.currentZoneId),
    [tasks, playerState.currentZoneId],
  );
  const taskMap = useMemo(() => new Map(tasks.map((t) => [t.id, t])), [tasks]);

  const colors = currentZone ? (REALM_COLORS[currentZone.type] ?? REALM_COLORS.nexo) : REALM_COLORS.nexo;

  // Camera offset — center map on player
  const offsetX = currentZone ? 50 - currentZone.cx : 0;
  const offsetY = currentZone ? 42.5 - currentZone.cy : 0;

  // Group agents by zone for sprite offsets
  const agentsByZone = useMemo(() => {
    const map = new Map<string, Agent[]>();
    for (const a of agents) {
      if (a.status === 'traveling') continue;
      const list = map.get(a.currentZoneId) ?? [];
      list.push(a);
      map.set(a.currentZoneId, list);
    }
    return map;
  }, [agents]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Map with camera centered on player */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 0.85',
          overflow: 'hidden',
          backgroundColor: '#0a0a0f',
          borderRadius: 8,
          border: `2px solid ${colors.border}44`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: `translate(${offsetX}%, ${offsetY}%)`,
            transition: 'transform 0.4s ease-out',
          }}
        >
          {/* SVG connections */}
          <svg
            viewBox="0 0 100 85"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            {CONNECTIONS.map((conn) => {
              const from = ZONE_MAP.get(conn.from);
              const to = ZONE_MAP.get(conn.to);
              if (!from || !to) return null;
              const isAdjacent = conn.from === playerState.currentZoneId || conn.to === playerState.currentZoneId;
              return (
                <line
                  key={`${conn.from}-${conn.to}`}
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke={isAdjacent ? colors.border : conn.secret ? '#f44336' : '#333'}
                  strokeWidth={isAdjacent ? 0.5 : conn.secret ? 0.4 : 0.25}
                  strokeDasharray={conn.secret ? '1 0.5' : undefined}
                  opacity={isAdjacent ? 0.7 : conn.secret ? 0.5 : 0.3}
                />
              );
            })}
          </svg>

          {/* Zone nodes */}
          {ZONES.map((zone) => {
            const zColors = REALM_COLORS[zone.type] ?? REALM_COLORS.nexo;
            const isCurrent = zone.id === playerState.currentZoneId;
            const isAdj = adjacentZones.some((a) => a.id === zone.id);
            const size = zone.type === 'nexo' ? 4.5 : zone.isDungeon ? 3 : 3.5;

            return (
              <div
                key={zone.id}
                style={{
                  position: 'absolute',
                  left: `${zone.cx}%`,
                  top: `${zone.cy}%`,
                  transform: 'translate(-50%, -50%)',
                  width: `${size}%`,
                  minWidth: zone.type === 'nexo' ? 40 : zone.isDungeon ? 28 : 32,
                  aspectRatio: '1',
                  backgroundColor: zColors.bg,
                  border: `2px solid ${isCurrent ? zColors.border : isAdj ? zColors.border + '88' : zColors.border + '22'}`,
                  borderRadius: zone.type === 'nexo' ? '50%' : zone.isDungeon ? 3 : 5,
                  borderStyle: zone.isDungeon ? 'dashed' : 'solid',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isCurrent || isAdj ? 1 : 0.4,
                  boxShadow: isCurrent ? `0 0 16px ${zColors.glow}` : 'none',
                  zIndex: isCurrent ? 5 : 1,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: '0.5rem',
                    color: zColors.text,
                    textAlign: 'center',
                    opacity: 0.8,
                    fontFamily: '"Press Start 2P", cursive',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                    padding: '0 1px',
                  }}
                >
                  {zone.isDungeon ? '\u2694' : zone.type === 'nexo' ? '\uD83C\uDF00' : ''}{' '}
                  {zone.name.split(' ').slice(0, 2).join(' ')}
                </div>
              </div>
            );
          })}

          {/* Agent sprites */}
          {agents.map((agent) => {
            const zoneAgents = agent.status !== 'traveling'
              ? agentsByZone.get(agent.currentZoneId) ?? []
              : [];
            const zoneIndex = zoneAgents.indexOf(agent);
            const currentTask = agent.currentTaskId ? taskMap.get(agent.currentTaskId) : null;

            return (
              <AgentSprite
                key={agent.id}
                agent={agent}
                isSelected={selectedAgentId === agent.id}
                onClick={() => onSelectAgent(agent.id)}
                zoneIndex={Math.max(0, zoneIndex)}
                zoneCount={zoneAgents.length}
                currentTask={currentTask}
              />
            );
          })}

          {/* Player sprite (larger, highlighted) */}
          {playerSpecies && currentZone && (
            <div
              style={{
                position: 'absolute',
                left: `${currentZone.cx}%`,
                top: `${currentZone.cy}%`,
                transform: 'translate(-50%, -110%) scale(1.5)',
                zIndex: 25,
                filter: `drop-shadow(0 0 10px ${colors.border}aa)`,
                pointerEvents: 'none',
              }}
            >
              <RegenmonCharacter species={playerSpecies} size="sm" animate />
              <div
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.5rem',
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  fontFamily: '"Press Start 2P", cursive',
                  textShadow: '0 0 4px #000',
                }}
              >
                TÚ
              </div>
            </div>
          )}
        </div>
      </div>

      {/* HUD — zone info + controls + agents */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          border: `2px solid ${colors.border}44`,
          borderRadius: 8,
          padding: '0.4rem',
          fontFamily: '"Press Start 2P", cursive',
        }}
      >
        {/* Current zone */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: colors.text }}>{currentZone?.name ?? '???'}</div>
            <div style={{ fontSize: '0.55rem', color: '#888', marginTop: 2, lineHeight: 1.6 }}>{currentZone?.description}</div>
          </div>
          <div style={{ fontSize: '0.55rem', color: '#999', textAlign: 'right', whiteSpace: 'nowrap', marginLeft: '0.3rem' }}>
            WASD / Flechas
          </div>
        </div>

        {/* Directions */}
        <div style={{ display: 'flex', gap: '0.2rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
          {adjacentZones.map((adj) => (
            <button
              key={adj.id}
              type="button"
              onClick={() => {
                const target = ZONE_MAP.get(adj.id);
                if (target && currentZone) {
                  const dx = target.cx - currentZone.cx;
                  const dy = target.cy - currentZone.cy;
                  const facing: 'up' | 'down' | 'left' | 'right' = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
                  onMovePlayer(adj.id, facing);
                }
              }}
              style={{
                fontSize: '0.5rem',
                padding: '0.15rem 0.3rem',
                backgroundColor: '#111',
                color: colors.text,
                border: `1px solid ${colors.border}44`,
                borderRadius: 4,
                cursor: 'pointer',
                fontFamily: '"Press Start 2P", cursive',
              }}
            >
              {adj.direction} {adj.name}
            </button>
          ))}
        </div>

        {/* Agents in zone */}
        {agentsHere.length > 0 && (
          <div>
            <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>
              Agentes aquí ({agentsHere.length}):
            </div>
            <div style={{ display: 'flex', gap: '0.2rem', flexWrap: 'wrap' }}>
              {agentsHere.map((a) => {
                const role = AGENT_ROLE_MAP.get(a.speciesId);
                const isSelected = selectedAgentId === a.id;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => onSelectAgent(a.id)}
                    style={{
                      fontSize: '0.5rem',
                      padding: '0.15rem 0.3rem',
                      backgroundColor: isSelected ? '#333' : '#111',
                      color: isSelected ? '#fff' : '#aaa',
                      border: `1px solid ${isSelected ? colors.border : '#333'}`,
                      borderRadius: 4,
                      cursor: 'pointer',
                      fontFamily: '"Press Start 2P", cursive',
                    }}
                  >
                    {a.name}
                    <span style={{ color: '#666', marginLeft: 3 }}>{role?.title}</span>
                    <span style={{
                      marginLeft: 3,
                      color: a.status === 'working' ? '#4CAF50' : a.status === 'resting' ? '#9C27B0' : '#666',
                    }}>
                      {a.status === 'working' ? '●' : a.status === 'resting' ? '💤' : '○'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Task summary for zone */}
        {zoneTasks.length > 0 && (
          <div style={{ marginTop: '0.3rem' }}>
            <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: 4 }}>
              Tareas: {zoneTasks.filter((t) => t.status === 'completed').length}/{zoneTasks.length} completadas
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

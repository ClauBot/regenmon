import { useMemo } from 'react';
import { ZONES, CONNECTIONS, REALM_COLORS, ZONE_MAP } from '../worldData';
import type { Agent, ZoneTask } from '../agentTypes';
import AgentSprite from './AgentSprite';

interface ZeldaWorldMapProps {
  agents: Agent[];       // Only active agents (working/traveling)
  tasks: ZoneTask[];
  selectedAgentId: string | null;
  selectedZoneId: string | null;
  onSelectAgent: (id: string | null) => void;
  onSelectZone: (id: string | null) => void;
}

// ─── Casita SVG Icons by zone type ───

function CasitaSeed() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Tree trunk */}
      <rect x="6" y="9" width="4" height="5" fill="#795548" />
      {/* Foliage layers */}
      <polygon points="8,1 2,7 14,7" fill="#4CAF50" />
      <polygon points="8,3 3,9 13,9" fill="#388E3C" />
      {/* Door */}
      <rect x="7" y="11" width="2" height="3" fill="#5D4037" />
    </svg>
  );
}

function CasitaDrop() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Dome/shell */}
      <ellipse cx="8" cy="8" rx="6" ry="5" fill="#1565C0" />
      <ellipse cx="8" cy="7" rx="5" ry="4" fill="#2196F3" />
      {/* Window */}
      <circle cx="8" cy="7" r="2" fill="#0D47A1" />
      <circle cx="8" cy="7" r="1" fill="#64B5F6" opacity="0.6" />
      {/* Base waves */}
      <path d="M2,12 Q5,10 8,12 Q11,14 14,12" stroke="#1565C0" fill="none" strokeWidth="1" />
      <rect x="3" y="12" width="10" height="3" fill="#0a1628" />
    </svg>
  );
}

function CasitaSpark() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Tower body */}
      <rect x="5" y="5" width="6" height="9" fill="#12081f" />
      <rect x="6" y="6" width="4" height="7" fill="#1a1035" />
      {/* Spire */}
      <polygon points="8,0 5,5 11,5" fill="#FFC107" />
      {/* Star tip */}
      <circle cx="8" cy="1.5" r="1" fill="#FFD54F" />
      {/* Window */}
      <rect x="7" y="8" width="2" height="2" fill="#FFC107" opacity="0.5" />
      {/* Base */}
      <rect x="4" y="13" width="8" height="2" fill="#1a1035" />
    </svg>
  );
}

function CasitaNexo() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Central castle */}
      <rect x="4" y="6" width="8" height="8" fill="#333" />
      {/* Turrets */}
      <rect x="2" y="4" width="3" height="10" fill="#444" />
      <rect x="11" y="4" width="3" height="10" fill="#444" />
      {/* Center tower */}
      <rect x="6" y="2" width="4" height="12" fill="#555" />
      <polygon points="8,0 6,2 10,2" fill="#888" />
      {/* Portal glow */}
      <circle cx="8" cy="10" r="2" fill="#FFC107" opacity="0.4" />
      {/* Tri-color accent */}
      <rect x="3" y="14" width="3" height="1" fill="#4CAF50" opacity="0.7" />
      <rect x="6.5" y="14" width="3" height="1" fill="#2196F3" opacity="0.7" />
      <rect x="10" y="14" width="3" height="1" fill="#FFC107" opacity="0.7" />
    </svg>
  );
}

function CasitaDungeon({ type }: { type: string }) {
  const color = type === 'seed' ? '#4CAF50' : type === 'drop' ? '#2196F3' : '#FFC107';
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Fortress body */}
      <rect x="3" y="6" width="10" height="8" fill="#1a1a1a" />
      <rect x="2" y="4" width="3" height="2" fill="#222" />
      <rect x="11" y="4" width="3" height="2" fill="#222" />
      <rect x="6" y="3" width="4" height="3" fill="#222" />
      {/* Crossed swords */}
      <line x1="5" y1="8" x2="11" y2="12" stroke={color} strokeWidth="0.8" />
      <line x1="11" y1="8" x2="5" y2="12" stroke={color} strokeWidth="0.8" />
      {/* Skull accent */}
      <circle cx="8" cy="9" r="1.5" fill="#f44336" opacity="0.5" />
    </svg>
  );
}

function getCasita(type: string, isDungeon?: boolean, isNexo?: boolean) {
  if (isNexo) return <CasitaNexo />;
  if (isDungeon) return <CasitaDungeon type={type} />;
  if (type === 'seed') return <CasitaSeed />;
  if (type === 'drop') return <CasitaDrop />;
  return <CasitaSpark />;
}

export default function ZeldaWorldMap({
  agents,
  tasks,
  selectedAgentId,
  selectedZoneId,
  onSelectAgent,
  onSelectZone,
}: ZeldaWorldMapProps) {
  const zoneProgress = useMemo(() => {
    const progress = new Map<string, { total: number; completed: number; inProgress: number }>();
    for (const task of tasks) {
      const entry = progress.get(task.zoneId) ?? { total: 0, completed: 0, inProgress: 0 };
      entry.total++;
      if (task.status === 'completed') entry.completed++;
      if (task.status === 'in_progress') entry.inProgress++;
      progress.set(task.zoneId, entry);
    }
    return progress;
  }, [tasks]);

  // Group active agents by zone for sprite offsets
  const agentsByZone = useMemo(() => {
    const map = new Map<string, Agent[]>();
    for (const agent of agents) {
      if (agent.status === 'traveling') continue;
      const list = map.get(agent.currentZoneId) ?? [];
      list.push(agent);
      map.set(agent.currentZoneId, list);
    }
    return map;
  }, [agents]);

  const taskMap = useMemo(() => new Map(tasks.map((t) => [t.id, t])), [tasks]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        backgroundColor: '#080810',
        boxShadow: 'inset 0 0 0 3px #222, inset 0 0 0 5px #111',
      }}
    >
      {/* SVG connections — NES-style dotted paths */}
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
          const hasWork = (zoneProgress.get(conn.from)?.inProgress ?? 0) > 0 ||
                          (zoneProgress.get(conn.to)?.inProgress ?? 0) > 0;
          return (
            <line
              key={`${conn.from}-${conn.to}`}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke={conn.secret ? '#f4433666' : hasWork ? '#555' : '#282828'}
              strokeWidth={conn.secret ? 0.4 : 0.3}
              strokeDasharray={conn.secret ? '1 0.5' : '0.5 0.5'}
              opacity={conn.secret ? 0.6 : 0.8}
            />
          );
        })}
      </svg>

      {/* Realm watermark labels — huge, ultra-transparent */}
      <div style={{ position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)', fontSize: '2rem', color: '#FFC107', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Cosmos
      </div>
      <div style={{ position: 'absolute', bottom: '12%', left: '6%', fontSize: '2rem', color: '#4CAF50', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Bosque
      </div>
      <div style={{ position: 'absolute', bottom: '12%', right: '2%', fontSize: '2rem', color: '#2196F3', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Océano
      </div>

      {/* Zone casitas */}
      {ZONES.map((zone) => {
        const colors = REALM_COLORS[zone.type] ?? REALM_COLORS.nexo;
        const isSelected = selectedZoneId === zone.id;
        const isNexo = zone.type === 'nexo';
        const progress = zoneProgress.get(zone.id);
        const pct = progress ? Math.round((progress.completed / progress.total) * 100) : 0;
        const hasWork = progress ? progress.inProgress > 0 : false;
        const hasStarted = progress ? progress.completed > 0 || progress.inProgress > 0 : false;
        const isComplete = pct >= 100 && progress && progress.total > 0;
        const size = isNexo ? 5 : zone.isDungeon ? 3.5 : 4;

        return (
          <div
            key={zone.id}
            onClick={() => onSelectZone(isSelected ? null : zone.id)}
            style={{
              position: 'absolute',
              left: `${zone.cx}%`,
              top: `${zone.cy}%`,
              transform: 'translate(-50%, -50%)',
              width: `${size}%`,
              minWidth: isNexo ? 48 : zone.isDungeon ? 32 : 38,
              aspectRatio: '1',
              cursor: 'pointer',
              transition: 'all 0.3s',
              opacity: hasStarted || isSelected ? 1 : 0.4,
              filter: isComplete
                ? 'brightness(1.3) saturate(1.2)'
                : hasWork
                  ? 'brightness(1.1)'
                  : hasStarted
                    ? 'brightness(0.9)'
                    : 'brightness(0.5) saturate(0.3)',
              zIndex: isSelected ? 5 : 1,
              animation: hasWork ? 'casita-work-pulse 2s ease-in-out infinite' : undefined,
            }}
          >
            {/* Casita icon */}
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}>
              {getCasita(zone.type, zone.isDungeon, isNexo)}

              {/* Glow ring when selected */}
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: isNexo ? '50%' : 6,
                  border: `2px solid ${colors.border}`,
                  boxShadow: `0 0 12px ${colors.glow}, 0 0 24px ${colors.glow}`,
                  pointerEvents: 'none',
                }} />
              )}

              {/* Completion flag */}
              {isComplete && (
                <div style={{
                  position: 'absolute',
                  top: -4,
                  right: -2,
                  fontSize: 8,
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}>
                  {'\u2713'}
                </div>
              )}

              {/* Work indicator */}
              {hasWork && !isComplete && (
                <div style={{
                  position: 'absolute',
                  top: -6,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: 8,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  animation: 'float-particle 0.6s ease-in-out infinite alternate',
                }}>
                  {'\uD83D\uDD28'}
                </div>
              )}
            </div>

            {/* Zone name (shown when selected or has work) */}
            {(isSelected || hasWork) && (
              <div
                style={{
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: isSelected ? '0.45rem' : '0.35rem',
                  color: isSelected ? colors.text : '#888',
                  whiteSpace: 'nowrap',
                  fontFamily: '"Press Start 2P", cursive',
                  textShadow: '1px 1px 0 #000, -1px -1px 0 #000',
                  pointerEvents: 'none',
                  textAlign: 'center',
                }}
              >
                {zone.name.split(' ').slice(0, 2).join(' ')}
              </div>
            )}

            {/* Progress bar at base */}
            {progress && progress.total > 0 && hasStarted && (
              <div
                style={{
                  position: 'absolute',
                  bottom: -3,
                  left: '10%',
                  right: '10%',
                  height: 2,
                  backgroundColor: '#000',
                  borderRadius: 1,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    backgroundColor: isComplete ? '#4CAF50' : colors.border,
                    borderRadius: 1,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Agent sprites — only active (working/traveling) */}
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
            onClick={() => onSelectAgent(selectedAgentId === agent.id ? null : agent.id)}
            zoneIndex={Math.max(0, zoneIndex)}
            zoneCount={zoneAgents.length}
            currentTask={currentTask}
          />
        );
      })}

      {/* CSS animations */}
      <style>{`
        @keyframes casita-work-pulse {
          0%, 100% { filter: brightness(1.1); }
          50% { filter: brightness(1.4); }
        }
        @keyframes float-particle {
          from { transform: translateX(-50%) translateY(0); }
          to { transform: translateX(-50%) translateY(-4px); }
        }
      `}</style>
    </div>
  );
}

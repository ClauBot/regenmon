import { useMemo } from 'react';
import { ZONES, CONNECTIONS, DEPT_COLORS, ZONE_MAP } from '../worldData';
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

// ─── Casita SVG Icons by department ───

function CasitaProducto() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Clipboard body */}
      <rect x="3" y="3" width="10" height="12" rx="1" fill="#1a1200" stroke="#FF9800" strokeWidth="0.8" />
      {/* Clip at top */}
      <rect x="5" y="1" width="6" height="3" rx="1" fill="#FF9800" />
      {/* Post-it notes */}
      <rect x="4.5" y="5" width="3" height="2" fill="#FFE082" />
      <rect x="8.5" y="5" width="3" height="2" fill="#FFAB40" />
      <rect x="4.5" y="8" width="3" height="2" fill="#FFD54F" />
      <rect x="8.5" y="8" width="3" height="2" fill="#FF9800" />
      {/* Checkmarks */}
      <path d="M5,11.5 L6,12.5 L7.5,11" stroke="#4CAF50" strokeWidth="0.6" fill="none" />
      <path d="M9,11.5 L10,12.5 L11.5,11" stroke="#4CAF50" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

function CasitaCodigo() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Monitor body */}
      <rect x="2" y="2" width="12" height="9" rx="1" fill="#0a1a0a" stroke="#4CAF50" strokeWidth="0.8" />
      {/* Screen */}
      <rect x="3" y="3" width="10" height="7" fill="#0d2b0d" />
      {/* Code lines */}
      <line x1="4" y1="4.5" x2="7" y2="4.5" stroke="#4CAF50" strokeWidth="0.6" />
      <line x1="5" y1="6" x2="10" y2="6" stroke="#81C784" strokeWidth="0.6" />
      <line x1="4" y1="7.5" x2="8" y2="7.5" stroke="#4CAF50" strokeWidth="0.6" />
      <line x1="6" y1="9" x2="11" y2="9" stroke="#66BB6A" strokeWidth="0.6" opacity="0.7" />
      {/* Monitor stand */}
      <rect x="6" y="11" width="4" height="1" fill="#4CAF50" />
      <rect x="5" y="12" width="6" height="1" fill="#388E3C" />
      {/* Cursor blink */}
      <rect x="9" y="4" width="0.5" height="1.2" fill="#4CAF50" opacity="0.8" />
    </svg>
  );
}

function CasitaDiseno() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Easel legs */}
      <line x1="4" y1="14" x2="7" y2="5" stroke="#795548" strokeWidth="0.8" />
      <line x1="12" y1="14" x2="9" y2="5" stroke="#795548" strokeWidth="0.8" />
      <line x1="8" y1="15" x2="8" y2="5" stroke="#795548" strokeWidth="0.8" />
      {/* Canvas */}
      <rect x="3" y="1" width="10" height="9" rx="0.5" fill="#fff" stroke="#E91E63" strokeWidth="0.6" />
      {/* Paint splotches */}
      <circle cx="5" cy="4" r="1.5" fill="#E91E63" />
      <circle cx="9" cy="3" r="1.2" fill="#2196F3" />
      <circle cx="7" cy="6" r="1.3" fill="#FFC107" />
      <circle cx="11" cy="6" r="1" fill="#4CAF50" />
      <circle cx="6" cy="8" r="0.8" fill="#9C27B0" />
      {/* Palette indicator */}
      <circle cx="10" cy="8" r="0.6" fill="#FF5722" />
    </svg>
  );
}

function CasitaMarketing() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Rocket body */}
      <path d="M8,1 L6,6 L6,11 L10,11 L10,6 Z" fill="#2196F3" />
      <path d="M8,1 L7,4 L9,4 Z" fill="#64B5F6" />
      {/* Nose cone highlight */}
      <path d="M8,1.5 L7.5,3 L8.5,3 Z" fill="#90CAF9" />
      {/* Windows */}
      <circle cx="8" cy="6" r="1" fill="#0D47A1" />
      <circle cx="8" cy="6" r="0.5" fill="#64B5F6" opacity="0.6" />
      {/* Fins */}
      <path d="M6,9 L3,12 L6,11 Z" fill="#1565C0" />
      <path d="M10,9 L13,12 L10,11 Z" fill="#1565C0" />
      {/* Flame */}
      <path d="M6.5,11 L8,15 L9.5,11 Z" fill="#FF9800" />
      <path d="M7,11 L8,14 L9,11 Z" fill="#FFC107" />
      {/* Stars */}
      <circle cx="3" cy="3" r="0.4" fill="#fff" opacity="0.6" />
      <circle cx="13" cy="5" r="0.3" fill="#fff" opacity="0.5" />
      <circle cx="2" cy="8" r="0.3" fill="#fff" opacity="0.4" />
    </svg>
  );
}

function CasitaInfra() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Server rack */}
      <rect x="3" y="1" width="10" height="14" rx="1" fill="#1a1800" stroke="#FFC107" strokeWidth="0.8" />
      {/* Server unit 1 */}
      <rect x="4" y="2" width="8" height="3" fill="#2a2200" stroke="#FFC107" strokeWidth="0.3" />
      <circle cx="5.5" cy="3.5" r="0.5" fill="#4CAF50" />
      <circle cx="7" cy="3.5" r="0.5" fill="#4CAF50" />
      <rect x="9" y="3" width="2" height="1" fill="#333" />
      {/* Server unit 2 */}
      <rect x="4" y="6" width="8" height="3" fill="#2a2200" stroke="#FFC107" strokeWidth="0.3" />
      <circle cx="5.5" cy="7.5" r="0.5" fill="#FFC107" />
      <circle cx="7" cy="7.5" r="0.5" fill="#4CAF50" />
      <rect x="9" y="7" width="2" height="1" fill="#333" />
      {/* Server unit 3 */}
      <rect x="4" y="10" width="8" height="3" fill="#2a2200" stroke="#FFC107" strokeWidth="0.3" />
      <circle cx="5.5" cy="11.5" r="0.5" fill="#f44336" />
      <circle cx="7" cy="11.5" r="0.5" fill="#FFC107" />
      <rect x="9" y="11" width="2" height="1" fill="#333" />
    </svg>
  );
}

function CasitaHQ() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Building body */}
      <rect x="3" y="5" width="10" height="10" fill="#333" />
      {/* Roof */}
      <polygon points="8,1 2,5 14,5" fill="#555" />
      {/* Windows row 1 */}
      <rect x="4" y="6" width="2" height="2" fill="#FF9800" opacity="0.5" />
      <rect x="7" y="6" width="2" height="2" fill="#4CAF50" opacity="0.5" />
      <rect x="10" y="6" width="2" height="2" fill="#E91E63" opacity="0.5" />
      {/* Windows row 2 */}
      <rect x="4" y="9" width="2" height="2" fill="#2196F3" opacity="0.5" />
      <rect x="10" y="9" width="2" height="2" fill="#FFC107" opacity="0.5" />
      {/* Door */}
      <rect x="7" y="11" width="2" height="4" fill="#222" />
      <circle cx="8.5" cy="13" r="0.3" fill="#FFC107" />
      {/* Flag pole */}
      <line x1="8" y1="1" x2="8" y2="-1" stroke="#888" strokeWidth="0.4" />
      {/* Flag with 5 department colors */}
      <rect x="8" y="-1" width="3" height="0.5" fill="#FF9800" />
      <rect x="8" y="-0.5" width="3" height="0.5" fill="#4CAF50" />
      <rect x="8" y="0" width="3" height="0.5" fill="#E91E63" />
    </svg>
  );
}

function CasitaDungeon({ deptType }: { deptType: string }) {
  const baseColor = deptType === 'producto' ? '#FF9800'
    : deptType === 'codigo' ? '#4CAF50'
    : deptType === 'diseno' ? '#E91E63'
    : deptType === 'marketing' ? '#2196F3'
    : '#FFC107';
  const darkColor = deptType === 'producto' ? '#7a4a00'
    : deptType === 'codigo' ? '#1a3a1a'
    : deptType === 'diseno' ? '#6a0a2a'
    : deptType === 'marketing' ? '#0a2a4a'
    : '#7a6000';
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      {/* Arch/doorway */}
      <path d="M3,15 L3,5 Q8,0 13,5 L13,15" fill={darkColor} stroke={baseColor} strokeWidth="0.6" />
      {/* Inner dark */}
      <path d="M5,15 L5,6 Q8,2 11,6 L11,15" fill="#111" />
      {/* Skull */}
      <ellipse cx="8" cy="7" rx="2" ry="1.8" fill="#ddd" />
      <circle cx="7" cy="6.5" r="0.6" fill="#111" />
      <circle cx="9" cy="6.5" r="0.6" fill="#111" />
      <path d="M7,8 L7.5,8.5 L8,8 L8.5,8.5 L9,8" stroke="#111" strokeWidth="0.3" fill="none" />
      {/* Fire left */}
      <path d="M4,11 Q4,8 5,9 Q4.5,7 5.5,10 Q5,9 4.5,11 Z" fill="#f44336" opacity="0.8" />
      <path d="M4.2,11 Q4.2,9 4.8,10 Z" fill="#FF9800" opacity="0.6" />
      {/* Fire right */}
      <path d="M12,11 Q12,8 11,9 Q11.5,7 10.5,10 Q11,9 11.5,11 Z" fill="#f44336" opacity="0.8" />
      <path d="M11.8,11 Q11.8,9 11.2,10 Z" fill="#FF9800" opacity="0.6" />
      {/* Crossed swords */}
      <line x1="5" y1="12" x2="11" y2="15" stroke={baseColor} strokeWidth="0.6" />
      <line x1="11" y1="12" x2="5" y2="15" stroke={baseColor} strokeWidth="0.6" />
    </svg>
  );
}

function getCasita(type: string, isDungeon?: boolean, isHQ?: boolean) {
  if (isHQ) return <CasitaHQ />;
  if (isDungeon) return <CasitaDungeon deptType={type} />;
  if (type === 'producto') return <CasitaProducto />;
  if (type === 'codigo') return <CasitaCodigo />;
  if (type === 'diseno') return <CasitaDiseno />;
  if (type === 'marketing') return <CasitaMarketing />;
  if (type === 'infra') return <CasitaInfra />;
  return <CasitaHQ />;
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
        viewBox="0 0 100 95"
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

      {/* Department watermark labels — pentagonal layout */}
      <div style={{ position: 'absolute', top: '16%', right: '10%', fontSize: '1.6rem', color: '#FF9800', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Producto
      </div>
      <div style={{ position: 'absolute', top: '52%', right: '2%', fontSize: '1.6rem', color: '#4CAF50', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Código
      </div>
      <div style={{ position: 'absolute', bottom: '6%', right: '25%', fontSize: '1.6rem', color: '#E91E63', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Diseño
      </div>
      <div style={{ position: 'absolute', bottom: '14%', left: '2%', fontSize: '1.6rem', color: '#2196F3', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Marketing
      </div>
      <div style={{ position: 'absolute', top: '14%', left: '4%', fontSize: '1.6rem', color: '#FFC107', opacity: 0.06, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
        Infra
      </div>

      {/* Zone casitas */}
      {ZONES.map((zone) => {
        const colors = DEPT_COLORS[zone.type] ?? DEPT_COLORS.hq;
        const isSelected = selectedZoneId === zone.id;
        const isHQ = zone.type === 'hq';
        const progress = zoneProgress.get(zone.id);
        const pct = progress ? Math.round((progress.completed / progress.total) * 100) : 0;
        const hasWork = progress ? progress.inProgress > 0 : false;
        const hasStarted = progress ? progress.completed > 0 || progress.inProgress > 0 : false;
        const isComplete = pct >= 100 && progress && progress.total > 0;
        const size = isHQ ? 5 : zone.isDungeon ? 3.5 : 4;

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
              minWidth: isHQ ? 48 : zone.isDungeon ? 32 : 38,
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
              {getCasita(zone.type, zone.isDungeon, isHQ)}

              {/* Glow ring when selected */}
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: isHQ ? '50%' : 6,
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

import { useMemo } from 'react';
import { ZONES, CONNECTIONS, REALM_COLORS, ZONE_MAP } from '../worldData';
import type { Agent, ZoneTask } from '../agentTypes';
import AgentSprite from './AgentSprite';

interface ZeldaWorldMapProps {
  agents: Agent[];
  tasks: ZoneTask[];
  selectedAgentId: string | null;
  selectedZoneId: string | null;
  onSelectAgent: (id: string | null) => void;
  onSelectZone: (id: string | null) => void;
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

  // Group agents by current zone (for offset calculation)
  const agentsByZone = useMemo(() => {
    const map = new Map<string, Agent[]>();
    for (const agent of agents) {
      if (agent.status === 'traveling') continue; // traveling agents get no offset
      const list = map.get(agent.currentZoneId) ?? [];
      list.push(agent);
      map.set(agent.currentZoneId, list);
    }
    return map;
  }, [agents]);

  // Build task lookup for agent current tasks
  const taskMap = useMemo(() => new Map(tasks.map((t) => [t.id, t])), [tasks]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 0.85',
        overflow: 'hidden',
        backgroundColor: '#0a0a0f',
        borderRadius: 8,
        border: '2px solid #222',
      }}
    >
      {/* SVG connections layer */}
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
          return (
            <line
              key={`${conn.from}-${conn.to}`}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke={conn.secret ? '#f44336' : '#333'}
              strokeWidth={conn.secret ? 0.4 : 0.25}
              strokeDasharray={conn.secret ? '1 0.5' : undefined}
              opacity={conn.secret ? 0.5 : 0.4}
            />
          );
        })}
      </svg>

      {/* Realm labels */}
      <div style={{ position: 'absolute', top: '2%', left: '50%', transform: 'translateX(-50%)', fontSize: '0.7rem', color: '#FFC10730', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive' }}>
        Cosmos Infinito
      </div>
      <div style={{ position: 'absolute', bottom: '6%', left: '10%', fontSize: '0.7rem', color: '#4CAF5030', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive' }}>
        Bosque Eterno
      </div>
      <div style={{ position: 'absolute', bottom: '6%', right: '4%', fontSize: '0.7rem', color: '#2196F330', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive' }}>
        Océano Profundo
      </div>

      {/* Zone nodes */}
      {ZONES.map((zone) => {
        const colors = REALM_COLORS[zone.type] ?? REALM_COLORS.nexo;
        const isSelected = selectedZoneId === zone.id;
        const isNexo = zone.type === 'nexo';
        const progress = zoneProgress.get(zone.id);
        const pct = progress ? Math.round((progress.completed / progress.total) * 100) : 0;
        const hasWork = progress ? progress.inProgress > 0 : false;
        const size = isNexo ? 4.5 : zone.isDungeon ? 3 : 3.5;

        let borderColor = colors.border + '44';
        if (pct >= 100) borderColor = '#4CAF50';
        else if (pct > 0) borderColor = colors.border + '88';
        if (isSelected) borderColor = colors.border;

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
              minWidth: isNexo ? 40 : zone.isDungeon ? 28 : 32,
              aspectRatio: '1',
              backgroundColor: colors.bg,
              border: `2px solid ${borderColor}`,
              borderRadius: isNexo ? '50%' : zone.isDungeon ? 3 : 5,
              borderStyle: zone.isDungeon ? 'dashed' : 'solid',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              boxShadow: isSelected
                ? `0 0 12px ${colors.glow}`
                : hasWork
                  ? `0 0 6px ${colors.border}33`
                  : 'none',
              zIndex: isSelected ? 5 : 1,
              overflow: 'hidden',
              animation: hasWork ? 'zone-pulse 2s ease-in-out infinite' : undefined,
            }}
          >
            <div
              style={{
                fontSize: '0.5rem',
                color: colors.text,
                textAlign: 'center',
                lineHeight: 1.2,
                padding: '0 2px',
                opacity: 0.8,
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontFamily: '"Press Start 2P", cursive',
              }}
            >
              {zone.isDungeon ? '\u2694' : isNexo ? '\uD83C\uDF00' : ''}{' '}
              {zone.name.split(' ').slice(0, 2).join(' ')}
            </div>
            {/* Progress pip */}
            {progress && progress.total > 0 && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 1,
                  left: '10%',
                  right: '10%',
                  height: 2,
                  backgroundColor: '#000',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    backgroundColor: pct >= 100 ? '#4CAF50' : colors.border,
                    borderRadius: 1,
                  }}
                />
              </div>
            )}
            {/* Agent count badge */}
            {(agentsByZone.get(zone.id)?.length ?? 0) > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: 1,
                  right: 1,
                  fontSize: '0.4rem',
                  color: '#fff',
                  backgroundColor: '#333',
                  borderRadius: '50%',
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"Press Start 2P", cursive',
                }}
              >
                {agentsByZone.get(zone.id)!.length}
              </div>
            )}
          </div>
        );
      })}

      {/* Agent sprites overlay */}
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

      {/* Zone pulse animation */}
      <style>{`
        @keyframes zone-pulse {
          0%, 100% { box-shadow: 0 0 4px transparent; }
          50% { box-shadow: 0 0 8px rgba(255,193,7,0.15); }
        }
      `}</style>
    </div>
  );
}

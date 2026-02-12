import { useMemo } from 'react';
import type { ZoneTask, Agent } from '../agentTypes';
import { ZONES } from '../worldData';

interface ProgressSummaryProps {
  tasks: ZoneTask[];
  agents: Agent[];
}

interface RealmStats {
  name: string;
  color: string;
  total: number;
  completed: number;
}

const CATEGORY_ICONS: Record<string, string> = {
  map: '📐',
  mechanics: '🔧',
  art: '🎨',
  audio: '🎵',
  integration: '🔗',
};

const CATEGORY_NAMES: Record<string, string> = {
  map: 'Mapa',
  mechanics: 'Mecánicas',
  art: 'Arte',
  audio: 'Audio',
  integration: 'Integración',
};

export default function ProgressSummary({ tasks, agents }: ProgressSummaryProps) {
  const stats = useMemo(() => {
    const zoneTypeMap = new Map(ZONES.map((z) => [z.id, z.type]));

    const realms: Record<string, RealmStats> = {
      nexo: { name: 'Nexo', color: '#aaa', total: 0, completed: 0 },
      seed: { name: 'Bosque', color: '#4CAF50', total: 0, completed: 0 },
      drop: { name: 'Océano', color: '#2196F3', total: 0, completed: 0 },
      spark: { name: 'Cosmos', color: '#FFC107', total: 0, completed: 0 },
    };

    const categories: Record<string, { total: number; completed: number }> = {
      map: { total: 0, completed: 0 },
      mechanics: { total: 0, completed: 0 },
      art: { total: 0, completed: 0 },
      audio: { total: 0, completed: 0 },
      integration: { total: 0, completed: 0 },
    };

    let total = 0;
    let completed = 0;

    for (const task of tasks) {
      total++;
      if (task.status === 'completed') completed++;

      const type = zoneTypeMap.get(task.zoneId) ?? 'nexo';
      const realm = realms[type];
      if (realm) {
        realm.total++;
        if (task.status === 'completed') realm.completed++;
      }

      const cat = categories[task.category];
      if (cat) {
        cat.total++;
        if (task.status === 'completed') cat.completed++;
      }
    }

    return { realms, categories, total, completed };
  }, [tasks]);

  // Agent status counts
  const agentStats = useMemo(() => {
    let working = 0, traveling = 0, idle = 0, resting = 0;
    let avgEnergy = 0;
    for (const a of agents) {
      if (a.status === 'working') working++;
      else if (a.status === 'traveling') traveling++;
      else if (a.status === 'resting') resting++;
      else idle++;
      avgEnergy += a.energy;
    }
    avgEnergy = agents.length > 0 ? Math.round(avgEnergy / agents.length) : 0;
    return { working, traveling, idle, resting, avgEnergy };
  }, [agents]);

  const globalPct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        border: '2px solid #333',
        borderRadius: 8,
        padding: '0.5rem',
        fontFamily: '"Press Start 2P", cursive',
      }}
    >
      {/* Global bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.7rem', color: '#888', minWidth: '3rem' }}>Total</span>
        <div style={{ flex: 1, height: 8, backgroundColor: '#000', borderRadius: 4, overflow: 'hidden' }}>
          <div
            style={{
              width: `${globalPct}%`,
              height: '100%',
              backgroundColor: globalPct >= 100 ? '#4CAF50' : '#FFC107',
              borderRadius: 4,
              transition: 'width 0.5s ease',
            }}
          />
        </div>
        <span style={{ fontSize: '0.7rem', color: '#fff', minWidth: '2rem', textAlign: 'right' }}>
          {stats.completed}/{stats.total}
        </span>
      </div>

      {/* Agent status row */}
      <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
        <AgentStatPill label="Trabajando" value={agentStats.working} color="#4CAF50" />
        <AgentStatPill label="Viajando" value={agentStats.traveling} color="#FFC107" />
        <AgentStatPill label="Libre" value={agentStats.idle} color="#aaa" />
        <AgentStatPill label="Descansando" value={agentStats.resting} color="#9C27B0" />
        <AgentStatPill label="Energía media" value={agentStats.avgEnergy} color="#2196F3" suffix="%" />
      </div>

      {/* Realm bars */}
      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
        {Object.values(stats.realms).map((realm) => {
          const pct = realm.total > 0 ? Math.round((realm.completed / realm.total) * 100) : 0;
          return (
            <div key={realm.name} style={{ flex: '1 1 45%', minWidth: 100 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: '0.6rem', color: realm.color }}>{realm.name}</span>
                <span style={{ fontSize: '0.55rem', color: '#666' }}>{pct}%</span>
              </div>
              <div style={{ height: 4, backgroundColor: '#000', borderRadius: 2, overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    backgroundColor: realm.color,
                    borderRadius: 2,
                    transition: 'width 0.5s ease',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Category bars */}
      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
        {Object.entries(stats.categories).map(([key, cat]) => {
          const pct = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
          return (
            <div key={key} style={{ flex: '1 1 30%', minWidth: 80 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: '0.5rem', color: '#888' }}>
                  {CATEGORY_ICONS[key]} {CATEGORY_NAMES[key]}
                </span>
                <span style={{ fontSize: '0.5rem', color: '#555' }}>{cat.completed}/{cat.total}</span>
              </div>
              <div style={{ height: 3, backgroundColor: '#000', borderRadius: 2, overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    backgroundColor: '#666',
                    borderRadius: 2,
                    transition: 'width 0.5s ease',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AgentStatPill({ label, value, color, suffix }: { label: string; value: number; color: string; suffix?: string }) {
  return (
    <div
      style={{
        fontSize: '0.5rem',
        color,
        backgroundColor: color + '12',
        padding: '0.12rem 0.25rem',
        borderRadius: 3,
        border: `1px solid ${color}25`,
      }}
    >
      {label}: {value}{suffix ?? ''}
    </div>
  );
}

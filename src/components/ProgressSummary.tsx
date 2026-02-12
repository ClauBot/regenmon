import { useMemo } from 'react';
import type { ZoneTask } from '../agentTypes';
import { ZONES } from '../worldData';

interface ProgressSummaryProps {
  tasks: ZoneTask[];
}

export default function ProgressSummary({ tasks }: ProgressSummaryProps) {
  const stats = useMemo(() => {
    const zoneTypeMap = new Map(ZONES.map((z) => [z.id, z.type]));

    const realms: Record<string, { color: string; total: number; completed: number }> = {
      seed: { color: '#4CAF50', total: 0, completed: 0 },
      drop: { color: '#2196F3', total: 0, completed: 0 },
      spark: { color: '#FFC107', total: 0, completed: 0 },
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
    }

    return { realms, total, completed };
  }, [tasks]);

  const globalPct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  // Realm pips: filled dots based on progress thirds
  const realmPips = (realm: { total: number; completed: number }) => {
    if (realm.total === 0) return 0;
    const pct = realm.completed / realm.total;
    if (pct >= 1) return 3;
    if (pct >= 0.5) return 2;
    if (pct > 0) return 1;
    return 0;
  };

  return (
    <div
      style={{
        backgroundColor: '#1a1a1acc',
        backdropFilter: 'blur(4px)',
        border: '1px solid #333',
        borderRadius: 6,
        padding: '0.25rem 0.4rem',
        fontFamily: '"Press Start 2P", cursive',
        minWidth: 120,
      }}
    >
      {/* Global progress line */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
        <span style={{ fontSize: '0.5rem', color: '#fff' }}>
          {stats.completed}/{stats.total}
        </span>
        <div style={{ flex: 1, height: 4, backgroundColor: '#000', borderRadius: 2, overflow: 'hidden', minWidth: 40 }}>
          <div
            style={{
              width: `${globalPct}%`,
              height: '100%',
              backgroundColor: globalPct >= 100 ? '#4CAF50' : '#FFC107',
              borderRadius: 2,
              transition: 'width 0.5s ease',
            }}
          />
        </div>
        <span style={{ fontSize: '0.45rem', color: '#888' }}>{globalPct}%</span>
      </div>

      {/* Realm pips row */}
      <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
        {Object.entries(stats.realms).map(([key, realm]) => {
          const filled = realmPips(realm);
          return (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: '0.35rem', color: realm.color }}>
                {key === 'seed' ? 'B' : key === 'drop' ? 'O' : 'C'}
              </span>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: i < filled ? realm.color : '#333',
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

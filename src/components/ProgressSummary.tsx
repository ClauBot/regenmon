import { useMemo } from 'react';
import type { ZoneTask } from '../agentTypes';
import { ZONES } from '../worldData';

interface ProgressSummaryProps {
  tasks: ZoneTask[];
}

export default function ProgressSummary({ tasks }: ProgressSummaryProps) {
  const stats = useMemo(() => {
    const zoneTypeMap = new Map(ZONES.map((z) => [z.id, z.type]));

    const departments: Record<string, { color: string; label: string; total: number; completed: number }> = {
      producto:  { color: '#FF9800', label: 'P', total: 0, completed: 0 },
      codigo:    { color: '#4CAF50', label: 'C', total: 0, completed: 0 },
      diseno:    { color: '#E91E63', label: 'D', total: 0, completed: 0 },
      marketing: { color: '#2196F3', label: 'M', total: 0, completed: 0 },
      infra:     { color: '#FFC107', label: 'I', total: 0, completed: 0 },
    };

    let total = 0;
    let completed = 0;

    for (const task of tasks) {
      total++;
      if (task.status === 'completed') completed++;

      const type = zoneTypeMap.get(task.zoneId) ?? 'hq';
      const dept = departments[type];
      if (dept) {
        dept.total++;
        if (task.status === 'completed') dept.completed++;
      }
    }

    return { departments, total, completed };
  }, [tasks]);

  const globalPct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  // Department pips: filled dots based on progress thirds
  const deptPips = (dept: { total: number; completed: number }) => {
    if (dept.total === 0) return 0;
    const pct = dept.completed / dept.total;
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
        minWidth: 140,
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

      {/* Department pips row — P/C/D/M/I */}
      <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
        {Object.entries(stats.departments).map(([key, dept]) => {
          const filled = deptPips(dept);
          return (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: '0.35rem', color: dept.color }}>
                {dept.label}
              </span>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: i < filled ? dept.color : '#333',
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

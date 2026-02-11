import { useMemo } from 'react';

/** Fullscreen animated background — hyperspace / traveling through the universe */
export default function SpaceTravel() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: ((i * 37 + 13) % 98) + 1,
        y: ((i * 53 + 7) % 98) + 1,
        size: 1 + (i % 3),
        speed: 1.5 + (i % 5) * 0.8,
        delay: (i * 0.15) % 4,
      })),
    []
  );

  const streaks = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: ((i * 41 + 17) % 96) + 2,
        y: ((i * 67 + 11) % 96) + 2,
        length: 30 + (i % 4) * 25,
        speed: 2 + (i % 3) * 1.5,
        delay: (i * 0.3) % 5,
        opacity: 0.15 + (i % 3) * 0.1,
      })),
    []
  );

  const nebulas = useMemo(
    () => [
      { id: 0, x: 15, y: 20, size: 250, color: '80,100,255', opacity: 0.04 },
      { id: 1, x: 75, y: 60, size: 300, color: '150,50,200', opacity: 0.035 },
      { id: 2, x: 50, y: 80, size: 200, color: '50,180,150', opacity: 0.03 },
    ],
    []
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 50%, #0a0e1a 0%, #050508 70%, #020204 100%)',
      }}
    >
      <style>{`
        @keyframes st-warp {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(-50% + var(--dx)),
              calc(-50% + var(--dy))
            ) scale(1);
            opacity: 0;
          }
        }

        @keyframes st-streak {
          0% {
            transform: translate(-50%, -50%) scaleX(0) rotate(var(--angle));
            opacity: 0;
          }
          15% {
            opacity: var(--op);
          }
          100% {
            transform: translate(
              calc(-50% + var(--dx)),
              calc(-50% + var(--dy))
            ) scaleX(1) rotate(var(--angle));
            opacity: 0;
          }
        }

        @keyframes st-twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.2; }
        }

        @keyframes st-nebula-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.05); }
        }
      `}</style>

      {/* Nebula clouds */}
      {nebulas.map((n) => (
        <div
          key={`n-${n.id}`}
          style={{
            position: 'absolute',
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: n.size,
            height: n.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(${n.color},${n.opacity}) 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            animation: `st-nebula-drift ${15 + n.id * 5}s ease-in-out infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Static twinkling stars (deep field) */}
      {stars.slice(0, 25).map((s) => (
        <div
          key={`bg-${s.id}`}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: '#fff',
            borderRadius: '50%',
            animation: `st-twinkle ${2 + (s.id % 3)}s ease-in-out ${s.delay}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Warp stars — fly outward from center */}
      {stars.map((s) => {
        const angle = Math.atan2(s.y - 50, s.x - 50);
        const dist = 80 + (s.id % 5) * 30;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;

        return (
          <div
            key={`w-${s.id}`}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size + 1,
              height: s.size + 1,
              backgroundColor: '#fff',
              borderRadius: '50%',
              animation: `st-warp ${s.speed}s linear ${s.delay}s infinite`,
              '--dx': `${dx}px`,
              '--dy': `${dy}px`,
              pointerEvents: 'none',
            } as React.CSSProperties}
          />
        );
      })}

      {/* Light streaks — warp speed lines */}
      {streaks.map((s) => {
        const angle = Math.atan2(s.y - 50, s.x - 50);
        const angleDeg = (angle * 180) / Math.PI;
        const dist = 60 + (s.id % 4) * 25;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;

        return (
          <div
            key={`l-${s.id}`}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.length,
              height: 1,
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6))',
              transformOrigin: 'center center',
              animation: `st-streak ${s.speed}s linear ${s.delay}s infinite`,
              '--angle': `${angleDeg}deg`,
              '--dx': `${dx}px`,
              '--dy': `${dy}px`,
              '--op': `${s.opacity}`,
              pointerEvents: 'none',
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}

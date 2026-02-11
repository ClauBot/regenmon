import { useState, useEffect } from 'react';

interface HatchingAnimationProps {
  species: { emoji: string; speciesName: string };
  onComplete: () => void;
}

const FRAME_DURATION = 800;

export default function HatchingAnimation({ species, onComplete }: HatchingAnimationProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (frame < 4) {
      const timer = setTimeout(() => setFrame((f) => f + 1), FRAME_DURATION);
      return () => clearTimeout(timer);
    }

    const completeTimer = setTimeout(onComplete, FRAME_DURATION);
    return () => clearTimeout(completeTimer);
  }, [frame, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9999,
        fontFamily: '"Press Start 2P", cursive',
      }}
    >
      <style>{`
        @keyframes hatch-fade-in {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes hatch-shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-6px) rotate(-3deg); }
          20% { transform: translateX(6px) rotate(3deg); }
          30% { transform: translateX(-6px) rotate(-3deg); }
          40% { transform: translateX(6px) rotate(3deg); }
          50% { transform: translateX(-4px) rotate(-2deg); }
          60% { transform: translateX(4px) rotate(2deg); }
          70% { transform: translateX(-4px) rotate(-2deg); }
          80% { transform: translateX(4px) rotate(2deg); }
          90% { transform: translateX(-2px) rotate(-1deg); }
        }

        @keyframes hatch-flash {
          0% { opacity: 0; transform: scale(0.5); }
          30% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0; transform: scale(2); }
        }

        @keyframes hatch-bounce-in {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.3); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }

        @keyframes hatch-sparkle {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          50% { opacity: 1; transform: translate(var(--sx), var(--sy)) scale(1); }
          100% { opacity: 0; transform: translate(var(--ex), var(--ey)) scale(0); }
        }

        .hatch-frame-fadein {
          animation: hatch-fade-in 0.6s ease-out forwards;
        }

        .hatch-frame-shake {
          animation: hatch-shake 0.4s ease-in-out infinite;
        }

        .hatch-frame-crack {
          animation: hatch-shake 0.25s ease-in-out infinite;
          position: relative;
        }

        .hatch-frame-crack::after {
          content: '';
          position: absolute;
          top: 40%;
          left: 50%;
          width: 60%;
          height: 40%;
          transform: translateX(-50%);
          background: transparent;
          border-top: 3px solid rgba(80, 60, 30, 0.7);
          border-right: 2px solid rgba(80, 60, 30, 0.5);
          border-left: 2px solid rgba(80, 60, 30, 0.5);
          clip-path: polygon(20% 0%, 50% 40%, 80% 0%, 90% 30%, 60% 70%, 100% 50%, 70% 100%, 30% 100%, 0% 50%, 40% 70%, 10% 30%);
          pointer-events: none;
        }

        .hatch-frame-flash {
          animation: hatch-flash 0.7s ease-out forwards;
        }

        .hatch-frame-reveal {
          animation: hatch-bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .hatch-sparkle-particle {
          position: absolute;
          font-size: 1.5rem;
          animation: hatch-sparkle 0.8s ease-out forwards;
          pointer-events: none;
        }
      `}</style>

      {/* Frame 0: Egg fade in */}
      {frame === 0 && (
        <div className="hatch-frame-fadein" style={{ fontSize: '6rem', lineHeight: 1.2 }}>
          🥚
        </div>
      )}

      {/* Frame 1: Egg shaking */}
      {frame === 1 && (
        <div className="hatch-frame-shake" style={{ fontSize: '6rem', lineHeight: 1.2 }}>
          🥚
        </div>
      )}

      {/* Frame 2: Egg with cracks */}
      {frame === 2 && (
        <div
          className="hatch-frame-crack"
          style={{ fontSize: '6rem', lineHeight: 1.2, display: 'inline-block' }}
        >
          🥚
        </div>
      )}

      {/* Frame 3: Explosion / white flash */}
      {frame === 3 && (
        <div className="hatch-frame-flash" style={{ fontSize: '6rem', lineHeight: 1.2 }}>
          💥
        </div>
      )}

      {/* Frame 4: Species reveal with sparkles */}
      {frame === 4 && (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="hatch-frame-reveal" style={{ fontSize: '5rem', lineHeight: 1.2 }}>
            {species.emoji}
          </div>

          {/* Sparkle particles */}
          <span
            className="hatch-sparkle-particle"
            style={{
              '--sx': '-30px', '--sy': '-40px', '--ex': '-50px', '--ey': '-70px',
              animationDelay: '0s',
            } as React.CSSProperties}
          >
            ✨
          </span>
          <span
            className="hatch-sparkle-particle"
            style={{
              '--sx': '30px', '--sy': '-35px', '--ex': '55px', '--ey': '-65px',
              animationDelay: '0.15s',
            } as React.CSSProperties}
          >
            ✨
          </span>
          <span
            className="hatch-sparkle-particle"
            style={{
              '--sx': '-40px', '--sy': '20px', '--ex': '-60px', '--ey': '45px',
              animationDelay: '0.3s',
            } as React.CSSProperties}
          >
            ✨
          </span>
          <span
            className="hatch-sparkle-particle"
            style={{
              '--sx': '35px', '--sy': '25px', '--ex': '60px', '--ey': '50px',
              animationDelay: '0.1s',
            } as React.CSSProperties}
          >
            ✨
          </span>
          <span
            className="hatch-sparkle-particle"
            style={{
              '--sx': '0px', '--sy': '-50px', '--ex': '0px', '--ey': '-80px',
              animationDelay: '0.2s',
            } as React.CSSProperties}
          >
            ✨
          </span>

          <p
            style={{
              position: 'absolute',
              top: '100%',
              marginTop: '1.5rem',
              color: '#fff',
              fontSize: '0.8rem',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {species.speciesName}
          </p>
        </div>
      )}
    </div>
  );
}

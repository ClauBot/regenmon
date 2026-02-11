import { useMemo } from 'react';
import type { RegenmonType } from '../types';

interface WorldBackgroundProps {
  type: RegenmonType;
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export default function WorldBackground({ type }: WorldBackgroundProps) {
  // Bosque elements
  const leaves = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: randomBetween(0, 100),
        delay: randomBetween(0, 6),
        duration: randomBetween(4, 8),
        size: randomBetween(16, 28),
      })),
    []
  );

  const clouds = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        top: randomBetween(5, 30),
        width: randomBetween(60, 120),
        height: randomBetween(20, 35),
        delay: randomBetween(0, 12),
        duration: randomBetween(18, 30),
      })),
    []
  );

  // Océano elements
  const bubbles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: randomBetween(5, 95),
        delay: randomBetween(0, 5),
        duration: randomBetween(4, 8),
        size: randomBetween(16, 28),
      })),
    []
  );

  const raindrops = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: randomBetween(0, 100),
        delay: randomBetween(0, 2),
        duration: randomBetween(0.6, 1.4),
        height: randomBetween(10, 25),
      })),
    []
  );

  // Cosmos elements
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: randomBetween(2, 98),
        top: randomBetween(2, 85),
        size: randomBetween(3, 5),
        delay: randomBetween(0, 4),
        duration: randomBetween(1.5, 3.5),
      })),
    []
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        startLeft: randomBetween(10, 70),
        startTop: randomBetween(5, 30),
        delay: randomBetween(0, 8),
        duration: randomBetween(1.2, 2),
      })),
    []
  );

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex: 1,
    overflow: 'hidden',
  };

  if (type === 'seed') {
    return (
      <div
        style={{
          ...containerStyle,
          background: 'linear-gradient(to bottom, #1a3a1a, #2d5a1e)',
        }}
      >
        <style>{`
          @keyframes leafFall {
            0% {
              transform: translateY(-5vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(105vh) rotate(360deg);
              opacity: 0.6;
            }
          }
          @keyframes cloudDrift {
            0% {
              transform: translateX(-150px);
            }
            100% {
              transform: translateX(calc(100vw + 150px));
            }
          }
        `}</style>

        {/* Pixel-style clouds */}
        {clouds.map((cloud) => (
          <div
            key={`cloud-${cloud.id}`}
            style={{
              position: 'absolute',
              top: `${cloud.top}%`,
              left: 0,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              background: 'rgba(255, 255, 255, 0.25)',
              borderRadius: '4px',
              animation: `cloudDrift ${cloud.duration}s linear ${cloud.delay}s infinite`,
            }}
          />
        ))}

        {/* Falling leaves */}
        {leaves.map((leaf) => (
          <div
            key={`leaf-${leaf.id}`}
            style={{
              position: 'absolute',
              left: `${leaf.left}%`,
              top: '-5vh',
              fontSize: `${leaf.size}px`,
              animation: `leafFall ${leaf.duration}s linear ${leaf.delay}s infinite`,
              pointerEvents: 'none',
            }}
          >
            🍃
          </div>
        ))}

        {/* Ground strip */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '15%',
            background: 'linear-gradient(to bottom, #3a5a2a, #4a3a2a)',
            borderTop: '3px solid #2a4a1a',
          }}
        />
      </div>
    );
  }

  if (type === 'drop') {
    return (
      <div
        style={{
          ...containerStyle,
          background: 'linear-gradient(to bottom, #0a1628, #1a6b8a)',
        }}
      >
        <style>{`
          @keyframes bubbleRise {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-50vh) translateX(10px);
              opacity: 0.6;
            }
            100% {
              transform: translateY(-105vh) translateX(-5px);
              opacity: 0;
            }
          }
          @keyframes rainFall {
            0% {
              transform: translateY(-10px);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(105vh);
              opacity: 0;
            }
          }
          @keyframes waveOscillate {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }
          @keyframes waveOscillate2 {
            0%, 100% {
              transform: translateY(-5px);
            }
            50% {
              transform: translateY(5px);
            }
          }
        `}</style>

        {/* Rain effect */}
        {raindrops.map((drop) => (
          <div
            key={`rain-${drop.id}`}
            style={{
              position: 'absolute',
              left: `${drop.left}%`,
              top: 0,
              width: '2px',
              height: `${drop.height}px`,
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '1px',
              animation: `rainFall ${drop.duration}s linear ${drop.delay}s infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={`bubble-${bubble.id}`}
            style={{
              position: 'absolute',
              left: `${bubble.left}%`,
              bottom: '5%',
              fontSize: `${bubble.size}px`,
              animation: `bubbleRise ${bubble.duration}s ease-in ${bubble.delay}s infinite`,
              pointerEvents: 'none',
            }}
          >
            🫧
          </div>
        ))}

        {/* Animated waves at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '-5%',
            right: '-5%',
            height: '40px',
            background: 'rgba(26, 107, 138, 0.5)',
            borderRadius: '50% 50% 0 0',
            animation: 'waveOscillate 3s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '-5%',
            right: '-5%',
            height: '45px',
            background: 'rgba(20, 80, 110, 0.6)',
            borderRadius: '50% 50% 0 0',
            animation: 'waveOscillate2 4s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-5%',
            right: '-5%',
            height: '50px',
            background: 'rgba(15, 60, 90, 0.7)',
            borderRadius: '50% 50% 0 0',
            animation: 'waveOscillate 3.5s ease-in-out 0.5s infinite',
          }}
        />
      </div>
    );
  }

  // type === 'spark' — Cosmos
  return (
    <div
      style={{
        ...containerStyle,
        background: 'linear-gradient(to bottom, #0a0a0f, #1a0a2e)',
      }}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(300px, 300px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          style={{
            position: 'absolute',
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((ss) => (
        <div
          key={`shooting-${ss.id}`}
          style={{
            position: 'absolute',
            left: `${ss.startLeft}%`,
            top: `${ss.startTop}%`,
            width: '80px',
            height: '2px',
            background:
              'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.9))',
            borderRadius: '1px',
            transform: 'rotate(45deg)',
            transformOrigin: 'right center',
            animation: `shootingStar ${ss.duration}s ease-in ${ss.delay}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}

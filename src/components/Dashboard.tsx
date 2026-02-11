import { useState, useCallback } from 'react';
import { SPECIES_LIST, TYPE_CONFIG } from '../constants';
import type { RegenmonType, RegenmonSpecies } from '../types';
import WorldBackground from './WorldBackground';
import HatchingAnimation from './HatchingAnimation';
import RegenmonCharacter from './RegenmonCharacter';
import SpeciesDetail from './SpeciesDetail';
import WorldMap from './WorldMap';

interface DashboardProps {
  onClose: () => void;
  musicToggle: () => void;
  isMusicPlaying: boolean;
}

const WORLD_LABELS: Record<RegenmonType, string> = {
  seed: 'Bosque',
  drop: 'Océano',
  spark: 'Cosmos',
};

const TYPE_ORDER: RegenmonType[] = ['seed', 'drop', 'spark'];

export default function Dashboard({ onClose, musicToggle, isMusicPlaying }: DashboardProps) {
  const [worldPreview, setWorldPreview] = useState<RegenmonType | null>(null);
  const [demoHatching, setDemoHatching] = useState(false);
  const [demoSpecies, setDemoSpecies] = useState<RegenmonSpecies | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<RegenmonSpecies | null>(null);
  const [showWorldMap, setShowWorldMap] = useState(false);

  const startHatchDemo = () => {
    const species = SPECIES_LIST[Math.floor(Math.random() * SPECIES_LIST.length)];
    setDemoSpecies(species);
    setDemoHatching(true);
  };

  const handleHatchComplete = useCallback(() => {
    setDemoHatching(false);
    setDemoSpecies(null);
  }, []);

  // World map overlay
  if (showWorldMap) {
    return <WorldMap onClose={() => setShowWorldMap(false)} />;
  }

  // Species detail overlay
  if (selectedSpecies) {
    return <SpeciesDetail species={selectedSpecies} onClose={() => setSelectedSpecies(null)} />;
  }

  // Fullscreen world overlay
  if (worldPreview) {
    return (
      <>
        <WorldBackground type={worldPreview} />
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <h2
            style={{
              color: '#fff',
              textShadow: '2px 2px 0 #000',
              fontSize: '1.2rem',
              margin: 0,
            }}
          >
            {WORLD_LABELS[worldPreview]} — {TYPE_CONFIG[worldPreview].label}
          </h2>
          <button
            type="button"
            className="nes-btn"
            style={{ fontSize: '0.7rem' }}
            onClick={() => setWorldPreview(null)}
          >
            Cerrar
          </button>
        </div>
      </>
    );
  }

  // Hatching demo overlay
  if (demoHatching && demoSpecies) {
    return <HatchingAnimation species={demoSpecies} onComplete={handleHatchComplete} />;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#111',
        overflowY: 'auto',
        fontFamily: '"Press Start 2P", cursive',
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: '#111',
          borderBottom: '2px solid #333',
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '0.9rem', margin: 0, color: '#fff' }}>Catálogo</h1>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            className="nes-btn"
            style={{ fontSize: '0.55rem', padding: '0.25rem 0.5rem' }}
            onClick={musicToggle}
          >
            {isMusicPlaying ? '🔊' : '🔇'}
          </button>
          <button
            type="button"
            className="nes-btn is-error"
            style={{ fontSize: '0.55rem', padding: '0.25rem 0.5rem' }}
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '1rem' }}>
        {/* Section 1: Species Catalog */}
        <h2
          style={{
            fontSize: '0.75rem',
            color: '#ccc',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Especies
        </h2>

        {TYPE_ORDER.map((type) => {
          const config = TYPE_CONFIG[type];
          const species = SPECIES_LIST.filter((s) => s.type === type);

          return (
            <div key={type} style={{ marginBottom: '1.5rem' }}>
              <h3
                style={{
                  fontSize: '0.65rem',
                  color: config.color,
                  marginBottom: '0.75rem',
                  textAlign: 'center',
                }}
              >
                {config.label}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                }}
              >
                {species.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedSpecies(s)}
                    style={{
                      backgroundColor: '#1a1a1a',
                      border: `2px solid ${config.color}44`,
                      borderRadius: '8px',
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', lineHeight: 1.3 }}>
                      <RegenmonCharacter species={s} size="sm" animate={false} />
                    </div>
                    <div
                      style={{
                        fontSize: '0.45rem',
                        color: '#ddd',
                        marginTop: '0.25rem',
                      }}
                    >
                      {s.speciesName}
                    </div>
                    <div
                      style={{
                        display: 'inline-block',
                        fontSize: '0.35rem',
                        color: config.color,
                        backgroundColor: `${config.color}22`,
                        padding: '0.1rem 0.3rem',
                        borderRadius: '4px',
                        marginTop: '0.2rem',
                      }}
                    >
                      {config.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* World Map button */}
        <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1.5rem' }}>
          <button
            type="button"
            className="nes-btn is-primary"
            style={{ fontSize: '0.55rem' }}
            onClick={() => setShowWorldMap(true)}
          >
            Mapa del Mundo
          </button>
        </div>

        {/* Section 2: Worlds */}
        <h2
          style={{
            fontSize: '0.75rem',
            color: '#ccc',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Mundos
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {TYPE_ORDER.map((type) => {
            const config = TYPE_CONFIG[type];
            return (
              <div
                key={type}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: 200,
                  borderRadius: '8px',
                  border: `2px solid ${config.color}44`,
                }}
              >
                {/* WorldBackground renders with position: fixed, so we override it */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      /* Override WorldBackground's fixed positioning */
                    }}
                  >
                    <WorldPreviewInline type={type} />
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.75rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 'bold' }}>
                      {WORLD_LABELS[type]}
                    </div>
                    <div style={{ fontSize: '0.45rem', color: config.color }}>
                      {config.label}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="nes-btn is-primary"
                    style={{ fontSize: '0.5rem', padding: '0.2rem 0.6rem' }}
                    onClick={() => setWorldPreview(type)}
                  >
                    Ver
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 3: Hatching Demo */}
        <h2
          style={{
            fontSize: '0.75rem',
            color: '#ccc',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Eclosión
        </h2>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.5rem', color: '#888', marginBottom: '1rem' }}>
            Prueba la animación de eclosión con una especie aleatoria
          </p>
          <button
            type="button"
            className="nes-btn is-success"
            style={{ fontSize: '0.6rem' }}
            onClick={startHatchDemo}
          >
            Probar eclosión
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Inline version of WorldBackground that renders with absolute positioning
 * instead of fixed, so it can be used inside a preview card.
 */
function WorldPreviewInline({ type }: { type: RegenmonType }) {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
  };

  if (type === 'seed') {
    return (
      <div style={{ ...baseStyle, background: 'linear-gradient(to bottom, #1a3a1a, #2d5a1e)' }}>
        <style>{`
          @keyframes dash-leafFall {
            0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(220px) rotate(360deg); opacity: 0.6; }
          }
        `}</style>
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${15 + i * 18}%`,
              top: '-20px',
              fontSize: '14px',
              animation: `dash-leafFall ${4 + i * 0.8}s linear ${i * 0.5}s infinite`,
              pointerEvents: 'none',
            }}
          >
            🍃
          </div>
        ))}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '15%',
            background: 'linear-gradient(to bottom, #3a5a2a, #4a3a2a)',
            borderTop: '2px solid #2a4a1a',
          }}
        />
      </div>
    );
  }

  if (type === 'drop') {
    return (
      <div style={{ ...baseStyle, background: 'linear-gradient(to bottom, #0a1628, #1a6b8a)' }}>
        <style>{`
          @keyframes dash-rainFall {
            0% { transform: translateY(-10px); opacity: 0; }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { transform: translateY(220px); opacity: 0; }
          }
          @keyframes dash-wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${5 + i * 6.5}%`,
              top: 0,
              width: '2px',
              height: `${12 + (i % 3) * 4}px`,
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '1px',
              animation: `dash-rainFall ${0.6 + (i % 4) * 0.2}s linear ${i * 0.1}s infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-5%',
            right: '-5%',
            height: '30px',
            background: 'rgba(15,60,90,0.7)',
            borderRadius: '50% 50% 0 0',
            animation: 'dash-wave 3s ease-in-out infinite',
          }}
        />
      </div>
    );
  }

  // spark — Cosmos
  return (
    <div style={{ ...baseStyle, background: 'linear-gradient(to bottom, #0a0a0f, #1a0a2e)' }}>
      <style>{`
        @keyframes dash-twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${5 + ((i * 23) % 90)}%`,
            top: `${5 + ((i * 31) % 80)}%`,
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            backgroundColor: '#fff',
            borderRadius: '50%',
            animation: `dash-twinkle ${1.5 + (i % 4) * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}

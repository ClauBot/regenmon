import type { RegenmonSpecies, RegenmonType } from '../types';
import { TYPE_CONFIG } from '../constants';
import { SPECIES_LORE, WORLD_LORE } from '../lore';
import RegenmonCharacter from './RegenmonCharacter';

interface SpeciesDetailProps {
  species: RegenmonSpecies;
  onClose: () => void;
}

const REALM_NAMES: Record<RegenmonType, string> = {
  seed: WORLD_LORE.realms.seed.name,
  drop: WORLD_LORE.realms.drop.name,
  spark: WORLD_LORE.realms.spark.name,
};

const WORLD_LABELS: Record<RegenmonType, string> = {
  seed: 'Bosque',
  drop: 'Océano',
  spark: 'Cosmos',
};

export default function SpeciesDetail({ species, onClose }: SpeciesDetailProps) {
  const config = TYPE_CONFIG[species.type];
  const lore = SPECIES_LORE[species.id];

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
      {/* Header — same style as Dashboard */}
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
        <button
          type="button"
          className="nes-btn"
          style={{ fontSize: '0.55rem', padding: '0.25rem 0.5rem' }}
          onClick={onClose}
        >
          Volver
        </button>
        <h1 style={{ fontSize: '0.65rem', margin: 0, color: '#fff' }}>
          {species.speciesName}
        </h1>
        <div
          style={{
            fontSize: '0.35rem',
            color: config.color,
            backgroundColor: `${config.color}22`,
            padding: '0.1rem 0.3rem',
            borderRadius: '4px',
          }}
        >
          {config.label}
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '1rem' }}>
        {/* Character showcase with mini world background */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            border: `2px solid ${config.color}44`,
            marginBottom: '1rem',
            height: 340,
          }}
        >
          {/* Inline world background */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <WorldSceneInline type={species.type} />
          </div>

          {/* Character centered — same sm render as catalog, scaled up */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: '2rem',
            }}
          >
            <div
              style={{
                transform: 'scale(4)',
                transformOrigin: 'center center',
                filter: `drop-shadow(0 0 3px ${config.color}66)`,
                imageRendering: 'pixelated',
              }}
            >
              <RegenmonCharacter species={species} size="sm" animate />
            </div>
          </div>

          {/* Name overlay at bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '0.6rem 0.75rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: '#fff',
                  textShadow: '2px 2px 0 #000',
                  fontWeight: 'bold',
                }}
              >
                {species.emoji} {species.speciesName}
              </div>
              <div style={{ fontSize: '0.35rem', color: config.color, marginTop: '0.15rem' }}>
                {WORLD_LABELS[species.type]} — {REALM_NAMES[species.type]}
              </div>
            </div>
          </div>
        </div>

        {/* Lore sections — same card style as Dashboard species cards */}
        {lore && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <LoreCard title="Historia" color={config.color} icon="📜">
              {lore.backstory}
            </LoreCard>
            <LoreCard title="Habilidad" color={config.color} icon="⚔️">
              {lore.ability}
            </LoreCard>
            <LoreCard title="Defecto" color={config.color} icon="💔">
              {lore.defect}
            </LoreCard>
            <LoreCard title="Intercambio" color={config.color} icon="🤝">
              {lore.trade}
            </LoreCard>
          </div>
        )}
      </div>
    </div>
  );
}

function LoreCard({
  title,
  color,
  icon,
  children,
}: {
  title: string;
  color: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        border: `2px solid ${color}44`,
        borderRadius: '8px',
        padding: '0.6rem 0.75rem',
      }}
    >
      <div
        style={{
          fontSize: '0.4rem',
          color,
          marginBottom: '0.35rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {icon} {title}
      </div>
      <p
        style={{
          fontSize: '0.4rem',
          color: '#ccc',
          lineHeight: 1.9,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

/** Compact inline world background matching Dashboard's WorldPreviewInline */
function WorldSceneInline({ type }: { type: RegenmonType }) {
  const base: React.CSSProperties = { position: 'absolute', inset: 0, overflow: 'hidden' };

  if (type === 'seed') {
    return (
      <div style={{ ...base, background: 'linear-gradient(to bottom, #1a3a1a, #2d5a1e)' }}>
        <style>{`
          @keyframes sd-leaf { 0%{transform:translateY(-20px) rotate(0);opacity:1} 100%{transform:translateY(220px) rotate(360deg);opacity:.6} }
        `}</style>
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${15 + i * 18}%`,
              top: -20,
              fontSize: 14,
              animation: `sd-leaf ${4 + i * 0.8}s linear ${i * 0.5}s infinite`,
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
      <div style={{ ...base, background: 'linear-gradient(to bottom, #0a1628, #1a6b8a)' }}>
        <style>{`
          @keyframes sd-rain { 0%{transform:translateY(-10px);opacity:0} 10%{opacity:.6} 90%{opacity:.6} 100%{transform:translateY(220px);opacity:0} }
          @keyframes sd-wave { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        `}</style>
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${5 + i * 6.5}%`,
              top: 0,
              width: 2,
              height: `${12 + (i % 3) * 4}px`,
              background: 'rgba(255,255,255,0.3)',
              borderRadius: 1,
              animation: `sd-rain ${0.6 + (i % 4) * 0.2}s linear ${i * 0.1}s infinite`,
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
            height: 30,
            background: 'rgba(15,60,90,0.7)',
            borderRadius: '50% 50% 0 0',
            animation: 'sd-wave 3s ease-in-out infinite',
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ ...base, background: 'linear-gradient(to bottom, #0a0a0f, #1a0a2e)' }}>
      <style>{`
        @keyframes sd-twinkle { 0%,100%{opacity:1} 50%{opacity:.2} }
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
            animation: `sd-twinkle ${1.5 + (i % 4) * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}

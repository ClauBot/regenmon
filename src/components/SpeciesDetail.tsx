import type { RegenmonSpecies } from '../types';
import { TYPE_CONFIG } from '../constants';
import { SPECIES_LORE, WORLD_LORE } from '../lore';
import WorldBackground from './WorldBackground';
import RegenmonCharacter from './RegenmonCharacter';

interface SpeciesDetailProps {
  species: RegenmonSpecies;
  onClose: () => void;
}

const REALM_NAMES = {
  seed: WORLD_LORE.realms.seed.name,
  drop: WORLD_LORE.realms.drop.name,
  spark: WORLD_LORE.realms.spark.name,
} as const;

export default function SpeciesDetail({ species, onClose }: SpeciesDetailProps) {
  const config = TYPE_CONFIG[species.type];
  const lore = SPECIES_LORE[species.id];

  return (
    <>
      <WorldBackground type={species.type} />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
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
            padding: '0.75rem 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
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
          <div
            style={{
              fontSize: '0.45rem',
              color: config.color,
              backgroundColor: `${config.color}22`,
              padding: '0.15rem 0.4rem',
              borderRadius: '4px',
            }}
          >
            {config.label} — {REALM_NAMES[species.type]}
          </div>
        </div>

        {/* Character display */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem 1rem 0',
            gap: '0.5rem',
          }}
        >
          <div style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.3))' }}>
            <RegenmonCharacter species={species} size="lg" animate />
          </div>

          <h1
            style={{
              fontSize: '1rem',
              color: '#fff',
              textShadow: '2px 2px 0 #000',
              margin: '0.5rem 0 0',
            }}
          >
            {species.emoji} {species.speciesName}
          </h1>
        </div>

        {/* Lore card */}
        {lore && (
          <div
            style={{
              maxWidth: 520,
              margin: '1rem auto 2rem',
              padding: '0 1rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(0,0,0,0.75)',
                border: `2px solid ${config.color}66`,
                borderRadius: '8px',
                padding: '1rem',
              }}
            >
              {/* Backstory */}
              <Section title="Historia" color={config.color}>
                {lore.backstory}
              </Section>

              {/* Ability */}
              <Section title="Habilidad" color={config.color}>
                {lore.ability}
              </Section>

              {/* Defect */}
              <Section title="Defecto" color={config.color}>
                {lore.defect}
              </Section>

              {/* Trade */}
              <Section title="Intercambio" color={config.color}>
                {lore.trade}
              </Section>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <h3
        style={{
          fontSize: '0.5rem',
          color,
          margin: '0 0 0.35rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.45rem',
          color: '#ddd',
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

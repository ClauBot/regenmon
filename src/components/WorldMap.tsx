import { useState } from 'react';
import type { RegenmonType, RegenmonSpecies } from '../types';
import { SPECIES_LIST, TYPE_CONFIG } from '../constants';
import RegenmonCharacter from './RegenmonCharacter';

interface WorldMapProps {
  onClose: () => void;
}

interface Zone {
  id: string;
  name: string;
  type: RegenmonType | 'nexo';
  x: number; // grid col (0-based)
  y: number; // grid row (0-based)
  w: number; // width in cells
  h: number; // height in cells
  speciesIds: string[];
  description: string;
}

const ZONES: Zone[] = [
  // El Nexo (center)
  { id: 'nexo', name: 'El Nexo', type: 'nexo', x: 3, y: 3, w: 2, h: 2, speciesIds: [], description: 'Las ruinas de El Origen. Aquí convergen los tres reinos.' },

  // Bosque Eterno (southwest) — seed
  { id: 'claro', name: 'Claro del Amanecer', type: 'seed', x: 2, y: 4, w: 1, h: 1, speciesIds: ['seed-01'], description: 'Donde Brote emergió por primera vez.' },
  { id: 'pradera', name: 'Pradera Salvaje', type: 'seed', x: 1, y: 4, w: 1, h: 1, speciesIds: ['seed-02', 'seed-03'], description: 'Hierba y Trébol vagan por estos prados.' },
  { id: 'solar', name: 'Jardín Solar', type: 'seed', x: 0, y: 4, w: 1, h: 1, speciesIds: ['seed-04'], description: 'Campos de girasoles que siguen la luz.' },
  { id: 'espinas', name: 'Desierto de Espinas', type: 'seed', x: 0, y: 5, w: 1, h: 1, speciesIds: ['seed-05'], description: 'La frontera solitaria del Bosque.' },
  { id: 'gruta', name: 'Gruta Micélica', type: 'seed', x: 1, y: 5, w: 1, h: 1, speciesIds: ['seed-06'], description: 'Cuevas bioluminiscentes bajo las raíces.' },
  { id: 'arboleda', name: 'Arboleda Ancestral', type: 'seed', x: 2, y: 5, w: 1, h: 1, speciesIds: ['seed-07'], description: 'Árboles milenarios con anillos del tiempo.' },
  { id: 'canav', name: 'Cañaveral del Cielo', type: 'seed', x: 1, y: 6, w: 1, h: 1, speciesIds: ['seed-08'], description: 'Bambúes que tocan las nubes.' },
  { id: 'eden', name: 'Jardín del Edén', type: 'seed', x: 2, y: 6, w: 1, h: 1, speciesIds: ['seed-09'], description: 'El lugar más bello del Bosque Eterno.' },

  // Océano Profundo (southeast) — drop
  { id: 'manantial', name: 'Manantial Primigenio', type: 'drop', x: 5, y: 4, w: 1, h: 1, speciesIds: ['drop-01'], description: 'La fuente de agua más pura.' },
  { id: 'rompiente', name: 'Rompiente Eterna', type: 'drop', x: 6, y: 4, w: 1, h: 1, speciesIds: ['drop-02'], description: 'Olas que nunca dejan de romper.' },
  { id: 'hielo', name: 'Caverna de Hielo', type: 'drop', x: 7, y: 4, w: 1, h: 1, speciesIds: ['drop-03'], description: 'Profundidades congeladas en cristal.' },
  { id: 'bahia', name: 'Bahía del Silencio', type: 'drop', x: 7, y: 5, w: 1, h: 1, speciesIds: ['drop-04'], description: 'Cuevas donde los ecos cuentan historias.' },
  { id: 'coral', name: 'Ciudad Coral', type: 'drop', x: 6, y: 5, w: 1, h: 1, speciesIds: ['drop-05'], description: 'Metrópolis submarina de arrecifes.' },
  { id: 'abismo', name: 'Abismo Luminoso', type: 'drop', x: 5, y: 5, w: 1, h: 1, speciesIds: ['drop-06'], description: 'Oscuridad iluminada por bioluminiscencia.' },
  { id: 'corriente', name: 'Corriente Fronteriza', type: 'drop', x: 6, y: 6, w: 1, h: 1, speciesIds: ['drop-07'], description: 'Patrullas en corrientes veloces.' },
  { id: 'burbujas', name: 'Mar de Burbujas', type: 'drop', x: 5, y: 6, w: 1, h: 1, speciesIds: ['drop-08'], description: 'Burbujas flotantes por doquier.' },
  { id: 'cumulo', name: 'Cúmulo Lluvioso', type: 'drop', x: 7, y: 6, w: 1, h: 1, speciesIds: ['drop-09'], description: 'Donde nace la lluvia.' },

  // Cosmos Infinito (north) — spark
  { id: 'chispa', name: 'Chispa Inicial', type: 'spark', x: 3, y: 2, w: 1, h: 1, speciesIds: ['spark-01'], description: 'El punto de la primera ignición.' },
  { id: 'tormentas', name: 'Campo de Tormentas', type: 'spark', x: 4, y: 2, w: 1, h: 1, speciesIds: ['spark-02'], description: 'Tormentas eléctricas espaciales.' },
  { id: 'nucleo', name: 'Núcleo Estelar', type: 'spark', x: 5, y: 1, w: 1, h: 1, speciesIds: ['spark-03'], description: 'El corazón ardiente de una estrella.' },
  { id: 'observ', name: 'Observatorio Celeste', type: 'spark', x: 4, y: 1, w: 1, h: 1, speciesIds: ['spark-04'], description: 'Mapeando el universo entero.' },
  { id: 'nebulosa', name: 'Nebulosa Nova', type: 'spark', x: 3, y: 1, w: 1, h: 1, speciesIds: ['spark-05'], description: 'Restos de explosiones estelares.' },
  { id: 'sendero', name: 'Sendero de Cometa', type: 'spark', x: 2, y: 1, w: 1, h: 1, speciesIds: ['spark-06'], description: 'Un rastro luminoso entre mundos.' },
  { id: 'lunar', name: 'Santuario Lunar', type: 'spark', x: 2, y: 0, w: 1, h: 1, speciesIds: ['spark-07'], description: 'Sombras plateadas y secretos.' },
  { id: 'corona', name: 'Corona del Sol', type: 'spark', x: 4, y: 0, w: 1, h: 1, speciesIds: ['spark-08'], description: 'Energía pura y calor inmenso.' },
  { id: 'orbita', name: 'Órbita Final', type: 'spark', x: 5, y: 0, w: 1, h: 1, speciesIds: ['spark-09'], description: 'El borde solitario del cosmos.' },
];

const COLS = 8;
const ROWS = 7;

const TYPE_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  seed: { bg: '#1a3a1a', border: '#4CAF50', text: '#4CAF50' },
  drop: { bg: '#0a1628', border: '#2196F3', text: '#2196F3' },
  spark: { bg: '#0a0a1f', border: '#FFC107', text: '#FFC107' },
  nexo: { bg: '#2a2020', border: '#aaa', text: '#fff' },
};

const REALM_LABELS: Record<string, string> = {
  seed: 'Bosque Eterno',
  drop: 'Océano Profundo',
  spark: 'Cosmos Infinito',
};

export default function WorldMap({ onClose }: WorldMapProps) {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const speciesMap = new Map(SPECIES_LIST.map((s) => [s.id, s]));

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
        <h1 style={{ fontSize: '0.75rem', margin: 0, color: '#fff' }}>Mapa del Mundo</h1>
        <button
          type="button"
          className="nes-btn is-error"
          style={{ fontSize: '0.55rem', padding: '0.25rem 0.5rem' }}
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem 0.5rem' }}>
        {/* Legend */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          {(['seed', 'drop', 'spark'] as const).map((type) => (
            <div
              key={type}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: TYPE_COLORS[type].border,
                }}
              />
              <span style={{ fontSize: '0.3rem', color: TYPE_COLORS[type].text }}>
                {REALM_LABELS[type]}
              </span>
            </div>
          ))}
        </div>

        {/* Grid map */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            gap: 3,
            aspectRatio: `${COLS}/${ROWS}`,
            maxHeight: '70vh',
          }}
        >
          {Array.from({ length: ROWS }, (_, row) =>
            Array.from({ length: COLS }, (_, col) => {
              const zone = ZONES.find(
                (z) => col >= z.x && col < z.x + z.w && row >= z.y && row < z.y + z.h,
              );

              if (!zone) {
                return (
                  <div
                    key={`${row}-${col}`}
                    style={{ backgroundColor: '#0a0a0a', borderRadius: 4 }}
                  />
                );
              }

              // Only render content on the zone's top-left cell
              const isOrigin = col === zone.x && row === zone.y;
              if (!isOrigin && (zone.w > 1 || zone.h > 1)) return null;

              const colors = TYPE_COLORS[zone.type];
              const isSelected = selectedZone?.id === zone.id;
              const zoneSpecies = zone.speciesIds
                .map((id) => speciesMap.get(id))
                .filter(Boolean) as RegenmonSpecies[];

              return (
                <div
                  key={`${row}-${col}`}
                  onClick={() => setSelectedZone(isSelected ? null : zone)}
                  style={{
                    backgroundColor: colors.bg,
                    border: `2px solid ${isSelected ? colors.border : colors.border + '44'}`,
                    borderRadius: 6,
                    padding: '0.25rem',
                    cursor: 'pointer',
                    gridColumn: zone.w > 1 ? `${col + 1} / span ${zone.w}` : undefined,
                    gridRow: zone.h > 1 ? `${row + 1} / span ${zone.h}` : undefined,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.15rem',
                    transition: 'border-color 0.2s, transform 0.15s',
                    transform: isSelected ? 'scale(1.03)' : undefined,
                    boxShadow: isSelected ? `0 0 12px ${colors.border}44` : undefined,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Zone species characters */}
                  <div style={{ display: 'flex', gap: '0.1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {zoneSpecies.map((s) => (
                      <RegenmonCharacter key={s.id} species={s} size="sm" animate={isSelected} />
                    ))}
                  </div>

                  {/* Zone name */}
                  <div
                    style={{
                      fontSize: '0.22rem',
                      color: colors.text,
                      textAlign: 'center',
                      lineHeight: 1.4,
                      opacity: 0.8,
                    }}
                  >
                    {zone.name}
                  </div>

                  {/* Nexo special label */}
                  {zone.type === 'nexo' && (
                    <div
                      style={{
                        fontSize: '0.2rem',
                        color: '#888',
                        textAlign: 'center',
                      }}
                    >
                      Centro del Mundo
                    </div>
                  )}
                </div>
              );
            }),
          )}
        </div>

        {/* Zone detail panel */}
        {selectedZone && (
          <div
            style={{
              marginTop: '1rem',
              backgroundColor: '#1a1a1a',
              border: `2px solid ${TYPE_COLORS[selectedZone.type].border}44`,
              borderRadius: 8,
              padding: '0.75rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '0.5rem',
                  color: TYPE_COLORS[selectedZone.type].text,
                  margin: 0,
                }}
              >
                {selectedZone.name}
              </h3>
              {selectedZone.type !== 'nexo' && (
                <span
                  style={{
                    fontSize: '0.3rem',
                    color: TYPE_COLORS[selectedZone.type].text,
                    backgroundColor: `${TYPE_COLORS[selectedZone.type].border}22`,
                    padding: '0.1rem 0.3rem',
                    borderRadius: 4,
                  }}
                >
                  {TYPE_CONFIG[selectedZone.type as RegenmonType]?.label ?? ''}
                </span>
              )}
            </div>
            <p style={{ fontSize: '0.35rem', color: '#aaa', lineHeight: 1.8, margin: '0 0 0.5rem' }}>
              {selectedZone.description}
            </p>

            {/* Species in this zone */}
            {selectedZone.speciesIds.length > 0 && (
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {selectedZone.speciesIds.map((id) => {
                  const s = speciesMap.get(id);
                  if (!s) return null;
                  const cfg = TYPE_CONFIG[s.type];
                  return (
                    <div
                      key={id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#222',
                        padding: '0.3rem 0.5rem',
                        borderRadius: 6,
                        border: `1px solid ${cfg.color}33`,
                      }}
                    >
                      <RegenmonCharacter species={s} size="sm" animate />
                      <div>
                        <div style={{ fontSize: '0.35rem', color: '#ddd' }}>
                          {s.emoji} {s.speciesName}
                        </div>
                        <div style={{ fontSize: '0.25rem', color: cfg.color, marginTop: '0.1rem' }}>
                          Guardián
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

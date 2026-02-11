import { useState } from 'react';
import type { RegenmonType, RegenmonSpecies } from '../types';
import { SPECIES_LIST, TYPE_CONFIG } from '../constants';
import RegenmonCharacter from './RegenmonCharacter';

interface WorldMapProps {
  onClose: () => void;
}

interface MapZone {
  id: string;
  name: string;
  type: RegenmonType | 'nexo';
  cx: number; // center x (0-100 viewport units)
  cy: number; // center y (0-100 viewport units)
  speciesIds: string[];
  description: string;
  isDungeon?: boolean;
}

interface Connection {
  from: string;
  to: string;
  secret?: boolean;
  label?: string;
}

// ─── ZONES positioned in trisquel layout ───
// Nexo at center (~50, 45), Cosmos north, Bosque southwest, Océano southeast
const ZONES: MapZone[] = [
  // EL NEXO (center)
  { id: 'nexo', name: 'El Nexo', type: 'nexo', cx: 50, cy: 44, speciesIds: [], description: 'Las ruinas de El Origen. Tres caminos parten hacia los reinos. El Monumento aguarda 27 guardianes.' },

  // COSMOS INFINITO (north arm, ascending)
  { id: 'chispa', name: 'Chispa Inicial', type: 'spark', cx: 50, cy: 34, speciesIds: ['spark-01'], description: 'El punto de la primera ignición. Gravedad reducida.' },
  { id: 'tormentas', name: 'Campo de Tormentas', type: 'spark', cx: 58, cy: 28, speciesIds: ['spark-02'], description: 'Tormentas eléctricas en el vacío. Campos electromagnéticos.' },
  { id: 'observ', name: 'Observatorio Celeste', type: 'spark', cx: 42, cy: 24, speciesIds: ['spark-04'], description: 'Estrella mapea el universo desde su posición fija.' },
  { id: 'nebulosa', name: 'Nebulosa Nova', type: 'spark', cx: 35, cy: 18, speciesIds: ['spark-05'], description: 'Restos de explosiones estelares. Gravedad cero.' },
  { id: 'sendero', name: 'Sendero de Cometa', type: 'spark', cx: 57, cy: 18, speciesIds: ['spark-06'], description: 'Rastro luminoso que conecta los tres reinos.' },
  { id: 'nucleo', name: 'Núcleo Estelar', type: 'spark', cx: 64, cy: 14, speciesIds: ['spark-03'], description: 'El corazón ardiente. Gravedad 200%.' },
  { id: 'lunar', name: 'Santuario Lunar', type: 'spark', cx: 35, cy: 10, speciesIds: ['spark-07'], description: 'Sombras sólidas como plataformas. Solo de noche.' },
  { id: 'corona', name: 'Corona del Sol', type: 'spark', cx: 54, cy: 6, speciesIds: ['spark-08'], description: 'La zona más energética. Calor inmenso.' },
  { id: 'orbita', name: 'Órbita Final', type: 'spark', cx: 42, cy: 3, speciesIds: ['spark-09'], description: 'El borde solitario del cosmos. Un mundo interior.' },
  { id: 'forja', name: 'La Forja de Estrellas', type: 'spark', cx: 70, cy: 10, speciesIds: [], description: 'Calabozo de 5 pisos. Boss: El Forjador Oscuro.', isDungeon: true },

  // BOSQUE ETERNO (southwest arm)
  { id: 'claro', name: 'Claro del Amanecer', type: 'seed', cx: 38, cy: 52, speciesIds: ['seed-01'], description: 'Donde Brote emergió. Entrada al Bosque Eterno.' },
  { id: 'pradera', name: 'Pradera Salvaje', type: 'seed', cx: 30, cy: 58, speciesIds: ['seed-02', 'seed-03'], description: 'Hierba y Trébol vagan por estos prados verdes.' },
  { id: 'solar', name: 'Jardín Solar', type: 'seed', cx: 22, cy: 52, speciesIds: ['seed-04'], description: 'Campos de girasoles que siguen la luz.' },
  { id: 'espinas', name: 'Desierto de Espinas', type: 'seed', cx: 14, cy: 56, speciesIds: ['seed-05'], description: 'La frontera solitaria. Laberintos de púas.' },
  { id: 'gruta', name: 'Gruta Micélica', type: 'seed', cx: 22, cy: 66, speciesIds: ['seed-06'], description: 'Cuevas bioluminiscentes bajo las raíces.' },
  { id: 'arboleda', name: 'Arboleda Ancestral', type: 'seed', cx: 36, cy: 62, speciesIds: ['seed-07'], description: 'Árboles milenarios con anillos del tiempo.' },
  { id: 'canav', name: 'Cañaveral del Cielo', type: 'seed', cx: 30, cy: 72, speciesIds: ['seed-08'], description: 'Bambúes que alcanzan las nubes.' },
  { id: 'eden', name: 'Jardín del Edén', type: 'seed', cx: 18, cy: 74, speciesIds: ['seed-09'], description: 'El lugar más bello del Bosque Eterno.' },
  { id: 'corazon', name: 'El Corazón del Bosque', type: 'seed', cx: 10, cy: 70, speciesIds: [], description: 'Calabozo de 3 pisos. Boss: La Semilla Rota.', isDungeon: true },

  // OCÉANO PROFUNDO (southeast arm)
  { id: 'manantial', name: 'Manantial Primigenio', type: 'drop', cx: 62, cy: 52, speciesIds: ['drop-01'], description: 'La fuente de agua más pura del océano.' },
  { id: 'rompiente', name: 'Rompiente Eterna', type: 'drop', cx: 72, cy: 56, speciesIds: ['drop-02'], description: 'Olas que nunca dejan de romper.' },
  { id: 'hielo', name: 'Caverna de Hielo', type: 'drop', cx: 78, cy: 52, speciesIds: ['drop-03'], description: 'Profundidades congeladas en cristal eterno.' },
  { id: 'bahia', name: 'Bahía del Silencio', type: 'drop', cx: 82, cy: 60, speciesIds: ['drop-04'], description: 'Ecos que cuentan historias del pasado.' },
  { id: 'coralz', name: 'Ciudad Coral', type: 'drop', cx: 70, cy: 64, speciesIds: ['drop-05'], description: 'Metrópolis submarina de arrecifes vivientes.' },
  { id: 'abismo', name: 'Abismo Luminoso', type: 'drop', cx: 64, cy: 60, speciesIds: ['drop-06'], description: 'Oscuridad total con bioluminiscencia.' },
  { id: 'corriente', name: 'Corriente Fronteriza', type: 'drop', cx: 78, cy: 70, speciesIds: ['drop-07'], description: 'Patrullas en corrientes veloces.' },
  { id: 'burbujas', name: 'Mar de Burbujas', type: 'drop', cx: 68, cy: 74, speciesIds: ['drop-08'], description: 'Burbujas irrompibles por doquier.' },
  { id: 'cumulo', name: 'Cúmulo Lluvioso', type: 'drop', cx: 84, cy: 74, speciesIds: ['drop-09'], description: 'Donde nace la lluvia, entre cielo y mar.' },
  { id: 'templo', name: 'El Templo de las Mareas', type: 'drop', cx: 90, cy: 66, speciesIds: [], description: 'Calabozo de 3 pisos. Boss: El Gran Maelstrom.', isDungeon: true },
];

// ─── CONNECTIONS between zones ───
const CONNECTIONS: Connection[] = [
  // Nexo → realm entries
  { from: 'nexo', to: 'chispa' },
  { from: 'nexo', to: 'claro' },
  { from: 'nexo', to: 'manantial' },

  // Cosmos Infinito
  { from: 'chispa', to: 'tormentas' },
  { from: 'chispa', to: 'observ' },
  { from: 'observ', to: 'nebulosa' },
  { from: 'tormentas', to: 'sendero' },
  { from: 'sendero', to: 'nucleo' },
  { from: 'nebulosa', to: 'lunar' },
  { from: 'nucleo', to: 'corona' },
  { from: 'nucleo', to: 'forja' },
  { from: 'lunar', to: 'orbita' },
  { from: 'corona', to: 'orbita' },

  // Bosque Eterno
  { from: 'claro', to: 'pradera' },
  { from: 'claro', to: 'solar' },
  { from: 'claro', to: 'arboleda' },
  { from: 'solar', to: 'espinas' },
  { from: 'pradera', to: 'gruta' },
  { from: 'pradera', to: 'arboleda' },
  { from: 'arboleda', to: 'canav' },
  { from: 'gruta', to: 'canav' },
  { from: 'gruta', to: 'corazon' },
  { from: 'canav', to: 'eden' },
  { from: 'eden', to: 'corazon' },

  // Océano Profundo
  { from: 'manantial', to: 'abismo' },
  { from: 'manantial', to: 'rompiente' },
  { from: 'rompiente', to: 'hielo' },
  { from: 'rompiente', to: 'bahia' },
  { from: 'abismo', to: 'coralz' },
  { from: 'coralz', to: 'corriente' },
  { from: 'coralz', to: 'burbujas' },
  { from: 'bahia', to: 'corriente' },
  { from: 'burbujas', to: 'cumulo' },
  { from: 'corriente', to: 'cumulo' },
  { from: 'abismo', to: 'templo' },
  { from: 'hielo', to: 'templo' },

  // Secret inter-realm passages
  { from: 'espinas', to: 'hielo', secret: true, label: 'La Grieta de Espino' },
  { from: 'abismo', to: 'sendero', secret: true, label: 'La Columna Ascendente' },
  { from: 'lunar', to: 'gruta', secret: true, label: 'Túnel de la Nube Oscura' },
];

const COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  seed: { bg: '#1a3a1a', border: '#4CAF50', text: '#4CAF50', glow: 'rgba(76,175,80,0.3)' },
  drop: { bg: '#0a1628', border: '#2196F3', text: '#2196F3', glow: 'rgba(33,150,243,0.3)' },
  spark: { bg: '#12081f', border: '#FFC107', text: '#FFC107', glow: 'rgba(255,193,7,0.3)' },
  nexo: { bg: '#1a1515', border: '#aaa', text: '#fff', glow: 'rgba(255,255,255,0.15)' },
};

const REALM_LABELS: Record<string, { name: string; color: string }> = {
  seed: { name: 'Bosque Eterno', color: '#4CAF50' },
  drop: { name: 'Océano Profundo', color: '#2196F3' },
  spark: { name: 'Cosmos Infinito', color: '#FFC107' },
};

export default function WorldMap({ onClose }: WorldMapProps) {
  const [selectedZone, setSelectedZone] = useState<MapZone | null>(null);
  const speciesMap = new Map(SPECIES_LIST.map((s) => [s.id, s]));
  const zoneMap = new Map(ZONES.map((z) => [z.id, z]));

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

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        {Object.entries(REALM_LABELS).map(([key, { name, color }]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color }} />
            <span style={{ fontSize: '0.28rem', color }}>{name}</span>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: '#666', border: '1px dashed #f44' }} />
          <span style={{ fontSize: '0.28rem', color: '#f44' }}>Pasaje Secreto</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.35rem' }}>{'⚔️'}</span>
          <span style={{ fontSize: '0.28rem', color: '#f88' }}>Calabozo</span>
        </div>
      </div>

      {/* Map canvas */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
          aspectRatio: '1 / 0.85',
          overflow: 'hidden',
        }}
      >
        {/* SVG connections layer */}
        <svg
          viewBox="0 0 100 85"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          {CONNECTIONS.map((conn) => {
            const from = zoneMap.get(conn.from);
            const to = zoneMap.get(conn.to);
            if (!from || !to) return null;
            const key = `${conn.from}-${conn.to}`;
            return (
              <line
                key={key}
                x1={from.cx}
                y1={from.cy}
                x2={to.cx}
                y2={to.cy}
                stroke={conn.secret ? '#f44336' : '#333'}
                strokeWidth={conn.secret ? 0.4 : 0.25}
                strokeDasharray={conn.secret ? '1 0.5' : undefined}
                opacity={conn.secret ? 0.6 : 0.5}
              />
            );
          })}
        </svg>

        {/* Realm region labels */}
        <div
          style={{
            position: 'absolute',
            top: '2%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.35rem',
            color: '#FFC10744',
            letterSpacing: 2,
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}
        >
          Cosmos Infinito
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '12%',
            fontSize: '0.35rem',
            color: '#4CAF5044',
            letterSpacing: 2,
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}
        >
          Bosque Eterno
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            right: '4%',
            fontSize: '0.35rem',
            color: '#2196F344',
            letterSpacing: 2,
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}
        >
          Océano Profundo
        </div>

        {/* Zone nodes */}
        {ZONES.map((zone) => {
          const colors = COLORS[zone.type];
          const isSelected = selectedZone?.id === zone.id;
          const isNexo = zone.type === 'nexo';
          const zoneSpecies = zone.speciesIds
            .map((id) => speciesMap.get(id))
            .filter(Boolean) as RegenmonSpecies[];
          const size = isNexo ? 5.5 : zone.isDungeon ? 3.5 : 4;

          return (
            <div
              key={zone.id}
              onClick={() => setSelectedZone(isSelected ? null : zone)}
              style={{
                position: 'absolute',
                left: `${zone.cx}%`,
                top: `${zone.cy}%`,
                transform: 'translate(-50%, -50%)',
                width: `${size}%`,
                minWidth: isNexo ? 56 : zone.isDungeon ? 36 : 42,
                aspectRatio: '1',
                backgroundColor: colors.bg,
                border: `2px solid ${isSelected ? colors.border : colors.border + '66'}`,
                borderRadius: isNexo ? '50%' : zone.isDungeon ? 4 : 6,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                transition: 'all 0.2s',
                boxShadow: isSelected ? `0 0 16px ${colors.glow}` : `0 0 6px ${colors.glow}`,
                zIndex: isSelected ? 5 : 1,
                overflow: 'hidden',
                borderStyle: zone.isDungeon ? 'dashed' : 'solid',
              }}
            >
              {/* Species character or dungeon icon */}
              {zone.isDungeon ? (
                <span style={{ fontSize: '0.5rem' }}>{'⚔️'}</span>
              ) : zoneSpecies.length > 0 ? (
                <div style={{ display: 'flex', gap: 0, transform: zoneSpecies.length > 1 ? 'scale(0.8)' : undefined }}>
                  {zoneSpecies.slice(0, 2).map((s) => (
                    <RegenmonCharacter key={s.id} species={s} size="sm" animate={isSelected} />
                  ))}
                </div>
              ) : isNexo ? (
                <span style={{ fontSize: '0.5rem' }}>{'🌀'}</span>
              ) : null}

              {/* Zone name (tiny) */}
              <div
                style={{
                  fontSize: '0.18rem',
                  color: colors.text,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  padding: '0 2px',
                  opacity: 0.9,
                  maxWidth: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {zone.isDungeon ? '⚔' : ''} {zone.name.split(' ').slice(0, 2).join(' ')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      {selectedZone && (
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '0 1rem 2rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#1a1a1a',
              border: `2px solid ${COLORS[selectedZone.type].border}44`,
              borderRadius: 8,
              padding: '0.75rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.4rem',
              }}
            >
              <h3 style={{ fontSize: '0.45rem', color: COLORS[selectedZone.type].text, margin: 0 }}>
                {selectedZone.isDungeon ? '⚔️ ' : ''}{selectedZone.name}
              </h3>
              {selectedZone.type !== 'nexo' && (
                <span
                  style={{
                    fontSize: '0.28rem',
                    color: COLORS[selectedZone.type].text,
                    backgroundColor: `${COLORS[selectedZone.type].border}22`,
                    padding: '0.1rem 0.25rem',
                    borderRadius: 4,
                  }}
                >
                  {selectedZone.type === 'seed' ? 'Semilla' : selectedZone.type === 'drop' ? 'Gota' : 'Chispa'}
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.35rem', color: '#aaa', lineHeight: 1.8, margin: '0 0 0.5rem' }}>
              {selectedZone.description}
            </p>

            {/* Connected zones */}
            <div style={{ marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.28rem', color: '#666' }}>Conexiones: </span>
              {CONNECTIONS.filter((c) => c.from === selectedZone.id || c.to === selectedZone.id).map((conn) => {
                const otherId = conn.from === selectedZone.id ? conn.to : conn.from;
                const other = zoneMap.get(otherId);
                if (!other) return null;
                return (
                  <span
                    key={otherId}
                    onClick={(e) => { e.stopPropagation(); setSelectedZone(other); }}
                    style={{
                      fontSize: '0.25rem',
                      color: conn.secret ? '#f44' : COLORS[other.type].text,
                      backgroundColor: conn.secret ? '#f4433622' : `${COLORS[other.type].border}15`,
                      padding: '0.08rem 0.2rem',
                      borderRadius: 3,
                      marginRight: '0.2rem',
                      marginBottom: '0.15rem',
                      display: 'inline-block',
                      cursor: 'pointer',
                      borderBottom: conn.secret ? '1px dashed #f44' : undefined,
                    }}
                  >
                    {conn.secret ? '🔒 ' : ''}{other.name}
                  </span>
                );
              })}
            </div>

            {/* Species in zone */}
            {selectedZone.speciesIds.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
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
                        gap: '0.35rem',
                        backgroundColor: '#222',
                        padding: '0.25rem 0.4rem',
                        borderRadius: 6,
                        border: `1px solid ${cfg.color}33`,
                      }}
                    >
                      <RegenmonCharacter species={s} size="sm" animate />
                      <div>
                        <div style={{ fontSize: '0.35rem', color: '#ddd' }}>
                          {s.emoji} {s.speciesName}
                        </div>
                        <div style={{ fontSize: '0.22rem', color: cfg.color, marginTop: '0.05rem' }}>
                          Guardián — {cfg.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Secret passage label */}
            {CONNECTIONS.filter((c) => c.secret && (c.from === selectedZone.id || c.to === selectedZone.id)).map((conn) => (
              <div
                key={conn.label}
                style={{
                  marginTop: '0.4rem',
                  fontSize: '0.28rem',
                  color: '#f44',
                  backgroundColor: '#f4433615',
                  padding: '0.2rem 0.4rem',
                  borderRadius: 4,
                  border: '1px dashed #f4433644',
                }}
              >
                🔒 Pasaje secreto: {conn.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

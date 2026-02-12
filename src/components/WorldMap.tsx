import { useState } from 'react';
import type { RegenmonSpecies } from '../types';
import { SPECIES_LIST, TYPE_CONFIG } from '../constants';
import { ZONES, CONNECTIONS, DEPT_COLORS, type MapZone } from '../worldData';
import RegenmonCharacter from './RegenmonCharacter';

const COLORS = DEPT_COLORS;

const DEPT_LABELS: Record<string, { name: string; color: string }> = {
  producto:  { name: 'Producto', color: '#FF9800' },
  codigo:    { name: 'Código', color: '#4CAF50' },
  diseno:    { name: 'Diseño', color: '#E91E63' },
  marketing: { name: 'Marketing', color: '#2196F3' },
  infra:     { name: 'Infra', color: '#FFC107' },
};

interface WorldMapProps {
  onClose: () => void;
}

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
        {Object.entries(DEPT_LABELS).map(([key, { name, color }]) => (
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

        {/* Department region labels */}
        <div style={{ position: 'absolute', top: '14%', right: '10%', fontSize: '0.35rem', color: '#FF980044', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none' }}>
          Producto
        </div>
        <div style={{ position: 'absolute', top: '50%', right: '2%', fontSize: '0.35rem', color: '#4CAF5044', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none' }}>
          Código
        </div>
        <div style={{ position: 'absolute', bottom: '4%', right: '25%', fontSize: '0.35rem', color: '#E91E6344', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none' }}>
          Diseño
        </div>
        <div style={{ position: 'absolute', bottom: '10%', left: '2%', fontSize: '0.35rem', color: '#2196F344', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none' }}>
          Marketing
        </div>
        <div style={{ position: 'absolute', top: '12%', left: '4%', fontSize: '0.35rem', color: '#FFC10744', letterSpacing: 2, textTransform: 'uppercase', pointerEvents: 'none' }}>
          Infra
        </div>

        {/* Zone nodes */}
        {ZONES.map((zone) => {
          const colors = COLORS[zone.type];
          const isSelected = selectedZone?.id === zone.id;
          const isHQ = zone.type === 'hq';
          const zoneSpecies = zone.speciesIds
            .map((id) => speciesMap.get(id))
            .filter(Boolean) as RegenmonSpecies[];
          const size = isHQ ? 5.5 : zone.isDungeon ? 3.5 : 4;

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
                minWidth: isHQ ? 56 : zone.isDungeon ? 36 : 42,
                aspectRatio: '1',
                backgroundColor: colors.bg,
                border: `2px solid ${isSelected ? colors.border : colors.border + '66'}`,
                borderRadius: isHQ ? '50%' : zone.isDungeon ? 4 : 6,
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
              ) : isHQ ? (
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
              {selectedZone.type !== 'hq' && (
                <span
                  style={{
                    fontSize: '0.28rem',
                    color: COLORS[selectedZone.type].text,
                    backgroundColor: `${COLORS[selectedZone.type].border}22`,
                    padding: '0.1rem 0.25rem',
                    borderRadius: 4,
                  }}
                >
                  {DEPT_LABELS[selectedZone.type]?.name ?? selectedZone.type}
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

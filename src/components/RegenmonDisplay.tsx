import type { Regenmon } from '../types';
import { TYPE_CONFIG, STATS_CONFIG, SPECIES_LIST } from '../constants';
import StatBar from './StatBar';
import RegenmonCharacter from './RegenmonCharacter';

interface RegenmonDisplayProps {
  regenmon: Regenmon;
  onReset: () => void;
  onDashboard: () => void;
  musicToggle: () => void;
  isMusicPlaying: boolean;
}

const statKeys = ['happiness', 'energy', 'hunger'] as const;

export default function RegenmonDisplay({ regenmon, onReset, onDashboard, musicToggle, isMusicPlaying }: RegenmonDisplayProps) {
  const typeConfig = TYPE_CONFIG[regenmon.type];
  const species = SPECIES_LIST.find((s) => s.id === regenmon.speciesId);
  const speciesName = species?.speciesName ?? 'Desconocido';

  return (
    <div style={{ position: 'relative', zIndex: 2 }}>

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h1 style={{ fontSize: '1.2rem', margin: 0, color: '#fff', textShadow: '2px 2px 0 #000' }}>
          Regenmon
        </h1>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            className="nes-btn"
            style={{ fontSize: '0.6rem', padding: '0.25rem 0.5rem' }}
            onClick={onDashboard}
          >
            Catálogo
          </button>
          <button
            type="button"
            className="nes-btn"
            style={{ fontSize: '0.6rem', padding: '0.25rem 0.5rem' }}
            onClick={musicToggle}
          >
            {isMusicPlaying ? '🔊' : '🔇'}
          </button>
          <button
            type="button"
            className="nes-btn is-error"
            style={{ fontSize: '0.6rem', padding: '0.25rem 0.5rem' }}
            onClick={onReset}
          >
            Reiniciar
          </button>
        </div>
      </div>

      {/* Main display */}
      <div
        className="nes-container is-rounded"
        style={{ backgroundColor: `${typeConfig.bg}dd`, marginBottom: '1rem' }}
      >
        <p style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '0.25rem' }}>
          {regenmon.name}
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.6rem', color: '#666', marginBottom: '0.5rem' }}>
          {speciesName} — {typeConfig.label}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
          {species && (
            <RegenmonCharacter
              species={species}
              size="lg"
              stats={{ happiness: regenmon.happiness, energy: regenmon.energy, hunger: regenmon.hunger }}
            />
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="nes-container is-rounded" style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.9)' }}>
        {statKeys.map((key) => {
          const config = STATS_CONFIG[key];
          return (
            <StatBar
              key={key}
              label={config.label}
              emoji={config.emoji}
              value={regenmon[key]}
              color={config.color}
            />
          );
        })}
      </div>
    </div>
  );
}

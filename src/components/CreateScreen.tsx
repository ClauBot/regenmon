import { useState } from 'react';
import { NAME_MIN, NAME_MAX, TYPE_CONFIG } from '../constants';
import type { RegenmonType } from '../types';

interface CreateScreenProps {
  onCreate: (name: string, type: RegenmonType) => void;
  onDashboard: () => void;
}

const TYPES: RegenmonType[] = ['seed', 'drop', 'spark'];

export default function CreateScreen({ onCreate, onDashboard }: CreateScreenProps) {
  const [name, setName] = useState('');
  const [selectedType, setSelectedType] = useState<RegenmonType | null>(null);

  const nameValid = name.trim().length >= NAME_MIN;
  const canCreate = nameValid && selectedType !== null;

  const handleSubmit = () => {
    if (canCreate && selectedType) {
      onCreate(name.trim(), selectedType);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '1.5rem' }}>
      <h2 className="nes-text is-primary" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Crea tu Regenmon
      </h2>

      {/* Name input */}
      <div className="nes-container" style={{ marginBottom: '1.5rem', backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <label htmlFor="regenmon-name" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Nombre
        </label>
        <input
          id="regenmon-name"
          type="text"
          className="nes-input"
          value={name}
          maxLength={NAME_MAX}
          onChange={(e) => setName(e.target.value)}
        />

        <p
          style={{
            fontSize: '0.65rem',
            color: '#888',
            textAlign: 'right',
            margin: '0.25rem 0 0',
          }}
        >
          {name.length}/{NAME_MAX}
        </p>

        {name.length > 0 && name.length < NAME_MIN && (
          <p className="nes-text is-error" style={{ fontSize: '0.7rem', marginTop: '0.25rem' }}>
            El nombre debe tener al menos {NAME_MIN} caracteres
          </p>
        )}

        {name.length >= NAME_MAX && (
          <p className="nes-text is-warning" style={{ fontSize: '0.7rem', marginTop: '0.25rem' }}>
            Nombre al máximo de caracteres
          </p>
        )}
      </div>

      {/* Type selector */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#ccc', marginBottom: '0.75rem' }}>
          Elige un tipo
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          {TYPES.map((type) => {
            const config = TYPE_CONFIG[type];
            const isSelected = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                style={{
                  flex: '1 1 0',
                  maxWidth: 140,
                  padding: '0.75rem 0.5rem',
                  backgroundColor: isSelected ? config.bg : '#222',
                  border: `3px solid ${isSelected ? config.color : '#444'}`,
                  borderRadius: 8,
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isSelected ? `0 0 12px ${config.color}44` : 'none',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>
                  {config.emoji}
                </div>
                <div
                  style={{
                    fontSize: '0.55rem',
                    fontFamily: '"Press Start 2P", cursive',
                    color: isSelected ? config.color : '#888',
                  }}
                >
                  {config.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Create button */}
      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          className={canCreate ? 'nes-btn is-primary' : 'nes-btn is-disabled'}
          disabled={!canCreate}
          onClick={handleSubmit}
        >
          ¡Eclosionar!
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button
          type="button"
          className="nes-btn"
          style={{ fontSize: '0.6rem' }}
          onClick={onDashboard}
        >
          Ver catálogo
        </button>
      </div>
    </div>
  );
}

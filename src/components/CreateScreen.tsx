import { useState } from 'react';
import { NAME_MIN, NAME_MAX } from '../constants';

interface CreateScreenProps {
  onCreate: (name: string) => void;
  onDashboard: () => void;
}

export default function CreateScreen({ onCreate, onDashboard }: CreateScreenProps) {
  const [name, setName] = useState('');

  const canCreate = name.trim().length >= NAME_MIN;

  const handleSubmit = () => {
    if (canCreate) {
      onCreate(name.trim());
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '1.5rem' }}>
      <h2 className="nes-text is-primary" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Crea tu Regenmon
      </h2>

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
            El nombre debe tener al menos 2 caracteres
          </p>
        )}

        {name.length >= NAME_MAX && (
          <p className="nes-text is-warning" style={{ fontSize: '0.7rem', marginTop: '0.25rem' }}>
            Nombre al máximo de caracteres
          </p>
        )}
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.65rem', color: '#ccc', marginBottom: '1.5rem' }}>
        Un Regenmon aleatorio eclosionará de tu huevo
      </p>

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

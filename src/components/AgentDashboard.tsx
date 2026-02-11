import { useState, useEffect } from 'react';
import type { RegenmonSpecies, RegenmonType } from '../types';
import { SPECIES_LIST, TYPE_CONFIG } from '../constants';
import RegenmonCharacter from './RegenmonCharacter';

interface AgentInfo {
  id: string;
  label: string;
  zone: string;
  task: string;
  species: RegenmonSpecies;
  realmType: RegenmonType;
  logs: string[];
  progress: number;
}

const AGENT_DEFS: Omit<AgentInfo, 'logs' | 'progress'>[] = [
  {
    id: 'a87fff4',
    label: 'Arquitecto del Nexo',
    zone: 'El Nexo Central',
    task: 'Diseñando la estructura del Overworld...',
    species: SPECIES_LIST.find((s) => s.id === 'seed-03')!,
    realmType: 'seed',
  },
  {
    id: 'a6e15cf',
    label: 'Cartógrafa Estelar',
    zone: 'Observatorio Celeste',
    task: 'Estudiando patrones de mapas Zelda...',
    species: SPECIES_LIST.find((s) => s.id === 'spark-04')!,
    realmType: 'spark',
  },
  {
    id: 'a135363',
    label: 'Guardián del Bosque',
    zone: 'Arboleda Ancestral',
    task: 'Construyendo zonas del Bosque Eterno...',
    species: SPECIES_LIST.find((s) => s.id === 'seed-07')!,
    realmType: 'seed',
  },
  {
    id: 'a82a650',
    label: 'Arquitecto Coralino',
    zone: 'Ciudad Coral',
    task: 'Edificando el Océano Profundo...',
    species: SPECIES_LIST.find((s) => s.id === 'drop-05')!,
    realmType: 'drop',
  },
  {
    id: 'a3c4442',
    label: 'Fuerza Nova',
    zone: 'Nebulosa Nova',
    task: 'Mapeando el Cosmos Infinito...',
    species: SPECIES_LIST.find((s) => s.id === 'spark-05')!,
    realmType: 'spark',
  },
];

const ZONE_ACTIONS: Record<string, string[]> = {
  'El Nexo Central': [
    'Trazando caminos entre reinos...',
    'Colocando el Monumento de la Profecía...',
    'Conectando portales dimensionales...',
    'Diseñando la plaza central...',
    'Grabando runas ancestrales...',
  ],
  'Observatorio Celeste': [
    'Catalogando constelaciones...',
    'Dibujando el mapa del universo...',
    'Analizando grids de pantalla...',
    'Calculando transiciones entre zonas...',
    'Estudiando calabozos clásicos...',
  ],
  'Arboleda Ancestral': [
    'Plantando árboles milenarios...',
    'Excavando la Gruta Micélica...',
    'Sembrando el Jardín del Edén...',
    'Levantando el Cañaveral del Cielo...',
    'Trazando el Desierto de Espinas...',
  ],
  'Ciudad Coral': [
    'Construyendo arrecifes vivientes...',
    'Abriendo la Caverna de Hielo...',
    'Llenando el Mar de Burbujas...',
    'Canalizando corrientes fronterizas...',
    'Sumergiendo al Abismo Luminoso...',
  ],
  'Nebulosa Nova': [
    'Encendiendo estrellas nuevas...',
    'Forjando la Corona del Sol...',
    'Iluminando el Santuario Lunar...',
    'Trazando el Sendero de Cometa...',
    'Estabilizando la Órbita Final...',
  ],
};

interface AgentDashboardProps {
  onClose: () => void;
}

export default function AgentDashboard({ onClose }: AgentDashboardProps) {
  const [agents, setAgents] = useState<AgentInfo[]>(() =>
    AGENT_DEFS.map((def) => ({
      ...def,
      logs: [def.task],
      progress: 15 + Math.floor(Math.random() * 20),
    })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prev) =>
        prev.map((agent) => {
          const actions = ZONE_ACTIONS[agent.zone] ?? [agent.task];
          const newAction = actions[Math.floor(Math.random() * actions.length)];
          const newProgress = Math.min(agent.progress + Math.floor(Math.random() * 8) + 1, 95);
          return {
            ...agent,
            logs: [...agent.logs.slice(-3), newAction],
            progress: newProgress,
          };
        }),
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: '#030306',
        overflowY: 'auto',
        fontFamily: '"Press Start 2P", cursive',
      }}
    >
      <style>{`
        @keyframes ag-pulse { 0%,100%{opacity:1}50%{opacity:.5} }
        @keyframes ag-walk { 0%,100%{transform:translateX(0)}50%{transform:translateX(8px)} }
        @keyframes ag-float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)} }
        @keyframes ag-scan { 0%{left:-10%}100%{left:110%} }
        @keyframes ag-spark { 0%{opacity:0;transform:scale(0)}50%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0) translateY(-20px)} }
      `}</style>

      {/* Header */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'linear-gradient(to bottom, #030306 60%, transparent)',
          padding: '0.75rem 1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <h1 style={{ fontSize: '0.7rem', margin: 0, color: '#FFC107' }}>
            Estado de los Agentes
          </h1>
          <p style={{ fontSize: '0.3rem', color: '#555', margin: '0.3rem 0 0' }}>
            Guardianes construyendo el mundo en tiempo real
          </p>
        </div>
        <button
          type="button"
          className="nes-btn"
          style={{ fontSize: '0.5rem', padding: '0.2rem 0.5rem' }}
          onClick={onClose}
        >
          Volver
        </button>
      </div>

      {/* Agent cards */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1rem 2rem' }}>
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}

        {/* Summary footer */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid #1a1a1a',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <StatBlock label="Agentes Activos" value="5" color="#FFC107" />
          <StatBlock label="Reinos" value="3" color="#4CAF50" />
          <StatBlock label="Guardianes" value="27" color="#2196F3" />
          <StatBlock
            label="Progreso Total"
            value={`${Math.round(agents.reduce((s, a) => s + a.progress, 0) / agents.length)}%`}
            color="#FF5722"
          />
        </div>
      </div>
    </div>
  );
}

function AgentCard({ agent }: { agent: AgentInfo }) {
  const config = TYPE_CONFIG[agent.realmType];

  return (
    <div
      style={{
        marginBottom: '1rem',
        borderRadius: '8px',
        overflow: 'hidden',
        border: `2px solid ${config.color}33`,
      }}
    >
      {/* World scene — character inside their realm */}
      <div
        style={{
          position: 'relative',
          height: 160,
          overflow: 'hidden',
        }}
      >
        {/* Inline world background */}
        <WorldSceneInline type={agent.realmType} />

        {/* Zone label */}
        <div
          style={{
            position: 'absolute',
            top: 8,
            left: 8,
            fontSize: '0.3rem',
            color: '#fff',
            textShadow: '1px 1px 0 #000',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '0.15rem 0.3rem',
            borderRadius: '3px',
          }}
        >
          {agent.zone}
        </div>

        {/* Status badge */}
        <div
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            fontSize: '0.25rem',
            color: '#FFC107',
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
            backgroundColor: 'rgba(0,0,0,0.6)',
            padding: '0.15rem 0.3rem',
            borderRadius: '3px',
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              backgroundColor: '#FFC107',
              animation: 'ag-pulse 1.5s ease-in-out infinite',
            }}
          />
          ACTIVO
        </div>

        {/* Character walking in the scene */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'ag-walk 4s ease-in-out infinite',
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.4))',
          }}
        >
          <div style={{ animation: 'ag-float 2.5s ease-in-out infinite' }}>
            <RegenmonCharacter species={agent.species} size="sm" animate />
          </div>
          {/* Work sparks around character */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${-5 + (i % 2) * 10}px`,
                left: `${-12 + i * 14}px`,
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: config.color,
                animation: `ag-spark ${1.2 + i * 0.3}s ease-in-out ${i * 0.4}s infinite`,
                pointerEvents: 'none',
              }}
            />
          ))}
        </div>

        {/* Scan line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: 1,
            height: '100%',
            background: `linear-gradient(to bottom, transparent, ${config.color}66, transparent)`,
            animation: 'ag-scan 4s linear infinite',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Info panel */}
      <div style={{ backgroundColor: '#0a0a10', padding: '0.6rem' }}>
        {/* Agent identity */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.4rem',
          }}
        >
          <div>
            <span style={{ fontSize: '0.4rem', color: '#fff', fontWeight: 'bold' }}>
              {agent.species.emoji} {agent.label}
            </span>
            <span
              style={{
                fontSize: '0.3rem',
                color: config.color,
                marginLeft: '0.4rem',
              }}
            >
              {agent.species.speciesName}
            </span>
          </div>
          <span
            style={{
              fontSize: '0.3rem',
              color: config.color,
              backgroundColor: `${config.color}15`,
              padding: '0.1rem 0.25rem',
              borderRadius: '3px',
            }}
          >
            {config.label}
          </span>
        </div>

        {/* Log terminal */}
        <div
          style={{
            backgroundColor: '#000',
            borderRadius: '4px',
            padding: '0.35rem 0.4rem',
            marginBottom: '0.4rem',
          }}
        >
          {agent.logs.map((log, i) => (
            <div
              key={`${i}-${log}`}
              style={{
                fontSize: '0.28rem',
                color: i === agent.logs.length - 1 ? config.color : '#444',
                lineHeight: 2,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <span style={{ color: i === agent.logs.length - 1 ? '#888' : '#333' }}>
                {'> '}
              </span>
              {log}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div
            style={{
              flex: 1,
              height: 6,
              backgroundColor: '#1a1a1a',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${agent.progress}%`,
                backgroundColor: config.color,
                borderRadius: '3px',
                transition: 'width 1.5s ease',
                boxShadow: `0 0 8px ${config.color}66`,
              }}
            />
          </div>
          <span style={{ fontSize: '0.3rem', color: config.color, minWidth: '2rem' }}>
            {agent.progress}%
          </span>
        </div>
      </div>
    </div>
  );
}

/** Compact inline world backgrounds for agent cards */
function WorldSceneInline({ type }: { type: RegenmonType }) {
  const base: React.CSSProperties = { position: 'absolute', inset: 0, overflow: 'hidden' };

  if (type === 'seed') {
    return (
      <div style={{ ...base, background: 'linear-gradient(to bottom, #1a3a1a, #2d5a1e)' }}>
        <style>{`
          @keyframes ag-leaf { 0%{transform:translateY(-20px) rotate(0);opacity:1} 100%{transform:translateY(180px) rotate(360deg);opacity:.5} }
        `}</style>
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${10 + i * 16}%`,
              top: -20,
              fontSize: 12,
              animation: `ag-leaf ${3.5 + i * 0.6}s linear ${i * 0.4}s infinite`,
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
            height: '18%',
            background: 'linear-gradient(to bottom, #3a5a2a, #4a3a2a)',
            borderTop: '2px solid #2a4a1a',
          }}
        />
        {/* Trees in background */}
        {[15, 40, 70, 90].map((x, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: '17%',
              left: `${x}%`,
              fontSize: 18 + i * 2,
              opacity: 0.3 + i * 0.1,
              pointerEvents: 'none',
            }}
          >
            🌲
          </div>
        ))}
      </div>
    );
  }

  if (type === 'drop') {
    return (
      <div style={{ ...base, background: 'linear-gradient(to bottom, #0a1628, #0d4a6a, #1a6b8a)' }}>
        <style>{`
          @keyframes ag-rain { 0%{transform:translateY(-10px);opacity:0} 10%{opacity:.5} 90%{opacity:.5} 100%{transform:translateY(180px);opacity:0} }
          @keyframes ag-bubble { 0%{transform:translateY(0) scale(1);opacity:.6} 100%{transform:translateY(-100px) scale(.5);opacity:0} }
          @keyframes ag-wave2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        `}</style>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${3 + i * 8}%`,
              top: 0,
              width: 2,
              height: `${10 + (i % 3) * 4}px`,
              background: 'rgba(255,255,255,0.25)',
              borderRadius: 1,
              animation: `ag-rain ${0.5 + (i % 4) * 0.15}s linear ${i * 0.08}s infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={`b${i}`}
            style={{
              position: 'absolute',
              bottom: '20%',
              left: `${20 + i * 20}%`,
              fontSize: 10,
              animation: `ag-bubble ${3 + i}s ease-out ${i * 0.8}s infinite`,
              pointerEvents: 'none',
            }}
          >
            🫧
          </div>
        ))}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-5%',
            right: '-5%',
            height: 25,
            background: 'rgba(15,60,90,0.7)',
            borderRadius: '50% 50% 0 0',
            animation: 'ag-wave2 3s ease-in-out infinite',
          }}
        />
      </div>
    );
  }

  // spark
  return (
    <div style={{ ...base, background: 'linear-gradient(to bottom, #08081a, #0f0a2a, #1a0a2e)' }}>
      <style>{`
        @keyframes ag-twinkle { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.15;transform:scale(.7)} }
        @keyframes ag-shoot { 0%{transform:translate(0,0);opacity:1} 100%{transform:translate(120px,80px);opacity:0} }
      `}</style>
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${(i * 29) % 95}%`,
            top: `${(i * 37) % 85}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            backgroundColor: i % 5 === 0 ? '#FFD700' : '#fff',
            borderRadius: '50%',
            animation: `ag-twinkle ${1.2 + (i % 4) * 0.4}s ease-in-out ${i * 0.2}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}
      {/* Shooting star */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: 3,
          height: 3,
          backgroundColor: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 4px #fff, -6px -3px 0 1px rgba(255,255,255,0.3), -12px -6px 0 0 rgba(255,255,255,0.1)',
          animation: 'ag-shoot 3s linear 2s infinite',
          pointerEvents: 'none',
        }}
      />
      {/* Nebula glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '60%',
          width: 80,
          height: 60,
          background: 'radial-gradient(ellipse, rgba(100,50,150,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function StatBlock({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '0.25rem' }}>
      <div style={{ fontSize: '0.6rem', color, fontWeight: 'bold' }}>{value}</div>
      <div style={{ fontSize: '0.25rem', color: '#555', marginTop: '0.15rem' }}>{label}</div>
    </div>
  );
}

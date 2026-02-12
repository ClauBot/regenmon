import type { AgentRole, TaskCategory, PersonalityStyle } from './agentTypes';

export interface AgentRoleConfig extends AgentRole {
  speciesId: string;
  personalityId: PersonalityStyle;
  homeZoneId: string;
}

// 27 agent roles — one per species
export const AGENT_ROLES: AgentRoleConfig[] = [
  // ═══ SEED (Bosque) — Constructores y Diseñadores ═══
  { speciesId: 'seed-01', agentName: 'Scout',    title: 'Explorador',       categories: ['map'],                   workSpeed: 1.0, personalityId: 'energetic',  homeZoneId: 'claro' },
  { speciesId: 'seed-02', agentName: 'Tejedor',  title: 'Integrador',       categories: ['integration'],           workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'pradera' },
  { speciesId: 'seed-03', agentName: 'Suerte',   title: 'QA Tester',        categories: ['mechanics'],             workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'pradera' },
  { speciesId: 'seed-04', agentName: 'Luminar',  title: 'UI/UX Designer',   categories: ['art'],                   workSpeed: 1.0, personalityId: 'poetic',     homeZoneId: 'solar' },
  { speciesId: 'seed-05', agentName: 'Defensa',  title: 'Seguridad',        categories: ['mechanics'],             workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'espinas' },
  { speciesId: 'seed-06', agentName: 'Micélio',  title: 'Data Flow',        categories: ['integration'],           workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'gruta' },
  { speciesId: 'seed-07', agentName: 'Arbor',    title: 'Arquitecto Senior', categories: ['map', 'mechanics'],     workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'nexo' },
  { speciesId: 'seed-08', agentName: 'Veloz',    title: 'Speed Coder',      categories: ['mechanics', 'map'],      workSpeed: 1.5, personalityId: 'energetic',  homeZoneId: 'canav' },
  { speciesId: 'seed-09', agentName: 'Artista',  title: 'Visual Polish',    categories: ['art'],                   workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'eden' },

  // ═══ DROP (Océano) — Flujo y Contenido ═══
  { speciesId: 'drop-01', agentName: 'Origen',   title: 'Docs/Specs',       categories: ['map'],                   workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'manantial' },
  { speciesId: 'drop-02', agentName: 'Impulso',  title: 'Feature Lead',     categories: ['mechanics'],             workSpeed: 1.2, personalityId: 'energetic',  homeZoneId: 'rompiente' },
  { speciesId: 'drop-03', agentName: 'Pureza',   title: 'Refactoring',      categories: ['mechanics'],             workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'hielo' },
  { speciesId: 'drop-04', agentName: 'Eco',      title: 'Audio Design',     categories: ['audio'],                 workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'bahia' },
  { speciesId: 'drop-05', agentName: 'Marina',   title: 'Project Manager',  categories: ['integration'],           workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'nexo' },
  { speciesId: 'drop-06', agentName: 'Brillo',   title: 'VFX Artist',       categories: ['art'],                   workSpeed: 1.0, personalityId: 'energetic',  homeZoneId: 'abismo' },
  { speciesId: 'drop-07', agentName: 'Guardia',  title: 'Code Review',      categories: ['mechanics'],             workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'corriente' },
  { speciesId: 'drop-08', agentName: 'Proto',    title: 'Prototyper',       categories: ['map', 'mechanics'],      workSpeed: 1.3, personalityId: 'casual',     homeZoneId: 'burbujas' },
  { speciesId: 'drop-09', agentName: 'Flujo',    title: 'CI/CD',            categories: ['integration'],           workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'cumulo' },

  // ═══ SPARK (Cosmos) — Innovación y Sistemas ═══
  { speciesId: 'spark-01', agentName: 'Ignición', title: 'Bootstrap',       categories: ['map'],                   workSpeed: 1.2, personalityId: 'energetic',  homeZoneId: 'chispa' },
  { speciesId: 'spark-02', agentName: 'Voltaje',  title: 'Performance',     categories: ['mechanics'],             workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'tormentas' },
  { speciesId: 'spark-03', agentName: 'Umbra',    title: 'Backend/Infra',   categories: ['mechanics', 'integration'], workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'nucleo' },
  { speciesId: 'spark-04', agentName: 'Guía',     title: 'Documentación',   categories: ['map'],                   workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'observ' },
  { speciesId: 'spark-05', agentName: 'Nova',     title: 'Feature Lead',    categories: ['mechanics'],             workSpeed: 1.2, personalityId: 'energetic',  homeZoneId: 'nebulosa' },
  { speciesId: 'spark-06', agentName: 'Viajero',  title: 'Cross-Team',      categories: ['integration'],           workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'nexo' },
  { speciesId: 'spark-07', agentName: 'Sombra',   title: 'Dark Path QA',    categories: ['mechanics'],             workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'lunar' },
  { speciesId: 'spark-08', agentName: 'Energía',  title: 'Build Systems',   categories: ['integration'],           workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'corona' },
  { speciesId: 'spark-09', agentName: 'Mundo',    title: 'Game Designer',   categories: ['map', 'art'],            workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'orbita' },
];

export const AGENT_ROLE_MAP = new Map(AGENT_ROLES.map((r) => [r.speciesId, r]));

// Starting roster — 8 agents covering all categories
export const STARTING_AGENT_IDS: string[] = [
  'seed-07', // Arbor — Arquitecto Senior (map, mechanics)
  'seed-04', // Luminar — UI/UX Designer (art)
  'seed-01', // Scout — Explorador (map)
  'drop-04', // Eco — Audio Design (audio)
  'drop-05', // Marina — Project Manager (integration)
  'spark-05', // Nova — Feature Lead (mechanics)
  'spark-06', // Viajero — Cross-Team (integration)
  'spark-07', // Sombra — Dark Path QA (mechanics)
];

export const STARTING_ROLES: AgentRoleConfig[] = AGENT_ROLES.filter((r) =>
  STARTING_AGENT_IDS.includes(r.speciesId),
);

// Work particle emojis by category
export const WORK_PARTICLES: Record<TaskCategory, string> = {
  map: '📐',
  mechanics: '🔧',
  art: '🎨',
  audio: '🎵',
  integration: '🔗',
};

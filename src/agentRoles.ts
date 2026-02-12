import type { AgentRole, TaskCategory, PersonalityStyle } from './agentTypes';

export interface AgentRoleConfig extends AgentRole {
  speciesId: string;
  personalityId: PersonalityStyle;
  homeZoneId: string;
}

// 27 agent roles — one per species, now with startup titles
export const AGENT_ROLES: AgentRoleConfig[] = [
  // ═══ SEED — Builders & Designers ═══
  { speciesId: 'seed-01', agentName: 'Scout',    title: 'Full-Stack Engineer',    categories: ['codigo', 'producto'],    workSpeed: 1.2, personalityId: 'energetic',  homeZoneId: 'frontend' },
  { speciesId: 'seed-02', agentName: 'Tejedor',  title: 'Integration Lead',       categories: ['codigo', 'infra'],       workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'apis' },
  { speciesId: 'seed-03', agentName: 'Suerte',   title: 'QA Tester',              categories: ['infra'],                 workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'testing' },
  { speciesId: 'seed-04', agentName: 'Luminar',  title: 'UI/UX Designer',         categories: ['diseno'],                workSpeed: 1.0, personalityId: 'poetic',     homeZoneId: 'uidesign' },
  { speciesId: 'seed-05', agentName: 'Defensa',  title: 'Security Engineer',      categories: ['infra'],                 workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'security' },
  { speciesId: 'seed-06', agentName: 'Micélio',  title: 'Data Engineer',          categories: ['codigo', 'infra'],       workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'database' },
  { speciesId: 'seed-07', agentName: 'Arbor',    title: 'CTO / Arquitecto',       categories: ['codigo', 'infra'],       workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'hq' },
  { speciesId: 'seed-08', agentName: 'Veloz',    title: 'Speed Coder',            categories: ['codigo'],                workSpeed: 1.5, personalityId: 'energetic',  homeZoneId: 'algorithms' },
  { speciesId: 'seed-09', agentName: 'Artista',  title: 'Visual Designer',        categories: ['diseno'],                workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'branding' },

  // ═══ DROP — Flow & Content ═══
  { speciesId: 'drop-01', agentName: 'Origen',   title: 'Technical Writer',       categories: ['producto'],              workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'specs' },
  { speciesId: 'drop-02', agentName: 'Impulso',  title: 'Frontend Lead',          categories: ['codigo', 'diseno'],      workSpeed: 1.2, personalityId: 'energetic',  homeZoneId: 'frontend' },
  { speciesId: 'drop-03', agentName: 'Pureza',   title: 'Backend Specialist',     categories: ['codigo'],                workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'backend' },
  { speciesId: 'drop-04', agentName: 'Eco',      title: 'Content Creator',        categories: ['marketing', 'producto'], workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'content' },
  { speciesId: 'drop-05', agentName: 'Marina',   title: 'Product Manager',        categories: ['producto', 'infra'],     workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'hq' },
  { speciesId: 'drop-06', agentName: 'Brillo',   title: 'Motion Designer',        categories: ['diseno'],                workSpeed: 1.0, personalityId: 'energetic',  homeZoneId: 'animations' },
  { speciesId: 'drop-07', agentName: 'Guardia',  title: 'Code Reviewer',          categories: ['codigo'],                workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'backend' },
  { speciesId: 'drop-08', agentName: 'Proto',    title: 'Prototyper',             categories: ['codigo', 'diseno'],      workSpeed: 1.3, personalityId: 'casual',     homeZoneId: 'feature' },
  { speciesId: 'drop-09', agentName: 'Flujo',    title: 'SRE Engineer',           categories: ['infra'],                 workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'monitoring' },

  // ═══ SPARK — Innovation & Growth ═══
  { speciesId: 'spark-01', agentName: 'Ignición', title: 'Startup Bootstrap',     categories: ['producto'],              workSpeed: 1.2, personalityId: 'energetic',  homeZoneId: 'roadmap' },
  { speciesId: 'spark-02', agentName: 'Voltaje',  title: 'Performance Engineer',  categories: ['codigo', 'infra'],       workSpeed: 1.0, personalityId: 'formal',     homeZoneId: 'algorithms' },
  { speciesId: 'spark-03', agentName: 'Umbra',    title: 'Platform Engineer',     categories: ['infra', 'codigo'],       workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'devops' },
  { speciesId: 'spark-04', agentName: 'Guía',     title: 'UX Researcher',         categories: ['diseno', 'producto'],    workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'uxresearch' },
  { speciesId: 'spark-05', agentName: 'Nova',     title: 'Growth Hacker',         categories: ['marketing'],             workSpeed: 1.2, personalityId: 'energetic',  homeZoneId: 'seo' },
  { speciesId: 'spark-06', agentName: 'Viajero',  title: 'DevOps Engineer',       categories: ['infra', 'codigo'],       workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'devops' },
  { speciesId: 'spark-07', agentName: 'Sombra',   title: 'QA Lead',               categories: ['infra', 'codigo'],       workSpeed: 1.0, personalityId: 'mysterious', homeZoneId: 'testing' },
  { speciesId: 'spark-08', agentName: 'Energía',  title: 'Build Systems',         categories: ['infra'],                 workSpeed: 1.0, personalityId: 'casual',     homeZoneId: 'cicd' },
  { speciesId: 'spark-09', agentName: 'Mundo',    title: 'Community Manager',     categories: ['marketing'],             workSpeed: 0.8, personalityId: 'poetic',     homeZoneId: 'community' },
];

export const AGENT_ROLE_MAP = new Map(AGENT_ROLES.map((r) => [r.speciesId, r]));

// Starting roster — 8 agents covering all departments
export const STARTING_AGENT_IDS: string[] = [
  'seed-07', // Arbor — CTO / Arquitecto (codigo, infra)
  'seed-04', // Luminar — UI/UX Designer (diseno)
  'seed-01', // Scout — Full-Stack Engineer (codigo, producto)
  'drop-04', // Eco — Content Creator (marketing, producto)
  'drop-05', // Marina — Product Manager (producto, infra)
  'spark-05', // Nova — Growth Hacker (marketing)
  'spark-06', // Viajero — DevOps Engineer (infra, codigo)
  'spark-07', // Sombra — QA Lead (infra, codigo)
];

export const STARTING_ROLES: AgentRoleConfig[] = AGENT_ROLES.filter((r) =>
  STARTING_AGENT_IDS.includes(r.speciesId),
);

// Work particle emojis by department
export const WORK_PARTICLES: Record<TaskCategory, string> = {
  producto:  '\uD83D\uDCCB',
  codigo:    '\uD83D\uDCBB',
  diseno:    '\uD83C\uDFA8',
  marketing: '\uD83D\uDCE3',
  infra:     '\u2699\uFE0F',
};

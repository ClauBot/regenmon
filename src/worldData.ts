import type { DepartmentType } from './types';

export interface MapZone {
  id: string;
  name: string;
  type: DepartmentType | 'hq';
  cx: number;
  cy: number;
  speciesIds: string[];
  description: string;
  isDungeon?: boolean;
}

export interface Connection {
  from: string;
  to: string;
  secret?: boolean;
  label?: string;
}

// ─── 31 ZONES: Startup Pentagonal Layout ───
// HQ at center (~50, 45), 5 departments radiate outward
export const ZONES: MapZone[] = [
  // HQ (center)
  { id: 'hq', name: 'HQ — Startup Central', type: 'hq', cx: 50, cy: 45, speciesIds: [], description: 'Cuartel general de la startup. Desde aquí se coordinan los 5 departamentos.' },

  // ═══ PRODUCTO (noreste, naranja #FF9800) ═══
  { id: 'roadmap', name: 'Roadmap', type: 'producto', cx: 58, cy: 36, speciesIds: ['drop-05'], description: 'Tablero de planificación. Aquí nacen las ideas.' },
  { id: 'research', name: 'User Research', type: 'producto', cx: 66, cy: 30, speciesIds: ['seed-01'], description: 'Laboratorio de usuarios. Entrevistas y datos.' },
  { id: 'feature', name: 'Feature Design', type: 'producto', cx: 74, cy: 24, speciesIds: [], description: 'Taller de diseño de funciones. Prototipos.' },
  { id: 'specs', name: 'Specs & Docs', type: 'producto', cx: 80, cy: 18, speciesIds: [], description: 'Biblioteca de especificaciones y PRDs.' },
  { id: 'analytics', name: 'Analytics', type: 'producto', cx: 86, cy: 12, speciesIds: [], description: 'Centro de métricas. Dashboards en vivo.' },
  { id: 'pivot', name: 'El Pivot', type: 'producto', cx: 90, cy: 6, speciesIds: [], description: 'Boss: La Decisión Imposible. Pivotar o morir.', isDungeon: true },

  // ═══ CÓDIGO (este, verde #4CAF50) ═══
  { id: 'frontend', name: 'Frontend', type: 'codigo', cx: 62, cy: 50, speciesIds: ['seed-01'], description: 'Interfaces visuales. React y componentes.' },
  { id: 'backend', name: 'Backend', type: 'codigo', cx: 72, cy: 54, speciesIds: ['seed-07'], description: 'Servidores y lógica. Node.js, APIs.' },
  { id: 'apis', name: 'APIs', type: 'codigo', cx: 80, cy: 58, speciesIds: [], description: 'REST, GraphQL, endpoints documentados.' },
  { id: 'database', name: 'Base de Datos', type: 'codigo', cx: 86, cy: 64, speciesIds: [], description: 'PostgreSQL, Redis, queries optimizadas.' },
  { id: 'algorithms', name: 'Algoritmos', type: 'codigo', cx: 90, cy: 70, speciesIds: [], description: 'Estructuras de datos. Complejidad O(n).' },
  { id: 'legacy', name: 'Legacy Code', type: 'codigo', cx: 92, cy: 78, speciesIds: [], description: 'Boss: El Código Heredado. Spaghetti infinito.', isDungeon: true },

  // ═══ DISEÑO (sureste, rosa #E91E63) ═══
  { id: 'uidesign', name: 'UI Design', type: 'diseno', cx: 56, cy: 58, speciesIds: ['seed-04'], description: 'Paletas, tipografía y componentes.' },
  { id: 'uxresearch', name: 'UX Research', type: 'diseno', cx: 58, cy: 66, speciesIds: [], description: 'User flows y journey maps.' },
  { id: 'branding', name: 'Branding', type: 'diseno', cx: 56, cy: 74, speciesIds: [], description: 'Identidad visual. Logo y marca.' },
  { id: 'animations', name: 'Animaciones', type: 'diseno', cx: 50, cy: 80, speciesIds: [], description: 'Motion design. Microinteracciones.' },
  { id: 'responsive', name: 'Responsive', type: 'diseno', cx: 44, cy: 86, speciesIds: [], description: 'Mobile-first. Progressive enhancement.' },
  { id: 'redesign', name: 'El Redesign', type: 'diseno', cx: 38, cy: 90, speciesIds: [], description: 'Boss: El Cliente Indeciso. Cambios infinitos.', isDungeon: true },

  // ═══ MARKETING (suroeste, azul #2196F3) ═══
  { id: 'seo', name: 'SEO', type: 'marketing', cx: 38, cy: 52, speciesIds: ['spark-05'], description: 'Keywords, backlinks y rankings.' },
  { id: 'social', name: 'Redes Sociales', type: 'marketing', cx: 28, cy: 56, speciesIds: [], description: 'Twitter, LinkedIn, engagement.' },
  { id: 'content', name: 'Contenido', type: 'marketing', cx: 20, cy: 62, speciesIds: ['drop-04'], description: 'Blogs, videos, newsletters.' },
  { id: 'growth', name: 'Growth & Ads', type: 'marketing', cx: 14, cy: 68, speciesIds: [], description: 'Campañas pagadas. A/B testing.' },
  { id: 'community', name: 'Comunidad', type: 'marketing', cx: 10, cy: 74, speciesIds: [], description: 'Foros, eventos. Word-of-mouth.' },
  { id: 'algoritmo', name: 'El Algoritmo', type: 'marketing', cx: 8, cy: 82, speciesIds: [], description: 'Boss: El Algoritmo. Reach = 0%.', isDungeon: true },

  // ═══ INFRA (noroeste, amarillo #FFC107) ═══
  { id: 'devops', name: 'DevOps', type: 'infra', cx: 40, cy: 38, speciesIds: ['spark-06'], description: 'Pipelines automáticos. Deploy continuo.' },
  { id: 'cicd', name: 'CI/CD', type: 'infra', cx: 32, cy: 32, speciesIds: [], description: 'Tests automatizados en cada commit.' },
  { id: 'security', name: 'Seguridad', type: 'infra', cx: 24, cy: 26, speciesIds: [], description: 'Firewall, encriptación. Zero-trust.' },
  { id: 'testing', name: 'Testing', type: 'infra', cx: 18, cy: 20, speciesIds: ['spark-07'], description: 'Unit, integration, E2E. 95% coverage.' },
  { id: 'monitoring', name: 'Monitoreo', type: 'infra', cx: 12, cy: 14, speciesIds: [], description: 'Logs, métricas, alertas y trazas.' },
  { id: 'downtime', name: 'El Downtime', type: 'infra', cx: 8, cy: 8, speciesIds: [], description: 'Boss: El Outage Crítico. Viernes 5pm.', isDungeon: true },
];

// ─── CONNECTIONS between zones ───
export const CONNECTIONS: Connection[] = [
  // HQ → department entries
  { from: 'hq', to: 'roadmap' },
  { from: 'hq', to: 'frontend' },
  { from: 'hq', to: 'uidesign' },
  { from: 'hq', to: 'seo' },
  { from: 'hq', to: 'devops' },

  // Producto chain
  { from: 'roadmap', to: 'research' },
  { from: 'research', to: 'feature' },
  { from: 'feature', to: 'specs' },
  { from: 'specs', to: 'analytics' },
  { from: 'analytics', to: 'pivot' },
  { from: 'specs', to: 'pivot' },

  // Código chain
  { from: 'frontend', to: 'backend' },
  { from: 'backend', to: 'apis' },
  { from: 'apis', to: 'database' },
  { from: 'database', to: 'algorithms' },
  { from: 'algorithms', to: 'legacy' },
  { from: 'database', to: 'legacy' },

  // Diseño chain
  { from: 'uidesign', to: 'uxresearch' },
  { from: 'uxresearch', to: 'branding' },
  { from: 'branding', to: 'animations' },
  { from: 'animations', to: 'responsive' },
  { from: 'responsive', to: 'redesign' },
  { from: 'animations', to: 'redesign' },

  // Marketing chain
  { from: 'seo', to: 'social' },
  { from: 'social', to: 'content' },
  { from: 'content', to: 'growth' },
  { from: 'growth', to: 'community' },
  { from: 'community', to: 'algoritmo' },
  { from: 'growth', to: 'algoritmo' },

  // Infra chain
  { from: 'devops', to: 'cicd' },
  { from: 'cicd', to: 'security' },
  { from: 'security', to: 'testing' },
  { from: 'testing', to: 'monitoring' },
  { from: 'monitoring', to: 'downtime' },
  { from: 'testing', to: 'downtime' },

  // Cross-department
  { from: 'roadmap', to: 'devops' },
  { from: 'seo', to: 'uidesign' },

  // Secret inter-department passages
  { from: 'analytics', to: 'growth', secret: true, label: 'La Puerta del Growth Hack' },
  { from: 'database', to: 'monitoring', secret: true, label: 'El Portal de la Crisis' },
  { from: 'frontend', to: 'uxresearch', secret: true, label: 'El Túnel Full-Stack' },
];

export const ZONE_MAP = new Map(ZONES.map((z) => [z.id, z]));

export const DEPT_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  producto:  { bg: '#1a1200', border: '#FF9800', text: '#FF9800', glow: 'rgba(255,152,0,0.3)' },
  codigo:    { bg: '#0a1a0a', border: '#4CAF50', text: '#4CAF50', glow: 'rgba(76,175,80,0.3)' },
  diseno:    { bg: '#1a0a12', border: '#E91E63', text: '#E91E63', glow: 'rgba(233,30,99,0.3)' },
  marketing: { bg: '#0a1628', border: '#2196F3', text: '#2196F3', glow: 'rgba(33,150,243,0.3)' },
  infra:     { bg: '#1a1800', border: '#FFC107', text: '#FFC107', glow: 'rgba(255,193,7,0.3)' },
  hq:        { bg: '#1a1515', border: '#aaa', text: '#fff', glow: 'rgba(255,255,255,0.15)' },
};

// Backward-compat alias
export const REALM_COLORS = DEPT_COLORS;

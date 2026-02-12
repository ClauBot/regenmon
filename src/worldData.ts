import type { RegenmonType } from './types';

export interface MapZone {
  id: string;
  name: string;
  type: RegenmonType | 'nexo';
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

// ─── ZONES positioned in trisquel layout ───
// Nexo at center (~50, 45), Cosmos north, Bosque southwest, Océano southeast
export const ZONES: MapZone[] = [
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
export const CONNECTIONS: Connection[] = [
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

export const ZONE_MAP = new Map(ZONES.map((z) => [z.id, z]));

export const REALM_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  seed: { bg: '#1a3a1a', border: '#4CAF50', text: '#4CAF50', glow: 'rgba(76,175,80,0.3)' },
  drop: { bg: '#0a1628', border: '#2196F3', text: '#2196F3', glow: 'rgba(33,150,243,0.3)' },
  spark: { bg: '#12081f', border: '#FFC107', text: '#FFC107', glow: 'rgba(255,193,7,0.3)' },
  nexo: { bg: '#1a1515', border: '#aaa', text: '#fff', glow: 'rgba(255,255,255,0.15)' },
};

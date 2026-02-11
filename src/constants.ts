import type { RegenmonType, RegenmonSpecies } from './types';

export const TYPE_CONFIG: Record<RegenmonType, { label: string; color: string; bg: string }> = {
  seed:  { label: 'Semilla', color: '#4CAF50', bg: '#E8F5E9' },
  drop:  { label: 'Gota',    color: '#2196F3', bg: '#E3F2FD' },
  spark: { label: 'Chispa',  color: '#FFC107', bg: '#FFF8E1' },
};

export const SPECIES_LIST: RegenmonSpecies[] = [
  // Seed (Naturaleza) — Mundo: Bosque
  { id: 'seed-01', type: 'seed', emoji: '🌱', speciesName: 'Brote' },
  { id: 'seed-02', type: 'seed', emoji: '🌿', speciesName: 'Hierba' },
  { id: 'seed-03', type: 'seed', emoji: '🍀', speciesName: 'Trébol' },
  { id: 'seed-04', type: 'seed', emoji: '🌻', speciesName: 'Girasol' },
  { id: 'seed-05', type: 'seed', emoji: '🌵', speciesName: 'Espino' },
  { id: 'seed-06', type: 'seed', emoji: '🍄', speciesName: 'Hongo' },
  { id: 'seed-07', type: 'seed', emoji: '🌳', speciesName: 'Roble' },
  { id: 'seed-08', type: 'seed', emoji: '🎋', speciesName: 'Bambú' },
  { id: 'seed-09', type: 'seed', emoji: '🌺', speciesName: 'Flora' },
  // Drop (Agua) — Mundo: Océano
  { id: 'drop-01', type: 'drop', emoji: '💧', speciesName: 'Gota' },
  { id: 'drop-02', type: 'drop', emoji: '🌊', speciesName: 'Ola' },
  { id: 'drop-03', type: 'drop', emoji: '❄️', speciesName: 'Cristal' },
  { id: 'drop-04', type: 'drop', emoji: '🐚', speciesName: 'Concha' },
  { id: 'drop-05', type: 'drop', emoji: '🪸', speciesName: 'Coral' },
  { id: 'drop-06', type: 'drop', emoji: '🐠', speciesName: 'Neón' },
  { id: 'drop-07', type: 'drop', emoji: '🦈', speciesName: 'Aleta' },
  { id: 'drop-08', type: 'drop', emoji: '🫧', speciesName: 'Burbuja' },
  { id: 'drop-09', type: 'drop', emoji: '🌧️', speciesName: 'Lluvia' },
  // Spark (Cósmico) — Mundo: Cosmos
  { id: 'spark-01', type: 'spark', emoji: '✨', speciesName: 'Chispa' },
  { id: 'spark-02', type: 'spark', emoji: '⚡', speciesName: 'Rayo' },
  { id: 'spark-03', type: 'spark', emoji: '🔥', speciesName: 'Llama' },
  { id: 'spark-04', type: 'spark', emoji: '⭐', speciesName: 'Estrella' },
  { id: 'spark-05', type: 'spark', emoji: '🌟', speciesName: 'Nova' },
  { id: 'spark-06', type: 'spark', emoji: '💫', speciesName: 'Cometa' },
  { id: 'spark-07', type: 'spark', emoji: '🌙', speciesName: 'Luna' },
  { id: 'spark-08', type: 'spark', emoji: '☀️', speciesName: 'Sol' },
  { id: 'spark-09', type: 'spark', emoji: '🪐', speciesName: 'Planeta' },
];

export const STATS_CONFIG = {
  happiness: { label: 'Felicidad', emoji: '💚', color: '#4CAF50' },
  energy:    { label: 'Energía',   emoji: '⚡',   color: '#FFC107' },
  hunger:    { label: 'Hambre',    emoji: '🍎', color: '#F44336' },
} as const;

export const NAME_MIN = 2;
export const NAME_MAX = 15;
export const STORAGE_KEY = 'regenmon-data';

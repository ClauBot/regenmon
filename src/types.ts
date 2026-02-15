export type RegenmonType = 'seed' | 'drop' | 'spark';
export type DepartmentType = 'producto' | 'codigo' | 'diseno' | 'marketing' | 'infra';

export interface RegenmonSpecies {
  id: string;
  type: RegenmonType;
  emoji: string;
  speciesName: string;
}

export interface Regenmon {
  name: string;
  speciesId: string;
  type: RegenmonType;
  happiness: number;
  energy: number;
  hunger: number;
  createdAt: string;
  lastTick: string;
}

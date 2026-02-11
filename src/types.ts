export type RegenmonType = 'seed' | 'drop' | 'spark';

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
}

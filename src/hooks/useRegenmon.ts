import { useState, useEffect } from 'react';
import type { Regenmon, RegenmonSpecies } from '../types';
import { SPECIES_LIST, STORAGE_KEY } from '../constants';

function randomStat(): number {
  return Math.floor(Math.random() * 71) + 20; // 20-90
}

export function useRegenmon() {
  const [regenmon, setRegenmon] = useState<Regenmon | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.speciesId || !SPECIES_LIST.some((s) => s.id === parsed.speciesId)) {
          localStorage.removeItem(STORAGE_KEY);
        } else {
          setRegenmon(parsed);
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save to localStorage whenever regenmon changes
  useEffect(() => {
    if (regenmon) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(regenmon));
    }
  }, [regenmon]);

  const create = (name: string): RegenmonSpecies => {
    const species = SPECIES_LIST[Math.floor(Math.random() * SPECIES_LIST.length)];
    setRegenmon({
      name,
      speciesId: species.id,
      type: species.type,
      happiness: randomStat(),
      energy: randomStat(),
      hunger: randomStat(),
      createdAt: new Date().toISOString(),
    });
    return species;
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setRegenmon(null);
  };

  return { regenmon, create, reset };
}

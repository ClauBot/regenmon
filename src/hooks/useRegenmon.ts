import { useState, useEffect, useCallback } from 'react';
import type { Regenmon, RegenmonType, RegenmonSpecies } from '../types';
import { SPECIES_LIST, STORAGE_KEY } from '../constants';

function clamp(value: number): number {
  return Math.max(0, Math.min(100, value));
}

function applyCatchUp(saved: Regenmon): Regenmon {
  const now = Date.now();
  const last = new Date(saved.lastTick).getTime();
  if (isNaN(last)) return { ...saved, lastTick: new Date().toISOString() };

  const elapsedSec = Math.floor((now - last) / 1000);
  if (elapsedSec <= 0) return { ...saved, lastTick: new Date().toISOString() };

  return {
    ...saved,
    hunger: clamp(saved.hunger - Math.floor(elapsedSec / 10)),
    happiness: clamp(saved.happiness - Math.floor(elapsedSec / 15)),
    energy: clamp(saved.energy + Math.floor(elapsedSec / 8)),
    lastTick: new Date().toISOString(),
  };
}

export function useRegenmon() {
  const [regenmon, setRegenmon] = useState<Regenmon | null>(null);

  // Load from localStorage on mount (with catch-up)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed: Regenmon = JSON.parse(saved);
        if (!parsed.speciesId || !SPECIES_LIST.some((s) => s.id === parsed.speciesId)) {
          localStorage.removeItem(STORAGE_KEY);
        } else {
          if (!parsed.lastTick) {
            parsed.lastTick = new Date().toISOString();
          }
          setRegenmon(applyCatchUp(parsed));
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

  // Decay/regen: separate interval per stat
  useEffect(() => {
    if (!regenmon) return;

    const hungerInterval = setInterval(() => {
      setRegenmon((prev) => {
        if (!prev) return prev;
        return { ...prev, hunger: clamp(prev.hunger - 1), lastTick: new Date().toISOString() };
      });
    }, 10_000);

    const happinessInterval = setInterval(() => {
      setRegenmon((prev) => {
        if (!prev) return prev;
        return { ...prev, happiness: clamp(prev.happiness - 1), lastTick: new Date().toISOString() };
      });
    }, 15_000);

    const energyInterval = setInterval(() => {
      setRegenmon((prev) => {
        if (!prev) return prev;
        return { ...prev, energy: clamp(prev.energy + 1), lastTick: new Date().toISOString() };
      });
    }, 8_000);

    return () => {
      clearInterval(hungerInterval);
      clearInterval(happinessInterval);
      clearInterval(energyInterval);
    };
  }, [regenmon !== null]);

  const create = (name: string, type: RegenmonType): RegenmonSpecies => {
    const candidates = SPECIES_LIST.filter((s) => s.type === type);
    const species = candidates[Math.floor(Math.random() * candidates.length)];
    setRegenmon({
      name,
      speciesId: species.id,
      type: species.type,
      happiness: 50,
      energy: 50,
      hunger: 50,
      createdAt: new Date().toISOString(),
      lastTick: new Date().toISOString(),
    });
    return species;
  };

  const feed = useCallback(() => {
    setRegenmon((prev) => {
      if (!prev || prev.energy < 5) return prev;
      return {
        ...prev,
        hunger: clamp(prev.hunger + 15),
        energy: clamp(prev.energy - 3),
        lastTick: new Date().toISOString(),
      };
    });
  }, []);

  const play = useCallback(() => {
    setRegenmon((prev) => {
      if (!prev || prev.energy < 10) return prev;
      return {
        ...prev,
        happiness: clamp(prev.happiness + 15),
        energy: clamp(prev.energy - 10),
        lastTick: new Date().toISOString(),
      };
    });
  }, []);

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setRegenmon(null);
  };

  return { regenmon, create, reset, feed, play };
}

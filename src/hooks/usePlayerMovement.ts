import { useEffect, useRef } from 'react';
import { CONNECTIONS, ZONE_MAP } from '../worldData';

type Facing = 'up' | 'down' | 'left' | 'right';

// Get adjacent zones from current zone
function getAdjacentZones(zoneId: string): string[] {
  const adjacent: string[] = [];
  for (const conn of CONNECTIONS) {
    if (conn.from === zoneId) adjacent.push(conn.to);
    if (conn.to === zoneId) adjacent.push(conn.from);
  }
  return adjacent;
}

// Determine facing direction based on relative position
function getFacing(fromCx: number, fromCy: number, toCx: number, toCy: number): Facing {
  const dx = toCx - fromCx;
  const dy = toCy - fromCy;
  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? 'right' : 'left';
  }
  return dy > 0 ? 'down' : 'up';
}

// Find the best adjacent zone matching a direction input
function findZoneInDirection(currentZoneId: string, direction: Facing): string | null {
  const current = ZONE_MAP.get(currentZoneId);
  if (!current) return null;

  const adjacent = getAdjacentZones(currentZoneId);
  if (adjacent.length === 0) return null;

  // Score each adjacent zone by how well it matches the desired direction
  let best: { id: string; score: number } | null = null;
  for (const adjId of adjacent) {
    const adj = ZONE_MAP.get(adjId);
    if (!adj) continue;

    const dx = adj.cx - current.cx;
    const dy = adj.cy - current.cy;
    let score = 0;

    switch (direction) {
      case 'up': score = -dy - Math.abs(dx) * 0.3; break;
      case 'down': score = dy - Math.abs(dx) * 0.3; break;
      case 'left': score = -dx - Math.abs(dy) * 0.3; break;
      case 'right': score = dx - Math.abs(dy) * 0.3; break;
    }

    if (!best || score > best.score) {
      best = { id: adjId, score };
    }
  }

  // Only move if the score is positive (zone is actually in that direction)
  return best && best.score > 0 ? best.id : null;
}

const MOVE_COOLDOWN = 400; // ms

export function usePlayerMovement(
  currentZoneId: string,
  enabled: boolean,
  onMove: (zoneId: string, facing: Facing) => void,
) {
  const lastMoveRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(e: KeyboardEvent) {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return;

      let direction: Facing | null = null;
      switch (e.key) {
        case 'w': case 'W': case 'ArrowUp': direction = 'up'; break;
        case 's': case 'S': case 'ArrowDown': direction = 'down'; break;
        case 'a': case 'A': case 'ArrowLeft': direction = 'left'; break;
        case 'd': case 'D': case 'ArrowRight': direction = 'right'; break;
      }

      if (!direction) return;
      e.preventDefault();

      const now = Date.now();
      if (now - lastMoveRef.current < MOVE_COOLDOWN) return;

      const targetZone = findZoneInDirection(currentZoneId, direction);
      if (targetZone) {
        lastMoveRef.current = now;
        const target = ZONE_MAP.get(targetZone);
        const current = ZONE_MAP.get(currentZoneId);
        const facing = target && current
          ? getFacing(current.cx, current.cy, target.cx, target.cy)
          : direction;
        onMove(targetZone, facing);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentZoneId, enabled, onMove]);
}

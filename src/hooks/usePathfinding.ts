import { useCallback } from 'react';
import { CONNECTIONS } from '../worldData';

// Build adjacency list once
const adjacency = new Map<string, string[]>();
for (const conn of CONNECTIONS) {
  if (!adjacency.has(conn.from)) adjacency.set(conn.from, []);
  if (!adjacency.has(conn.to)) adjacency.set(conn.to, []);
  adjacency.get(conn.from)!.push(conn.to);
  adjacency.get(conn.to)!.push(conn.from);
}

function bfs(from: string, to: string): string[] {
  if (from === to) return [from];
  const visited = new Set<string>([from]);
  const queue: string[][] = [[from]];
  while (queue.length > 0) {
    const path = queue.shift()!;
    const current = path[path.length - 1];
    const neighbors = adjacency.get(current) ?? [];
    for (const neighbor of neighbors) {
      if (neighbor === to) return [...path, neighbor];
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return [from]; // no path found, stay
}

export function useFindPath() {
  return useCallback((from: string, to: string): string[] => bfs(from, to), []);
}

export { bfs as findPath };

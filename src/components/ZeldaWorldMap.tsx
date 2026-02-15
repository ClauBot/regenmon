import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { ZONES, CONNECTIONS, DEPT_COLORS, ZONE_MAP } from '../worldData';
import type { Agent, ZoneTask } from '../agentTypes';
import AgentSprite from './AgentSprite';

interface ZeldaWorldMapProps {
  agents: Agent[];
  tasks: ZoneTask[];
  selectedAgentId: string | null;
  selectedZoneId: string | null;
  onSelectAgent: (id: string | null) => void;
  onSelectZone: (id: string | null) => void;
  panTarget?: { x: number; y: number } | null;
}

// ─── Casita SVG Icons by department ───

function CasitaProducto() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      <rect x="3" y="3" width="10" height="12" rx="1" fill="#1a1200" stroke="#FF9800" strokeWidth="0.8" />
      <rect x="5" y="1" width="6" height="3" rx="1" fill="#FF9800" />
      <rect x="4.5" y="5" width="3" height="2" fill="#FFE082" />
      <rect x="8.5" y="5" width="3" height="2" fill="#FFAB40" />
      <rect x="4.5" y="8" width="3" height="2" fill="#FFD54F" />
      <rect x="8.5" y="8" width="3" height="2" fill="#FF9800" />
      <path d="M5,11.5 L6,12.5 L7.5,11" stroke="#4CAF50" strokeWidth="0.6" fill="none" />
      <path d="M9,11.5 L10,12.5 L11.5,11" stroke="#4CAF50" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

function CasitaCodigo() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      <rect x="2" y="2" width="12" height="9" rx="1" fill="#0a1a0a" stroke="#4CAF50" strokeWidth="0.8" />
      <rect x="3" y="3" width="10" height="7" fill="#0d2b0d" />
      <line x1="4" y1="4.5" x2="7" y2="4.5" stroke="#4CAF50" strokeWidth="0.6" />
      <line x1="5" y1="6" x2="10" y2="6" stroke="#81C784" strokeWidth="0.6" />
      <line x1="4" y1="7.5" x2="8" y2="7.5" stroke="#4CAF50" strokeWidth="0.6" />
      <line x1="6" y1="9" x2="11" y2="9" stroke="#66BB6A" strokeWidth="0.6" opacity="0.7" />
      <rect x="6" y="11" width="4" height="1" fill="#4CAF50" />
      <rect x="5" y="12" width="6" height="1" fill="#388E3C" />
      <rect x="9" y="4" width="0.5" height="1.2" fill="#4CAF50" opacity="0.8" />
    </svg>
  );
}

function CasitaDiseno() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      <line x1="4" y1="14" x2="7" y2="5" stroke="#795548" strokeWidth="0.8" />
      <line x1="12" y1="14" x2="9" y2="5" stroke="#795548" strokeWidth="0.8" />
      <line x1="8" y1="15" x2="8" y2="5" stroke="#795548" strokeWidth="0.8" />
      <rect x="3" y="1" width="10" height="9" rx="0.5" fill="#fff" stroke="#E91E63" strokeWidth="0.6" />
      <circle cx="5" cy="4" r="1.5" fill="#E91E63" />
      <circle cx="9" cy="3" r="1.2" fill="#2196F3" />
      <circle cx="7" cy="6" r="1.3" fill="#FFC107" />
      <circle cx="11" cy="6" r="1" fill="#4CAF50" />
      <circle cx="6" cy="8" r="0.8" fill="#9C27B0" />
      <circle cx="10" cy="8" r="0.6" fill="#FF5722" />
    </svg>
  );
}

function CasitaMarketing() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      <path d="M8,1 L6,6 L6,11 L10,11 L10,6 Z" fill="#2196F3" />
      <path d="M8,1 L7,4 L9,4 Z" fill="#64B5F6" />
      <path d="M8,1.5 L7.5,3 L8.5,3 Z" fill="#90CAF9" />
      <circle cx="8" cy="6" r="1" fill="#0D47A1" />
      <circle cx="8" cy="6" r="0.5" fill="#64B5F6" opacity="0.6" />
      <path d="M6,9 L3,12 L6,11 Z" fill="#1565C0" />
      <path d="M10,9 L13,12 L10,11 Z" fill="#1565C0" />
      <path d="M6.5,11 L8,15 L9.5,11 Z" fill="#FF9800" />
      <path d="M7,11 L8,14 L9,11 Z" fill="#FFC107" />
      <circle cx="3" cy="3" r="0.4" fill="#fff" opacity="0.6" />
      <circle cx="13" cy="5" r="0.3" fill="#fff" opacity="0.5" />
      <circle cx="2" cy="8" r="0.3" fill="#fff" opacity="0.4" />
    </svg>
  );
}

function CasitaInfra() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      <rect x="3" y="1" width="10" height="14" rx="1" fill="#1a1800" stroke="#FFC107" strokeWidth="0.8" />
      <rect x="4" y="2" width="8" height="3" fill="#2a2200" stroke="#FFC107" strokeWidth="0.3" />
      <circle cx="5.5" cy="3.5" r="0.5" fill="#4CAF50" />
      <circle cx="7" cy="3.5" r="0.5" fill="#4CAF50" />
      <rect x="9" y="3" width="2" height="1" fill="#333" />
      <rect x="4" y="6" width="8" height="3" fill="#2a2200" stroke="#FFC107" strokeWidth="0.3" />
      <circle cx="5.5" cy="7.5" r="0.5" fill="#FFC107" />
      <circle cx="7" cy="7.5" r="0.5" fill="#4CAF50" />
      <rect x="9" y="7" width="2" height="1" fill="#333" />
      <rect x="4" y="10" width="8" height="3" fill="#2a2200" stroke="#FFC107" strokeWidth="0.3" />
      <circle cx="5.5" cy="11.5" r="0.5" fill="#f44336" />
      <circle cx="7" cy="11.5" r="0.5" fill="#FFC107" />
      <rect x="9" y="11" width="2" height="1" fill="#333" />
    </svg>
  );
}

function CasitaHQ() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      <rect x="3" y="5" width="10" height="10" fill="#333" />
      <polygon points="8,1 2,5 14,5" fill="#555" />
      <rect x="4" y="6" width="2" height="2" fill="#FF9800" opacity="0.5" />
      <rect x="7" y="6" width="2" height="2" fill="#4CAF50" opacity="0.5" />
      <rect x="10" y="6" width="2" height="2" fill="#E91E63" opacity="0.5" />
      <rect x="4" y="9" width="2" height="2" fill="#2196F3" opacity="0.5" />
      <rect x="10" y="9" width="2" height="2" fill="#FFC107" opacity="0.5" />
      <rect x="7" y="11" width="2" height="4" fill="#222" />
      <circle cx="8.5" cy="13" r="0.3" fill="#FFC107" />
      <line x1="8" y1="1" x2="8" y2="-1" stroke="#888" strokeWidth="0.4" />
      <rect x="8" y="-1" width="3" height="0.5" fill="#FF9800" />
      <rect x="8" y="-0.5" width="3" height="0.5" fill="#4CAF50" />
      <rect x="8" y="0" width="3" height="0.5" fill="#E91E63" />
    </svg>
  );
}

function CasitaDungeon({ deptType }: { deptType: string }) {
  const baseColor = deptType === 'producto' ? '#FF9800'
    : deptType === 'codigo' ? '#4CAF50'
    : deptType === 'diseno' ? '#E91E63'
    : deptType === 'marketing' ? '#2196F3'
    : '#FFC107';
  const darkColor = deptType === 'producto' ? '#7a4a00'
    : deptType === 'codigo' ? '#1a3a1a'
    : deptType === 'diseno' ? '#6a0a2a'
    : deptType === 'marketing' ? '#0a2a4a'
    : '#7a6000';
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ display: 'block' }}>
      <path d="M3,15 L3,5 Q8,0 13,5 L13,15" fill={darkColor} stroke={baseColor} strokeWidth="0.6" />
      <path d="M5,15 L5,6 Q8,2 11,6 L11,15" fill="#111" />
      <ellipse cx="8" cy="7" rx="2" ry="1.8" fill="#ddd" />
      <circle cx="7" cy="6.5" r="0.6" fill="#111" />
      <circle cx="9" cy="6.5" r="0.6" fill="#111" />
      <path d="M7,8 L7.5,8.5 L8,8 L8.5,8.5 L9,8" stroke="#111" strokeWidth="0.3" fill="none" />
      <path d="M4,11 Q4,8 5,9 Q4.5,7 5.5,10 Q5,9 4.5,11 Z" fill="#f44336" opacity="0.8" />
      <path d="M4.2,11 Q4.2,9 4.8,10 Z" fill="#FF9800" opacity="0.6" />
      <path d="M12,11 Q12,8 11,9 Q11.5,7 10.5,10 Q11,9 11.5,11 Z" fill="#f44336" opacity="0.8" />
      <path d="M11.8,11 Q11.8,9 11.2,10 Z" fill="#FF9800" opacity="0.6" />
      <line x1="5" y1="12" x2="11" y2="15" stroke={baseColor} strokeWidth="0.6" />
      <line x1="11" y1="12" x2="5" y2="15" stroke={baseColor} strokeWidth="0.6" />
    </svg>
  );
}

function getCasita(type: string, isDungeon?: boolean, isHQ?: boolean) {
  if (isHQ) return <CasitaHQ />;
  if (isDungeon) return <CasitaDungeon deptType={type} />;
  if (type === 'producto') return <CasitaProducto />;
  if (type === 'codigo') return <CasitaCodigo />;
  if (type === 'diseno') return <CasitaDiseno />;
  if (type === 'marketing') return <CasitaMarketing />;
  if (type === 'infra') return <CasitaInfra />;
  return <CasitaHQ />;
}

// ─── Pixel-art decorations ───

const DECORATIONS = [
  // Trees near Producto (noreste)
  { type: 'tree', x: 70, y: 20 },
  { type: 'tree', x: 82, y: 14 },
  { type: 'tree', x: 64, y: 28 },
  { type: 'tree', x: 76, y: 10 },
  // Servers near Infra (noroeste)
  { type: 'server', x: 15, y: 18 },
  { type: 'server', x: 26, y: 22 },
  { type: 'server', x: 35, y: 28 },
  { type: 'server', x: 10, y: 10 },
  // Flowers near Diseno (sureste)
  { type: 'flower', x: 48, y: 72 },
  { type: 'flower', x: 54, y: 82 },
  { type: 'flower', x: 42, y: 78 },
  { type: 'flower', x: 60, y: 70 },
  { type: 'flower', x: 36, y: 86 },
  // Stars near Marketing (suroeste)
  { type: 'star', x: 12, y: 60 },
  { type: 'star', x: 22, y: 70 },
  { type: 'star', x: 6, y: 76 },
  { type: 'star', x: 16, y: 52 },
  { type: 'star', x: 30, y: 60 },
  // Rocks near dungeons
  { type: 'rock', x: 88, y: 4 },
  { type: 'rock', x: 94, y: 74 },
  { type: 'rock', x: 36, y: 92 },
  { type: 'rock', x: 6, y: 84 },
  { type: 'rock', x: 6, y: 6 },
  // Extra scattered
  { type: 'tree', x: 46, y: 40 },
  { type: 'flower', x: 52, y: 50 },
] as const;

function PixelDecorations() {
  return (
    <>
      {DECORATIONS.map((d, i) => (
        <g key={i} transform={`translate(${d.x}, ${d.y})`} pointerEvents="none" opacity={0.5}>
          {d.type === 'tree' && (
            <>
              <rect x={-0.3} y={0.5} width={0.6} height={0.8} fill="#5a3a1a" />
              <circle cx={0} cy={-0.1} r={0.8} fill="#2a5a2a" />
              <circle cx={-0.4} cy={0.3} r={0.5} fill="#1a4a1a" />
              <circle cx={0.4} cy={0.2} r={0.5} fill="#3a6a3a" />
            </>
          )}
          {d.type === 'server' && (
            <>
              <rect x={-0.5} y={-0.6} width={1} height={1.2} rx={0.1} fill="#2a2a2a" stroke="#444" strokeWidth={0.1} />
              <circle cx={-0.2} cy={-0.3} r={0.1} fill="#4CAF50" />
              <circle cx={0.1} cy={-0.3} r={0.1} fill="#FFC107" />
              <rect x={-0.3} y={0} width={0.6} height={0.1} fill="#555" />
              <circle cx={-0.2} cy={0.3} r={0.1} fill="#4CAF50" />
            </>
          )}
          {d.type === 'flower' && (
            <>
              <rect x={-0.05} y={0} width={0.1} height={0.5} fill="#3a6a3a" />
              <circle cx={0} cy={-0.1} r={0.3} fill="#E91E63" opacity={0.7} />
              <circle cx={0} cy={-0.1} r={0.15} fill="#FFC107" opacity={0.8} />
            </>
          )}
          {d.type === 'star' && (
            <polygon
              points="0,-0.4 0.12,-0.12 0.4,-0.12 0.18,0.06 0.28,0.35 0,0.18 -0.28,0.35 -0.18,0.06 -0.4,-0.12 -0.12,-0.12"
              fill="#FFD700"
              opacity={0.6}
            />
          )}
          {d.type === 'rock' && (
            <>
              <polygon points="-0.5,0.3 -0.2,-0.3 0.3,-0.2 0.5,0.3" fill="#3a3a3a" />
              <polygon points="-0.3,0.3 0,-0.1 0.4,0.3" fill="#4a4a4a" />
            </>
          )}
        </g>
      ))}
    </>
  );
}

// ─── Department terrain polygons ───

const TERRAIN_REGIONS = [
  // Producto (noreste)
  { points: '50,45 58,30 66,24 74,18 86,6 96,0 100,0 100,50 70,55 62,50', fill: '#1a1200' },
  // Codigo (este)
  { points: '62,50 70,55 100,50 100,85 92,82 86,68 80,62 72,58', fill: '#0a1a0a' },
  // Diseno (sureste)
  { points: '50,45 62,50 72,58 58,62 56,70 50,84 38,94 30,100 50,100 100,100 100,85 92,82', fill: '#1a0a12' },
  // Marketing (suroeste)
  { points: '50,45 38,48 28,52 20,58 14,64 8,78 0,100 30,100 38,94', fill: '#0a1628' },
  // Infra (noroeste)
  { points: '50,45 58,30 50,30 40,34 32,28 24,22 12,10 0,0 0,100 8,78 14,64 20,58 28,52 38,48', fill: '#1a1800' },
] as const;

// ─── Main component ───

export default function ZeldaWorldMap({
  agents,
  tasks,
  selectedAgentId,
  selectedZoneId,
  onSelectAgent,
  onSelectZone,
  panTarget,
}: ZeldaWorldMapProps) {
  // ─── Pan/Zoom state ───
  const [cam, setCam] = useState({ x: 0, y: 0, scale: 1.5 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, camX: 0, camY: 0 });
  const dragDist = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pan to agent target
  useEffect(() => {
    if (!panTarget || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    // panTarget is in % coords (0-100), the inner world is 100% x 95% viewBox
    // In scaled space, targetPixel = panTarget * scale * containerSize / 100
    // We want that centered: cam.x = cw/2 - targetPixelX
    const newX = cw / 2 - (panTarget.x / 100) * cw * cam.scale;
    const newY = ch / 2 - (panTarget.y / 100) * ch * cam.scale;
    setCam((prev) => ({ ...prev, x: newX, y: newY }));
  }, [panTarget]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    dragDist.current = 0;
    dragStart.current = { x: e.clientX, y: e.clientY, camX: cam.x, camY: cam.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [cam.x, cam.y]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    dragDist.current += Math.abs(dx) + Math.abs(dy);
    setCam((prev) => ({
      ...prev,
      x: dragStart.current.camX + dx,
      y: dragStart.current.camY + dy,
    }));
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setCam((prev) => {
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const newScale = Math.min(4.0, Math.max(0.8, prev.scale * factor));
      const ratio = newScale / prev.scale;
      return {
        scale: newScale,
        x: mouseX - (mouseX - prev.x) * ratio,
        y: mouseY - (mouseY - prev.y) * ratio,
      };
    });
  }, []);

  // Click guard: only fire zone/agent clicks if drag < 5px
  const wasClick = useCallback(() => dragDist.current < 5, []);

  const zoneProgress = useMemo(() => {
    const progress = new Map<string, { total: number; completed: number; inProgress: number }>();
    for (const task of tasks) {
      const entry = progress.get(task.zoneId) ?? { total: 0, completed: 0, inProgress: 0 };
      entry.total++;
      if (task.status === 'completed') entry.completed++;
      if (task.status === 'in_progress') entry.inProgress++;
      progress.set(task.zoneId, entry);
    }
    return progress;
  }, [tasks]);

  const agentsByZone = useMemo(() => {
    const map = new Map<string, Agent[]>();
    for (const agent of agents) {
      if (agent.status === 'traveling') continue;
      const list = map.get(agent.currentZoneId) ?? [];
      list.push(agent);
      map.set(agent.currentZoneId, list);
    }
    return map;
  }, [agents]);

  const taskMap = useMemo(() => new Map(tasks.map((t) => [t.id, t])), [tasks]);

  const decorationsMemo = useMemo(() => <PixelDecorations />, []);

  const transition = isDragging.current ? 'none' : 'transform 0.4s ease-out';

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        backgroundColor: '#0a0a12',
        cursor: isDragging.current ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
    >
      {/* Transformed world container */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          transform: `translate(${cam.x}px, ${cam.y}px) scale(${cam.scale})`,
          transformOrigin: '0 0',
          transition,
        }}
      >
        {/* SVG terrain + paths + decorations */}
        <svg
          viewBox="0 0 100 95"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <defs>
            <pattern id="nes-dither" width="2" height="2" patternUnits="userSpaceOnUse">
              <rect width="2" height="2" fill="transparent" />
              <rect x="0" y="0" width="1" height="1" fill="rgba(255,255,255,0.02)" />
              <rect x="1" y="1" width="1" height="1" fill="rgba(255,255,255,0.02)" />
            </pattern>
          </defs>

          {/* Terrain regions */}
          {TERRAIN_REGIONS.map((region, i) => (
            <g key={i}>
              <polygon points={region.points} fill={region.fill} />
              <polygon points={region.points} fill="url(#nes-dither)" />
            </g>
          ))}

          {/* Road-style connections */}
          {CONNECTIONS.map((conn) => {
            const from = ZONE_MAP.get(conn.from);
            const to = ZONE_MAP.get(conn.to);
            if (!from || !to) return null;
            const hasWork = (zoneProgress.get(conn.from)?.inProgress ?? 0) > 0 ||
                            (zoneProgress.get(conn.to)?.inProgress ?? 0) > 0;
            if (conn.secret) {
              return (
                <line
                  key={`${conn.from}-${conn.to}`}
                  x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                  stroke="#5a2a2a"
                  strokeWidth={0.5}
                  strokeDasharray="1.2 0.6"
                  strokeLinecap="round"
                  opacity={0.7}
                />
              );
            }
            return (
              <g key={`${conn.from}-${conn.to}`}>
                {/* Dark outer road */}
                <line
                  x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                  stroke="#1a1a15"
                  strokeWidth={1.0}
                  strokeLinecap="round"
                />
                {/* Light inner road */}
                <line
                  x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                  stroke={hasWork ? '#555' : '#3a3a2a'}
                  strokeWidth={0.6}
                  strokeLinecap="round"
                />
              </g>
            );
          })}

          {/* Pixel decorations */}
          {decorationsMemo}
        </svg>

        {/* Department watermark labels */}
        <div style={{ position: 'absolute', top: '16%', right: '10%', fontSize: '1.6rem', color: '#FF9800', opacity: 0.12, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
          Producto
        </div>
        <div style={{ position: 'absolute', top: '52%', right: '2%', fontSize: '1.6rem', color: '#4CAF50', opacity: 0.12, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
          Codigo
        </div>
        <div style={{ position: 'absolute', bottom: '6%', right: '25%', fontSize: '1.6rem', color: '#E91E63', opacity: 0.12, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
          Diseno
        </div>
        <div style={{ position: 'absolute', bottom: '14%', left: '2%', fontSize: '1.6rem', color: '#2196F3', opacity: 0.12, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
          Marketing
        </div>
        <div style={{ position: 'absolute', top: '14%', left: '4%', fontSize: '1.6rem', color: '#FFC107', opacity: 0.12, letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none', fontFamily: '"Press Start 2P", cursive', whiteSpace: 'nowrap' }}>
          Infra
        </div>

        {/* Zone casitas */}
        {ZONES.map((zone) => {
          const colors = DEPT_COLORS[zone.type] ?? DEPT_COLORS.hq;
          const isSelected = selectedZoneId === zone.id;
          const isHQ = zone.type === 'hq';
          const progress = zoneProgress.get(zone.id);
          const pct = progress ? Math.round((progress.completed / progress.total) * 100) : 0;
          const hasWork = progress ? progress.inProgress > 0 : false;
          const hasStarted = progress ? progress.completed > 0 || progress.inProgress > 0 : false;
          const isComplete = pct >= 100 && progress && progress.total > 0;
          const size = isHQ ? 5 : zone.isDungeon ? 3.5 : 4;

          return (
            <div
              key={zone.id}
              onClick={() => { if (wasClick()) onSelectZone(isSelected ? null : zone.id); }}
              style={{
                position: 'absolute',
                left: `${zone.cx}%`,
                top: `${zone.cy}%`,
                transform: 'translate(-50%, -50%)',
                width: `${size}%`,
                minWidth: isHQ ? 48 : zone.isDungeon ? 32 : 38,
                aspectRatio: '1',
                cursor: 'pointer',
                transition: 'filter 0.3s, opacity 0.3s',
                opacity: hasStarted || isSelected ? 1 : 0.7,
                filter: isComplete
                  ? 'brightness(1.3) saturate(1.2)'
                  : hasWork
                    ? 'brightness(1.1)'
                    : hasStarted
                      ? 'brightness(0.95)'
                      : 'brightness(0.7) saturate(0.6)',
                zIndex: isSelected ? 5 : 1,
                animation: hasWork ? 'casita-work-pulse 2s ease-in-out infinite' : undefined,
              }}
            >
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {getCasita(zone.type, zone.isDungeon, isHQ)}

                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: isHQ ? '50%' : 6,
                    border: `2px solid ${colors.border}`,
                    boxShadow: `0 0 12px ${colors.glow}, 0 0 24px ${colors.glow}`,
                    pointerEvents: 'none',
                  }} />
                )}

                {isComplete && (
                  <div style={{
                    position: 'absolute',
                    top: -4,
                    right: -2,
                    fontSize: 8,
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}>
                    {'\u2713'}
                  </div>
                )}

                {hasWork && !isComplete && (
                  <div style={{
                    position: 'absolute',
                    top: -6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: 8,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    animation: 'float-particle 0.6s ease-in-out infinite alternate',
                  }}>
                    {'\uD83D\uDD28'}
                  </div>
                )}
              </div>

              {/* Zone name — always visible */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: isSelected ? '0.45rem' : '0.35rem',
                  color: isSelected ? colors.text : hasWork ? '#888' : '#555',
                  whiteSpace: 'nowrap',
                  fontFamily: '"Press Start 2P", cursive',
                  textShadow: '1px 1px 0 #000, -1px -1px 0 #000',
                  pointerEvents: 'none',
                  textAlign: 'center',
                }}
              >
                {zone.name.split(' ').slice(0, 2).join(' ')}
              </div>

              {progress && progress.total > 0 && hasStarted && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: -3,
                    left: '10%',
                    right: '10%',
                    height: 2,
                    backgroundColor: '#000',
                    borderRadius: 1,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: '100%',
                      backgroundColor: isComplete ? '#4CAF50' : colors.border,
                      borderRadius: 1,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* All agent sprites */}
        {agents.map((agent) => {
          const zoneAgents = agent.status !== 'traveling'
            ? agentsByZone.get(agent.currentZoneId) ?? []
            : [];
          const zoneIndex = zoneAgents.indexOf(agent);
          const currentTask = agent.currentTaskId ? taskMap.get(agent.currentTaskId) : null;

          return (
            <AgentSprite
              key={agent.id}
              agent={agent}
              isSelected={selectedAgentId === agent.id}
              onClick={() => { if (wasClick()) onSelectAgent(selectedAgentId === agent.id ? null : agent.id); }}
              zoneIndex={Math.max(0, zoneIndex)}
              zoneCount={zoneAgents.length}
              currentTask={currentTask}
            />
          );
        })}

        {/* CSS animations */}
        <style>{`
          @keyframes casita-work-pulse {
            0%, 100% { filter: brightness(1.1); }
            50% { filter: brightness(1.4); }
          }
          @keyframes float-particle {
            from { transform: translateX(-50%) translateY(0); }
            to { transform: translateX(-50%) translateY(-4px); }
          }
        `}</style>
      </div>
    </div>
  );
}

import { useMemo } from 'react';
import { SPECIES_LIST } from '../constants';
import { ZONE_MAP } from '../worldData';
import { WORK_PARTICLES } from '../agentRoles';
import type { Agent, ZoneTask } from '../agentTypes';
import RegenmonCharacter from './RegenmonCharacter';

interface AgentSpriteProps {
  agent: Agent;
  isSelected: boolean;
  onClick: () => void;
  /** Index within same zone (for radial offset) */
  zoneIndex: number;
  /** Total agents in same zone */
  zoneCount: number;
  /** Current task (if working) */
  currentTask?: ZoneTask | null;
}

const STATUS_ICONS: Record<string, string> = {
  working: '\u{1F527}',
  resting: '\u{1F4A4}',
  traveling: '\u{27A1}\u{FE0F}',
  idle: '\u{2B50}',
};

export default function AgentSprite({
  agent,
  isSelected,
  onClick,
  zoneIndex,
  zoneCount,
  currentTask,
}: AgentSpriteProps) {
  const species = useMemo(
    () => SPECIES_LIST.find((s) => s.id === agent.speciesId)!,
    [agent.speciesId],
  );

  // Calculate position — interpolate during travel, radial offset in zone
  const pos = useMemo(() => {
    let baseX: number;
    let baseY: number;

    if (agent.status === 'traveling' && agent.travelPath.length > 1) {
      const fromIdx = agent.travelStepIndex;
      const toIdx = Math.min(fromIdx + 1, agent.travelPath.length - 1);
      const fromZone = ZONE_MAP.get(agent.travelPath[fromIdx]);
      const toZone = ZONE_MAP.get(agent.travelPath[toIdx]);
      if (fromZone && toZone) {
        const t = agent.travelProgress;
        baseX = fromZone.cx + (toZone.cx - fromZone.cx) * t;
        baseY = fromZone.cy + (toZone.cy - fromZone.cy) * t;
      } else {
        const zone = ZONE_MAP.get(agent.currentZoneId);
        baseX = zone?.cx ?? 50;
        baseY = zone?.cy ?? 50;
      }
      // No offset while traveling
      return { x: baseX, y: baseY };
    }

    const zone = ZONE_MAP.get(agent.currentZoneId);
    baseX = zone?.cx ?? 50;
    baseY = zone?.cy ?? 50;

    // Radial offset when multiple agents in same zone
    if (zoneCount > 1) {
      const angle = (2 * Math.PI * zoneIndex) / zoneCount - Math.PI / 2;
      const radius = Math.min(2.5, 1.2 + zoneCount * 0.15);
      baseX += Math.cos(angle) * radius;
      baseY += Math.sin(angle) * radius;
    }

    return { x: baseX, y: baseY };
  }, [agent.currentZoneId, agent.status, agent.travelPath, agent.travelStepIndex, agent.travelProgress, zoneIndex, zoneCount]);

  // Work particle emoji
  const workParticle = currentTask ? WORK_PARTICLES[currentTask.category] : null;

  // Flip direction based on travel
  const flipX = useMemo(() => {
    if (agent.status === 'traveling' && agent.travelPath.length > 1) {
      const fromIdx = agent.travelStepIndex;
      const toIdx = Math.min(fromIdx + 1, agent.travelPath.length - 1);
      const fromZone = ZONE_MAP.get(agent.travelPath[fromIdx]);
      const toZone = ZONE_MAP.get(agent.travelPath[toIdx]);
      if (fromZone && toZone && toZone.cx < fromZone.cx) return true;
    }
    return false;
  }, [agent.status, agent.travelPath, agent.travelStepIndex]);

  // Bobbing speed: faster when working
  const bobbingSpeed = agent.status === 'working' ? '0.3s' : '0.8s';

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      style={{
        position: 'absolute',
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: `translate(-50%, -100%) ${flipX ? 'scaleX(-1)' : ''}`,
        cursor: 'pointer',
        zIndex: isSelected ? 20 : 10,
        transition: 'left 0.1s linear, top 0.1s linear',
        filter: isSelected ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : undefined,
      }}
    >
      {/* Work particle — floating emoji */}
      {agent.status === 'working' && workParticle && (
        <div
          style={{
            position: 'absolute',
            top: -20,
            left: '50%',
            transform: `translateX(-50%) ${flipX ? 'scaleX(-1)' : ''}`,
            fontSize: 10,
            lineHeight: 1,
            pointerEvents: 'none',
            animation: `float-particle ${bobbingSpeed} ease-in-out infinite alternate`,
          }}
        >
          {workParticle}
        </div>
      )}
      {/* Status bubble */}
      {agent.status !== 'working' && (
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: `translateX(-50%) ${flipX ? 'scaleX(-1)' : ''}`,
            fontSize: 10,
            lineHeight: 1,
            pointerEvents: 'none',
          }}
        >
          {STATUS_ICONS[agent.status] ?? ''}
        </div>
      )}
      {/* Mini energy bar */}
      <div
        style={{
          position: 'absolute',
          bottom: -6,
          left: '50%',
          transform: `translateX(-50%) ${flipX ? 'scaleX(-1)' : ''}`,
          width: 16,
          height: 2,
          backgroundColor: '#000',
          borderRadius: 1,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: `${agent.energy}%`,
            height: '100%',
            backgroundColor: agent.energy > 50 ? '#4CAF50' : agent.energy > 25 ? '#FFC107' : '#f44336',
            borderRadius: 1,
          }}
        />
      </div>
      {/* Name label */}
      <div
        style={{
          position: 'absolute',
          bottom: -18,
          left: '50%',
          transform: `translateX(-50%) ${flipX ? 'scaleX(-1)' : ''}`,
          fontSize: '0.5rem',
          color: isSelected ? '#fff' : '#aaa',
          whiteSpace: 'nowrap',
          fontFamily: '"Press Start 2P", cursive',
          textShadow: '1px 1px 0 #000',
          pointerEvents: 'none',
        }}
      >
        {agent.name}
      </div>
      {/* Mini progress circle when working */}
      {agent.status === 'working' && currentTask && (
        <div
          style={{
            position: 'absolute',
            top: -8,
            right: -8,
            width: 10,
            height: 10,
            borderRadius: '50%',
            border: '1.5px solid #333',
            background: `conic-gradient(#4CAF50 ${currentTask.progress * 3.6}deg, #111 0deg)`,
            pointerEvents: 'none',
            transform: flipX ? 'scaleX(-1)' : undefined,
          }}
        />
      )}
      <div style={{ animation: agent.status !== 'resting' ? `sprite-bob ${bobbingSpeed} ease-in-out infinite alternate` : undefined }}>
        <RegenmonCharacter species={species} size="sm" animate={agent.status !== 'resting'} />
      </div>
      {/* CSS for animations */}
      <style>{`
        @keyframes float-particle {
          from { transform: translateX(-50%) translateY(0); opacity: 1; }
          to { transform: translateX(-50%) translateY(-6px); opacity: 0.5; }
        }
        @keyframes sprite-bob {
          from { transform: translateY(0); }
          to { transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
}

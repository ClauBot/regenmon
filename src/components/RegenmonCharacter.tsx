import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { RegenmonSpecies, RegenmonType } from '../types';
import { TYPE_CONFIG } from '../constants';
import { SPRITES, type SpriteDefinition } from '../sprites';

interface RegenmonCharacterProps {
  species: RegenmonSpecies;
  size?: 'sm' | 'lg';
  stats?: { happiness: number; energy: number; hunger: number };
  animate?: boolean;
}

/** Generate CSS box-shadow string from a pixel grid */
function buildBoxShadow(
  pixels: number[][],
  palette: Record<number, string>,
  rowOverrides?: Record<number, number[]>,
): string {
  const shadows: string[] = [];
  for (let y = 0; y < pixels.length; y++) {
    const row = rowOverrides?.[y] ?? pixels[y];
    for (let x = 0; x < row.length; x++) {
      const ci = row[x];
      if (ci === 0) continue;
      const color = palette[ci];
      if (!color) continue;
      shadows.push(`${x}px ${y}px 0 ${color}`);
    }
  }
  return shadows.join(',');
}

/* ─── Speech data ─── */

const TYPE_PHRASES: Record<RegenmonType, string[]> = {
  seed: ['¡Necesito sol!', 'Fotosíntesis...', '¡Al bosque!', '¡Crezco fuerte!'],
  drop: ['¡Splash!', 'Burbujitas~', '¡A nadar!', '¡Glub glub!'],
  spark: ['¡A las estrellas!', '¡Energía!', '¡Brillemos!', '¡Zum zum!'],
};

const STAT_PHRASES: { test: (s: NonNullable<RegenmonCharacterProps['stats']>) => boolean; phrases: string[] }[] = [
  { test: (s) => s.happiness < 30, phrases: ['Estoy triste...', '...'] },
  { test: (s) => s.energy < 30, phrases: ['Zzz... sueño', '...zZz'] },
  { test: (s) => s.hunger < 30, phrases: ['¡Tengo hambre!', '¡Comida!'] },
  { test: (s) => s.happiness > 70 && s.energy > 70 && s.hunger > 70, phrases: ['¡Estoy genial!', '¡Vamos!'] },
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ─── Keyframes ─── */

const KEYFRAMES = `
@keyframes rc-idle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes rc-speech-in {
  0% { opacity: 0; transform: translateX(-50%) translateY(6px) scale(0.8); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
}
@keyframes rc-speech-out {
  0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-4px) scale(0.9); }
}
`;

/* ─── Pixel character sub-component ─── */

const PIXEL_SIZE = { lg: 8, sm: 3 } as const;

function PixelCharacter({
  sprite,
  species,
  size,
  stats,
  animate,
}: {
  sprite: SpriteDefinition;
  species: RegenmonSpecies;
  size: 'sm' | 'lg';
  stats?: RegenmonCharacterProps['stats'];
  animate: boolean;
}) {
  const px = PIXEL_SIZE[size];
  const totalW = sprite.width * px;
  const totalH = sprite.height * px;
  const typeConfig = TYPE_CONFIG[species.type];

  const [isBlinking, setIsBlinking] = useState(false);
  const [speechText, setSpeechText] = useState<string | null>(null);
  const [speechPhase, setSpeechPhase] = useState<'in' | 'out' | null>(null);
  const blinkTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const speechTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  /* Blink loop */
  const scheduleBlink = useCallback(() => {
    if (!animate) return;
    blinkTimer.current = setTimeout(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        scheduleBlink();
      }, 120);
    }, 3000 + Math.random() * 2000);
  }, [animate]);

  useEffect(() => {
    scheduleBlink();
    return () => { if (blinkTimer.current) clearTimeout(blinkTimer.current); };
  }, [scheduleBlink]);

  /* Speech (lg only) */
  const canSpeak = size === 'lg' && animate;

  const getPhrase = useCallback((): string => {
    if (stats) {
      for (const rule of STAT_PHRASES) {
        if (rule.test(stats)) return pickRandom(rule.phrases);
      }
    }
    return pickRandom(TYPE_PHRASES[species.type]);
  }, [stats, species.type]);

  useEffect(() => {
    if (!canSpeak) return;
    const speak = () => {
      const phrase = getPhrase();
      setSpeechText(phrase);
      setSpeechPhase('in');
      setTimeout(() => {
        setSpeechPhase('out');
        setTimeout(() => { setSpeechText(null); setSpeechPhase(null); }, 400);
      }, 3000);
      speechTimer.current = setTimeout(speak, 6000 + Math.random() * 4000);
    };
    speechTimer.current = setTimeout(speak, 2000 + Math.random() * 3000);
    return () => { if (speechTimer.current) clearTimeout(speechTimer.current); };
  }, [canSpeak, getPhrase]);

  /* Memoised box-shadows */
  const normalShadow = useMemo(
    () => buildBoxShadow(sprite.pixels, sprite.palette),
    [sprite],
  );
  const blinkShadow = useMemo(
    () => buildBoxShadow(sprite.pixels, sprite.palette, sprite.blinkRows),
    [sprite],
  );

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: totalW,
        height: totalH,
        animation: animate ? 'rc-idle 2.5s ease-in-out infinite' : undefined,
      }}
    >
      {/* Speech bubble */}
      {speechText && size === 'lg' && (
        <div
          style={{
            position: 'absolute',
            top: -32,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            color: '#333',
            fontFamily: '"Press Start 2P", cursive',
            fontSize: '0.45rem',
            padding: '4px 8px',
            borderRadius: '6px',
            border: `2px solid ${typeConfig.color}`,
            maxWidth: 160,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            zIndex: 10,
            animation: speechPhase === 'in'
              ? 'rc-speech-in 0.3s ease-out forwards'
              : 'rc-speech-out 0.4s ease-in forwards',
            pointerEvents: 'none',
          }}
        >
          {speechText}
          <div
            style={{
              position: 'absolute',
              bottom: -6,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: `6px solid ${typeConfig.color}`,
            }}
          />
        </div>
      )}

      {/* Pixel art rendered via box-shadow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: px,
          height: px,
          boxShadow: isBlinking ? blinkShadow : normalShadow,
          transform: `scale(${px})`,
          transformOrigin: 'top left',
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
}

/* ─── Main export ─── */

export default function RegenmonCharacter({ species, size = 'lg', stats, animate = true }: RegenmonCharacterProps) {
  const sprite = SPRITES[species.id];

  if (sprite) {
    return (
      <>
        <style>{KEYFRAMES}</style>
        <PixelCharacter
          sprite={sprite}
          species={species}
          size={size}
          stats={stats}
          animate={animate}
        />
      </>
    );
  }

  // Fallback: plain emoji (should not happen now that all sprites are defined)
  return (
    <div style={{ fontSize: size === 'lg' ? '6rem' : '2rem', textAlign: 'center', lineHeight: 1.2 }}>
      {species.emoji}
    </div>
  );
}

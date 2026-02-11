import { useCallback, useEffect, useRef, useState } from "react";

const PENTATONIC_SCALE = [261.63, 293.66, 329.63, 392.0, 440.0]; // C4, D4, E4, G4, A4

const MELODY = [0, 2, 4, 3, 2, 0, 1, 3, 4, 2, 0, 3, 4, 4, 2, 0];

const NOTE_DURATION = 0.2; // 200ms per note
const GAIN_VALUE = 0.08;
const SCHEDULE_AHEAD_TIME = 0.1; // How far ahead to schedule (seconds)
const SCHEDULER_INTERVAL = 100; // How often the scheduler runs (ms)

export function useChiptuneMusic() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const schedulerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextNoteTimeRef = useRef(0);
  const currentNoteIndexRef = useRef(0);
  const isPlayingRef = useRef(false);

  const scheduleNote = useCallback(
    (frequency: number, time: number, ctx: AudioContext, gain: GainNode) => {
      const oscillator = ctx.createOscillator();
      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(frequency, time);
      oscillator.connect(gain);
      oscillator.start(time);
      oscillator.stop(time + NOTE_DURATION * 0.9);
    },
    []
  );

  const scheduler = useCallback(() => {
    const ctx = audioContextRef.current;
    const gain = gainNodeRef.current;
    if (!ctx || !gain || !isPlayingRef.current) return;

    while (nextNoteTimeRef.current < ctx.currentTime + SCHEDULE_AHEAD_TIME) {
      const noteIndex = MELODY[currentNoteIndexRef.current % MELODY.length];
      const frequency = PENTATONIC_SCALE[noteIndex];
      scheduleNote(frequency, nextNoteTimeRef.current, ctx, gain);

      nextNoteTimeRef.current += NOTE_DURATION;
      currentNoteIndexRef.current =
        (currentNoteIndexRef.current + 1) % MELODY.length;
    }

    schedulerIdRef.current = setTimeout(scheduler, SCHEDULER_INTERVAL);
  }, [scheduleNote]);

  const toggle = useCallback(() => {
    if (isPlayingRef.current) {
      // Stop
      isPlayingRef.current = false;
      setIsPlaying(false);

      if (schedulerIdRef.current !== null) {
        clearTimeout(schedulerIdRef.current);
        schedulerIdRef.current = null;
      }

      if (audioContextRef.current) {
        audioContextRef.current.suspend();
      }
    } else {
      // Start or resume
      if (audioContextRef.current) {
        audioContextRef.current.resume().then(() => {
          nextNoteTimeRef.current = audioContextRef.current!.currentTime;
          isPlayingRef.current = true;
          setIsPlaying(true);
          scheduler();
        });
        return;
      }

      const ctx = new AudioContext();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(GAIN_VALUE, ctx.currentTime);
      gain.connect(ctx.destination);

      audioContextRef.current = ctx;
      gainNodeRef.current = gain;

      nextNoteTimeRef.current = ctx.currentTime;
      currentNoteIndexRef.current = 0;

      isPlayingRef.current = true;
      setIsPlaying(true);

      scheduler();
    }
  }, [scheduler]);

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;

      if (schedulerIdRef.current !== null) {
        clearTimeout(schedulerIdRef.current);
        schedulerIdRef.current = null;
      }

      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
        gainNodeRef.current = null;
      }
    };
  }, []);

  return { isPlaying, toggle };
}

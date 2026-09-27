import { useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export type SoundType = "game" | "correct" | "wrong" | "winner" | "loser";

const SOUND_PATHS: Record<SoundType, string> = {
    game: '/sounds/Game.mp3',
    correct: '/sounds/Correct.mp3',
    wrong: '/sounds/Wrong.mp3',
    winner: '/sounds/Winner.mp3',
    loser: '/sounds/Loser.mp3',
};

export function useSoundEffect() {
    const bgMusicRef = useRef<HTMLAudioElement | null>(null);
    const activeEffectsRef = useRef<HTMLAudioElement[]>([]);

    const { isBgMusicMuted, isSoundEffectsMuted } = useSelector(
        (state: RootState) => state.settings
    );

    const stopBGmusic = useCallback(() => {
        if (bgMusicRef.current) {
            bgMusicRef.current.pause();
            bgMusicRef.current.currentTime = 0;
            bgMusicRef.current = null;
        }
    }, []);

    const stopSoundEffects = useCallback(() => {
        activeEffectsRef.current.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });
        activeEffectsRef.current = [];
    }, []);

    useEffect(() => {
        if (isBgMusicMuted) {
            stopBGmusic();
        }
    }, [isBgMusicMuted, stopBGmusic]);

    useEffect(() => {
        if (isSoundEffectsMuted) {
            stopSoundEffects();
        }
    }, [isSoundEffectsMuted, stopSoundEffects]);

    // تشغيل الأصوات مع التحقق من الإعدادات
    const playSound = useCallback((type: SoundType, volume: number = 0.5) => {
        try {
            const soundPath = SOUND_PATHS[type];
            if (!soundPath) return;

            // تشغيل موسيقى الخلفية
            if (type === 'game') {
                if (isBgMusicMuted) return;

                if (bgMusicRef.current && !bgMusicRef.current.paused) return;

                const bgAudio = new Audio(soundPath);
                bgAudio.volume = volume;
                bgAudio.loop = true;
                bgMusicRef.current = bgAudio;

                bgAudio.play().catch((err) => console.warn("Audio blocked:", err));
                return;
            }

            if (isSoundEffectsMuted) return; 

            const effectAudio = new Audio(soundPath);
            effectAudio.volume = volume;
            activeEffectsRef.current.push(effectAudio);

            effectAudio.onended = () => {
                activeEffectsRef.current = activeEffectsRef.current.filter((a) => a !== effectAudio);
            };

            effectAudio.play().catch((err) => console.warn("Audio blocked:", err));

        } catch (error) {
            console.error("Error playing sound:", error);
        }
    }, [isBgMusicMuted, isSoundEffectsMuted]);

    const stopSound = useCallback(() => {
        stopBGmusic();
        stopSoundEffects();
    }, [stopBGmusic, stopSoundEffects]);

    return { playSound, stopSound, stopBGmusic, stopSoundEffects };
}
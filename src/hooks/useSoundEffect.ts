import { useCallback, useRef } from "react";

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

    const playSound = useCallback((type: SoundType, volume: number = 0.5) => {
        try {
            const soundPath = SOUND_PATHS[type];
            if (!soundPath) return;

            if (type === 'game') {
                if (bgMusicRef.current && !bgMusicRef.current.paused) {
                    return;
                }

                const bgAudio = new Audio(soundPath);
                bgAudio.volume = volume;
                bgAudio.loop = true; 

                bgMusicRef.current = bgAudio;

                bgAudio.play().catch((error) => {
                    console.warn("Background music playback prevented by browser:", error);
                });
                return;
            }

            const effectAudio = new Audio(soundPath);
            effectAudio.volume = volume;

            activeEffectsRef.current.push(effectAudio);

            effectAudio.onended = () => {
                activeEffectsRef.current = activeEffectsRef.current.filter(a => a !== effectAudio);
            };

            effectAudio.play().catch((error) => {
                console.warn("Sound effect playback prevented by browser:", error);
            });

        } catch (error) {
            console.error("Error playing sound effect:", error);
        }
    }, []);

    const stopSound = useCallback(() => {
        if (bgMusicRef.current) {
            bgMusicRef.current.pause();
            bgMusicRef.current.currentTime = 0;
            bgMusicRef.current = null;
        }

        activeEffectsRef.current.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });
        activeEffectsRef.current = [];
    }, []);

    return { playSound, stopSound };
}
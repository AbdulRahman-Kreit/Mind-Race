import { createSlice } from "@reduxjs/toolkit";

export interface SettingsState {
    isBgMusicMuted: boolean;
    isSoundEffectsMuted: boolean;
}

const initialState: SettingsState = {
    isBgMusicMuted: localStorage.getItem("isBgMusicMuted") === "true",
    isSoundEffectsMuted: localStorage.getItem("isSoundEffectsMuted") === "true",
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleBgMusic: (state) => {
            state.isBgMusicMuted = !state.isBgMusicMuted;
            localStorage.setItem("isBgMusicMuted", String(state.isBgMusicMuted));
        },
        toggleSoundEffects: (state) => {
            state.isSoundEffectsMuted = !state.isSoundEffectsMuted;
            localStorage.setItem("isSoundEffectsMuted", String(state.isSoundEffectsMuted));
        },
    },
});

export const { toggleBgMusic, toggleSoundEffects } = settingsSlice.actions;
export default settingsSlice.reducer;
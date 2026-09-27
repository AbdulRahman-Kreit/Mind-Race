import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";
import settingsReducer from "../features/settings/settingsSlice";


export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        settings: settingsReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
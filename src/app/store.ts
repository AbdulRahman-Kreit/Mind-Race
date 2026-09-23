import { configureStore } from "@reduxjs/toolkit";
import quizReducer, { type QuizState } from "../features/quiz/quizSlice";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('mindrace_data');
        if (serializedState === null) return undefined;

        const parsedData = JSON.parse(serializedState);
        if (parsedData && parsedData.quiz && Array.isArray(parsedData.quiz.questions)) {
            return{
                quiz: parsedData.quiz,
            };
        }

        localStorage.removeItem('mindrace_data');
        return undefined;
    } catch(err) {
        return undefined;
    }
}

const saveState = (state: { quiz: QuizState; }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('mindrace_data', serializedState);
    } catch(err) {
        console.error('could not save data', err);
    }
    
}

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
    saveState({
        quiz: store.getState().quiz,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
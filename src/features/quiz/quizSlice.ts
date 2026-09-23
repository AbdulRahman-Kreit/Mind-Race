import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { questionsData } from "../../utils/questionData";

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
    id: number,
    question: string,
    options: string[],
    correctAnswer: string,
    category: string,
};

export interface QuizState {
    questions: Question[],
    currentQuestionIndex: number,
    score: number,
    isQuizOver: boolean,
    selectedCategory: string,
    selectedDifficulty: Difficulty,
    timeLimit: number,
    gameStatus: "idle" | "playing" | "finished",
}

const initialState: QuizState = {
    questions: questionsData,
    currentQuestionIndex: 0,
    score: 0,
    isQuizOver: false,
    selectedCategory: 'generals',
    selectedDifficulty: 'easy',
    timeLimit: 180,
    gameStatus: 'idle',
}


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answerQuestion: (state, action: PayloadAction<string>) => {
            const currentQuestion = state.questions[state.currentQuestionIndex];

            if (currentQuestion.correctAnswer === action.payload) {
                state.score += 10;
            }
            
            if (state.currentQuestionIndex + 1 < state.questions.length) {
                state.currentQuestionIndex += 1;
            } else {
                state.isQuizOver = true;
            }
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.score = 0;
            state.isQuizOver = false;
        },
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setDifficulty: (state, action) => {
            const Difficulty = action.payload;
            state.selectedDifficulty = Difficulty;

            switch (Difficulty) {
                case 'easy':
                    state.timeLimit = 180;
                    break;

                case 'medium':
                    state.timeLimit = 120;
                    break;

                case 'hard':
                    state.timeLimit = 60;
                    break;
            }
        },
        startGame: (state) => {
            state.gameStatus = "playing";
        },
        pauseGaem: (state) => {
            state.gameStatus = "idle";
        },
        finishGame: (state) => {
            state.gameStatus = "finished";
        }
    }
});

export const { 
    answerQuestion, 
    resetQuiz, 
    setCategory, 
    setDifficulty, 
    startGame, 
    pauseGaem, 
    finishGame,
} = quizSlice.actions;
export default quizSlice.reducer;
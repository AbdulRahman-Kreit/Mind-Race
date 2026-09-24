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
    categorizedQuestions: Question[],
    currentQuestionIndex: number,
    score: number,
    isQuizOver: boolean,
    selectedCategory: string,
    selectedDifficulty: Difficulty,
    timeLimit: number,
    gameStatus: "idle" | "playing" | "finished",
    streak: number,
}

const initialState: QuizState = {
    questions: questionsData,
    categorizedQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    isQuizOver: false,
    selectedCategory: 'generals',
    selectedDifficulty: 'easy',
    timeLimit: 180,
    gameStatus: 'idle',
    streak: 0,
}

function shuffleArray(array: Question[]): Question[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        startQuizByCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategory = action.payload;

            const categorized = state.questions.filter(
                (question) => question.category === action.payload
            );

            state.categorizedQuestions = shuffleArray(categorized);
            state.currentQuestionIndex = 0;
            state.score = 0;
            state.streak = 0;
            state.isQuizOver = false;
            state.gameStatus = "playing";
        },
        answerQuestion: (state, action: PayloadAction<string>) => {
            const currentQuestion = state.categorizedQuestions[state.currentQuestionIndex];
            if (!currentQuestion) return;

            if (currentQuestion.correctAnswer === action.payload) {
                state.score += 10;
                state.streak += 1;
            } else {
                state.streak = 0;
            }
            
            if (state.currentQuestionIndex + 1 < state.categorizedQuestions.length) {
                state.currentQuestionIndex += 1;
            } else {
                state.isQuizOver = true;
            }
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.score = 0;
            state.streak = 0;
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
        },
        timeDecrement: (state) => {
            if (state.timeLimit > 0) {
                state.timeLimit -= 1;
            } else {
                state.isQuizOver = true;
            }
        },
    }
});

export const { 
    startQuizByCategory,
    answerQuestion,
    resetQuiz, 
    setCategory, 
    setDifficulty, 
    startGame, 
    pauseGaem, 
    finishGame,
    timeDecrement,
} = quizSlice.actions;
export default quizSlice.reducer;
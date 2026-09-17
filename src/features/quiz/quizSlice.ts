import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { questionsData } from "../../utils/questionData";

// export type Category = 'programming' | 'history' | 'games' | 'generals';

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
}

const initialState: QuizState = {
    questions: questionsData,
    currentQuestionIndex: 0,
    score: 0,
    isQuizOver: false,
}


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answerQuestion: (state, action: PayloadAction<string>) => {
            const currentQuestion = state.questions[state.currentQuestionIndex];

            if (currentQuestion.correctAnswer === action.payload) {
                state.score += 1;
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
    }
});

export const { answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
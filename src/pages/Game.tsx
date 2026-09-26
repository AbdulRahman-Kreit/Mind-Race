import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import { answerQuestion, startQuizByCategory } from "@/features/quiz/quizSlice";
import { Card } from "@/components/ui/card";
import GameHeading from "@/components/GameHeading";
import ResultScreen from "./ResultScreen";

export default function Game() {
    const { 
        categorizedQuestions = [], 
        currentQuestionIndex, 
        selectedCategory, 
        gameResult
    } = useSelector((state: RootState) => state.quiz);

    const dispatch = useDispatch();
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    useEffect(() => {
        if (categorizedQuestions) {
            dispatch(startQuizByCategory(selectedCategory));
        }
    }, [dispatch, selectedCategory]);

    const currentQuestion = categorizedQuestions[currentQuestionIndex];

    useEffect(() => {
        setSelectedAnswer(null);
    }, [currentQuestionIndex]);

    const handleAnswerQuestion = (selectedOption: string) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(selectedOption);

        setTimeout(() => {
            dispatch(answerQuestion(selectedOption));
        }, 1000);
    };

    if (!currentQuestion) {
        return (
            <div className="flex justify-center items-center min-h-screen text-white text-2xl">
                Loading questions...
            </div>
        );
    }

    if (gameResult === 'win') {
        return (<ResultScreen 
            image="/assets/Winner.png"
            header="You Won!"
            text="Great job! You complete the game with an amazing score!" />);
    } else if (gameResult === 'lose') {
        return (<ResultScreen 
            image="/assets/Loser.png"
            header="Game Over!"
            text="Better luck next time! Keep practicing and you'll get it!" />);
    }


    return (
        <div className="flex flex-col min-h-screen max-w-7xl w-full mx-auto text-white py-5 px-10">
            <GameHeading />

            {/* Game Box */}
            <div className="flex flex-row justify-between mt-20">
                {/* Progress Bar */}
                <div className="flex flex-row items-center w-full">
                    <span className="w-9/10 h-8 bg-linear-to-r from-[#032b50] to-[#032749] rounded-2xl"></span>
                    <h4 className="text-2xl py-1.5 px-4 border border-[#032749] rounded-3xl ml-5">
                        {currentQuestionIndex + 1}/{categorizedQuestions.length}
                    </h4>
                </div>
            </div>

            {/* Question Card */}
            <Card className="flex flex-col items-start mt-12 p-6 w-full bg-linear-45 from-[#011527] to-[#011f3b] text-white border-2 border-[#143250]">
                <div className="text-[16px] text-[#F47718] py-2 px-4 border border-[#F47718] rounded-4xl">
                    {selectedCategory}
                </div>
                <p className="text-4xl mt-4">
                    {currentQuestion.question}
                </p>
            </Card>

            {/* Answer Cards */}
            <div className="flex flex-col md:grid grid-cols-2 gap-5 mt-10">
                {currentQuestion.options.map((answer, index) => {
                    const isCorrect = answer === currentQuestion.correctAnswer;
                    const isSelected = answer === selectedAnswer;

                    let cardStyles = "bg-[#02182D] border-[#143250] text-white";

                    if (selectedAnswer !== null) {
                        if (isCorrect) {
                            cardStyles = "bg-green-600/30 border-green-500 text-green-300";
                        } else if (isSelected) {
                            cardStyles = "bg-red-600/30 border-red-500 text-red-300";
                        }
                    }

                    return (
                        <Card 
                            key={index}
                            onClick={() => handleAnswerQuestion(answer)}
                            className={`p-4 text-xl border-2 transition ease-in-out duration-300 cursor-pointer ${cardStyles} ${
                                selectedAnswer === null ? "hover:bg-[#FD8226]/30 hover:border-[#FD8226]" : ""
                            }`}
                        >
                            {answer}
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGame, resetQuiz } from "@/features/quiz/quizSlice";
import type { AppDispatch } from "@/app/store";
import { Button } from "@base-ui/react/button";
import { Play, RotateCcw, Home } from "lucide-react";

export default function PauseMenu() {
    const dispatch = useDispatch<AppDispatch>();

    const handleResume = () => {
        dispatch(startGame());
    };

    const handleRestart = () => {
        dispatch(resetQuiz());
        dispatch(startGame());
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center text-white z-50">
            <div className="bg-[#02182D] border-2 border-[#143250] rounded-3xl p-8 flex flex-col items-center gap-6 min-w-[320px] shadow-2xl">
                <h2 className="text-3xl font-bold text-[#F47718] tracking-wider uppercase">
                    Game Paused
                </h2>

                <div className="flex flex-col w-full gap-4 mt-2">
                    <Button
                        onClick={handleResume}
                        className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#F47718] hover:bg-[#d66511] font-semibold text-lg rounded-xl transition-all cursor-pointer"
                    >
                        <Play className="w-5 h-5 fill-white" />
                        Resume
                    </Button>

                    <Button
                        onClick={handleRestart}
                        className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#143250] hover:bg-[#1c436b] font-semibold text-lg rounded-xl transition-all cursor-pointer"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Restart
                    </Button>

                    <Button
                        onClick={handleRestart}
                        className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#143250] hover:bg-[#1c436b] font-semibold text-lg rounded-xl transition-all cursor-pointer"
                    >
                      <Link to='/' className="flex flex-row items-center justify-center gap-x-3">
                        <Home className="w-5 h-5" />
                        Back to Menu
                      </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
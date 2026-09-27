import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { finishGame, timeDecrement, pauseGame } from "@/features/quiz/quizSlice";
import { Card } from "./ui/card";
import { Button } from "@base-ui/react/button";
import { Star, Clock, Flame, CircleX, Pause, type LucideIcon } from "lucide-react";

interface GameStat {
    id: number;
    label: string;
    value: string | number;
    icon: LucideIcon;
}

export default function GameHeading() {
    const { timeLimit, score, streak, wrongAnswers, gameStatus } = useAppSelector(state => state.quiz);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;

        if (gameStatus === 'playing' && timeLimit > 0) {
            intervalId = setInterval(() => {
                dispatch(timeDecrement());
            }, 1000);
        } else if (gameStatus === 'playing' && timeLimit === 0) {
            dispatch(finishGame());
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [gameStatus, timeLimit, dispatch]);

    const gameStats: GameStat[] = [
        { id: 1, label: "Time", value: timeLimit, icon: Clock },
        { id: 2, label: "Score", value: score, icon: Star },
        { id: 3, label: "Streak", value: streak, icon: Flame },
        { id: 4, label: "Wrong Answers", value: wrongAnswers, icon: CircleX },
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-y-4 lg:gap-y-0 px-2 sm:px-4">
            <div className="flex flex-row items-center justify-center sm:justify-start gap-x-3 w-full lg:w-auto">
                <img src="/assets/Logo.png" alt="Mind" className="w-10 h-10 sm:w-15 sm:h-15" />
                <h2 className="text-white text-2xl sm:text-3xl font-bold italic">
                    Mind <span className="text-[#F47718]">Race</span>
                </h2>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 items-center justify-center p-2 sm:p-4 w-full lg:w-auto">
                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto">
                    {gameStats.map((stat) => {
                        const IconComponent = stat.icon;

                        return (
                            <Card
                                key={stat.id}
                                className="flex flex-row items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 bg-[#02182D]/80 border-2 border-[#143250] rounded-2xl text-white min-w-0 sm:min-w-35 justify-center sm:justify-start"
                            >
                                <div className="p-1.5 sm:p-2 rounded-full bg-[#F47718]/10 text-[#F47718] flex items-center justify-center shrink-0">
                                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
                                </div>

                                <div className="flex flex-col min-w-0">
                                    <span className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                                        {stat.label}
                                    </span>
                                    <span className="text-sm sm:text-lg font-bold text-white tracking-wide truncate">
                                        {stat.value}
                                    </span>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <Button 
                    onClick={() => dispatch(pauseGame())}
                    className="w-12 h-12 sm:w-18 sm:h-18 p-0 rounded-2xl bg-[#02182D] border border-[#143250] hover:bg-[#041E35] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                    <Pause className="w-5! h-5! sm:w-8! sm:h-8! text-slate-100" strokeWidth={2.5} />
                </Button>
            </div>
        </div>
    );
}
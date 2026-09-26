import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Star, Flame, CheckCircle2, CircleX, Clock } from "lucide-react";

export default function ResultCard() {
    const { 
        score, 
        streak, 
        categorizedQuestions,
        correctAnswers,
        wrongAnswers, 
        timeLimit, 
        selectedDifficulty 
    } = useSelector((state: RootState) => state.quiz);

    const totalQuestions = categorizedQuestions.length;

    const initialTimeMap = { easy: 180, medium: 120, hard: 60 };
    const startTime = initialTimeMap[selectedDifficulty] || 180;
    const timeTakenSeconds = Math.max(0, startTime - timeLimit);

    const minutes = Math.floor(timeTakenSeconds / 60);
    const seconds = timeTakenSeconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const stats = [
        {
            id: "score",
            label: "Final Score",
            value: score,
            icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        },
        {
            id: "streak",
            label: "Best Streak",
            value: streak,
            icon: <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
        },
        {
            id: "correct",
            label: "Correct Answers",
            value: `${correctAnswers} / ${totalQuestions}`,
            icon: <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-500/20" />
        },
        {
            id: "wrong",
            label: "Wrong Answers",
            value: `${wrongAnswers}`,
            icon: <CircleX className="w-6 h-6 text-red-400 fill-emerald-500/20" />
        },
        {
            id: "time",
            label: "Time Taken",
            value: formattedTime,
            icon: <Clock className="w-6 h-6 text-sky-400" />
        }
    ];

    return (
        <div className="w-full max-w-200 mx-auto bg-[#031629]/80 backdrop-blur-md border border-[#0d2d4c] rounded-2xl p-4 shadow-xl text-white">
            <div className="flex flex-col divide-y divide-[#0d2d4c]">
                {stats.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-3.5 px-2">

                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center">
                                {item.icon}
                            </div>
                            <span className="text-lg text-slate-300 font-medium">
                                {item.label}
                            </span>
                        </div>

                        <span className="text-xl font-bold text-[#f59e0b] tracking-wide">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
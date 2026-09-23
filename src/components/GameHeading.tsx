import { Card } from "./ui/card";
import { Button } from "@base-ui/react/button";
import { Star, Clock, Flame, Pause, type LucideIcon } from "lucide-react";

interface GameStat {
    id: number;
    label: string;
    value: string | number;
    icon: LucideIcon;
}

const gameStats: GameStat[] = [
    { id: 1, label: "Time", value: "00:45", icon: Clock },
    { id: 2, label: "Score", value: "150", icon: Star },
    { id: 3, label: "Streak", value: 3, icon: Flame },
];

export default function GameHeading() {
    return (
        <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row items-center gap-x-3">
                <img src="/assets/Logo.png" alt="Mind"
                className="w-15 h-15" />
                    <h2 className="text-white text-3xl font-bold italic">
                        Mind <span className="text-[#F47718]">Race</span>
                    </h2>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center p-4">
                {gameStats.map((stat) => {
                    const IconComponent = stat.icon;

                    return (
                    <Card
                        key={stat.id}
                        className="flex flex-row items-center gap-3 px-5 py-3 bg-[#02182D]/80 border-2 border-[#143250] rounded-2xl text-white min-w-[140px]"
                    >
                        <div className="p-2 rounded-full bg-[#F47718]/10 text-[#F47718] flex items-center justify-center">
                            <IconComponent className="w-6 h-6 stroke-[2.5]" />
                            </div>

                            <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-medium">
                                {stat.label}
                            </span>
                            <span className="text-lg font-bold text-white tracking-wide">
                                {stat.value}
                            </span>
                        </div>
                    </Card>
                    );
                })}
                <Button 
                    className="w-18 h-18 p-0 rounded-2xl bg-[#02182D] border border-[#143250] hover:bg-[#041E35] flex items-center justify-center transition-colors cursor-pointer"
                >
                    <Pause className="w-8! h-8! text-slate-100" strokeWidth={2.5} />
                </Button>
            </div>
        </div>
    )
}

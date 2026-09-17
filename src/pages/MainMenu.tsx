import { Link } from "react-router-dom";
import { Play, Settings, CircleQuestionMark } from "lucide-react";
import { Button } from "@/components/ui/button";

const resizeBG = `bg-[url(/assets/Mobile_bg.png)] md:bg-[url(/assets/Tablet_bg.png)] lg:bg-[url(/assets/Desktop_bg.png)] bg-cover bg-center`;

export default function MainMenu() {
    return (
        <div className={`${resizeBG} min-h-screen w-full text-white pt-44`}>
            <div className="flex flex-col items-center justify-center">
                <img 
                    src="/assets/Logo.png" 
                    alt="Mind Race Logo"
                    className="w-28 h-28 md:w-54 md:h-54 lg:w-64 lg:h-64" 
                />
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold italic mb-2">
                    Mind <span className="text-[#F47718]">Race</span>
                </h1>
                <p className="text-white text-lg">
                    Think Fast. Score High
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-5 mt-10">
                <Button variant="main" size="xl">
                    <Link 
                        to="/choose-game" 
                        className="flex flex-row items-center justify-center w-full h-full gap-x-5"
                    >
                        <Play strokeWidth={3} className="w-5! h-5! md:w-6! md:h-6!" /> 
                        Start Game
                    </Link>
                </Button>

                <Button variant="dark" size="xl">
                    <Link 
                        to="/settings"
                        className="flex flex-row items-center justify-center w-full h-full gap-x-5"
                    >
                        <Settings strokeWidth={3} className="w-5! h-5! md:w-6! md:h-6!" /> 
                        Settings
                    </Link>
                </Button>

                <Button variant="dark" size="xl">
                    <Link 
                        to="/how-to-play"
                        className="flex flex-row items-center justify-center w-full h-full gap-x-5"
                    >
                        <CircleQuestionMark strokeWidth={3} className="w-5! h-5! md:w-6! md:h-6!" /> 
                        How to Play
                    </Link>
                </Button>
            </div>
        </div>
    );
}
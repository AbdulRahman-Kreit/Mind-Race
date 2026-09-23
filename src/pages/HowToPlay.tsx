import PageHeading from "@/components/PageHeading";
import { type LucideIcon, Brain, MousePointerClick, Star, Trophy, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Items {
    id: number, 
    title: string,
    description: string,
    icon: LucideIcon
}

const howToPlay: Items[] = [
    { id: 1, title: 'Read the Question', description: 'A multiple choise question will appear with 4 possible answers.', icon: Brain },
    { id: 2, title: 'Choose an Answer', description: 'Tab the option you think is correct before the timer runs out.', icon: MousePointerClick },
    { id: 3, title: 'Earn Points', description: 'Get points for correct answers and build your streak.', icon: Star },
    { id: 4, title: 'Reach the Goal', description: 'Complete all questions and achieve the highest score!', icon: Trophy },
];

export default function HowToPlay() {
    return (
        <div className="min-h-screen max-w-7xl w-full mx-auto text-white py-5 px-10">
            <PageHeading title="How to Play" />
            {/* Info Box */}
            <div className="flex flex-col justify-center items-center w-full my-10 
            p-10 bg-[#02182D] rounded-2xl border-2 border-[#143250]">
                <div>
                    {howToPlay.map((item) => {
                        const IconComponent = item.icon;

                        return(
                            <div key={item.id} className="flex flex-row items-start my-5">
                                <div className="flex items-center justify-center 
                                w-14 h-14 lg:w-18 lg:h-18 border-2 border-[#FD8226] 
                                rounded-full mr-8">
                                    <IconComponent color="#FD8226" strokeWidth={2}
                                    className="w-5! h-5! lg:w-8! lg:h-8!" />
                                </div>
                            
                                <div>
                                    <h4 className="text-lg lg:text-2xl font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm lg:text-lg text-[#A3BFDB]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <Button variant="main" size="xl">
                <Link 
                    to="/choose-game" 
                    className="flex flex-row items-center justify-center w-full h-full gap-x-5"
                >
                    <Play strokeWidth={3} className="w-5! h-5! md:w-6! md:h-6!" />
                    Let's Play!
                </Link>
            </Button>
            </div>
        </div>
    )
}

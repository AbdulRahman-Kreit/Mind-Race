import PageHeading from "@/components/PageHeading";
import { Globe, CodeXml, Landmark, Gamepad2, Play, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Items {
    id: number,
    name: string,
    icon: LucideIcon,
}

const categories: Items[] = [
    { id: 1, name: 'Generals', icon: Globe },
    { id: 2, name: 'Programming', icon: CodeXml },
    { id: 3, name: 'History', icon: Landmark },
    { id: 4, name: 'Gaming', icon: Gamepad2 },
];

const difficulty = [
    { id: 1, name: 'Easy', color: 'bg-[#0FD073]' },
    { id: 2, name: 'Medium', color: 'bg-[#F74727]' },
    { id: 3, name: 'Hard', color: 'bg-[#FF4744]' },
];

const subheadingStyle = `text-lg lg:text-2xl font-semibold mb-5`;

export default function ChooseGame() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen 
        max-w-7xl w-full mx-auto text-white py-5 px-10">
            <PageHeading title="Choose Your Game" />
            {/* Options Box */}
            <div className="flex flex-col w-full my-10 p-10 bg-[#02182D] rounded-2xl 
            border-2 border-[#143250]">
                <h2 className="text-lg lg:text-3xl font-semibold mb-5">
                    Choose Your Game
                </h2>
                <div className="flex flex-col w-full my-10">
                    <h3 className={subheadingStyle}>
                        Select Category
                    </h3>
                    <div className="flex flex-row gap-x-10">
                        {categories.map((categorie) => {
                            const IconComponent = categorie.icon;

                            return (
                                <Button key={categorie.id} variant="option" size="optionSize"
                                className="transition ease-in-out duration-300 
                                hover:bg-[#FD8226]/30 hover:border-[#FD8226]">
                                    <IconComponent className="w-8! h-8! mb-4
                                    transition ease-in-out duration-300
                                    text-[#A3BFDB]! hover:text-[#FD8226]!" 
                                    strokeWidth={2.5} />
                                    <h4 className="text-[#A3BFDB]">
                                        {categorie.name}
                                    </h4>
                                </Button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col w-full my-10">
                    <h3 className={subheadingStyle}>
                        Select Difficulty
                    </h3>
                    <div className="flex flex-row gap-x-10">
                        {difficulty.map((item) => {

                            return(
                            <Button variant="difficulty" size="diffSize" key={item.id}
                            className="transition ease-in-out duration-300 
                            hover:bg-[#FD8226]/30 hover:border-[#FD8226]">
                                <span className={`w-4 h-4 rounded-full ${item.color} mr-3`}></span>
                                <h4>
                                    {item.name}
                                </h4>
                            </Button>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Button variant="main" size="xl">
                    <Link 
                        to="/game" 
                        className="flex flex-row items-center justify-center w-full h-full gap-x-5"
                    >
                        <Play strokeWidth={3} className="w-5! h-5! md:w-6! md:h-6!" /> 
                        Start Game
                    </Link>
                </Button>
        </div>
    )
}

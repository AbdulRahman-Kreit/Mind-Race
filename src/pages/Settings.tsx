import PageHeading from "@/components/PageHeading";
import { Button } from "@base-ui/react/button";
import { Volume1, Music, type LucideIcon } from "lucide-react";

interface PrefrenceItems {
    id: number, 
    name: string,
    icon: LucideIcon,
}

const prefrences: PrefrenceItems[] = [
    { id: 1, name: 'Sound Effects', icon: Volume1 },
    { id: 2, name: 'Background Music', icon: Music },
];

export default function Settings() {
    return (
        <div className="min-h-screen max-w-7xl w-full mx-auto text-white py-5 px-10">
            <PageHeading title="Settings" />
            {/* Settings Box */}
            <div className="flex flex-col w-full my-20 bg-[#02182D] rounded-2xl 
            border-2 border-[#143250]">
                <div className="w-full bg-linear-to-r from-[#041E35] via-[#143250] 
                to-[#041E35] border-b-2 border-[#143250] p-5">
                    <h2 className="text-2xl font-semibold">
                        Game Prefrences
                    </h2>
                </div>
                {prefrences.map((pref) => {
                    const IconComponent = pref.icon;

                    return(
                        <div key={pref.id} className="flex flex-row justify-between 
                        border-b-2 border-[#143250] last:border-none p-5">
                            <div className="flex flex-row text-xl font-semibold gap-x-3">
                                <IconComponent strokeWidth={3} className="w-6 h-6" />
                                <p className="">
                                    {pref.name}
                                </p>
                            </div>
                            <div>
                                <Button className="w-18 h-10 rounded-4xl border-2 
                                border-[#143250] cursor-pointer">
                                    <span className="block w-7 h-7 rounded-full 
                                    bg-[#c2d6ea] z-20 ml-1"></span>
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

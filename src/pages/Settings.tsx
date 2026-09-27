import { useAppDispatch, useAppSelector } from "@/app/hook";
import { toggleBgMusic, toggleSoundEffects } from "@/features/settings/settingsSlice";
import PageHeading from "@/components/PageHeading";
import { Button } from "@base-ui/react/button";
import { Volume1, Music, type LucideIcon } from "lucide-react";

interface PreferenceItem {
    id: number; 
    name: string;
    icon: LucideIcon;
    type: "effects" | "music";
}

const preferences: PreferenceItem[] = [
    { id: 1, name: 'Sound Effects', icon: Volume1, type: "effects" },
    { id: 2, name: 'Background Music', icon: Music, type: "music" },
];

export default function Settings() {
    const { isBgMusicMuted, isSoundEffectsMuted } = useAppSelector(state => state.settings);
    const dispatch = useAppDispatch();

    const handleToggle = (type: "effects" | "music") => {
        if (type === "music") {
            dispatch(toggleBgMusic());
        } else {
            dispatch(toggleSoundEffects());
        }
    };

    return (
        <div className="min-h-screen max-w-7xl w-full mx-auto text-white py-5 px-10">
            <PageHeading title="Settings" />
            
            <div className="flex flex-col w-full my-20 bg-[#02182D] rounded-2xl border-2 border-[#143250]">
                <div className="w-full bg-linear-to-r from-[#041E35] via-[#143250] to-[#041E35] border-b-2 border-[#143250] p-5">
                    <h2 className="text-2xl font-semibold">
                        Game Preferences
                    </h2>
                </div>

                {preferences.map((pref) => {
                    const IconComponent = pref.icon;
                    
                    const isMuted = pref.type === "music" ? isBgMusicMuted : isSoundEffectsMuted;
                    const isActive = !isMuted;

                    return (
                        <div 
                            key={pref.id} 
                            className="flex flex-row justify-between items-center border-b-2 border-[#143250] last:border-none p-5"
                        >
                            <div className="flex flex-row items-center text-xl font-semibold gap-x-3">
                                <IconComponent strokeWidth={3} className="w-6 h-6" />
                                <p>{pref.name}</p>
                            </div>

                            <div>
                                <Button 
                                    onClick={() => handleToggle(pref.type)}
                                    className={`w-18 h-10 rounded-full border-2 border-[#143250] cursor-pointer transition-colors duration-300 flex items-center p-1 ${
                                        isActive ? "bg-[#F47718]" : "bg-[#041E35]"
                                    }`}
                                >

                                    <span 
                                        className={`block w-7 h-7 rounded-full bg-[#c2d6ea] transition-transform duration-300 ${
                                            isActive ? "translate-x-8 bg-white" : "translate-x-0"
                                        }`}
                                    />
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
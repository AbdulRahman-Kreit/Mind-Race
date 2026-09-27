import BackButton from "./BackButton";

// تعريف أنواع الخصائص الخاصة بالمكوّن
interface PageHeadingProps {
    title: string;
}

export default function PageHeading({ title }: PageHeadingProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-y-4 sm:gap-y-0">

            <div className="flex flex-row items-center gap-x-3 sm:gap-x-5 w-full sm:w-auto justify-start">
                <BackButton />
                <h2 className="text-xl sm:text-2xl text-white font-semibold">
                    {title}
                </h2>
            </div>

            <div className="flex flex-row items-center gap-x-3 sm:gap-x-5">
                <img 
                    src="/assets/Logo.png" 
                    alt="Mind" 
                    className="w-10 h-10 sm:w-15 sm:h-15 object-contain" 
                />
                <h2 className="text-white text-2xl sm:text-3xl font-bold italic">
                    Mind <span className="text-[#F47718]">Race</span>
                </h2>
            </div>
        </div>
    );
}
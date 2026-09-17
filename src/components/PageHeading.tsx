import BackButton from "./BackButton"

interface PageHeading {
    title: string,
}

export default function PageHeading({ title } : PageHeading) {
    return (
        <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row items-center gap-x-5">
                <BackButton />
                <h2 className="text-2xl text-white font-semibold ml-5">
                    {title}
                </h2>
            </div>
            <div className="flex flex-row items-center gap-x-5">
                <img src="/assets/Logo.png" alt="Mind"
                className="w-15 h-15" />
                    <h2 className="text-white text-3xl font-bold italic">
                        Mind <span className="text-[#F47718]">Race</span>
                    </h2>
            </div>
        </div>
    )
}

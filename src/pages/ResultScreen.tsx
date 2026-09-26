import ResultCard from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RotateCcw, House } from "lucide-react";

type PropsType = {
  image: string,
  header: string,
  text: string,
}

const resizeBG = `bg-[url(/assets/Mobile_bg.png)] md:bg-[url(/assets/Tablet_bg.png)] 
lg:bg-[url(/assets/Desktop_bg.png)] bg-cover bg-center`;

export default function ResultScreen({ image, header, text }: PropsType ) {
  return (
  <div className={`${resizeBG} absolute flex flex-col lg:flex-row justify-center items-center mx-auto w-full min-h-screen 
  text-center text-2xl text-white z-50`}>
      <div className="flex flex-col justify-center items-center gap-y-5 text-center w-100 lg:w-3/10">
        <img src={image} alt="Loser"
        className="w-70 h-70" />
        <h1 className="text-5xl font-bold">
          {header}
        </h1>
        <p className="text-lg font-thin opacity-80">
          {text}
        </p>
      </div>
      <div className="my-7 lg:w-3/10 w-9/10">
        <ResultCard />
        <div className="flex flex-col justify-center items-center gap-y-5 my-7">
        <Button variant="main" size="xl">
          <Link 
            to="/choose-game" 
            className="flex flex-row items-center justify-center w-full h-full gap-x-5">
              <RotateCcw strokeWidth={3} className="w-5! h-5! md:w-6! md:h-6!" /> 
              Play Again
          </Link>
        </Button>
        <Button variant="dark" size="xl">
          <Link 
            to="/"
            className="flex flex-row items-center justify-center w-full h-full gap-x-5">
              <House strokeWidth={3} className="w-5! h-5! md:w-6! md:h-6!" />
              Back to Menu
          </Link>
        </Button>
      </div>
      </div>
      
    </div>
  )
}

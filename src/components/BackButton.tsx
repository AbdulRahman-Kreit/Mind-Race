import { useNavigate } from "react-router-dom";
import { Button } from "@base-ui/react/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <Button onClick={handleGoBack}
        className='flex items-center p-3 rounded-lg border border-[#334155] 
        bg-[#081e33] text-white hover:bg-[#334155] transition ease-in-out 
        duration-300 '>
            <ArrowLeft strokeWidth={3} />
        </Button>
    )
}

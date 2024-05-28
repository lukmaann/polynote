import { Crown } from "lucide-react";

const PrimimumButton=()=>{
    return <button className="text-[15px] group flex gap-2 items-center " >
        <Crown className="group-hover:text-yellow-500"/>
       <h1 className="max-sm:hidden">Get pro</h1>
    </button>
}

export default PrimimumButton;
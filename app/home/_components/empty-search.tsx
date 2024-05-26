import Image from "next/image";
import { Coffee } from 'lucide-react';



const EmptySearch=()=>{
    return(
        <div className="flex flex-col justify-center items-center">
            <Image src={"/noresults.gif"} width={400} height={400} alt="no Results"/>
        <h1 className="text-lg max-sm:text-sm  text-center capitalize text-gray-500 p-5">Zero results found.  Please try another search. </h1>

            
        </div>

    )
}

export default EmptySearch;
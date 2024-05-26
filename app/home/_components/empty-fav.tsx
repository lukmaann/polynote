import Image from "next/image";



const EmptyFav=()=>{
    return(
        <div className="flex flex-col justify-center items-center">
            <Image src={"/nofav.gif"} width={300} height={300} className="rounded-full mb-20" alt="no Results"/>
        <h1 className="text-lg max-sm:text-sm  text-center capitalize text-gray-500 p-5">you have not added any canvas as favorites yet!! </h1>

            
        </div>

    )
}

export default EmptyFav;
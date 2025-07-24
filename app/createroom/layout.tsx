"use client"
import Loader from "@/components/ui/auth/loading";
import Navbar from "./_components/Navbar";

import { useConvexAuth } from "convex/react";


interface homeLayoutProps {
    children: React.ReactNode;
}


const HomeLayout = ({ children }: homeLayoutProps) => {

    const { isLoading } = useConvexAuth();

    if (isLoading) {
        return <div className="h-[100vh] flex justify-center items-center">
            <Loader />
        </div>
    } else {
        return (
            <main className="h-[100vh] w-full flex ">
                {/* <div className="w-[70%] max-sm:w-full"> */}
                {/* <Navbar/>  */}
                {children}
                {/* </div> */}
                {/* <div className="w-[30%] max-sm:hidden bg-[url('/stones.gif')] flex justify-center items-center p-10">

                    <div className="bg-gray-950 rounded-lg text-white p-5 text-xl font-bold ">
                    Spark Ideas Together: Create or Join a Workspace to Begin!

                    </div>

                </div> */}
                    

            </main>
        )
    }

}

export default HomeLayout;
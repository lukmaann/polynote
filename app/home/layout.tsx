"use client"
import Loader from "@/components/ui/auth/loading";
import SideBar from "./_components/sidebar";
import { useConvexAuth } from "convex/react";
import OrgSidebar from "./_components/org-sidebar";
import Navbar from "./_components/navbar";


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
            <main className="h-[100vh]  ">
                {/* <SideBar /> */}
                <div className=" h-full">
                    <div className=" h-full flex gap-x-3">
                        
                        <OrgSidebar />
                        <div className="h-full flex-1  ">
                            <Navbar />
                            {children}
                        </div>
                    </div>
                </div>

            </main>
        )
    }

}

export default HomeLayout;
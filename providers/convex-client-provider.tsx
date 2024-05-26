"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
    AuthLoading,
    Authenticated,

    ConvexReactClient
} from "convex/react";
import Loader from "@/components/ui/auth/loading";

interface convexProviderProps {
    children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);
const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const ConvexClientProvider = ({ children }: convexProviderProps) => {
    // const {isLoading,isAuthenticated}=useConvexAuth();

    return (
        <ClerkProvider publishableKey={key}>

            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>



{/* 
                <AuthLoading>
                    <Loader />
                </AuthLoading>
                <Authenticated>
                    {children}
                </Authenticated> */}
                {children}




            </ConvexProviderWithClerk>
        </ClerkProvider>
    )

}

export default ConvexClientProvider;
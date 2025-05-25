"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import Loader from "@/components/ui/auth/loading";

interface ConvexProviderProps {
    children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const ConvexClientProvider = ({ children }: ConvexProviderProps) => {
    return (
        <ClerkProvider publishableKey={clerkKey}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}

export default ConvexClientProvider;

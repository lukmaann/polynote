import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/providers/convex-client-provider";

const inter = Roboto({ weight:'300',subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeDraw",
  description: "By lukmaan nadaf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>

        {children}
        </ConvexClientProvider>




      </body>
    </html>
  );
}

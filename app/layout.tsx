import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { Toaster } from "sonner";
import ModalProvider from "@/providers/modal-provider";

const inter = Poppins({ weight: ['600', '400'], subsets: ["latin"] });

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
      <body className={`${inter.className} w-[100vw]`}>

        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Produktový portál",
  description:
    "Srovnáve produkty. Nebo jsme možná kuponový portál? Či cashback portál?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="m-4 p-4 flex flex-col max-w-screen-xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

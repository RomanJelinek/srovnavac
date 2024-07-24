import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Co dělat v Praze? Máme pro vás tipy na Zážitky v Praze",
  description:
    "Objevte nejlepší aktivity v Praze! Průvodce historií, kulturou, gastronomií a zábavou. Najděte ty nejlepší tipy na zážitky v tomto kouzelném městě.",
  alternates: {
    canonical: "./",
  },
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

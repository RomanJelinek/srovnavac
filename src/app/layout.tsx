import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEB_URL),
  title: "Co dělat v Praze? Skvělé tipy na Zážitky Praha",
  description:
    "Objevte nejlepší aktivity v Praze! Průvodce historií, kulturou, gastronomií a zábavou. Najděte ty nejlepší tipy na zážitky v tomto kouzelném městě.",
  alternates: {
    canonical: "./",
  },
  other: { 'google-site-verification': "3Nd7Utfql33iA-ffbLFqal4t2QqrhIifGq7TAa60Yfg" },
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
      <GoogleAnalytics gaId="G-DFZ6KMEP62" />
    </html>
  );
}

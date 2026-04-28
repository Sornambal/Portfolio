import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseGlow from "@/components/MouseGlow";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Sornambal P | AI & Machine Learning Engineer",
  description: "Portfolio of Sornambal P, building intelligent systems that solve real-world problems using Generative AI and Machine Learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable}`}>
        <MouseGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

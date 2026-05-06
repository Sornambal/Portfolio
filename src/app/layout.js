import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const outfit = Outfit({ subsets: ["latin"], variable: "--font-body", weight: ["300", "400", "500", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Sornambal P | AI & Machine Learning Engineer",
  description: "Portfolio of Sornambal P, building intelligent systems that solve real-world problems using Generative AI and Machine Learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable}`}>
        {/* Removed MouseGlow for a cleaner, more professional look */}
        <Navbar />
        {/* Removed floating N button, Turbopack debug, and any Next.js branding */}
        {children}
      </body>
    </html>
  );
}

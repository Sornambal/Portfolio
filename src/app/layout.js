import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Sornambal P | AI & Machine Learning Engineer",
  description: "Portfolio of Sornambal P, building intelligent systems that solve real-world problems using Generative AI and Machine Learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-body", weight: ["300", "400", "500", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Sornambal P | AI & Machine Learning Engineer",
  description: "Portfolio of Sornambal P, building intelligent systems that solve real-world problems using Generative AI and Machine Learning.",
  openGraph: {
    title: "Sornambal P | AI & Machine Learning Engineer",
    description: "Portfolio of Sornambal P, building intelligent systems that solve real-world problems using Generative AI and Machine Learning.",
    url: "https://sornambal.ai",
    siteName: "Sornambal P Portfolio",
    images: [
      {
        url: "https://sornambal.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sornambal P Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sornambal P | AI & Machine Learning Engineer",
    description: "Portfolio of Sornambal P, building intelligent systems that solve real-world problems using Generative AI and Machine Learning.",
    images: ["https://sornambal.ai/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${outfit.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

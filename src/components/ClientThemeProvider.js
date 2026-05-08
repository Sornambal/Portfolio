"use client";

import { ThemeProvider } from "@/components/ThemeProvider";

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}

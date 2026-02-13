import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "KEIPO Housewares | Global Trading Portfolio",
  description: "Futuristic housewares global trading company with 20 years of expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased scanline cyber-mesh min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

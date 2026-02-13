import type { Metadata } from "next";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ThemeProvider } from "next-themes";
/* globals.css를 다른 컴포넌트보다 먼저 임포트하여 스타일 우선순위 확보 */
import "./globals.css";

export const metadata: Metadata = {
  title: "KEIPO Housewares | Global Trading",
  description: "Experience the next generation of global trading with KEIPO Housewares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ThemeProvider } from "next-themes";
/* globals.css를 다른 컴포넌트보다 먼저 임포트하여 스타일 우선순위 확보 */
import "./globals.css";

export const metadata: Metadata = {
  title: "KEIPO Housewares",
  description: "Experience the next generation of global trading with KEIPO Housewares.",
  openGraph: {
    title: "KEIPO Housewares",
    description: "Experience the next generation of global trading with KEIPO Housewares.",
    url: "https://js-s2-yj.github.io/Keipo-housewares",
    siteName: "KEIPO Housewares",
    images: [
      {
        url: "https://js-s2-yj.github.io/Keipo-housewares/images/main_logo_v2.png",
        width: 1200,
        height: 630,
        alt: "KEIPO Housewares",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KEIPO Housewares",
    description: "Experience the next generation of global trading with KEIPO Housewares.",
    images: ["https://js-s2-yj.github.io/Keipo-housewares/images/main_logo_v2.png"],
  },
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

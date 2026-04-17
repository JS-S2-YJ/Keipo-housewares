import type { Metadata } from "next";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const PRETENDARD_VARIABLE_URL =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/PretendardVariable.woff2";

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
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="preload" as="font" type="font/woff2" href={PRETENDARD_VARIABLE_URL} crossOrigin="" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Pretendard';
            font-weight: 45 920;
            font-style: normal;
            font-display: swap;
            src: url('${PRETENDARD_VARIABLE_URL}') format('woff2-variations');
          }
        ` }} />
      </head>
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

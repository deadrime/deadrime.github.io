import type { Metadata, ResolvingMetadata } from "next";
import { Inter, Fira_Code, Comfortaa, Roboto, Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import classNames from "classnames";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Providers } from "./providers";

const primaryFont = localFont({
  src: "../fonts/IgraSans.woff2",
  weight: '400',
  style: 'normal',
  variable: '--font-primary',
})

const fontTextBase = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-base',
})

const firaCode = Fira_Code({
  subsets: ["latin", "cyrillic"],
  variable: '--font-fira',
  display: 'swap',
});

const Logo = () => {
  return <span></span>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          primaryFont.variable,
          firaCode.variable,
          fontTextBase.variable,
          // 'dark',
          'min-h-screen flex flex-col gap-4'
        )}>
        <Providers>
          <header>
            <ThemeSwitcher />
          </header>
          <main style={{
            maxWidth: 1200,
            padding: '0 32px',
            margin: '0 auto'
          }}>
            {children}
          </main>
          <footer className="mt-auto">TODO: Footer</footer>
        </Providers>
      </body>
    </html>
  );
}

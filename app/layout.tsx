import type { Metadata, ResolvingMetadata } from "next";
import { Inter, Fira_Code, Comfortaa, Roboto, Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import classNames from "classnames";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Providers } from "./providers";
import Link from "next/link";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.locale('ru');

const primaryFont = localFont({
  src: "../fonts/IgraSans.woff2",
  weight: '400',
  style: 'normal',
  variable: '--font-primary',
});

const fontTextBase = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-base',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ["latin", "cyrillic"],
  variable: '--font-fira',
  display: 'swap',
});

const Logo = () => {
  return <Link href={"/"} className="font-code text-md">{'<'}Zhenya{'>'}</Link>
}

const FooterLogo = () => {
  return <Link href={"/"} className="font-code text-md">{'</'}Zhenya{'>'}</Link>
}

// TODO: Think about
const themeHydration = `
!function() {
  const preferredDarkModeBySystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("selectedTheme");
  const theme = savedTheme ? savedTheme : preferredDarkModeBySystem ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
}();
`;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(
          primaryFont.variable,
          firaCode.variable,
          fontTextBase.variable,
          // 'dark',
          'min-h-screen flex flex-col gap-4'
        )}>
        <script id="theme-hydration"
          dangerouslySetInnerHTML={{ __html: themeHydration }}
        />
        <Providers>
          <header style={{
            maxWidth: 1180,
          }} className="w-full mx-auto px-3 md:px-8 py-4 flex items-center">
            <Logo />
            <ThemeSwitcher className="ml-auto" />
          </header>
          <main style={{
            maxWidth: 1180,
          }} className="w-full mx-auto px-3 md:px-8 py-4">
            {children}
          </main>
          <footer
            style={{ maxWidth: 1180 }}
            className="w-full mx-auto px-3 md:px-8 py-4 mt-auto"
          >
            <FooterLogo />
          </footer>
        </Providers>
      </body>
    </html>
  );
}

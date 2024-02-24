import { Fira_Code, Nunito } from "next/font/google";
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
            maxWidth: 'calc(1180px + 2rem)',
          }} className="w-full mx-auto px-4 flex items-center h-20">
            <Logo />
            <nav className="mx-auto gap-8 hidden sm:flex text-body2 font-bold">
              <Link href="/#technologies" className="text-lilac dark:text-beige">С чем работал</Link>
              <Link href="/#my-experience" className="text-lilac dark:text-beige">Опыт работы</Link>
              <Link href="/blog" className="text-lilac dark:text-beige">Блог</Link>
            </nav>
            <ThemeSwitcher className="ml-auto sm:ml-4" />
          </header>
          <main style={{
            maxWidth: 'calc(1180px + 2rem)',
          }} className="w-full mx-auto p-4">
            {children}
          </main>
          <footer
            style={{
              maxWidth: 'calc(1180px + 2rem)'
            }}
            className="w-full mx-auto p-4 pt-8 mt-auto flex justify-between sm:items-center flex-col sm:flex-row gap-3"
          >
            <FooterLogo />
            <span className="text-body2 text-lilac">Made with ❤️ by me. Designed by @rina.</span>
            <span className="text-beige text-body2">© Трофимов Евгений, 2024</span>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

import "./tailwind.css";
import "./global.css";
import { Link } from "../components/Link.js";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Providers } from "@/providers/providers";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import 'dayjs/locale/ru.js';
dayjs.extend(localizedFormat);
dayjs.locale('ru');

const Logo = () => {
  return <Link href={"/"} className="font-fira text-md">{'<'}Zhenya{'>'}</Link>;
};

const FooterLogo = () => {
  return <Link href={"/"} className="font-fira text-md">{'</'}Zhenya{'>'}</Link>;
};

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <header style={{
        maxWidth: 'calc(1180px + 2rem)',
      }} className="w-full mx-auto px-4 flex items-center h-20">
        <Logo />
        <nav className="mx-auto gap-8 hidden sm:flex text-body2 font-bold [&>a]:focus-visible:underline underline-offset-6 [&>a]:focus-visible:outline-8 [&>a]:focus-visible:ring-0 [&>a]:focus-visible:rounded-none">
          <Link href="/#technologies" className="text-secondary">С чем работал</Link>
          <Link href="/#my-experience" className="text-secondary">Опыт работы</Link>
          <Link href="/blog" className="text-secondary">Блог</Link>
          <Link href="/snippets" className="text-secondary">Сниппеты</Link>
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
        <span className="text-body2 text-secondary">Made with ❤️ by me. Designed by <a href="https://arina.pw/" target="_blank" rel="noreferrer" className="font-bold">@rina</a>.</span>
        <span className="text-neutral text-body2">© Трофимов Евгений, 2024</span>
      </footer>
    </Providers>
  );
}

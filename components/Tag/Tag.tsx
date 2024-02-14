import Link from "next/link";
import { HTMLProps } from "react";

const Tag: React.FC<HTMLProps<HTMLDivElement> & { children: string, href: string }> = ({ children, href }) => {
  return (
    <Link
      className="bg-gray-50/20 dark:bg-beige/5 rounded-3xl border-2 border-gray-50/50 dark:border-night px-3 py-[6px] text-gray-500 dark:text-beige inline-flex items-center text-body2"
      href={href}
    >
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </Link>
  )
}

export default Tag

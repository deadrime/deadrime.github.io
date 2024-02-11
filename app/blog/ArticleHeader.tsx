"use client";

import { usePathname } from "next/navigation";

export const ArticleHeader = () => {
  const pathname = usePathname();

  return <div>{pathname}</div>
}

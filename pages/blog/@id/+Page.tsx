import { useData } from "vike-react/useData";
import { Article } from "content-collections";
import { MDX } from "@/components/MDX";

export default function Page() {
  const article = useData<Article>();
  return (
    <>
     <MDX mdx={article.mdx}></MDX>
    </>
  );
}

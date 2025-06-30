import { useData } from "vike-react/useData";
import { MDX } from "@/components/MDX";
import { SnippetPageData } from "./+data";

export default function Page() {
  const snippet = useData<SnippetPageData>();

  return (
    <div className="flex flex-col">
      <MDX mdx={snippet.mdx}></MDX>
    </div>
  );
}

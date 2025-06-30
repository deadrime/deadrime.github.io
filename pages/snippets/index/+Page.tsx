import { useData } from "vike-react/useData";
import { SnippetsPageData } from "./+data";
import { SnippetsSearch } from "@/components/SnippetsSearch/SnippetsSearch";

export default function Page() {
  const snippets = useData<SnippetsPageData>();

  return (
    <>
      <h1 className="text-xl font-primary block mb-6">
        Сниппеты
      </h1>
      <SnippetsSearch snippets={snippets}/>
    </>
  );
}

import { calculateLinesToHighlight } from "@/helpers/codeHightlight";
import { HTMLProps } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

type CodeElementProps = HTMLProps<HTMLElement> & {
  filename?: string;
  caption?: string;
  hl?: string;
}

const CodeElement: React.FC<CodeElementProps> = ({ children, className, filename, caption, hl }) => {
  if (className?.startsWith('language')) {
    const language = className.split('language-')[1];
    const highlightedLines = calculateLinesToHighlight(hl);

    return <CodeSnippet caption={caption || filename} code={String(children)} language={language} highlightedLines={highlightedLines} />;
  }

  return (
    <code className={className}>{children}</code>
  );
};

export default CodeElement;
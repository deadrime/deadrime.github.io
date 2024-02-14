import type { MDXComponents } from 'mdx/types'
import { HTMLProps } from 'react';
import CodeDemo from './components/mdxComponents/CodeDemo/CodeDemo';
import CodeSnippet from './components/mdxComponents/CodeSnippet/CodeSnippet';
import React from 'react';
import ImageComponent from './components/mdxComponents/ImageComponent/ImageComponent';
import CodePlayground from './components/mdxComponents/CodePlayground/CodePlayground';
import { calculateLinesToHighlight } from './helpers/codeHightlight';

type CodeElementProps = HTMLProps<HTMLElement> & {
  filename?: string;
  caption?: string;
  hl?: string;
}

const CodeElement: React.FC<CodeElementProps> = ({ children, className, filename, caption, hl }) => {
  if (className?.startsWith('language')) {
    const language = className.split('language-')[1];
    const highlightedLines = calculateLinesToHighlight(hl);

    return <CodeSnippet caption={caption || filename} code={String(children)} language={language} highlightedLines={highlightedLines} />
  }

  return (
    <code className={className}>{children}</code>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: ImageComponent,
    img: ImageComponent,
    code: CodeElement,
    CodeDemo: CodeDemo,
    CodePlayground: CodePlayground,
  }
}

"use client";

import React, { HTMLProps } from 'react';
import { Highlight, HighlightProps, PrismTheme, themes } from "prism-react-renderer";
import classNames from 'classnames';
import styles from './CodeSnippet.module.css';
import IconTs from "@/icons/ts.svg";
import IconJs from "@/icons/js.svg";
import IconReact from '@/icons/react.svg';
import IconCss from '@/icons/css.svg';
import IconHtml from '@/icons/html.svg';
import IconCopy from '@/icons/copy.svg';
import { useTheme } from '@/components/ThemeContext';

export type CodeHighlightProps = {
  code: string;
  language: HighlightProps['language'];
  highlightedLines?: number[];
  className?: string;
}

const codeDarkTheme: PrismTheme = {
  ...themes.oneDark,
  plain: {
    ...themes.oneDark.plain,
    background: 'rgb(18 14 31)',
  }
}

// TODO: Use prettier?
export const CodeHighlight: React.FC<CodeHighlightProps> = ({ code, language = 'tsx', highlightedLines, className }) => {
  const { theme } = useTheme();
  return (
    <Highlight code={code.trim().replace(/\t/g, '  ')} language={language} theme={theme === 'dark' ? codeDarkTheme : themes.oneLight}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div
          style={style}
          className={classNames(styles.codeHighlight, className, 'flex overflow-x-auto py-3 font-code')}
        >
          <div className='w-full'>
            {tokens.map((line, i) => {
              return (
                <div key={i} {...getLineProps({
                  line,
                  className: classNames("px-4", {
                    [styles.highlightedLine]: highlightedLines?.includes(i)
                  }),
                  style: {
                    background: 'var(--code-line-bg)'
                  }
                })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </Highlight>
  )
}

type CodeSnippetProps = CodeHighlightProps & HTMLProps<HTMLDivElement> & {
  caption?: string;
  highlightedLines?: number[];
}

const iconByLanguage: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  ts: IconTs,
  tsx: IconReact,
  jsx: IconReact,
  js: IconJs,
  html: IconHtml,
  css: IconCss,
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language, className, caption, highlightedLines, ...props }) => (
  <div
    className={classNames(className, styles.codeSnippet, "border border-gray-100 dark:border-gray-700 rounded-sm overflow-hidden")}
    data-lang={language}
    data-caption={caption}
    {...props}
  >
    <div
      className={classNames(
        styles.caption,
        "flex items-center gap-1 text-gray-700 dark:text-white rounded-t overflow-hidden px-4 py-2 bg-gray-100 dark:bg-[#201b31]",
      )}>
      {iconByLanguage[language] ? React.createElement(iconByLanguage[language], { className: "w-5" }) : null}
      {caption}
      <button className='ml-auto'>
        <IconCopy />
      </button>
    </div>
    <CodeHighlight
      className={styles.codeSnippetCode}
      code={code}
      language={language}
      highlightedLines={highlightedLines}
    />
  </div>
)

export default CodeSnippet;

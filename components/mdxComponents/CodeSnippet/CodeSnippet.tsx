"use client";

import React, { HTMLProps } from 'react';
import { Highlight, HighlightProps, PrismTheme, themes } from "prism-react-renderer";
import classNames from 'classnames';
import styles from './CodeSnippet.module.css';
import { useTheme } from '@/components/ThemeContext';
import { copyToClipboard } from '@/helpers/copyToClipboard';
import SvgTs from '@/svgComponents/Ts';
import SvgReact from '@/svgComponents/React';
import SvgJs from '@/svgComponents/Js';
import SvgHtml from '@/svgComponents/Html';
import SvgCss from '@/svgComponents/Css';
import SvgCopy from '@/svgComponents/Copy';

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
};

// TODO: Use prettier?
export const CodeHighlight: React.FC<CodeHighlightProps> = ({ code, language = 'tsx', highlightedLines, className }) => {
  const { theme } = useTheme();

  return (
    <Highlight code={code.trim().replace(/\t/g, '  ')} language={language} theme={theme === 'dark' ? codeDarkTheme : themes.oneLight}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div
          style={style}
          className={classNames(styles.codeHighlight, className, 'flex overflow-x-auto py-3 font-fira')}
        >
          <div className='w-auto'>
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
              );
            })}
          </div>
        </div>
      )}
    </Highlight>
  );
};

type CodeSnippetProps = CodeHighlightProps & HTMLProps<HTMLDivElement> & {
  caption?: string;
  highlightedLines?: number[];
}

const iconByLanguage: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  ts: SvgTs,
  tsx: SvgReact,
  jsx: SvgReact,
  js: SvgJs,
  html: SvgHtml,
  css: SvgCss,
};

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language, className, caption, highlightedLines, ...props }) => (
  <div
    className={classNames(className, styles.codeSnippet, "text-body2 border border-gray-100 dark:border-gray-700 rounded-sm overflow-hidden")}
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
      <button className='ml-auto cursor-pointer'>
        <SvgCopy onClick={() => copyToClipboard(code)} />
      </button>
    </div>
    <CodeHighlight
      className={styles.codeSnippetCode}
      code={code}
      language={language}
      highlightedLines={highlightedLines}
    />
  </div>
);

export default CodeSnippet;

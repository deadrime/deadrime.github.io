"use client";

import { HighlightProps } from "prism-react-renderer";
import SimpleEditor from "react-simple-code-editor";
import { CodeHighlight } from "./CodeSnippet";
import { useState } from "react";
import styles from './Playground.module.css';

interface CodeEditorProps {
  code: string;
  language: HighlightProps['language']
  onChange?: (value: string, language: HighlightProps['language']) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, language, onChange }) => {
  const [controlledCode, setControlledCode] = useState(code);

  return (
    <div className={styles.editorWrapper}>
      <SimpleEditor
        value={onChange ? code : controlledCode}
        onValueChange={(value: string) => onChange ? onChange(value, language) : setControlledCode(value)}
        style={{ height: "100%" }}
        highlight={(code) => (
          <CodeHighlight code={code} language={language} />
        )}
        padding={10}
        className={styles.editor}
      />
    </div>
  )
}

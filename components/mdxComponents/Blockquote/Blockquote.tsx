import { BlockquoteHTMLAttributes, HTMLProps } from 'react';
import styles from './Blockquote.module.css';

const Blockquote: React.FC<HTMLProps<HTMLElement>> = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>
}

export default Blockquote;

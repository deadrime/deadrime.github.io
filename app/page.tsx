import OldResume from './oldResume.mdx';
import Link from "next/link";
import styles from './styles.module.css';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className={styles.oldResume}>
        <OldResume />
      </div>
      <Link href="/blog">Blog</Link>
    </main>
  );
}

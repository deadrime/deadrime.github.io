import classNames from "classnames";
import { FormEvent, useCallback, useState } from "react";
import styles from './Accordion.module.css';
import SvgArrowdown from "@/assets/icons/arrowdown.svg?react";

type DetailsProps = React.ComponentPropsWithoutRef<"details"> & {
  summary: React.ReactNode;
  children: React.ReactNode;
}

const Accordion: React.FC<DetailsProps> = ({ summary, children, ...props }) => {
  const [open, setOpen] = useState(false);

  const onToggle = useCallback((e: FormEvent<HTMLDetailsElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(value => !value);
  }, []);

  return (
    <details className={styles.details} open={open} onChange={onToggle} {...props}>
      <summary className={classNames(styles.summary)}>
        <span className="text-primary font-semibold select-none">
          {summary}
        </span>

        <span>
          <SvgArrowdown width={12} height={12} className={styles.icon} />
        </span>
      </summary>
      <span className="text-text/80">
        {children}
      </span>
    </details>
  );
};

export default Accordion;

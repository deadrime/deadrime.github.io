import { DynamicHTMLProps } from "@/types/dynamicProps";
import classNames from "classnames";
import React, { ReactElement } from "react";
import { ReactNode, ElementType } from "react";

interface Props<T> {
  as?: T;
  children?: ReactNode;
  size?: 'small' | 'normal';
  borderless?: boolean;
  icon?: ReactElement;
}

const Tag = <T extends ElementType = "span">({
  as,
  children,
  size = 'normal',
  borderless,
  icon,
  ...props
}: DynamicHTMLProps<Props<T>, T>) => {
  const Tag: ElementType = as || 'span';

  return (
    <Tag
      className={classNames(
        "bg-gray-50/50 dark:bg-beige/10 rounded-3xl dark:text-beige inline-flex items-center text-body2",
        size === 'small' && 'px-3 py-[3px]',
        size === 'normal' && 'px-3 py-[6px]',
        !borderless && 'border-2 border-gray-50/50 dark:border-night text-gray-500'
      )}
      {...props}
    >
      {icon && React.cloneElement(icon, {
        height: 20,
        className: '-ml-[5px] mr-[6px]'
      })}
      {children}
    </Tag>
  );
}

export default Tag

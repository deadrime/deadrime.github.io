import { DynamicHTMLProps } from "@/types/dynamicProps";
import classNames from "classnames";
import React, { ReactElement } from "react";
import { ReactNode, ElementType } from "react";

interface Props<T> {
  as?: T;
  children?: ReactNode;
  size?: 'small' | 'normal';
  variant: 'filled' | 'outlined'
  icon?: ReactElement;
}

const Tag = <T extends ElementType = "span">({
  as,
  children,
  size = 'normal',
  variant,
  icon,
  ...props
}: DynamicHTMLProps<Props<T>, T>) => {
  const Tag: ElementType = as || 'span';

  return (
    <Tag
      className={classNames(
        "rounded-3xl text-lilac dark:text-beige inline-flex items-center text-body2 transition-colors",
        size === 'small' && 'px-3 py-[3px]',
        size === 'normal' && 'px-3 py-[6px]',
        icon && '!pl-[5px]',
        variant === 'filled' && 'bg-gray-50/50 dark:bg-night/30',
        variant === 'outlined' && 'border-2 border-beige/30 dark:border-night bg-transparent hover:bg-beige/30 hover:border-transparent dark:hover:bg-night'
        // !borderless && 'border-2 border-gray-50/50 dark:border-night text-gray-500',
        // !outlined && 'bg-gray-50/50 dark:bg-night/30',
        // outlined && 'bg-transparent hover:bg-night'
      )}
      {...props}
    >
      {icon && React.cloneElement(icon, {
        height: 22,
        width: 22,
        className: classNames('mr-[5px]', icon.props?.className)
      })}
      {children}
    </Tag>
  );
}

export default Tag

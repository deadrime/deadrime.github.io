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
        "rounded-3xl text-secondary inline-flex items-center text-body2 transition-colors",
        size === 'small' && 'px-3 py-[3px]',
        size === 'normal' && 'px-3 py-[6px]',
        icon && '!pl-[5px]',
        variant === 'filled' && 'bg-details/50',
        variant === 'outlined' && 'border-2 border-details bg-transparent hover:bg-secondary/30 hover:border-transparent hover:bg-details hover:text-text'
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

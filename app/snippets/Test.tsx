"use client";
// function forwardRef<T, P = {}>(
//   render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
// ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;

// type GenericForwardRef = <El, P = {}>(props: P, ref: React.Ref<T>) => React.ReactNode | null

// type GenericForwardRef<Props, El extends HTMLElement> = (
//   props: Props & { ref?: React.ForwardedRef<El> }
// ) => ReturnType<typeof ClickableListInner>; 

import React from 'react';
import { ComponentPropsWithoutRef, ElementType, forwardRef, useRef } from 'react';

export type Prefer<P, T> = P & Omit<T, keyof P>;

export type ElementPropsWithoutRef<T extends ElementType> = Pick<
  ComponentPropsWithoutRef<T>,
  keyof ComponentPropsWithoutRef<T>
>;

export type DynamicHTMLProps<OwnProps, Type extends ElementType> = Prefer<
  OwnProps,
  ElementPropsWithoutRef<Type>
>;

type ButtonProps<As extends React.ElementType> = {
  variant: 'primary' | 'secondary'
  as: As
}

export const Button = <As extends React.ElementType = 'button'>({
  as,
  children, 
  ...props 
}: DynamicHTMLProps<ButtonProps<As>, As>) => {
  const Tag: React.ElementType = as || 'button';

  return <Tag {...props}>{children}</Tag>;
};

function fixedForwardRef<T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
): (props: P & React.RefAttributes<T>) => React.ReactNode {
  return React.forwardRef(render) as any;
}


export const ButtonRaw = <As extends React.ElementType, Ref>(props: DynamicHTMLProps<ButtonProps<As>, As>, ref: Ref) => {
  const { as = 'button', variant, children, ...rest } = props;
  const Tag: React.ElementType = props.as;

  return <Tag {...rest} className={variant} ref={ref}>{children}</Tag>;
};

const Button2 = fixedForwardRef(ButtonRaw);


export const Test = () => {
  const ref = useRef<HTMLLinkElement>();

  console.log({
    ref
  });

  return <Button2 as="a" ref={ref} variant='primary'>Test</Button2>;
};

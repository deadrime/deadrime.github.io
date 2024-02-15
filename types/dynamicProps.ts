import { ElementType, ComponentPropsWithoutRef } from "react";

export type Prefer<P, T> = P & Omit<T, keyof P>;

export type ElementPropsWithoutRef<T extends ElementType> = Pick<
  ComponentPropsWithoutRef<T>,
  keyof ComponentPropsWithoutRef<T>
>;

export type DynamicHTMLProps<OwnProps, Type extends ElementType> = Prefer<
  OwnProps,
  ElementPropsWithoutRef<Type>
>;

import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce<Cb extends (...args: never[]) => unknown>(callback: Cb, delay: number, dependencies: unknown[]) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

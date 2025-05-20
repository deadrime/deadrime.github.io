import { useCallback, useEffect, useRef } from "react";

export const useThrottledCallback = <
  Props extends readonly unknown[],
  Return,
  Cb extends (...props: Props) => Return
>(cb: Cb, deps: unknown[], wait: number) => {
  const state = useRef<{ tmpProps: Props, timeoutId?: NodeJS.Timeout }>({
    tmpProps: [] as unknown as Props,
  });

  useEffect(() => {
    const timeoutId = state.current.timeoutId;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [state]);

  const throttledCb = useCallback((...props: Props) => {
    state.current.tmpProps = props;

    if (state.current.timeoutId) {
      return;
    }

    state.current.timeoutId = setTimeout(() => {
      state.current.timeoutId = undefined;
      cb(...state.current.tmpProps);
    }, wait);
  }, deps);

  return throttledCb;// as (props: Props) => Return;
};

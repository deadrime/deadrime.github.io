import { useCallback, useEffect, useRef } from "react";
import sdk, { type EmbedOptions, type VM } from '@stackblitz/sdk';
import { useTheme } from "@/components/ThemeContext";

type CodeDemoProps = { projectId: string } & EmbedOptions

const CodeDemo: React.FC<CodeDemoProps> = ({
  projectId,
  forceEmbedLayout = true,
  view = 'default',
  height = 400,
  width = '100%',
  ...restProps
}) => {
  const iframeRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const vm = useRef<VM | null>(null);
  const { theme } = useTheme();

  const cleanUp = useCallback(() => {
    if (!iframeRef.current || !wrapperRef.current) {
      return
    }
    const frames = wrapperRef.current.querySelectorAll('iframe')

    frames.forEach(i => i.remove())
  }, [wrapperRef, iframeRef])

  const initIframe = useCallback(async () => {
    if (!iframeRef.current) {
      return
    }
    vm.current = await sdk.embedProjectId(
      iframeRef.current,
      projectId,
      {
        ...restProps,
        forceEmbedLayout,
        view,
        height,
        width,
        theme: theme,
      },
    )
  }, [theme, iframeRef])

  useEffect(() => {
    if (!iframeRef.current || !wrapperRef.current) {
      return
    }
    initIframe();
    return cleanUp;
  }, [initIframe])

  return (
    <div
      ref={wrapperRef}
      className="w-full rounded-md overflow-hidden mt-3"
    >
      <div ref={iframeRef} />
    </div>
  )
}

export default CodeDemo;

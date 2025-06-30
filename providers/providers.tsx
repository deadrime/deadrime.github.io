import { ThemeProvider } from "@/components/ThemeContext";
// import { PostHogProvider } from "@/providers/PosthogProviders";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      {/* <PostHogProvider> */}
        {children}
      {/* </PostHogProvider> */}
    </ThemeProvider>
  );
};

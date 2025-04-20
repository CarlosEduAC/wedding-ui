import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { WindowDimensionProvider } from "./WindowDimensionProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <WindowDimensionProvider>{children}</WindowDimensionProvider>
    </ThemeProvider>
  );
};

export { Providers };

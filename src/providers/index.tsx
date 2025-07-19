import { CartProvider } from "./CartProvider";
import { ThemeProvider } from "./ThemeProvider";
import { WindowDimensionProvider } from "./WindowDimensionProvider";
import { type ProvidersProps } from "@/models/Providers";

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <WindowDimensionProvider>
        <CartProvider>{children}</CartProvider>
      </WindowDimensionProvider>
    </ThemeProvider>
  );
};

export { Providers };

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { type ThemeContextData } from "@/models/Theme";

const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { useTheme };

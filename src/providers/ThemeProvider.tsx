import {
  createContext,
  useState,
  useCallback,
  useMemo,
  PropsWithChildren,
} from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { type ThemeContextData, type ThemeType } from "@/models/Theme";
import { lightTheme, darkTheme } from "@/styles/themes";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = useCallback(() => {
    console.log("toggleTheme");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <SCThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

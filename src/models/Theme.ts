export type ThemeType = "light" | "dark";

export type ThemeContextData = {
  theme: ThemeType;
  toggleTheme: () => void;
};

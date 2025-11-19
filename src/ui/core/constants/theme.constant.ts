import type { ThemeProviderProps } from "next-themes";

export const THEMES: ThemeProviderProps["themes"] = [
  "custom",
  "dark",
  "light",
] as const;

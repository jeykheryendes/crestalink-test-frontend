import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@ui-core/providers/theme-provider/theme.provider";

export const Providers = ({ children }: Readonly<PropsWithChildren>) => (
  <ThemeProvider>{children}</ThemeProvider>
);

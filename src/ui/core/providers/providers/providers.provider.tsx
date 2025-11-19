import type { PropsWithChildren } from "react";

import { Toaster } from "sonner";

import { ThemeProvider } from "@ui-core/providers/theme-provider/theme.provider";

export const Providers = ({ children }: Readonly<PropsWithChildren>) => (
  <ThemeProvider>
    {children}
    <Toaster />
  </ThemeProvider>
);

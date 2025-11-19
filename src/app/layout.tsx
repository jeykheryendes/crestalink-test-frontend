import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { ReactScanScript } from "@ui-core/components/server/scripts/react-scan-script";

import { geistMono } from "@ui-core/fonts/geistMono.fonts";
import { geistSans } from "@ui-core/fonts/geist.fonts";

import { Providers } from "@ui-core/providers/providers/providers.provider";

import "@ui-core/styles/main.css";

export const metadata: Metadata = {
  title: "Crestalink Test Frontend",
  description: "Crestalink test frontend",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <ReactScanScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

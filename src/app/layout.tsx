import type { Metadata, Viewport } from "next";
import { Work_Sans, Source_Sans_3 } from "next/font/google";

import { GetPageMetadata } from "@/utils/meta-data";

// STYLE SHEETS SOURCE
import "../styles/globals.css";

// FONT CONFIGURATIONS
export const works_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-works-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});
export const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = GetPageMetadata();
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${works_sans.variable} ${source_sans_3.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import LayoutClient from "@/components/layout/LayoutClient";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Chat",
  description: "Test chat",
  icons: './logo.svg',
};

export const viewport: Viewport = {
  themeColor: '#0E0B18',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
      <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

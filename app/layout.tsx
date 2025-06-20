import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps, createTheme} from '@mantine/core';

import { GoogleAnalytics } from '@next/third-parties/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Partner with Asset Alley",
  description: "Partner with Asset Alley",
};

const theme = {
  fontFamily: 'Cera Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  headings: {
    fontFamily: 'Cera Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" {...mantineHtmlProps}>
        <head>
          <ColorSchemeScript />
          <meta name="google-site-verification" content="kfYMUctiHfNdOAl0iBNFYlGc64DJE5ac5q3PkfuAO_A" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
        </body>
      </html>
  );
}

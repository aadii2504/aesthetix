import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


import Provider from "./provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImagiCrea",
  description:
    "ImagiCrea is your cutting-edge AI-powered image generation SaaS platform that brings creativity to life",
  openGraph: {
    title: "ImagiCrea - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImagiCrea - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Provider>
          <Header />
          {children}
          <Toaster />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

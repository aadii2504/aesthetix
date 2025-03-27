import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

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
  metadataBase: new URL("https://Aesthetix.com"),
  openGraph: {
    title: "ImagiCrea - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ImagiCrea AI Image Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ImagiCrea - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
    images: ["/twitter-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

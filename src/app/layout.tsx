import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aesthetix",
  description: "Aesthetix is your cutting-edge AI-powered image generation SaaS platform that brings creativity to life",
  metadataBase: new URL("https://Aesthetix.com"),
  openGraph: {
  title: "Aesthetix - Free AI Image Generation",
  description: "Turn your text into images with our free AI-powered tool",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Aesthetix AI Image Generator",
     },
   ],
 },
 twitter: {
  card: "summary_large_image",
  title: "StableMax - Free AI Image Generation",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

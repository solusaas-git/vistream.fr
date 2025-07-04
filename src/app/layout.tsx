import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
      title: "Vistream - Your Premium Vistream Streaming Experience",
    description: "Vistream is your trusted Vistream Streaming provider, offering unlimited access to TV channels, movies, series and sports in HD, Full HD and 4K.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/favicon-16.svg", type: "image/svg+xml", sizes: "16x16" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

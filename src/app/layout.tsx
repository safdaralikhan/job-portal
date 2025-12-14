import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueHaas = localFont({
  src: [
    {
      path: '../../public/fonts/fonnts.com-Neue_Haas_Grotesk_Display_Pro_55_Roman.otf',
      weight: '500',
      style: '55 Roman',
    },
    {
      path: '../../public/fonts/Neue Haas Grotesk Display Pro 65 Medium.woff2',
      weight: '600',
      style: '65 Medium',
    }
  ],
  variable: '--font-neue-haas',
});

export const metadata: Metadata = {
  title: "FindJobs",
  description: "Job Portal Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueHaas.variable} antialiased`}
        style={{ fontFamily: 'var(--font-neue-haas), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Duo Ribbon コンサートツアー2026｜チケット案内",
  description: "全4公演のチケット販売ページまとめ",
  openGraph: {
    title: "Duo Ribbon コンサートツアー2026｜チケット案内",
    description: "全4公演のチケット販売ページまとめ",
    locale: "ja_JP",
    type: "website",
    images: ["/og.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

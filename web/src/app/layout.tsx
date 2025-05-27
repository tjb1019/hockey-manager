import type { Metadata } from "next";
import { Geist, Geist_Mono, Tomorrow } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tomorrow = Tomorrow({
  variable: '--font-tomorrow',
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: "Hockey Manager",
  description: "Manage your favorite hockey team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${tomorrow.variable}`}>
        {children}
      </body>
    </html>
  );
}

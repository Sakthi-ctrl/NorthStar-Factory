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
  title: "Northstar Factory | The Autonomous Foundry of Tomorrow",
  description: "Next-generation autonomous production systems, intelligent manufacturing grids, and exponential hardware engineering. Coming soon.",
  keywords: ["Northstar Factory", "Autonomous Manufacturing", "Industrial AI", "Hardware Engineering", "Future Tech"],
  authors: [{ name: "Northstar Factory Team" }],
  openGraph: {
    title: "Northstar Factory - Coming Soon",
    description: "Engineering the future of scalable autonomous manufacturing and rapid physical prototyping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#030712] text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}

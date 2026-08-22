import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SvgSprites } from "@/components/SvgIcons";

export const metadata: Metadata = {
  title: "Home - Google X",
  description:
    "Welcome to X, Alphabet's Moonshot Factory. We create radical technologies to help solve some of the world’s hardest problems.",
  openGraph: {
    title: "Home - Google X",
    description:
      "Welcome to X, Alphabet's Moonshot Factory. We create radical technologies to help solve some of the world’s hardest problems.",
    url: "https://x.company",
    siteName: "X",
    images: [
      {
        url: "https://lh3.googleusercontent.com/elgwplemqaNzHq3oYX9DtNE3qJ3PbTwoOWrOGhIhqu91aboT-yFfg_VpRV-TZZoYpJVHN1hWl4zPSB1MQtJLB2AyAtQJGR-8cw1W=e365-pa-nu-w1200",
        width: 1200,
        height: 630,
        alt: "Google X - The Moonshot Factory",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Google X",
    description:
      "Welcome to X, Alphabet's Moonshot Factory. We create radical technologies to help solve some of the world’s hardest problems.",
    images: [
      "https://lh3.googleusercontent.com/elgwplemqaNzHq3oYX9DtNE3qJ3PbTwoOWrOGhIhqu91aboT-yFfg_VpRV-TZZoYpJVHN1hWl4zPSB1MQtJLB2AyAtQJGR-8cw1W=e365-pa-nu-w1200",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Google+Sans:400,500,700,400i,500i,700i&display=swap"
        />
      </head>
      <body className="doc-pagesindex">
        <SvgSprites />
        <div id="root">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

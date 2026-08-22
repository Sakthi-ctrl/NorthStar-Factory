import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SvgSprites } from "@/components/SvgIcons";

export const metadata: Metadata = {
  title: "The Northstar Factory",
  description:
    "We are solving some of the world’s hardest problems by turning sci-fi possibilities into reality.",
  openGraph: {
    title: "The Northstar Factory",
    description:
      "We are solving some of the world’s hardest problems by turning sci-fi possibilities into reality.",
    url: "https://northstar-factory.com",
    siteName: "The Northstar Factory",
    images: [
      {
        url: "https://lh3.googleusercontent.com/elgwplemqaNzHq3oYX9DtNE3qJ3PbTwoOWrOGhIhqu91aboT-yFfg_VpRV-TZZoYpJVHN1hWl4zPSB1MQtJLB2AyAtQJGR-8cw1W=e365-pa-nu-w1200",
        width: 1200,
        height: 630,
        alt: "The Northstar Factory",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Northstar Factory",
    description:
      "We are solving some of the world’s hardest problems by turning sci-fi possibilities into reality.",
    images: [
      "https://lh3.googleusercontent.com/elgwplemqaNzHq3oYX9DtNE3qJ3PbTwoOWrOGhIhqu91aboT-yFfg_VpRV-TZZoYpJVHN1hWl4zPSB1MQtJLB2AyAtQJGR-8cw1W=e365-pa-nu-w1200",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
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

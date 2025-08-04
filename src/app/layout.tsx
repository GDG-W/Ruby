/* eslint-disable simple-import-sort/imports */
/* eslint-disable @next/next/no-img-element */

import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const customFont = localFont({
  src: "./fonts/Akira.otf",
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFest Lagos 2025 - Coming Soon",
  metadataBase: new URL("https://devfestlagos.com"),
  openGraph: {
    title: "DevFest Lagos 2025 - Coming Soon",
    images: {
      url: "/preview.webp",
      alt: "DevFest Lagos 2025 - Coming Soon",
    },
    description:
      "DevFest Lagos is coming. The biggest conference in Lagos for tech lovers, ideas, and life-time connections. Something exciting is on the way. You won’t want to miss it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Lagos 2025 - Coming Soon",
    images: {
      url: "/preview.webp",
      alt: "DevFest Lagos 2025 - Coming Soon",
    },
    description:
      "DevFest Lagos is coming. The biggest conference in Lagos for tech lovers, ideas, and life-time connections. Something exciting is on the way. You won’t want to miss it.",
  },
  description:
    "DevFest Lagos is coming. The biggest conference in Lagos for tech lovers, ideas, and life-time connections. Something exciting is on the way. You won’t want to miss it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${customFont.variable} h-dvh bg-[#FFFAEB] antialiased`}
      >
        <img
          src="/lanyard-2.png"
          alt="Lanyard"
          width={328}
          height={875}
          className="absolute top-[-50px] left-1/2 hidden -translate-x-1/2 lg:flex"
          style={{ zIndex: 10 }}
        />
        <div>{children}</div>
      </body>
    </html>
  );
}

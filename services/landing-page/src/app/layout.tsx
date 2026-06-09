import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const customFont = localFont({
  src: "./fonts/Akira.otf",
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFest Lagos 2026 - November 2026",
  openGraph: {
    title: "DevFest Lagos 2026",
    images: {
      url: "https://storage.googleapis.com/devfestlagos2025/Ruby/preview.webp",
      alt: "DevFest Lagos 2026",
    },
    description:
      "DevFest Lagos is coming. The biggest conference in Lagos for tech lovers, ideas, and life-time connections. Something exciting is on the way. You won’t want to miss it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Lagos 2026",
    images: {
      url: "https://storage.googleapis.com/devfestlagos2025/Ruby/preview.webp",
      alt: "DevFest Lagos 2026",
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
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZR44Q96G06"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZR44Q96G06');`}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${customFont.variable} ${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-[#f0f0f0] text-[#1e1e1e] antialiased`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}

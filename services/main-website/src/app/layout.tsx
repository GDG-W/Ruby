import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/global.scss";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";

const akira = localFont({
  src: "../fonts/Akira.otf",
  variable: "--font-akira",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevFest Lagos 2025 | Africa's Largest Tech & Developer Gathering",
  openGraph: {
    type: "website",
    siteName: "DevFest Lagos 2025",
    url: "https://devfestlagos.com",
    title: "DevFest Lagos 2025 | Africa's Largest Tech & Developer Gathering",
    images: [{
      alt: "DevFest Lagos 2025",
      url: "https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp",
    }],
    description: "Explore 5 epic days of tech: AI, Cloud, DevOps, Mobile, and Web development at DevFest Lagos 2025. Featuring workshops, hackathons, and expert speakers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Lagos 2025 | Africa's Largest Tech & Developer Gathering",
    images: [{
      alt: "DevFest Lagos 2025",
      url: "https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp",
    }],
    description: "Explore 5 epic days of tech: AI, Cloud, DevOps, Mobile, and Web development at DevFest Lagos 2025. Featuring workshops, hackathons, and expert speakers.",
  },
  description: "Explore 5 epic days of tech: AI, Cloud, DevOps, Mobile, and Web development at DevFest Lagos 2025. Featuring workshops, hackathons, and expert speakers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(akira.variable, inter.variable)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

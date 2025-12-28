import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnovXus | Bridging Academia & Industry",
  description: "InnovXus is an academic and institutional engagement platform enabling structured collaboration between higher education institutions, industry stakeholders, and innovation ecosystems.",
  keywords: ["innovation", "hackathons", "academic outcomes", "industry collaboration", "student programs", "tech events", "higher education", "institutional engagement"],
  authors: [{ name: "InnovXus Team" }],
  creator: "InnovXus",
  publisher: "InnovXus",
  openGraph: {
    title: "InnovXus | Bridging Academia & Industry",
    description: "Empowering institutions and students through structured academic programs, innovation challenges, and industry collaboration.",
    url: "https://innovxus.com",
    siteName: "InnovXus",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "InnovXus Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovXus | Bridging Academia & Industry",
    description: "Empowering institutions and students through structured academic programs, innovation challenges, and industry collaboration.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-shell/site-header";
import { SiteFooter } from "@/components/site-shell/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webedigital.com"),

  title: {
    default: "WebeDigital® | Performance Marketing & SEO Agency",
    template: "%s | WebeDigital",
  },

  description:
    "WebeDigital is a performance-driven digital marketing agency helping brands grow through SEO, performance marketing, social media strategy, and high-converting web experiences.",

  keywords: [
    "Digital Marketing Agency",
    "SEO Agency",
    "Performance Marketing",
    "Social Media Marketing",
    "Web Design Agency",
    "SEO Services",
    "Growth Marketing",
    "WebeDigital",
    "Brand Strategy",
    "Marketing Agency",
  ],

  authors: [
    {
      name: "WebeDigital",
      url: "https://www.webedigital.com",
    },
  ],

  creator: "WebeDigital",
  publisher: "WebeDigital",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.webedigital.com",
    siteName: "WebeDigital",
    title: "WebeDigital® | Performance Marketing & SEO Agency",
    description:
      "Performance-driven digital marketing agency helping brands scale through SEO, paid media, social media marketing, and web experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebeDigital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WebeDigital® | Performance Marketing & SEO Agency",
    description:
      "Performance-driven digital marketing agency helping brands scale online.",
    images: ["/og-image.jpg"],
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

  alternates: {
    canonical: "https://www.webedigital.com",
  },

  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
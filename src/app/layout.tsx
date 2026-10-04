import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1769D2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Plumbing & Underground Infrastructure Contractor`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "RD Plumbing Solution is a premier underground pipeline, stormwater drainage, sewer line, and commercial/residential plumbing contractor based in Naya Raipur, Chhattisgarh, serving projects across India.",
  keywords: [
    "Plumbing contractor in Raipur",
    "Plumbing contractor in Naya Raipur",
    "Underground pipeline contractor Chhattisgarh",
    "Sewer line contractor Raipur",
    "Stormwater drainage contractor",
    "Pipeline laying contractor India",
    "Excavation contractor Raipur",
    "RCC chamber construction",
    "Commercial plumbing contractor",
    "Residential plumbing services",
    "Irrigation pipeline contractor",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL("https://rdplumbingsolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.supportingStatement,
    url: "https://rdplumbingsolution.com",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#172B4D] selection:bg-[#EAF4FF] selection:text-[#1769D2]">
        <JsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  );
}

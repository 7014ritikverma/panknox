import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/common/CustomCursor";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://panknox.com"),
  title: {
    default: "Panknox Media | Creative & Performance Marketing Partner",
    template: "%s | Panknox Media",
  },
  description:
    "Panknox builds the strategy, creative, content and digital systems that help ambitious businesses get noticed, understood and trusted. Offices in Chitrakoot, Vaishali Nagar, Jaipur and Mandrella, Jhunjhunu, Rajasthan.",
  keywords: [
    "creative marketing partner",
    "performance marketing partner",
    "social media management",
    "digital marketing strategy",
    "content strategy",
    "Meta ads",
    "manufacturing marketing",
    "interiors furniture marketing",
    "clean energy EV marketing",
    "architectural hardware marketing",
    "hospitality digital marketing",
    "brand positioning India",
  ],
  authors: [{ name: "Panknox Media Pvt. Ltd." }],
  creator: "Panknox Media Pvt. Ltd.",
  publisher: "Panknox Media Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://panknox.com",
    siteName: "Panknox Media",
    title: "Panknox Media | Creative & Performance Marketing Partner",
    description:
      "We work in the gap between what your business is and how your market perceives it. Creative & Performance Marketing Partner.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panknox Media | Creative & Performance Marketing Partner",
    description:
      "Panknox builds the strategy, creative, content and digital systems that turn business attention into growth.",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Panknox Media Pvt. Ltd.",
    alternateName: "Panknox",
    url: "https://panknox.com",
    logo: "https://panknox.com/panknox-logo-dark.png",
    description:
      "Creative & Performance Marketing Partner. We build marketing systems around businesses to turn attention into growth.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Chitrakoot, Vaishali Nagar",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
        postalCode: "302021",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Mandrella",
        addressLocality: "Jhunjhunu",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
        postalCode: "333025",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: ["India", "Global"],
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-navy text-brand-neutral min-h-screen flex flex-col font-sans selection:bg-brand-green selection:text-brand-navy">
        <CustomCursor />
        <Navigation />
        <main className="flex-1 w-full relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

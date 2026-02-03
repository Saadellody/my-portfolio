import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import dynamic from "next/dynamic";

// Lazy-load le GridPattern pour améliorer la performance initiale
const BackgroundGrid = dynamic(
  () => import("../components/BackgroundGrid"),
  {
    loading: () => <div className="fixed inset-0 bg-black" />,
    ssr: true,
  }
);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Saad Eddine El oddy | Full Stack & Systems Engineer",
  description: "Building robust, scalable web and system solutions with a focus on clean architecture and high performance.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Specialist",
    "Systems & Cloud Integrator",
    "Web Architect"
  ],
  authors: [{ name: "Saad Eddine El oddy" }],
  creator: "Saad Eddine El oddy", 
  publisher: "Saad Eddine El oddy",
  icons: {
    icon: [
      { url: "/SE.png", type: "image/png", sizes: "32x32" },
      { url: "/ym1.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [{ url: "/ym1.png", sizes: "180x180" }],
    shortcut: "/SE.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saadeddineeloddy.com",
    title: "Saad Eddine El oddy | Full Stack Developer",
    description: "Building robust, scalable web and system solutions with a focus on clean architecture and high performance.",
    siteName: "Saad Eddine El oddy",
    images: [
      {
        url: "/ym1.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Eddine El oddy | Full Stack & Systems Engineer",
    description: "Building robust, scalable web and system solutions with a focus on clean architecture and high performance.",
    images: ["/ym1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          as="font"
          href="/fonts/geist.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className="antialiased bg-black text-white"
      >
        <BackgroundGrid />
        <Navigation />
        {children}
      </body>
    </html>
  );
}


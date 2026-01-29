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
  title: "Yassir Mastadi | Full Stack Developer",
  description: "Building robust, scalable web solutions with clean code and exceptional user experiences",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "TypeScript",
    "Software Engineer",
  ],
  authors: [{ name: "Yassir Mastadi" }],
  creator: "Yassir Mastadi",
  publisher: "Yassir Mastadi",
  icons: {
    icon: [
      { url: "/ym.png", type: "image/png", sizes: "32x32" },
      { url: "/ym1.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [{ url: "/ym1.png", sizes: "180x180" }],
    shortcut: "/ym.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yassirmastadi.com",
    title: "Yassir Mastadi | Full Stack Developer",
    description: "Building robust, scalable web solutions with clean code and exceptional user experiences",
    siteName: "Yassir Mastadi",
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
    title: "Yassir Mastadi | Full Stack Developer",
    description: "Building robust, scalable web solutions with clean code and exceptional user experiences",
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


import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { PageLoader } from "@/components/ui/page-loader";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tanmay-portfolio.vercel.app";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tanmay Sahu | Software Engineer",
  description:
    "Software engineer portfolio showcasing full-stack builds, MERN projects, and polished product experiences.",
  keywords: [
    "Tanmay Sahu",
    "Software Engineer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Tanmay Sahu" }],
  creator: "Tanmay Sahu",
  publisher: "Tanmay Sahu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tanmay Sahu | Software Engineer",
    description:
      "Portfolio featuring full-stack projects, production-ready applications, and modern frontend craft.",
    url: siteUrl,
    siteName: "Tanmay Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/profile.svg",
        width: 1200,
        height: 630,
        alt: "Tanmay Sahu portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Sahu | Software Engineer",
    description:
      "Full-stack developer portfolio with MERN projects, polished UI, and product-focused engineering.",
    images: ["/assets/profile.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-zinc-100">
        <SmoothScrollProvider>
          <PageLoader />
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

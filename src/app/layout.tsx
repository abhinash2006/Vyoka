import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#111416" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vyokalabs.com"),
  title: {
    default: "Vyoka Labs Private Limited — Quiet Confidence. Serious Engineering.",
    template: "%s | Vyoka Labs Private Limited",
  },
  description:
    "Vyoka Labs develops practical technology across environmental sensing, optical analysis, and autonomous aerial systems — including PRISM microplastic detection and GRAVITAS modular heavy-lift UAV.",
  keywords: [
    "Vyoka Labs",
    "Vyoka Labs Private Limited",
    "PRISM",
    "GRAVITAS",
    "Microplastic Detection",
    "Optical Sensing",
    "Fluorescence Imaging",
    "Heavy-Lift Multirotor",
    "Flood Disaster Relief UAV",
    "Autonomous Robotics",
    "Edge AI",
  ],
  authors: [{ name: "Vyoka Labs Private Limited" }],
  creator: "Vyoka Labs Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "/",
    siteName: "Vyoka Labs Private Limited",
    title: "Vyoka Labs Private Limited — Serious Engineering. Real-World Impact.",
    description:
      "Developing practical technology across environmental sensing, optical analysis, and autonomous aerial systems.",
    images: [
      {
        url: "/images/hero-engineering.jpg",
        width: 1200,
        height: 630,
        alt: "Vyoka Labs Engineering Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyoka Labs Private Limited — Serious Engineering.",
    description:
      "Developing practical technology across environmental sensing, optical analysis, and autonomous aerial systems.",
    images: ["/images/hero-engineering.jpg"],
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
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${inter.variable} h-full scroll-smooth`}>
      <head>
        {/* Anti-FOUC Theme Script: runs before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vyoka-theme')||'light';var r=t;if(t==='system'){r=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',r);if(r==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-200">
        <ThemeProvider>
          {/* Skip to Main Content Link for Keyboard Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--accent-primary)] text-white font-medium text-sm rounded shadow-md focus:outline-none"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 flex flex-col pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

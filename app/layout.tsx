import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.displayName} — ${profile.headline}`,
    template: `%s · ${profile.displayName}`,
  },
  description: profile.positioning,
  keywords: [
    "Minhyeok Son",
    "Shawn Son",
    "machine learning engineer",
    "MLE",
    "University of Michigan",
    "data science",
    "NLP",
  ],
  authors: [{ name: profile.displayName, url: profile.siteUrl }],
  creator: profile.displayName,
  openGraph: {
    type: "profile",
    siteName: profile.displayName,
    title: `${profile.displayName} — ${profile.headline}`,
    description: profile.positioning,
    url: profile.siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.displayName} — ${profile.headline}`,
    description: profile.positioning,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

/**
 * Runs before first paint so the correct theme is applied without a flash.
 * Kept as a raw string because it must be synchronous and inline.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

/** Structured data so search engines connect this site to the person. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.displayName,
  alternateName: ["Minhyeok Son", "Shawn Son"],
  url: profile.siteUrl,
  email: profile.email,
  jobTitle: profile.headline,
  address: { "@type": "PostalAddress", addressLocality: "Ann Arbor", addressRegion: "MI" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Michigan" },
    {
      "@type": "CollegeOrUniversity",
      name: "Seoul National University of Science and Technology",
    },
  ],
  worksFor: { "@type": "Organization", name: "eBay" },
  sameAs: [profile.links.github, profile.links.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-text"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

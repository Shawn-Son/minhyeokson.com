import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/content/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.displayName} — ML Engineer`,
  description: `${site.intro} ${site.status}`,
  keywords: [
    "Minhyeok Son",
    "Shawn Son",
    "machine learning engineer",
    "University of Michigan",
  ],
  openGraph: {
    type: "profile",
    title: `${site.displayName} — ML Engineer`,
    description: `${site.intro} ${site.status}`,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.displayName} — ML Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.displayName} — ML Engineer`,
    description: `${site.intro} ${site.status}`,
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.displayName,
  alternateName: ["Minhyeok Son", "Shawn Son"],
  url: siteUrl,
  email: site.email,
  jobTitle: "Machine Learning Engineer",
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "University of Michigan" }],
  worksFor: { "@type": "Organization", name: "eBay" },
  sameAs: [
    "https://github.com/Shawn-Son",
    "https://www.linkedin.com/in/minhyeokson",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

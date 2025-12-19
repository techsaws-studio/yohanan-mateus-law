import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.yohananmateuslaw.com";

export const defaultMetadata: Metadata = {
  title: "Yohanan Mateus Law | New York Business & Corporate Law Firm",
  description:
    "Yohanan Mateus Law is a New York–based law firm providing strategic counsel in corporate, commercial, real estate, and litigation matters. Trusted legal expertise for individuals and businesses.",

  applicationName: "Yohanan Mateus Law",
  creator: "TechSaws",
  generator: "Next.js",

  keywords: [
    "New York law firm",
    "NY business attorney",
    "corporate law",
    "commercial law",
    "litigation",
    "real estate law",
    "legal services New York",
    "business lawyer NYC",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo.png",
        sizes: "834x408",
      },
      { rel: "icon", type: "image/svg+xml", url: "/favicons/logo.svg" },
      { rel: "icon", type: "image/x-icon", url: "/favicons/favicon.ico" },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Yohanan Mateus Law | New York Business & Corporate Law Firm",
    description:
      "A trusted New York law firm offering corporate, commercial, litigation, and real estate legal services with a client-first approach grounded in experience and integrity.",
    siteName: "Yohanan Mateus Law",
    images: [
      {
        url: "/social/og-default.png",
        width: 1200,
        height: 630,
        alt: "Yohanan Mateus Law – New York Law Firm",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yohanan Mateus Law | New York Business & Corporate Law Firm",
    description:
      "Corporate, commercial, litigation, and real estate legal services for New York businesses and individuals. Strategic counsel grounded in experience and integrity.",
    images: ["/social/twitter-preview.png"],
    creator: "@TechSaws",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export function GetPageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,

    title: overrides.title ?? defaultMetadata.title,
    description: overrides.description ?? defaultMetadata.description,

    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      title: overrides.title || defaultMetadata.openGraph?.title,
      description:
        overrides.description || defaultMetadata.openGraph?.description,
    },

    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
      title: overrides.title || defaultMetadata.twitter?.title,
      description:
        overrides.description || defaultMetadata.twitter?.description,
    },
  };
}


export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://urbanspa.beauty";

export const SOURCE_CODE_URL = "https://github.com/weijunext/nextjs-15-starter";

const TWITTER_URL = 'https://x.com/urban_cent55623'
const EMAIL_URL = 'mailto:hello@urbanspa.beauty'

export const siteConfig = {
  name: "Urban Spa",
  description:
    "Urban Spa in Etobicoke offers premium beauty and wellness treatments including Botox, fillers, skin treatments, and more. Experience luxury medical spa services with expert care.",
  url: "https://urbanspa.beauty",
  ogImage: "https://urbanspa.beauty/og.jpg",
  links: {
    instagram: "https://instagram.com/urbanspa.beauty",
    facebook: "https://facebook.com/urbanspa.beauty",
  },
  creator: "Urban Spa",
  authors: [
    {
      name: "Urban Spa",
      url: "https://urbanspa.beauty",
    },
  ],
  keywords: [
    "Urban Spa",
    "Medical Spa",
    "Etobicoke",
    "Beauty Treatments",
    "Botox",
    "Fillers",
    "Skin Care",
    "Laser Treatment",
    "Body Contouring",
    "HIFU",
    "PRP Treatment",
    "Facial Threading"
  ],
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0EA" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1917" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  defaultNextTheme: "system",
  manifest: "/site.webmanifest",
};

export type SiteConfig = typeof siteConfig;

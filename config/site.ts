import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://urbanspa.beauty";

export const SOURCE_CODE_URL = "https://github.com/weijunext/nextjs-15-starter";

const TWITTER_URL = 'https://x.com/urban_cent55623'
const EMAIL_URL = 'mailto:hello@urbanspa.beauty'

export const siteConfig: SiteConfig = {
  name: "Urban Spa",
  tagLine: 'Multilingual Next.js 15 Starter',
  description:
    "A multilingual Next.js 15 starter with built-in i18n support. Launch your global-ready web application with a clean, efficient, and SEO-friendly foundation.",
  url: BASE_URL,
  authors: [
    {
      name: "Urban Spa",
      url: "https://urbanspa.beauty",
    }
  ],
  creator: '@therealrooomio',
  socialLinks: {
    twitter: TWITTER_URL,
    email: EMAIL_URL
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}

import { siteConfig } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { GithubIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SiBluesky } from "react-icons/si";

export default function Footer() {
  const t = useTranslations("Home");
  return (
    <div className="bg-gray-800 dark:bg-primary-foreground text-gray-300">
      <footer className="py-2 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-6">
            <div className="flex flex-col items-start col-span-full md:col-span-2">
              <div className="space-y-4">
                <div className="items-center space-x-2 flex">
                  <Image
                    src="/logo.svg"
                    alt="Next Forge"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />

                  <span className="text-white text-2xl font-bold">
                    {t("title")}
                  </span>
                </div>

                <p className="text-sm p4-4 md:pr-12">{t("tagLine")}</p>

                <div className="flex items-center gap-2">
                  {siteConfig.links.facebook && (
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="Facebook"
                      title="View on Facebook"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                      <GithubIcon className="size-4" aria-hidden="true" />
                    </a>
                  )}
                  {siteConfig.links.instagram && (
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="Instagram"
                      title="View on Instagram"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                      <SiBluesky className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-white text-lg font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {link.href.startsWith("/") ? (
                        <I18nLink
                          href={link.href}
                          title={link.label}
                          className="hover:text-white transition-colors"
                          target={link.target || ""}
                          rel={link.rel || ""}
                        >
                          {link.label}
                        </I18nLink>
                      ) : (
                        <a
                          href={link.href}
                          title={link.label}
                          className="hover:text-white transition-colors"
                          target={link.target || ""}
                          rel={link.rel || ""}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="mt-2 p-4 flex justify-center items-center border-t border-gray-700 text-center text-sm text-gray-400">
        <I18nLink
          href="/about"
          title="About"
          className=" hover:text-white transition-colors"
        >
          &copy; {new Date().getFullYear()} Next Forge. All rights reserved.
        </I18nLink>
      </div>
    </div>
  );
}

type FooterLink = {
  title: string;
  links: Link[];
};

type Link = {
  href: string;
  label: string;
  target?: string;
  rel?: string;
};

const footerLinks: FooterLink[] = [
  {
    title: "Languages",
    links: [
      { href: "/", label: "English" },
      { href: "/zh-CN", label: "中文" },
      { href: "/ja-JP", label: "日本語" },
    ],
  },
  {
    title: "Open Source",
    links: [
      {
        href: "https://github.com/weijunext/nextjs-15-starter",
        label: "Next Forge",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
      },
      {
        href: "https://github.com/weijunext/landing-page-boilerplate",
        label: "Landing Page Boilerplate",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
      },
      {
        href: "https://github.com/weijunext/smart-excel-ai",
        label: "SaaS Template",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
      },
      {
        href: "https://github.com/weijunext/weekly-boilerplate",
        label: "Blog Boilerplate",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
      },
    ],
  },
  {
    title: "Other Products",
    links: [
      {
        href: "https://nextidea.dev/",
        label: "Next Idea",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      {
        href: "https://newtab.nextidea.dev/",
        label: "Next Idea NewTab",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      {
        href: "https://ogimage.click/",
        label: "OG Image Generator",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      {
        href: "https://nextjscn.org/",
        label: "Next.js 中文文档",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      {
        href: "https://weijunext.com/",
        label: "J实验室",
        rel: "noopener noreferrer",
        target: "_blank",
      },
    ],
  },
  {
    title: "Legal & Privacy",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
];

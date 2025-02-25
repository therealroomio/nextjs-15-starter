import { headerLinks } from "@/components/header/HeaderLinks";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MobileMenu() {
  const t = useTranslations("Home");
  const tHeader = useTranslations("Header");
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2">
          <Menu className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuLabel>
            <I18nLink
              href="/"
              className="flex items-center space-x-1 font-bold"
            >
              <Image
                alt={siteConfig.name}
                src="/logo.svg"
                className="w-6 h-6"
                width={32}
                height={32}
              />
              <span className="text-gray-800 dark:text-gray-200">
                {t("title")}
              </span>
            </I18nLink>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {headerLinks.map((link) => (
              link.children ? (
                <DropdownMenuSub key={link.name}>
                  <DropdownMenuSubTrigger className="capitalize">
                    {link.name}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <I18nLink href={link.href} className="w-full">
                        All Services
                      </I18nLink>
                    </DropdownMenuItem>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <I18nLink href={child.href} className="w-full">
                          {child.name}
                        </I18nLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem key={link.name} asChild>
                  <I18nLink href={link.href} className="capitalize">
                    {link.name}
                  </I18nLink>
                </DropdownMenuItem>
              )
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="p-2 focus:bg-transparent justify-end">
              <div className="flex items-center gap-x-4">
                <LocaleSwitcher />
                <ThemeToggle />
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

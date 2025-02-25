import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as I18nLink } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export const headerLinks = [
  {
    name: "services",
    href: "/services",
    children: [
      {
        name: "Botox",
        href: "/services/botox",
      },
      {
        name: "Skin Treatment",
        href: "/services/skin-treatment",
      },
      {
        name: "Body Contouring",
        href: "/services/body-contouring",
      },
      {
        name: "Facial Thread",
        href: "/services/facial-thread",
      },
      {
        name: "Fillers",
        href: "/services/fillers",
      },
      {
        name: "HIFU",
        href: "/services/hifu",
      },
      {
        name: "Laser Removal",
        href: "/services/laser-removal",
      },
      {
        name: "PRP Facial",
        href: "/services/prp-facial",
      },
    ],
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "contact",
    href: "/contact",
  },
  {
    name: "book",
    href: "/book",
  },
];

const HeaderLinks = () => {
  const tHeader = useTranslations("Header");

  return (
    <div className="hidden md:flex flex-row items-center gap-x-4 font-medium">
      {headerLinks.map((link) => (
        link.children ? (
          <DropdownMenu key={link.name}>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-purple-600">
              {link.name} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
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
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <I18nLink
            key={link.name}
            href={link.href}
            className="mx-2 hover:text-purple-600 transition-colors"
          >
            {link.name}
          </I18nLink>
        )
      ))}
    </div>
  );
};

export default HeaderLinks;

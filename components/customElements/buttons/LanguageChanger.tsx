"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locales } from "@/app/dictionaries";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { US, PL } from "country-flag-icons/react/3x2";
import LocaleSwitchButton from "./LocaleSwitchButton";

export interface LanguageChangerProps {
  className?: string;
  locale: Locales;
}

export const LanguageChanger = ({
  className,
  locale,
}: LanguageChangerProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("cursor-pointer p-2 z-10", className)}>
        {locale === "pl" ? (
          <PL title="Polish" className="w-6" />
        ) : (
          <US title="English" className="w-6" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-0 bg-dark rounded-none">
        <DropdownMenuItem
          className={cn(
            "cursor-pointer rounded-none hover:!bg-none !bg-none",
            locale === "pl" ? "cursor-default" : "cursor-pointer"
          )}
          asChild
        >
          <LocaleSwitchButton
            locale="pl"
            disabled={locale === "pl" ? true : false}
          >
            <PL title="Polish" className="w-8 hover:!bg-none !bg-none" />
          </LocaleSwitchButton>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={cn(
            "cursor-pointer rounded-none hover:!bg-none !bg-none",
            locale === "en" ? "cursor-default" : "cursor-pointer"
          )}
          asChild
        >
          <LocaleSwitchButton
            locale="en"
            disabled={locale === "en" ? true : false}
          >
            <US title="English" className="w-8 hover:!bg-none !bg-none" />
          </LocaleSwitchButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

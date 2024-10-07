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
import { US, PL, UA } from "country-flag-icons/react/3x2"; // Import the UA flag
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
        ) : locale === "ua" ? (
          <UA title="Ukrainian" className="w-6" />
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
          <LocaleSwitchButton locale="pl" disabled={locale === "pl"}>
            <PL title="Polish" className="w-8 hover:!bg-none !bg-none" />
          </LocaleSwitchButton>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className={cn(
            "cursor-pointer rounded-none hover:!bg-none !bg-none",
            locale === "ua" ? "cursor-default" : "cursor-pointer"
          )}
          asChild
        >
          <LocaleSwitchButton locale="ua" disabled={locale === "ua"}>
            <UA title="Ukrainian" className="w-8 hover:!bg-none !bg-none" />
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
          <LocaleSwitchButton locale="en" disabled={locale === "en"}>
            <US title="English" className="w-8 hover:!bg-none !bg-none" />
          </LocaleSwitchButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

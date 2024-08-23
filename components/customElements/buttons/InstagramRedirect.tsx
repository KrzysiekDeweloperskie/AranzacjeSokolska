import { cn } from "@/lib/utils";
import React from "react";
import { FiInstagram } from "react-icons/fi";

export interface InstagramRedirectProps {
  className?: string;
  link?: string;
}

export const InstagramRedirect = ({
  className,
  link = "https://www.instagram.com/wnetrza.deweloperskie/",
}: InstagramRedirectProps) => {
  return (
    <a
      aria-label="Odwiedź nasze konto na Instagram"
      href={link}
      target="_blank"
      className={cn("header-icon-href", className)}
    >
      <FiInstagram className="header-icon-graphic" />
    </a>
  );
};

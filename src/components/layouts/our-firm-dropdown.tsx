"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { ChevronDown } from "lucide-react";

export function OurFirmDropdown() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={cn(
          "font-heading flex items-center gap-2 cursor-pointer transition-colors",
          open ? "text-primary" : "text-heading hover:text-primary"
        )}
      >
        Our Firm
        <ChevronDown
          className={cn(
            "transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </div>

      <div
        className={cn(
          "absolute left-0 top-full pt-4 w-[300px]",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "bg-secondary-background border border-border rounded-lg overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)]",
            "origin-top transform transition-all duration-300 ease-out",
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-95"
          )}
        >
          <ul className="flex flex-col divide-y divide-border text-lg">
            <DropdownItem href="/about-us" pathname={pathname}>
              About Us
            </DropdownItem>
            <DropdownItem href="/alumni-network" pathname={pathname}>
              Alumni Network
            </DropdownItem>
            <DropdownItem href="/careers" pathname={pathname}>
              Careers
            </DropdownItem>
            <DropdownItem href="/our-diverse-culture" pathname={pathname}>
              Our Diverse Culture
            </DropdownItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block px-6 py-4 transition-colors font-heading",
          isActive
            ? "bg-primary text-white"
            : "text-heading hover:text-primary hover:bg-muted"
        )}
      >
        {children}
      </Link>
    </li>
  );
}

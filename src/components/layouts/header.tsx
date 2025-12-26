"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo.svg";
import { ChevronDown, Menu } from "lucide-react";

function Header() {
  const pathname = usePathname();

  return (
    <header className="h-[120px] border-b border-border bg-secondary-background">
      <div className="h-full layout-standard flex items-center justify-between">
        <Link href={"/"} className="w-fit cursor-pointer group" passHref>
          <div className="flex items-center group-hover:scale-105 animation-standard">
            <Image
              src={Logo}
              alt="Yohanan Mateus Law | New York Business & Corporate Law Firm"
              className="h-auto md:w-[100px] w-[70px]"
            />

            <div className="flex flex-col gap-0">
              <h1 className="md:text-3xl text-xl font-medium text-heading font-heading">
                Yohanan Mateus Law
              </h1>
              <p className="md:text-base text-xs font-normal">
                New York Business & Corporate Law Firm
              </p>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-6 font-normal text-2xl max-lg:hidden">
          <Link
            href="/our-people"
            className={cn(
              pathname === "/our-people"
                ? "text-primary"
                : "text-heading hover:text-primary",
              "font-heading transition-colors"
            )}
          >
            Our People
          </Link>
          <Link
            href="/our-capabilities"
            className={cn(
              pathname === "/our-capabilities"
                ? "text-primary"
                : "text-heading hover:text-primary",
              "font-heading transition-colors"
            )}
          >
            Our Capabilities
          </Link>
          <div className="font-heading text-heading hover:text-primary flex items-center gap-2 cursor-pointer">
            Our Firm <ChevronDown className="translate-y-[1px]" />
          </div>
        </div>

        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;

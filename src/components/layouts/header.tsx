"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { OurFirmDropdown } from "./our-firm-dropdown";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo.svg";
import { Menu, X } from "lucide-react";

function Header() {
  const [hamOpen, setHamOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header
      className={cn(
        hamOpen
          ? "h-svh"
          : "h-[120px] border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.06)]",
        "bg-secondary-background animation-standard"
      )}
    >
      <div
        className={cn(hamOpen ? "h-[120px] border-b border-border" : "h-full")}
      >
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
            <OurFirmDropdown />
          </div>

          <div
            onClick={() => setHamOpen((prev) => !prev)}
            className="lg:hidden"
          >
            {hamOpen ? <X className="text-primary" /> : <Menu />}
          </div>
        </div>
      </div>

      {hamOpen ? (
        <div className="h-[calc(100svh-121px)] section-padding-standard layout-standard flex flex-col gap-4 font-medium text-base font-heading text-heading">
          <Link
            href={"/our-people"}
            passHref
            className={cn(
              pathname === "/our-people"
                ? "text-primary underline underline-offset-4"
                : ""
            )}
          >
            Our People
          </Link>
          <Link
            href={"/our-capabilities"}
            passHref
            className={cn(
              pathname === "/our-capabilities"
                ? "text-primary underline underline-offset-4"
                : ""
            )}
          >
            Our Capabilities
          </Link>
          <Link
            href={"/about-us"}
            passHref
            className={cn(
              pathname === "/about-us"
                ? "text-primary underline underline-offset-4"
                : ""
            )}
          >
            About Us
          </Link>
          <Link
            href={"/alumni-network"}
            passHref
            className={cn(
              pathname === "/alumni-network"
                ? "text-primary underline underline-offset-4"
                : ""
            )}
          >
            Alumni Network
          </Link>
          <Link
            href={"/careers"}
            passHref
            className={cn(
              pathname === "/careers"
                ? "text-primary underline underline-offset-4"
                : ""
            )}
          >
            Careers
          </Link>
          <Link
            href={"/our-diverse-culture"}
            passHref
            className={cn(
              pathname === "/our-diverse-culture"
                ? "text-primary underline underline-offset-4"
                : ""
            )}
          >
            Our Diverse Culture
          </Link>
          <Link
            href={"/contact-us"}
            passHref
            className={cn(
              pathname === "/contact-us"
                ? "text-primary underline underline-offset-4"
                : ""
            )}
          >
            Contact Us
          </Link>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;

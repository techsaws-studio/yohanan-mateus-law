"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full section-padding-standard bg-black border-t border-border">
      <div className="layout-standard h-full grid md:grid-cols-2 grid-cols-1 max-md:gap-8">
        <div className="h-full flex flex-col max-md:gap-6 md:justify-between md:order-1 order-2">
          <div className="flex items-center gap-4 text-white">
            <Link
              href="/"
              target="_blank"
              className="hover:text-primary hover:scale-105 animation-standard"
            >
              <Linkedin />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="hover:text-primary hover:scale-105 animation-standard"
            >
              <Twitter />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="hover:text-primary hover:scale-105 animation-standard"
            >
              <Facebook />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="hover:text-primary hover:scale-105 animation-standard"
            >
              <Instagram />
            </Link>
          </div>

          <p className="lg:text-xl md:text-base text-sm text-white/80 leading-[1.2] font-normal md:max-w-[460px]">
            © 2025 Yohanan Mateus Law. Attorney Advertising. Prior results do
            not guarantee a similar outcome.
          </p>
        </div>

        <div className="md:justify-end flex w-full h-full md:order-2 order-1 max-md:border-b max-md:border-white/60 max-md:pb-8">
          <div className="flex flex-col w-fit gap-4 lg:text-xl md:text-base font-medium text-sm">
            <Link
              href={"/contact-us"}
              passHref
              className={cn(
                pathname === "/contact-us"
                  ? "text-primary"
                  : "hover:text-white/80 text-white",
                "hover:scale-105 animation-standard underline underline-offset-4"
              )}
            >
              Contact Us
            </Link>
            <Link
              href={"/disclaimer"}
              passHref
              className={cn(
                pathname === "/disclaimer"
                  ? "text-primary"
                  : "hover:text-white/80 text-white",
                "hover:scale-105 animation-standard underline underline-offset-4"
              )}
            >
              Disclaimer
            </Link>
            <Link
              href={"/terms-conditions"}
              passHref
              className={cn(
                pathname === "/terms-conditions"
                  ? "text-primary"
                  : "hover:text-white/80 text-white",
                "hover:scale-105 animation-standard underline underline-offset-4"
              )}
            >
              Terms & Conditions
            </Link>
            <Link
              href={"/privacy-notice"}
              passHref
              className={cn(
                pathname === "/privacy-notice"
                  ? "text-primary"
                  : "hover:text-white/80 text-white",
                "hover:scale-105 animation-standard underline underline-offset-4"
              )}
            >
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

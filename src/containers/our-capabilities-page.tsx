"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FirmHighlights from "@/components/partials/firm-highlights";

/* -----------------------------
   ROUTE MAP (EXPLICIT ONLY)
------------------------------ */

const PRACTICE_AREA_ROUTES: Record<string, string> = {
  // LEFT
  "Bankruptcy & Restructuring": "/capabilities/bankruptcy-restructuring",
  "Chemical Manufacturing": "/capabilities/chemical-manufacturing",
  "Corporate & Transactional": "/capabilities/corporate-transactional",
  "Employee Benefits & Executive Compensation":
    "/capabilities/employee-benefits-executive-compensation",
  "Executive Orders": "/capabilities/executive-orders",
  "Family Owned Business": "/capabilities/family-owned-business",
  Finance: "/capabilities/finance",
  "Global Franchise & Supply Network":
    "/capabilities/global-franchise-supply-network",
  "Health Care": "/capabilities/health-care",
  Insurance: "/capabilities/insurance",
  "Intellectual Property": "/capabilities/intellectual-property",
  "Investment Strategies & Capital Solutions":
    "/capabilities/investment-strategies-capital-solutions",
  "Nonprofit Organizations": "/capabilities/nonprofit-organizations",

  // RIGHT
  "Privacy & Cybersecurity": "/capabilities/privacy-cybersecurity",
  "Private Equity": "/capabilities/private-equity",
  "Real Estate": "/capabilities/real-estate",
  "Securities & Corporate Finance":
    "/capabilities/securities-corporate-finance",
  "Sports & Entertainment": "/capabilities/sports-entertainment",
  Tax: "/capabilities/tax",
  Technology: "/capabilities/technology",
  "Technology Transactions": "/capabilities/technology-transactions",
  Telecommunications: "/capabilities/telecommunications",
  "Transportation & Logistics": "/capabilities/transportation-logistics",
  "Trusts & Estates": "/capabilities/trusts-estates",
  "Venture Capital & Emerging Growth":
    "/capabilities/venture-capital-emerging-growth",
};

/* -----------------------------
   DATA
------------------------------ */

const teamMembers = [
  { id: 1, image: "/professional-man-with-glasses-beard.jpg" },
  { id: 2, image: "/professional-woman-dark-hair.png" },
  { id: 3, image: "/professional-man-in-suit-blue-shirt.jpg" },
  { id: 4, image: "/professional-woman-in-yellow-blazer.jpg" },
];

const practiceAreas = {
  left: [
    "Bankruptcy & Restructuring",
    "Chemical Manufacturing",
    "Corporate & Transactional",
    "Employee Benefits & Executive Compensation",
    "Executive Orders",
    "Family Owned Business",
    "Finance",
    "Global Franchise & Supply Network",
    "Health Care",
    "Insurance",
    "Intellectual Property",
    "Investment Strategies & Capital Solutions",
    "Nonprofit Organizations",
  ],
  right: [
    "Privacy & Cybersecurity",
    "Private Equity",
    "Real Estate",
    "Securities & Corporate Finance",
    "Sports & Entertainment",
    "Tax",
    "Technology",
    "Technology Transactions",
    "Telecommunications",
    "Transportation & Logistics",
    "Trusts & Estates",
    "Venture Capital & Emerging Growth",
  ],
};

/* -----------------------------
   PAGE
------------------------------ */

export default function CapabilitiesPage() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <main>
      {/* ================= HERO / SEARCH ================= */}
      <section className="w-full">
        {/* TOP IMAGE STRIP */}
        <div className="flex h-[400px]">
          {teamMembers.map((m) => (
            <div key={m.id} className="relative flex-1">
              <Image
                src={m.image}
                alt=""
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* SEARCH SECTION */}
        <div className="bg-[#f4f5f6] px-[100px]">
          <div className="mx-auto py-[96px]">
            <div className="grid grid-cols-[60%_1px_30%] items-start gap-16">
              {/* LEFT */}
              <div>
                <h1 className="text-[60px] font-light text-[#323E48] mb-5">
                  Our Capabilities
                </h1>

                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Type a capability or keyword"
                    className="h-[56px] w-full max-w-[640px] bg-white px-6 text-[18px] text-[#323E48] outline-none"
                  />
                  <button className="h-[56px] px-12 bg-[#b2292e] text-white text-[18px] font-medium hover:bg-[#9f2227] transition-colors">
                    Search
                  </button>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="h-[200px] w-px bg-[#d1d5db]" />

              {/* RIGHT */}
              <div>
                <div className="text-[24px] font-medium text-[#323E48] mb-5">
                  Core Practices
                </div>

                <div className="flex pl-2 gap-[10px]">
                  {[
                    ["Finance", "Health Care", "Intellectual Property"],
                    ["Real Estate", "Corporate & Transactional"],
                  ].map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      {col.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-[18px] text-[#323E48]"
                        >
                          <span className="mt-[9px] h-[4px] w-[4px] bg-[#323E48]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL STRIP */}
        <div className="bg-[#2f3a42] h-[100px] flex items-center justify-center">
          <button
            aria-label="Scroll down"
            onClick={() =>
              document
                .getElementById("practice-areas")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group"
          >
            <ChevronDown
              size={28}
              className="text-white opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
      <section id="practice-areas" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* LEFT */}
            <div>
              {practiceAreas.left.map((area) => (
                <Link
                  key={area}
                  href={PRACTICE_AREA_ROUTES[area]}
                  className="block"
                >
                  <div
                    onMouseEnter={() => setHoveredArea(area)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`py-4 px-4 border-b border-gray-200 transition-colors cursor-pointer ${
                      hoveredArea === area
                        ? "bg-[#b2292e] text-white"
                        : "text-foreground"
                    }`}
                  >
                    <p className="text-[26px] font-normal">{area}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <div>
              {practiceAreas.right.map((area) => (
                <Link
                  key={area}
                  href={PRACTICE_AREA_ROUTES[area]}
                  className="block"
                >
                  <div
                    onMouseEnter={() => setHoveredArea(area)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`py-4 px-4 border-b border-gray-200 transition-colors cursor-pointer ${
                      hoveredArea === area
                        ? "bg-[#b2292e] text-white"
                        : "text-foreground"
                    }`}
                  >
                    <p className="text-[26px] font-normal">{area}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FirmHighlights />
    </main>
  );
}

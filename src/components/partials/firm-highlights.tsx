"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Highlight {
  id: number;
  category: "PUBLICATION" | "NEWS";
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    category: "PUBLICATION",
    title: "CMS Indefinitely Suspends SNF Ownership Disclosure Deadline",
    description:
      "The Centers for Medicare & Medicaid Services (CMS) has issued updated sub-regulatory guidance.",
  },
  {
    id: 2,
    category: "NEWS",
    title:
      "Yohanan Mateus Law Honored at USA M&A Atlas Awards for Leadership in Strategic, Consumer and ESOP Transactions",
    description:
      "Yohanan Mateus Law is proud to announce that the firm has been recognized with three honors at the 2025 USA M&A Middle Market Atlas Awards.",
  },
  {
    id: 3,
    category: "PUBLICATION",
    title: "New Legal Developments in Healthcare Compliance",
    description:
      "Recent updates to healthcare regulations require immediate attention from all organizations in the industry.",
  },
  {
    id: 4,
    category: "NEWS",
    title: "Yohanan Mateus Law Partners Recognized in National Legal Rankings",
    description:
      "Several of our senior partners have been recognized for their outstanding contributions to the legal field.",
  },
];

export default function FirmHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(highlights.length / 2);

  const handlePrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages);

  const leftHighlight = highlights[currentIndex * 2];
  const rightHighlight = highlights[currentIndex * 2 + 1];

  return (
    <section className="bg-white py-16 sm:py-20 px-5 sm:px-8 lg:px-[100px]">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-12">
          <h2 className="font-light text-gray-800 text-[38px] sm:text-[48px] lg:text-[62px]">
            Firm Highlights
          </h2>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              className="w-11 h-11 sm:w-12 sm:h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 sm:w-12 sm:h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 lg:divide-x lg:divide-gray-300">
          {/* Left */}
          {leftHighlight && (
            <div className="lg:pr-8 flex flex-col justify-between">
              <div>
                <p className="text-[12px] sm:text-[14px] font-semibold tracking-widest text-gray-600 mb-3">
                  {leftHighlight.category}
                </p>

                <h3 className="font-light text-[28px] sm:text-[34px] lg:text-[40px] mb-5 text-black hover:text-red-700 transition-colors cursor-pointer">
                  {leftHighlight.title}
                </h3>

                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-700 leading-relaxed mb-8">
                  {leftHighlight.description}
                </p>
              </div>

              <a
                href="#"
                className="text-[16px] sm:text-[18px] lg:text-[20px] text-red-600 underline hover:text-black transition-colors"
              >
                Read more
              </a>
            </div>
          )}

          {/* Right */}
          {rightHighlight && (
            <div className="lg:pl-8 flex flex-col justify-between">
              <div>
                <p className="text-[12px] sm:text-[14px] font-semibold tracking-widest text-gray-600 mb-3">
                  {rightHighlight.category}
                </p>

                <h3 className="font-light text-[28px] sm:text-[34px] lg:text-[40px] mb-5 text-gray-600 hover:text-red-600 transition-colors cursor-pointer">
                  {rightHighlight.title}
                </h3>

                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-700 leading-relaxed mb-8">
                  {rightHighlight.description}
                </p>
              </div>

              <a
                href="#"
                className="text-[16px] sm:text-[18px] lg:text-[20px] text-red-600 underline hover:text-black transition-colors"
              >
                Read more
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import OurPeopleGroupImg from "../../public/images/our-attorney-img.png";
import FirmHighlights from "@/components/partials/firm-highlights";

function OurPeoplePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/our-people-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Our People
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* CONTENT */}
      <section className="section-margin-standard layout-standard">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — TEXT */}
          <div>
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3">
              The Firm
            </p>

            <h2 className="lg:text-5xl md:text-4xl text-3xl font-heading font-normal text-heading leading-tight">
              A team defined by expertise, integrity,
              <br className="hidden sm:block" />
              and measurable results
            </h2>

            <Separator className="mt-5 mb-6 w-24 h-1 bg-primary rounded-full" />

            <div className="space-y-5">
              <p className="text-lg text-paragraph leading-relaxed">
                Yohanan Mateus Law is built on the strength of its people. Our
                attorneys bring decades of collective experience advising
                individuals, entrepreneurs, and businesses across a wide range
                of corporate, commercial, and regulatory matters.
              </p>

              <p className="text-lg text-paragraph leading-relaxed">
                We operate as a unified team—combining strategic insight,
                rigorous analysis, and practical judgment—to deliver solutions
                that are not only legally sound, but commercially effective.
              </p>

              <p className="text-base md:text-lg text-paragraph leading-relaxed">
                From seasoned counsel to rising associates, our attorneys share
                a commitment to precision, professionalism, and long-term client
                partnerships.
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative w-full overflow-hidden rounded-3xl bg-muted">
            <Image
              src={OurPeopleGroupImg}
              alt="Yohanan Mateus Law – Our Attorneys"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <FirmHighlights />
    </main>
  );
}

export default OurPeoplePage;

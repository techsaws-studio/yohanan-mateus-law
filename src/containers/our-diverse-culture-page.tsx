"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

import OurDiverseCulturePageOverviewImg from "../../public/images/our-diverse-culture-page-overview-img.png";
import Attorney from "../../public/images/our-people-page-attorney-01-img.webp";
import OurDiverseCultureTestimonial01 from "../../public/images/our-diverse-culture-testimonial-01.png";
import OurDiverseCultureTestimonial02 from "../../public/images/our-diverse-culture-testimonial-02.png";
import OurDiverseCultureTestimonial03 from "../../public/images/our-diverse-culture-testimonial-03.png";
import OurDiverseCultureTestimonial04 from "../../public/images/our-diverse-culture-testimonial-04.png";

const DIVERSE_CULTURE_TABS = [
  { id: "overview", label: "Overview" },
  { id: "resource", label: "Resource Groups" },
  { id: "testimonials", label: "Testimonials" },
];

const ResourceTab = [
  "API@Yohanan Mateus Law",
  "Latin Alliance",
  "LGBTQ+",
  "Yohanan Mateus Law | Black",
  "Office-based Women's Empowerment Committees",
];

function OurDiverseCulturePage() {
  const [active, setActive] = useState("overview");

  return (
    <main>
      <section className="relative w-full h-[320px] md:h-[400px] lg:h-[580px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/our-diverse-culture-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Our Diverse Culture
          </h1>
        </div>
      </section>

      <section className="w-full bg-primary">
        <div className="layout-standard h-full flex max-md:flex-col">
          {DIVERSE_CULTURE_TABS.map((tab) => {
            const isActive = active === tab.id;

            return (
              <Button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "relative lg:px-10 md:px-6 py-4 rounded-none h-full flex items-center font-heading text-lg transition-colors duration-300 shadow-none",
                  isActive
                    ? "bg-white text-primary"
                    : "hover:text-primary hover:bg-white text-white"
                )}
              >
                {tab.label}
              </Button>
            );
          })}
        </div>
      </section>

      <section className="lg:section-padding-standard section-margin-standard layout-standard">
        {active === "overview" ? (
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2 flex flex-col gap-12">
              <p className="lg:text-2xl md:text-xl text-lg font-normal text-heading font-heading leading-[1.7]">
                Many firms talk about their diversity aspirations. At Yohanan
                Mateus Law, we have seen how creating the most welcoming and
                inclusive law firm environment produces results. We ask the hard
                questions and seek answers through novel and often
                counterintuitive approaches. This has caused us to explore new
                methods for mentoring and training and rethink how we recruit
                and retain talent. Our willingness to deviate from the
                mainstream allows us to stand out in a competitive market for
                top talent.
              </p>

              <Image
                src={OurDiverseCulturePageOverviewImg}
                alt="Our Diverse Culture Overview"
                className="w-full lg:my-4"
              />

              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                While some believe that the issues surrounding diversity are
                intractable, at Yohanan Mateus Law, we know that through
                commitment, determination, and focus, we will successfully
                achieve a true workplace that celebrates each of our unique
                backgrounds. That is why we use objective data to improve how,
                when, and where we recruit attorneys and assemble pitch and
                client-service teams. And while data can be used to determine
                whether junior attorneys are receiving equivalent training
                opportunities, we also dedicate award-winning resources to
                ensure personal connectivity across the firm so that each of us
                feels a true sense of belonging within the Yohanan Mateus Law
                family.
              </p>

              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                Yohanan Mateus Law’s goal is for every individual to feel
                supported regardless of what position they hold. We are not
                trying to create a homogenous workplace. Rather, we are creating
                an environment where every employee retains their unique
                character and persona to contribute to the greater team. Our
                different perspectives, backgrounds, and experiences heighten
                our ability to serve both our internal and external clients.
                Because we continuously challenge here-to-before accepted
                thinking and actions surrounding diversity, we are what a law
                firm should be.
              </p>
            </div>

            <div className="lg:col-span-1 space-y-12 max-lg:hidden">
              <div>
                <h2 className="text-2xl font-medium text-heading font-heading mb-6">
                  News
                </h2>

                <p className="leading-relaxed text-sm">
                  Yohanan Mateus Law Rises 20 Spots in Annual Law360 Women in
                  Law Rankings
                </p>

                <Separator className="h-[1px]  bg-border my-6" />

                <p className="leading-relaxed text-sm">
                  Yohanan Mateus Law Earns Top Score on Human Rights Campaign
                  Foundation’s 2025 Corporate Equality Index
                </p>

                <Separator className="h-[1px]  bg-border my-6" />

                <p className="leading-relaxed text-sm mb-4">
                  Yohanan Mateus Law Recognized as a 2024 Top Performer by the
                  Leadership Council on Legal Diversity
                </p>

                <a className="text-primary font-semibold text-sm hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ) : active === "resource" ? (
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <h1 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading mb-4 md:mb-8">
                Resource Groups
              </h1>

              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium mb-8">
                In line with Yohanan Mateus Law&apos;s longstanding commitment
                to our firm values and goals, which are to be the most welcoming
                and inclusive law firm in the country, Yohanan Mateus Law has
                the following robust and active attorney resource groups:
              </p>

              <ul className="text-sm max-lg:leading-[1.7] mb-8 space-y-4">
                {ResourceTab.map((group, index) => (
                  <li key={index}>{group}</li>
                ))}
              </ul>

              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                Yohanan Mateus Law&apos;s resource groups welcome all attorneys
                who identify as members of a historically marginalized community
                or would like to support that community as an ally. Our resource
                groups have regularly scheduled meetings but also meet as needed
                to address particular initiatives or to respond to events, both
                internal and external to Yohanan Mateus Law. Our resource groups
                focus on the strengths, values and experiences of our
                colleagues, and gather to celebrate successes, discuss issues,
                and strategize on how they can build and support their community
                within Yohanan Mateus Law.
              </p>
            </div>

            <div className="lg:col-span-1 max-lg:hidden">
              <h2 className="text-2xl font-medium text-heading font-heading mb-6">
                Contact
              </h2>

              <div className="flex gap-4">
                <Image
                  src={Attorney}
                  alt=""
                  className="flex-shrink-0 object-cover w-[120px]"
                />

                <div className="flex-shrink-0 flex flex-col">
                  <p className="leading-relaxed text-xl font-normal text-heading font-heading">
                    Daniel F. Morales
                  </p>
                  <p className="leading-relaxed text-base font-normal text-heading font-heading">
                    ASSOCIATE
                  </p>

                  <p className="text-sm font-heading hover:text-primary text-heading mt-4 cursor-pointer">
                    202.791.8792
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    xxx-xxx-xxxx
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    danielmorales@yohananmateuslaw.com
                  </p>
                </div>
              </div>

              <Separator className="h-[1px]  bg-border my-12" />

              <div className="flex gap-4">
                <Image
                  src={Attorney}
                  alt=""
                  className="flex-shrink-0 object-cover w-[120px]"
                />

                <div className="flex-shrink-0 flex flex-col">
                  <p className="leading-relaxed text-xl font-normal text-heading font-heading">
                    Daniel F. Morales
                  </p>
                  <p className="leading-relaxed text-base font-normal text-heading font-heading">
                    ASSOCIATE
                  </p>

                  <p className="text-sm font-heading hover:text-primary text-heading mt-4 cursor-pointer">
                    202.791.8792
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    xxx-xxx-xxxx
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    danielmorales@yohananmateuslaw.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <h1 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading mb-4 md:mb-8">
                Testimonials
              </h1>

              <div className="flex flex-col gap-12 w-full">
                <Image
                  src={OurDiverseCultureTestimonial01}
                  alt="Our Diverse Culture Testimonial 01"
                />
                <Image
                  src={OurDiverseCultureTestimonial02}
                  alt="Our Diverse Culture Testimonial 02"
                />
                <Image
                  src={OurDiverseCultureTestimonial03}
                  alt="Our Diverse Culture Testimonial 03"
                />
                <Image
                  src={OurDiverseCultureTestimonial04}
                  alt="Our Diverse Culture Testimonial 04"
                />
              </div>
            </div>

            <div className="lg:col-span-1 max-lg:hidden">
              <h2 className="text-2xl font-medium text-heading font-heading mb-6">
                Contact
              </h2>

              <div className="flex gap-4">
                <Image
                  src={Attorney}
                  alt=""
                  className="flex-shrink-0 object-cover w-[120px]"
                />

                <div className="flex-shrink-0 flex flex-col">
                  <p className="leading-relaxed text-xl font-normal text-heading font-heading">
                    Daniel F. Morales
                  </p>
                  <p className="leading-relaxed text-base font-normal text-heading font-heading">
                    ASSOCIATE
                  </p>

                  <p className="text-sm font-heading hover:text-primary text-heading mt-4 cursor-pointer">
                    202.791.8792
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    xxx-xxx-xxxx
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    danielmorales@yohananmateuslaw.com
                  </p>
                </div>
              </div>

              <Separator className="h-[1px]  bg-border my-12" />

              <div className="flex gap-4">
                <Image
                  src={Attorney}
                  alt=""
                  className="flex-shrink-0 object-cover w-[120px]"
                />

                <div className="flex-shrink-0 flex flex-col">
                  <p className="leading-relaxed text-xl font-normal text-heading font-heading">
                    Daniel F. Morales
                  </p>
                  <p className="leading-relaxed text-base font-normal text-heading font-heading">
                    ASSOCIATE
                  </p>

                  <p className="text-sm font-heading hover:text-primary text-heading mt-4 cursor-pointer">
                    202.791.8792
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    xxx-xxx-xxxx
                  </p>
                  <p className="text-sm font-heading hover:text-primary text-heading cursor-pointer">
                    danielmorales@yohananmateuslaw.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default OurDiverseCulturePage;

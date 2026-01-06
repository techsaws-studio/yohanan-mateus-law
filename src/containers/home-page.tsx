"use client";

import Link from "next/link";
import Image from "next/image";

import { AnimatedImageTile } from "@/components/partials/animated-image-tile";
import { RedTextTile } from "@/components/partials/red-text-tile";
import { WhiteHeadlineTile } from "@/components/partials/white-headline-tile";

import Attorney01Img from "../../public/images/about-us-page-leadership-img-board-member-05.jpg";
import Attorney02Img from "../../public/images/about-us-page-leadership-img-board-member-06.webp";
import Attorney03Img from "../../public/images/our-people-page-newest-attorney-02-img.jpg";
import Attorney04Img from "../../public/images/our-people-page-newest-attorney-03-img.webp";
import Attorney05Img from "../../public/images/our-people-page-newest-attorney-05-img.jpg";
import Attorney06Img from "../../public/images/our-people-page-newest-attorney-02-img.jpg";
import { ChevronRight } from "lucide-react";
import DifferenceAtWorkImg01 from "../../public/images/difference-at-work-img-01.jpg";
import DifferenceAtWorkImg02 from "../../public/images/difference-at-work-img-02.jpg";
import DifferenceAtWorkImg03 from "../../public/images/difference-at-work-img-03.jpg";

const DiffrentAtWorkData = [
  {
    id: "promising-future",
    title: "A Promising Future",
    description:
      "Yohanan Mateus Law is a first-generation firm, young for our size and scope. We do not have 150 years of dusty tradition to maintain – or overcome. We're building something entirely new and different – a supportive, compassionate, diverse, and aggressively collaborative environment to enhance the experience both for clients and our people. We offer much more than Big Firm-caliber technical skills – we aspire to be what a law firm should be.",
    image: DifferenceAtWorkImg01,
  },
  {
    id: "different-model",
    title: "A Different Model",
    description:
      "If you're a client looking for greater success and a more effective relationship with your law firm, or a lawyer looking for a better working environment, we've created an alternative to the traditional Big-Firm model. And we're growing because of it. Let's talk about it.",
    image: DifferenceAtWorkImg02,
  },
  {
    id: "platform-growth",
    title: "A Platform for Growth",
    description:
      "We're focused on our core strengths—in practice, industry, and geography. We don't aspire to take over the world with far-flung global offices, we simply want to be the best all-around law firm in the U.S. Our coast-to-coast coverage provides a solid platform where clients can receive superior skills, service and value; and where top lawyers can concentrate fiercely on serving their clients and growing their practice.",
    image: DifferenceAtWorkImg03,
  },
];

function HomePage() {
  return (
    <main>
      <section className="w-full relative">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 grid-rows-2 w-full">
          <AnimatedImageTile images={[Attorney01Img]} />
          <RedTextTile />
          <AnimatedImageTile images={[Attorney02Img]} />
          <AnimatedImageTile images={[Attorney03Img]} />
          <AnimatedImageTile images={[Attorney04Img]} />
          <WhiteHeadlineTile />
          <AnimatedImageTile
            images={[Attorney05Img]}
            soloClassNames="max-md:col-span-2"
          />
          <AnimatedImageTile
            images={[Attorney06Img]}
            soloClassNames="max-md:col-span-1"
          />
        </div>
      </section>

      <section className="bg-muted text-heading md:section-padding-standard">
        <div className="layout-standard section-padding-standard lg:text-2xl md:text-xl text-lg font-normal text-center">
          At Yohanan Mateus Law, we are a different kind of firm. One that loves
          a challenge. One that loves to collaborate. One that is strategically
          designed to be your teammate. Every Am Law 100 firm offers skilled
          legal representation. But we are much more than that: we possess a
          sincere desire to offer humanity, compassion and true partnership to
          both our clients and each other. We&apos;ve created a new type of firm
          — we are what a law firm should be.
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="flex md:justify-between max-md:flex-col max-md:gap-10 items-center md:mb-12 mb-6">
            <h2 className="md:text-6xl text-4xl font-light text-heading font-heading">
              Core Industries
            </h2>
            <Link
              href={"/our-capabilities"}
              className="md:px-8 py-3 max-md:w-full text-center md:border-2 md:border-primary md:text-primary text-[20px] md:hover:bg-primary md:hover:text-primary-foreground max-md:bg-primary max-md:text-primary-foreground transition-colors max-md:hover:bg-primary-hover"
            >
              All Practices
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <Link
              href="#"
              className="relative lg:h-[250px] h-[200px] rounded-2xl border border-border w-full overflow-hidden group block hover:shadow-lg animation-standard"
            >
              <div className="absolute inset-0 bg-[url('/images/industries-healthcare-img.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-white text-2xl font-medium">Health Care</h3>

                <span className="inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-6 h-6" />
                </span>
              </div>
            </Link>

            <Link
              href="#"
              className="relative lg:h-[250px] h-[200px] rounded-2xl border border-border w-full overflow-hidden group block hover:shadow-lg animation-standard"
            >
              <div className="absolute inset-0 bg-[url('/images/industries-finance-img.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-white text-2xl font-medium">Finance</h3>

                <span className="inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-6 h-6" />
                </span>
              </div>
            </Link>

            <Link
              href="#"
              className="relative lg:h-[250px] h-[200px] rounded-2xl border border-border w-full overflow-hidden group block hover:shadow-lg animation-standard"
            >
              <div className="absolute inset-0 bg-[url('/images/industries-real-estate-img.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-white text-2xl font-medium">Real Estate</h3>

                <span className="inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-6 h-6" />
                </span>
              </div>
            </Link>

            <Link
              href="#"
              className="relative lg:h-[250px] h-[200px] rounded-2xl border border-border w-full overflow-hidden group block hover:shadow-lg animation-standard"
            >
              <div className="absolute inset-0 bg-[url('/images/industries-technology-img.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-white text-2xl font-medium">Technology</h3>

                <span className="inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-6 h-6" />
                </span>
              </div>
            </Link>

            <Link
              href="#"
              className="relative lg:lg:h-[250px] h-[200px] rounded-2xl border border-border w-full overflow-hidden group block hover:shadow-lg animation-standard"
            >
              <div className="absolute inset-0 bg-[url('/images/industries-private-equity-img.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-white text-2xl font-medium">
                  Private Equity
                </h3>

                <span className="inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-6 h-6" />
                </span>
              </div>
            </Link>

            <Link
              href="#"
              className="relative lg:h-[250px] h-[200px] rounded-2xl border border-border w-full overflow-hidden group block hover:shadow-lg animation-standard"
            >
              <div className="absolute inset-0 bg-[url('/images/industries-life-sciences-img.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-white text-2xl font-medium">
                  Life Sciences
                </h3>

                <span className="inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-6 h-6" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding-standard bg-secondary-background">
        <div className="layout-standard section-padding-standard">
          <h2 className="md:text-6xl text-4xl font-light text-heading font-heading mb-12">
            A Difference at Work
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {DiffrentAtWorkData.map((card) => (
              <div
                key={card.id}
                className="relative h-[420px] overflow-hidden cursor-pointer group"
              >
                <div className="relative h-full group-hover:opacity-0 transition-opacity duration-300">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-medium font-heading text-white">
                        {card.title}
                      </h3>
                      <ChevronRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-primary p-8 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-3xl font-medium font-heading text-white mb-6 pb-6 border-b-2 border-border">
                    {card.title}
                  </h3>
                  <p className="md:text-base text-white/80 text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="relative w-full lg:h-[800px] md:h-[400px] max-md:section-padding-standard md:rounded-3xl rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/cta-bg-img.png')] bg-cover bg-center" />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 h-full flex items-center max-md:section-padding-standard">
              <div className="md:max-w-2xl px-4 md:px-16">
                <h2 className="text-white text-4xl md:text-5xl font-light leading-tight">
                  Strategic Legal Support.
                  <br />
                  When It Matters Most.
                </h2>

                <p className="md:mt-6 mt-4 text-white/80 md:text-lg text-base leading-relaxed">
                  Trusted counsel for businesses and individuals navigating
                  complex legal challenges with confidence and clarity.
                </p>

                <div className="md:mt-10 mt-8 flex items-center max-md:flex-col gap-4">
                  <button className="px-8 py-4 max-md:w-full bg-primary text-white rounded-lg hover:bg-primary-hover transition">
                    Schedule a Consultation
                  </button>

                  <button className="px-8 py-4 max-md:w-full border border-white/40 text-white rounded-lg hover:bg-white/10 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

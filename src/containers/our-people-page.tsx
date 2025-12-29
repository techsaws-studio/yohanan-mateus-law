"use client";

import { useState } from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import OurPeoplePageNewestAttorney01Img from "../../public/images/our-people-page-newest-attorney-01-img.jpg";
import OurPeoplePageNewestAttorney02Img from "../../public/images/our-people-page-newest-attorney-02-img.jpg";
import OurPeoplePageNewestAttorney03Img from "../../public/images/our-people-page-newest-attorney-03-img.webp";
import OurPeoplePageNewestAttorney04Img from "../../public/images/our-people-page-newest-attorney-04-img.jpg";
import OurPeoplePageNewestAttorney05Img from "../../public/images/our-people-page-newest-attorney-05-img.jpg";
import OurPeoplePageNewestAttorney06Img from "../../public/images/our-people-page-newest-attorney-06-img.webp";
import OurPeoplePageNewestAttorney07Img from "../../public/images/our-people-page-newest-attorney-07-img.jpg";
import OurPeoplePageNewestAttorney08Img from "../../public/images/our-people-page-newest-attorney-08-img.jpg";
import OurPeoplePageAttorney01Img from "../../public/images/our-people-page-attorney-01-img.webp";
import OurPeoplePageAttorney02Img from "../../public/images/our-people-page-attorney-02-img.png";
import OurPeoplePageAttorney03Img from "../../public/images/our-people-page-attorney-03-img.webp";
import OurPeoplePageAttorney04Img from "../../public/images/our-people-page-attorney-04-img.webp";
import OurPeoplePageAttorney05Img from "../../public/images/our-people-page-attorney-05-img.webp";
import OurPeoplePageAttorney06Img from "../../public/images/our-people-page-attorney-06-img.jpeg";
import OurPeoplePageAttorney07Img from "../../public/images/our-people-page-attorney-07-img.jpg";
import OurPeoplePageAttorney08Img from "../../public/images/our-people-page-attorney-08-img.jpg";
import OurPeoplePageAttorney09Img from "../../public/images/our-people-page-attorney-09-img.jpg";
import OurPeoplePageAttorney10Img from "../../public/images/our-people-page-attorney-10-img.jpg";
import OurPeoplePageAttorney11Img from "../../public/images/our-people-page-attorney-11-img.webp";
import OurPeoplePageAttorney12Img from "../../public/images/our-people-page-attorney-12-img.jpg";
import OurPeoplePageAttorney13Img from "../../public/images/our-people-page-attorney-13-img.jpg";
import OurPeoplePageAttorney14Img from "../../public/images/our-people-page-attorney-14-img.jpg";
import OurPeoplePageAttorney15Img from "../../public/images/our-people-page-attorney-15-img.jpg";
import OurPeoplePageAttorney16Img from "../../public/images/our-people-page-attorney-16-img.jpg";

const NewestAttorneysData = [
  {
    id: 1,
    name: "Alexandra M. Pierce",
    title: "COUNSEL",
    image: OurPeoplePageNewestAttorney01Img,
  },
  {
    id: 2,
    name: "Isabella R. Novak",
    title: "COUNSEL",
    image: OurPeoplePageNewestAttorney02Img,
  },
  {
    id: 3,
    name: "Jonathan K. Reynolds",
    title: "ASSOCIATE",
    image: OurPeoplePageNewestAttorney03Img,
  },
  {
    id: 4,
    name: "Olivia S. Hartman",
    title: "COUNSEL",
    image: OurPeoplePageNewestAttorney04Img,
  },
  {
    id: 5,
    name: "Lucas M. Grant",
    title: "ASSOCIATE",
    image: OurPeoplePageNewestAttorney05Img,
  },
  {
    id: 6,
    name: "Ayesha R. Khan",
    title: "COUNSEL",
    image: OurPeoplePageNewestAttorney06Img,
  },
  {
    id: 7,
    name: "Matthew J. O’Connell",
    title: "ASSOCIATE",
    image: OurPeoplePageNewestAttorney07Img,
  },
  {
    id: 8,
    name: "Sofia L. Marino",
    title: "COUNSEL",
    image: OurPeoplePageNewestAttorney08Img,
  },
];

const AttorneysData = [
  {
    id: 1,
    name: "Daniel F. Morales",
    title: "ASSOCIATE",
    image: OurPeoplePageAttorney01Img,
  },
  {
    id: 2,
    name: "Priya N. Desai",
    title: "COUNSEL",
    image: OurPeoplePageAttorney02Img,
  },
  {
    id: 3,
    name: "Ethan W. Caldwell",
    title: "ASSOCIATE",
    image: OurPeoplePageAttorney03Img,
  },
  {
    id: 4,
    name: "Lauren M. Whitfield",
    title: "COUNSEL",
    image: OurPeoplePageAttorney04Img,
  },
  {
    id: 5,
    name: "Thomas J. Gallagher",
    title: "SHAREHOLDER",
    image: OurPeoplePageAttorney05Img,
  },
  {
    id: 6,
    name: "Camila R. Alvarez",
    title: "COUNSEL",
    image: OurPeoplePageAttorney06Img,
  },
  {
    id: 7,
    name: "Benjamin L. Parker",
    title: "ASSOCIATE",
    image: OurPeoplePageAttorney07Img,
  },
  {
    id: 8,
    name: "Rachel E. Donovan",
    title: "COUNSEL",
    image: OurPeoplePageAttorney08Img,
  },
  {
    id: 9,
    name: "Marcus L. Bennett",
    title: "ASSOCIATE",
    image: OurPeoplePageAttorney09Img,
  },
  {
    id: 10,
    name: "Sophia K. Linden",
    title: "COUNSEL",
    image: OurPeoplePageAttorney10Img,
  },
  {
    id: 11,
    name: "Andrew P. Sullivan",
    title: "ASSOCIATE",
    image: OurPeoplePageAttorney11Img,
  },
  {
    id: 12,
    name: "Natalie J. Hoffman",
    title: "COUNSEL",
    image: OurPeoplePageAttorney12Img,
  },
  {
    id: 13,
    name: "Robert L. Kim",
    title: "ASSOCIATE",
    image: OurPeoplePageAttorney13Img,
  },
  {
    id: 14,
    name: "Melissa A. Turner",
    title: "COUNSEL",
    image: OurPeoplePageAttorney14Img,
  },
  {
    id: 15,
    name: "Jason M. Feldman",
    title: "ASSOCIATE",
    image: OurPeoplePageAttorney15Img,
  },
  {
    id: 16,
    name: "Hannah E. Brooks",
    title: "COUNSEL",
    image: OurPeoplePageAttorney16Img,
  },
];

function OurPeoplePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [hoveredId02, setHoveredId02] = useState<number | null>(null);

  return (
    <main>
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

      <section className="section-margin-standard layout-standard flex flex-col gap-12">
        <div>
          <h2 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading capitalize max-md:leading-[1.3]">
            Meet our newest attorneys
          </h2>

          <Separator className="mt-4 mb-12 w-full h-1 bg-primary rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NewestAttorneysData.map((attorney) => (
              <div
                key={attorney.id}
                className="relative overflow-hidden bg-muted aspect-square cursor-pointer"
                onMouseEnter={() => setHoveredId(attorney.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover w-full h-full"
                />

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1/3 bg-primary flex flex-col items-start justify-center p-10 transition-opacity duration-300 ${
                    hoveredId === attorney.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-primary-foreground font-heading text-xl font-medium">
                    {attorney.name}
                  </p>
                  <p className="text-white/80 text-base font-light tracking-wider">
                    {attorney.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading capitalize max-md:leading-[1.3]">
            Meet Our Attorneys
          </h2>

          <Separator className="mt-4 mb-12 w-full h-1 bg-primary rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AttorneysData.map((attorney) => (
              <div
                key={attorney.id}
                className="relative overflow-hidden bg-muted aspect-square cursor-pointer"
                onMouseEnter={() => setHoveredId02(attorney.id)}
                onMouseLeave={() => setHoveredId02(null)}
              >
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover w-full h-full"
                />

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1/3 bg-primary flex flex-col items-start justify-center p-10 transition-opacity duration-300 ${
                    hoveredId02 === attorney.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-primary-foreground font-heading text-xl font-medium">
                    {attorney.name}
                  </p>
                  <p className="text-white/80 text-base font-light tracking-wider">
                    {attorney.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default OurPeoplePage;

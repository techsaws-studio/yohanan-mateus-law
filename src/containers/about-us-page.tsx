"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

import AboutUsPageOverviewImg from "../../public/images/about-us-page-overview-img.jpg";
import AboutUsPageProBonoImg01 from "../../public/images/about-us-page-pro-bono-img-01.jpg";
import AboutUsPageProBonoImg02 from "../../public/images/about-us-page-pro-bono-img-02.jpg";
import AboutUsPageLeadershipImgBoardMember01 from "../../public/images/about-us-page-leadership-img-board-member-01.jpeg";
import AboutUsPageLeadershipImgBoardMember02 from "../../public/images/about-us-page-leadership-img-board-member-02.jpg";
import AboutUsPageLeadershipImgBoardMember03 from "../../public/images/about-us-page-leadership-img-board-member-03.webp";
import AboutUsPageLeadershipImgBoardMember04 from "../../public/images/about-us-page-leadership-img-board-member-04.jpg";
import AboutUsPageLeadershipImgBoardMember05 from "../../public/images/about-us-page-leadership-img-board-member-05.jpg";
import AboutUsPageLeadershipImgBoardMember06 from "../../public/images/about-us-page-leadership-img-board-member-06.webp";
import AboutUsPageLeadershipImgBoardMember07 from "../../public/images/about-us-page-leadership-img-board-member-07.jpg";
import AboutUsPageLeadershipImgBoardMember08 from "../../public/images/about-us-page-leadership-img-board-member-08.webp";
import AboutUsPageLeadershipImgBoardMember09 from "../../public/images/about-us-page-leadership-img-board-member-09.webp";
import AboutUsPageLeadershipImgBoardMember10 from "../../public/images/about-us-page-leadership-img-board-member-10.webp";
import AboutUsPageLeadershipImgBoardMember11 from "../../public/images/about-us-page-leadership-img-board-member-11.webp";
import AboutUsPageLeadershipImgBoardMember12 from "../../public/images/about-us-page-leadership-img-board-member-12.webp";
import { Circle } from "lucide-react";

const ABOUT_TABS = [
  { id: "overview", label: "Firm Overview" },
  { id: "accolades", label: "Accolades" },
  { id: "pro-bono", label: "Pro Bono" },
  { id: "leadership", label: "Firm Leadership" },
];

const AccoladesData = [
  {
    category: "BTI Legal Research",
    items: [
      "Recognized as a Client Service Trailblazer in BTI's Client Service A-Team Report (2025)",
      "Recognized by BTI among the Most Recommended Law Firms for the Pharma Industry (2025)",
      "Recognized by BTI among Law Firms Best at Meeting Novel, New, and Strategic Needs (2024)",
      "Named to BTI's Leading Edge Law Firms list (2024)",
      "Recognized by BTI among Law Firms Distinguished in Innovative Approach (2023)",
      "Named to BTI's Client Service 100 list (2023)",
    ],
  },
  {
    category: "Innovation",
    items: [
      "Innovative Firm of the Year: North America by IFLR (2025)",
      "Emerging Technology Firm of the Year: North America by IFLR (2025)",
      "BTI Law Firm Innovation Icons (2025)",
      "Best Legal Innovation by ALM's Southeastern Legal Awards (2025)",
      "Finalist for Firm Innovation at the New York Legal Awards (2025)",
    ],
  },
  {
    category: "Best Lawyers® & Best Law Firms® National Recognition",
    description:
      "A leading legal industry rankings organization that determines placement based on an evaluation process that includes client and lawyer evaluations",
    hasLogo: true,
  },
  {
    category: "BTI Litigation Outlook",
    items: [
      '"Distinguished" in Intellectual Property Litigation (2026)',
      '"Standout" in Class Action (2026)',
      '"Standout" in Commercial Litigation (2026)',
      '"Standout" in Complex Commercial Litigation (2026)',
      '"Standout" in Cybersecurity Litigation (2026)',
      '"Standout" in Product Liability Litigation (2026)',
    ],
  },
  {
    category: "The Legal 500",
    description:
      "Nationally recognized in Healthcare: Service Providers, Immigration, Real Estate and M&A: Middle Market.",
    hasReadMore: true,
  },
  {
    category: "Corporate Equality Index (CEI)",
    description:
      "Yohanan Mateus Law has been recognized by the Human Rights Campaign Foundation's Corporate Equality Index (CEI) for LGBTQ+ workplace equality.",
    hasLogo: true,
  },
  {
    category: "Mansfield Rule Certification Plus",
    description:
      'Yohanan Mateus Law achieved Diversity Lab\'s "Mansfield Rule 8.0 Certification Plus," which measures diversity in law firms.',
    hasLogo: true,
  },
  {
    category: "Patexia",
    description:
      'Yohanan Mateus Law was ranked in Patexia\'s Patent Litigation 2024 Intelligence Report as one of the "most active" and "best performing" law firms in the country for patent litigation.',
    hasReadMore: true,
  },
  {
    category: "Leadership Council on Legal Diversity",
    description:
      "Yohanan Mateus Law has been named a 2024 Top Performer by Leadership Council on Legal Diversity, which recognizes law firms and corporations that show a strong commitment to building a more inclusive legal profession.",
    hasLogo: true,
  },
  {
    category: "The American Lawyer",
    description:
      "Yohanan Mateus Law is an Am Law 100 firm. The firm is ranked #59 in the Am Law 100 annual law firm ranking. (April 2025)",
  },
  {
    category: "Chambers and Partners National Recognition",
    description:
      "America's Leading Lawyers for Business®: A leading legal industry rankings organization that determines placement based largely on client feedback.",
    hasReadMore: true,
  },
  {
    category: "American Health Law Association (AHLA)",
    items: [
      "Ranked as the largest health care law firm in the nation by AHLA, 2018, 2021-2022",
      "Ranked as the second-largest health care law firm in the nation by AHLA, 2016, 2017, 2019, 2020, 2023",
    ],
  },
  {
    category: "Law360",
    description:
      'Ranked #29 by Law360 for total attorneys among the "400 Largest U.S. Law Firms." (June 2025)',
    hasReadMore: true,
  },
  {
    category: "Benchmark Litigation",
    description:
      'Reflecting the firm\'s commitment to litigation excellence, Benchmark Litigation recognizes Yohanan Mateus Law nationally and regionally. Our Litigation practice ranks "Highly Recommended" in Missouri and "Recommended" in Arizona, Georgia and Illinois. We have 26 litigators named "Litigation Stars" and six "Future Stars" for 2026. (October 2025)',
    hasLogo: true,
  },
];

const BoardMembers = [
  {
    name: "Michael R. Bennett",
    title: "Managing Partner",
    image: AboutUsPageLeadershipImgBoardMember01,
  },
  {
    name: "Sarah L. Whitman",
    title: "Corporate & Business Practice Lead",
    image: AboutUsPageLeadershipImgBoardMember02,
  },
  {
    name: "Daniel A. Romero",
    title: "Real Estate Practice Lead",
    image: AboutUsPageLeadershipImgBoardMember03,
  },
  {
    name: "Emily K. Foster",
    title: "Partner",
    image: AboutUsPageLeadershipImgBoardMember04,
  },
  {
    name: "Jonathan P. Mills",
    title: "Litigation Practice Lead",
    image: AboutUsPageLeadershipImgBoardMember06,
  },
  {
    name: "Rebecca T. Collins",
    title: "Business Transactions Partner",
    image: AboutUsPageLeadershipImgBoardMember05,
  },
  {
    name: "Andrew M. Hayes",
    title: "Partner",
    image: AboutUsPageLeadershipImgBoardMember07,
  },
  {
    name: "Laura S. Kaplan",
    title: "Financial Services Partner",
    image: AboutUsPageLeadershipImgBoardMember08,
  },
  {
    name: "Christopher J. Nolan",
    title: "Real Estate & Finance Partner",
    image: AboutUsPageLeadershipImgBoardMember09,
  },
  {
    name: "Natalie R. Brooks",
    title: "Regulatory & Compliance Practice Lead",
    image: AboutUsPageLeadershipImgBoardMember11,
  },
  {
    name: "Omar H. Siddiqui",
    title: "Litigation Partner",
    image: AboutUsPageLeadershipImgBoardMember10,
  },
  {
    name: "David L. Monroe",
    title: "Office Managing Partner",
    image: AboutUsPageLeadershipImgBoardMember12,
  },
];

function AboutUsPage() {
  const [active, setActive] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleReadMore = (category: string) => {
    setExpandedSections((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <main>
      <section className="relative w-full h-[320px] md:h-[400px] lg:h-[580px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about-us-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            About Us
          </h1>
        </div>
      </section>
      <section className="w-full bg-primary">
        <div className="layout-standard h-full flex max-md:flex-col">
          {ABOUT_TABS.map((tab) => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading mb-4 md:mb-8 capitalize max-md:leading-[1.3]">
                  An open letter from our CEO
                </h2>

                <div className="flex flex-col gap-6 lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium max-lg:mb-8">
                  <p className="lg:text-2xl md:text-xl text-lg font-medium text-heading font-heading">
                    Hello,
                  </p>

                  <p>
                    Thank you for your interest in Yohanan Mateus Law. I am
                    excited to tell you about our firm. We have been intentional
                    about creating a culture that aspires to bring out the best
                    in all of our professionals by allowing them to bring their
                    creativity and passion for what they do into our
                    environment. This has created an internal and external
                    client service model that is second to none, a workplace
                    that shows deep respect for each individual and truly is why
                    Yohanan Mateus Law has become what a law firm{" "}
                    <span className="italic">should</span> be.
                  </p>

                  <p>
                    I hope you take time to explore our website and learn more
                    about our culture. I think you will find that we do things a{" "}
                    <span className="italic">little</span> differently here at
                    Yohanan Mateus Law, which makes a{" "}
                    <span className="font-bold text-heading">big</span> impact
                    on our clients and our people.
                  </p>

                  <p>
                    To learn more, please reach out to any of our team members.
                  </p>
                </div>
              </div>

              <div>
                <div className="text-2xl text-heading font-heading font-medium mb-2">
                  Chase Simmons
                </div>
                <p className="font-normal text-foreground italic">
                  Chairman & Chief Executive Officer
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src={AboutUsPageOverviewImg}
                  alt="Overview Img"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-muted p-4 md:p-8 rounded-lg border border-border">
                <p className="text-2xl md:text-3xl leading-relaxed font-light">
                  Our brand is centered around the tagline,{" "}
                  <span className="font-medium font-heading text-heading">
                    what a law firm should be
                  </span>
                  . This brand tells the story of our people and our passion for
                  clients.
                </p>
              </div>
            </div>
          </div>
        ) : active === "accolades" ? (
          <div>
            <h1 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading mb-4 md:mb-8">
              Accolades
            </h1>

            {AccoladesData.map((accolade, index) => (
              <div key={index} className="mb-12">
                <h2 className="lg:text-2xl md:text-xl text-lg font-medium text-heading font-heading mb-4">
                  {accolade.category}
                </h2>

                {accolade.items && accolade.items.length > 0 ? (
                  <ul className="space-y-3 mb-8">
                    {accolade.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-4">
                        <Circle
                          className="text-primary flex-shrink-0 fill-primary"
                          size={8}
                        />

                        <span className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : accolade.description ? (
                  <div className="mb-4">
                    <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                      {accolade.description}
                    </p>
                    {accolade.hasReadMore && (
                      <button
                        onClick={() => toggleReadMore(accolade.category)}
                        className="text-primary font-medium mt-3 hover:text-primary-hover flex items-center gap-2"
                      >
                        Read More
                        <span
                          className={`transition-transform ${
                            expandedSections.includes(accolade.category)
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                    )}
                    {expandedSections.includes(accolade.category) && (
                      <div className="mt-4 p-4 bg-muted rounded border border-border">
                        Additional details about {accolade.category} can be
                        expanded here.
                      </div>
                    )}
                  </div>
                ) : null}

                {index < AccoladesData.length - 1 && (
                  <Separator className="md:my-12 my-6 bg-border border-border" />
                )}
              </div>
            ))}
          </div>
        ) : active === "pro-bono" ? (
          <div>
            <h2 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading mb-4 md:mb-8">
              Pro Bono
            </h2>

            <div className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium flex flex-col gap-6">
              <p>
                Law firms are in a unique position when it comes to helping
                those in need. At Yohanan Mateus Law, we approach our pro bono
                efforts with the same dedication and drive that we do our client
                work, applying our skills and resources to assisting
                individuals, organizations and causes throughout our
                communities. We&apos;re not passionate about pro bono because we
                have to be; we value this work because it&apos;s an extension of
                our value system and exemplifies what a law firm should be.
              </p>

              <p>
                And, because our pro bono work deserves the same standard of
                excellence that we apply to other matters, we staff our cases
                accordingly and provide the training necessary for attorneys
                inexperienced in certain matters to feel confident taking them
                on. Whether guiding clients through immigration proceedings,
                negotiating real estate deals for budding entrepreneurs or
                fighting for the rights of the veterans or the disabled, our
                teams are supported and encouraged to take on pro bono matters
                as part of their practice.
              </p>

              <p>
                In fact, Yohanan Mateus Law devotes a stand-alone pro bono
                committee to each practice area and office, ensuring swift
                approvals of vital projects, and our lawyers receive
                billable-hour credit for pro bono efforts. In 2020, our firm
                worked on over 640 pro bono matters in a broad range of areas,
                including{" "}
                <span className="text-red-600 font-medium">
                  habeas proceedings
                </span>
                , claims for asylum on behalf of a transgender client, and{" "}
                <span className="text-red-600 font-medium">amicus filings</span>{" "}
                relating to a 6th Amendment ruling by the Supreme Court.
                Alongside high-profile cases like these, we represent victims of
                domestic violence who simply want to feel safe, kids who have
                travelled down the wrong path and deserve a second chance, and
                individuals with a business dream who need help making it a
                reality. Whether you&apos;re a seasoned attorney with trial
                experience or a first-year associate just starting your career,
                Yohanan Mateus Law provides the help, resources and support
                needed to achieve the result each client deserves.
              </p>

              <p>
                We&apos;re proud of all of our work at Yohanan Mateus Law, but
                our approach to pro bono matters displays the heart of who we
                are as a firm. We help because we{" "}
                <span className="italic">can</span>.{" "}
                <span className="font-bold text-heading">
                  That&apos;s what a law firm should be.
                </span>
              </p>
            </div>

            <Separator className="md:my-12 my-6 bg-border border-border" />

            <h2 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading lg:mb-8 md:mb-12 mb-8">
              Pro Bono Case Highlights
            </h2>

            <div className="flex flex-col lg:flex-row md:gap-8 gap-6 items-center">
              <div className="flex-1 lg:order-1 order-2">
                <h3 className="lg:text-2xl md:text-xl text-lg font-medium text-heading font-heading mb-4">
                  Habeas Case
                </h3>
                <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                  <span className="text-red-600 font-medium">
                    Mary McKelvey and David Schultz
                  </span>{" "}
                  and their team received a rare initial victory in a state
                  habeas death penalty case. The case was complicated by the
                  fact that the allegations of ineffective assistance involve an
                  attorney who is a sitting judge in the jurisdiction where the
                  hearing took place. The court found that our team had made a
                  requisite showing of ineffective assistance of counsel in jury
                  selection, investigation, preparation, presentation of
                  mitigating evidence and expert opinions involving
                  petitioners&apos; personal, family, social and psychological
                  background. Michael Bramit was tried in 1997, and was charged
                  with an attempted robbery and fatal shooting of Jose Fierros,
                  who was soliciting prostitutes. Bramit was charged with
                  capital murder, found guilty and received the death penalty.
                  The Special Operations and Appellate Prosecution Unit of the
                  Riverside District Attorney&apos;s office filed its Return,
                  and the Yohanan Mateus Law team is currently working on its
                  Traverse. It is anticipated a final decision will be issued
                  this year.
                </p>
              </div>

              <div className="flex-shrink-0 w-full lg:w-[350px] lg:order-2 order-1">
                <div className="bg-muted h-[200px] md:h-[300px] lg:h-56 rounded overflow-hidden">
                  <Image
                    src={AboutUsPageProBonoImg01}
                    alt="Habeas case courtroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator className="md:my-12 my-6 bg-border border-border" />

            <div className="my-12 flex flex-col lg:flex-row md:gap-8 gap-6 items-center">
              <div className="flex-1 lg:order-1 order-2">
                <h3 className="lg:text-2xl md:text-xl text-lg font-medium text-heading font-heading mb-4">
                  Family Drug Court
                </h3>
                <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                  By being part of the Family Drug Court&apos;s team for over 20
                  years, Yohanan Mateus Law attorneys have helped to guide
                  families through a difficult and emotional process towards
                  positive change. The Family Drug Court serves families that
                  have been referred there, primarily for allegations of child
                  neglect, and typically related to parental drug use and
                  addiction. The goal of the Family Drug Court is to help
                  parents treat and overcome substance abuse issues so families
                  can be reunited and the cycle of abuse can end. The Family
                  Drug Court differs from other courts in that it provides
                  holistic services to families and serves a diverse group of
                  40-50 families at a time. Each family has a team of
                  professional service providers, including attorneys, Guardian
                  ad litem, CASA, social workers, substance abuse and mental
                  health counselors, and judicial officers.
                </p>
              </div>
              <div className="flex-shrink-0 w-full lg:w-[350px] lg:order-2 order-1">
                <div className="bg-muted h-[200px] md:h-[300px] lg:h-56 rounded overflow-hidden">
                  <Image
                    src={AboutUsPageProBonoImg02}
                    alt="Family Drug Court consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator className="md:my-12 my-6 bg-border border-border" />

            <div className="flex flex-col">
              <h3 className="lg:text-2xl md:text-xl text-lg font-medium text-heading font-heading mb-4">
                Juvenile Release Order
              </h3>
              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                After years of working on a complex criminal pro bono case that
                gained national attention for its constitutionality issues
                relating to juvenile offenders, Jennifer Eng received the news
                that she and others had been working towards. Her client is
                finally going to be released from prison after serving 26 years
                of a 241-year sentence. Bobby Bostic was 16 years old when he
                committed armed robbery against a group of people in 1995 and
                was charged with 18 felonies. Bostic’s sentence was one of the
                longest sentences of any juvenile offender in the state,
                including those convicted of homicide, and he would not be
                eligible for parole until he was 112 years old. Bostic and his
                legal team continued to fight against his lengthy sentence
                through the legal system. He issued multiple appeals and lost
                them all, including a rejection by the Missouri Supreme Court
                that his de facto life sentence did not qualify under Supreme
                Court’s finding in Graham v. Florida that it is unconstitutional
                to sentence a juvenile to life without parole for non-homicide
                cases. After his appeals were exhausted, Jennifer Eng and a
                former Yohanan Mateus Law colleague began working with the ACLU
                to help Bostic petition for clemency and prepare for a new
                opportunity available under a recently-enacted Missouri law.
                Jennifer and others worked with the ACLU team to prepare Bobby
                for his parole hearing provided by SB 16. The parole board
                recently issued its decision and granted him a release date of
                November 9, 2022, more than 26 years after he was sent to
                prison. Although his legal team guided and prepared him during
                the complex process, Jennifer credits Bostic’s positive outlook,
                faith in the process and hard work with his success. “Bobby is
                the one who really did the hard work during his years in
                prison,” she says. “Without any promise of release, he continued
                to show up and work each day to improve his circumstances while
                facing significant barriers and challenges along the way. Bobby
                has a lot to contribute to the community and I’m grateful that
                we were able to demonstrate that to the Missouri Legislature and
                the parole board and facilitate his release.”
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h2 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading mb-4 md:mb-8">
                Firm Leadership
              </h2>
              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] font-medium">
                Yohanan Mateus Law is governed by an 18-member Board of
                Directors led by Chairman and CEO Chase Simmons. Our board
                consists of attorneys spanning two to 40 years of tenure at the
                firm to reflect the experiences and best practices of the
                leading Am Law firms at which board members previously
                practiced. The firm&apos;s day-to-day leadership is provided by
                Chase Simmons, along with the firm&apos;s seven department
                chairs.
              </p>
            </div>

            <div className="py-12">
              <h3 className="lg:text-2xl md:text-xl text-lg font-medium text-heading font-heading mb-4">
                Board of Directors
              </h3>

              <Separator className="md:mb-12 h-1 rounded-full mb-6 bg-primary" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {BoardMembers.map((member) => (
                  <div key={member.name} className="flex flex-col">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[350px] object-top object-cover bg-muted mb-4 rounded-lg border border-border"
                    />

                    <h4 className="lg:text-xl md:text-lg text-base font-medium text-heading font-heading mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default AboutUsPage;

import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/intellectual-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 " />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Intellectual Property
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="layout-standard py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-12">
            {/* INTRO */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Polsinelli has one of the largest intellectual property
                practices in the nation, with more than 200 attorneys, patent
                agents, scientists and other professionals. Our Intellectual
                Property Department is a fully integrated, cross-functional team
                serving clients across the United States and worldwide.
              </p>

              <p>
                Our attorneys bring together diverse technical backgrounds,
                legal experience and industry insight to help clients protect,
                enforce and maximize the value of their intellectual property.
                We go beyond filing applications and litigating
                claims—partnering with clients to align IP strategy with
                business objectives.
              </p>
            </div>

            <Separator />

            {/* STRATEGY */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                End-to-End Intellectual Property Strategy
              </h2>

              <p>
                We support clients throughout the entire IP lifecycle, including
                early asset analysis, portfolio development, strategic planning,
                counseling and opinion work, due diligence, acquisition support
                and brand protection. Our approach ensures intellectual property
                serves as a driver of business growth and competitive advantage.
              </p>

              <p>
                Our team includes a deep bench of registered patent prosecutors,
                patent agents and scientists with the technical breadth required
                to protect innovations across today’s rapidly evolving
                industries.
              </p>
            </div>

            <Separator />

            {/* LITIGATION */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                High-Stakes IP Litigation
              </h2>

              <p>
                More than 40 dedicated trial lawyers provide full-lifecycle
                representation in complex IP disputes. With decades of
                first-chair trial experience, we represent clients from risk
                mitigation and pre-suit analysis through trial, appeal and post-
                grant proceedings.
              </p>

              <p>
                We regularly appear before federal and state courts, the Patent
                Trial and Appeal Board (PTAB), Trademark Trial and Appeal Board
                (TTAB), and the U.S. International Trade Commission (ITC).
              </p>
            </div>

            <Separator />

            {/* INDUSTRIES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Industry Coverage
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Biotechnology & Life Sciences</li>
                <li>Chemicals</li>
                <li>Computer Science & Technology</li>
                <li>Electrical Engineering</li>
                <li>Medical Devices</li>
                <li>Mechanical Engineering</li>
                <li>Pharmaceuticals</li>
                <li>Product Design & User Interface</li>
                <li>Software & Business Methods</li>
              </ul>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Core IP Services
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Patent Filings & Strategy</li>
                <li>IP Counseling & Opinions</li>
                <li>Licensing & Transactions</li>
                <li>Hatch-Waxman Litigation</li>
                <li>Trademark, Copyright & Branding</li>
                <li>Intellectual Property Litigation</li>
                <li>Post-Grant Proceedings</li>
                <li>International IP Protection</li>
              </ul>
            </div>

            <Separator />

            {/* EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Depth of Experience
              </h2>

              <ul className="space-y-3 list-disc list-inside">
                <li>Former Commissioner and Chair of the U.S. ITC</li>
                <li>Former Assistant Commissioner at the USPTO</li>
                <li>9 former USPTO Patent Examiners</li>
                <li>100+ professionals admitted before the USPTO</li>
                <li>20+ Ph.D. holders and 100+ technical degrees</li>
              </ul>
            </div>

            <Separator />

            {/* RANKINGS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Rankings & Recognition
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  2023 “Law Firm of the Year” in Patent Law – U.S. News & Best
                  Lawyers®
                </li>
                <li>
                  Tier 1 National Rankings for Patent, Trademark and Technology
                  Law (2025)
                </li>
                <li>Leader in IP Litigation – BTI Litigation Outlook 2025</li>
                <li>Consistently ranked by Chambers USA and Chambers Global</li>
              </ul>
            </div>

            <Separator />

            {/* METRICS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                2025 Activity Highlights
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>5,426 patent applications filed; 2,928 obtained</li>
                <li>1,572 trademark applications filed; 1,071 obtained</li>
                <li>97 TTAB cases; 29 PTAB cases</li>
                <li>71 federal district court cases</li>
                <li>8 Section 337 ITC investigations</li>
              </ul>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (UNCHANGED) ================= */}
          <aside className="space-y-12">
            <div>
              <h3 className="text-xl font-heading text-heading mb-4">
                Key Contacts
              </h3>

              <Separator className="mb-6" />

              <div className="space-y-6">
                {[
                  {
                    name: "William P. Sweeney",
                    title: "Intellectual Property Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Patent Litigation",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Trademark & Brand Protection",
                    phone: "214.661.5538",
                  },
                ].map((contact) => (
                  <div key={contact.name} className="flex gap-4">
                    <div className="h-14 w-14 bg-muted rounded-full" />
                    <div className="text-sm">
                      <p className="font-medium text-heading">{contact.name}</p>
                      <p className="text-paragraph">{contact.title}</p>
                      <p className="mt-1 text-paragraph">{contact.phone}</p>
                      <a href="#" className="text-primary text-sm font-medium">
                        Email
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

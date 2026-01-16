import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/capability-universal-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 " />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Venture Capital & Emerging Growth
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
                It is critical for investors and venture capital–backed
                companies to make smart investments with the right terms and
                structures in place. With a focus on the emerging company
                market,
                <strong> Yohanan Mateus Law</strong> has helped launch and grow hundreds
                of businesses at every stage of development.
              </p>

              <p>
                Recognized by PitchBook as one of the most active law firms by
                deal volume in the U.S. and globally, our interdisciplinary team
                guides clients from pre-launch and initial funding through IPOs,
                mergers and exits.
              </p>
            </div>

            <Separator />

            {/* PRACTICE OVERVIEW */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Focused on Growth and Innovation
              </h2>

              <p>
                Our Venture Capital and Emerging Growth practice represents
                investment funds and venture-backed companies across a broad
                range of industries, with a particular focus on disruptive
                technology, consumer products, food and beverage, health care
                and biotech/life sciences.
              </p>

              <p>
                While primarily focused on growth and later-stage equity, we
                routinely advise seed funds, startups and pre-Series A
                companies. Our approach balances diligence and precision with
                the speed, pace and economics required in the venture capital
                market.
              </p>
            </div>

            <Separator />

            {/* CLIENT APPROACH */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Partnering with Founders and Investors
              </h2>

              <p>
                When representing companies, we help founders and management
                teams develop strategies that attract capital while anticipating
                future legal and regulatory challenges. For investment funds, we
                advise both experienced and emerging managers on capital
                deployment, fund formation, SPV and co-investment structures.
              </p>

              <p>
                Our attorneys share our clients’ passion for innovation and work
                collaboratively to help ideas evolve into scalable, successful
                businesses.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Venture Capital & Emerging Growth Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Venture capital financings at all stages, including
                  convertible rounds, Series Seed, Series A and beyond
                </li>
                <li>
                  Preparing and negotiating term sheets and definitive financing
                  agreements
                </li>
                <li>
                  Structuring and negotiating equity and incentive compensation
                  arrangements
                </li>
                <li>
                  Intellectual property and technology diligence and strategy
                </li>
                <li>Tax structuring</li>
                <li>Patent, trademark and intellectual property matters</li>
                <li>
                  Day-to-day legal counseling, including commercial contracts
                  and employment matters
                </li>
                <li>
                  Dispute avoidance, mitigation and resolution involving
                  founders, investors, vendors and employees
                </li>
                <li>Exit strategy planning, negotiation and execution</li>
              </ul>
            </div>

            <Separator />

            {/* RANKINGS */}
            {/* <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Rankings & Recognition
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Nationally ranked Tier 2 for Venture Capital Law in the 2024
                  edition of “Best Law Firms”
                </li>
                <li>
                  Ranked among the top 25 most active law firms in Venture
                  Capital deals by PitchBook’s 2024 Global League Tables
                </li>
                <li>Most Active Law Firm in the U.S.</li>
                <li>Most Active Law Firm Globally</li>
                <li>Most Active Representing U.S. Companies</li>
                <li>Most Active Representing Global Companies</li>
              </ul>
            </div> */}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <aside className="space-y-12">
            <div>
              <h3 className="text-xl font-heading text-heading mb-4">
                Key Contacts
              </h3>

              <Separator className="mb-6" />

              <div className="space-y-6">
                {[
                  {
                    name: "Sarah L. Whitman",
                    title: "Venture Capital & Emerging Growth",
                    phone: "415.438.6384",
                  },
                  {
                    name: "Jonathan R. Ellis",
                    title: "Growth Equity & Transactions",
                    phone: "312.873.3621",
                  },
                  {
                    name: "Daniel R. Hayes",
                    title: "Investor & Founder Advisory",
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

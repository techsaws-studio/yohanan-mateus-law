import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/private-equity-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 " />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Private Equity
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
                Our Private Equity practice advises private equity sponsors,
                portfolio companies and management teams across all aspects of
                the private investment life cycle. With more than 120 attorneys,
                we have represented hundreds of private equity funds and
                portfolio companies in transactions totaling billions of
                dollars.
              </p>

              <p>
                Our attorneys provide strategic, business-minded counsel at
                every stage—from fund formation and initial investment through
                growth, recapitalization and exit.
              </p>
            </div>

            <Separator />

            {/* LIFECYCLE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Full Investment Life Cycle Support
              </h2>

              <p>
                Members of our Private Equity team advise on fund formation,
                investment transactions, M&A activity, debt and equity
                financings, special situations and daily operational matters for
                portfolio companies.
              </p>

              <p>
                Our cross-disciplinary approach enables us to provide seamless
                guidance through dispositions and exits while aligning legal
                strategy with broader business objectives.
              </p>
            </div>

            <Separator />

            {/* INDUSTRY EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Industry-Focused Experience
              </h2>

              <p>
                Our attorneys have advised clients across most industries
                represented in the S&P 500. We bring particular depth in health
                care, real estate and technology, with the majority of our M&A
                transactions ranging from $25 million to $1 billion in
                enterprise value.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Private Equity Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Fund formation, compliance and private offerings</li>
                <li>
                  Portfolio company investments, M&A and dispositions, including
                  control and minority transactions
                </li>
                <li>
                  Leveraged buyouts, roll-ups and complex acquisition structures
                </li>
                <li>Equity, senior secured and mezzanine debt financings</li>
                <li>Special situations and restructurings</li>
                <li>
                  Outside general counsel representation for portfolio companies
                </li>
                <li>
                  Primary and secondary equity and debt capital funding,
                  including PIPE transactions
                </li>
              </ul>
            </div>

            <Separator />

            {/* FUNDS & INVESTMENTS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Funds & Investments
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Early-Stage Investments</li>
                <li>Venture Capital</li>
                <li>Venture Debt</li>
                <li>Growth Equity</li>
                <li>Control Investments</li>
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
                  Ranked among the top 25 law firms in Private Equity deals by
                  PitchBook 2024 Global League Tables
                </li>
                <li>Most Active Law Firm in the U.S.</li>
                <li>Most Active Representing U.S. Companies</li>
                <li>Most Active Representing Global Companies</li>
                <li>Most Active Representing U.S. Investors</li>
                <li>
                  Recognized by PitchBook as a top 25 firm for Private Equity
                  activity across B2C, B2B, Healthcare and Buyouts
                </li>
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
                    name: "William P. Sweeney",
                    title: "Private Equity Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Private Equity Transactions",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Portfolio Company Advisory",
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

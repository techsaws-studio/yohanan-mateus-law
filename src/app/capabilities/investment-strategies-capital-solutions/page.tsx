import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/our-people-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Investment Strategies & Capital Solutions
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
                We understand the pivotal role that investment strategies and
                capital solutions play in driving business growth and
                innovation. Our attorneys focus on delivering tailored solutions
                that help clients navigate complex investment landscapes with
                confidence and clarity.
              </p>

              <p>
                From early-stage companies to established enterprises, we
                provide strategic guidance designed to help clients capitalize
                on opportunities while effectively managing risk.
              </p>
            </div>

            <Separator />

            {/* TAILORED SOLUTIONS */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Tailored Investment Solutions
              </h2>

              <p>
                In today’s dynamic business environment, access to strategic
                investment solutions is critical. Our attorneys leverage deep
                transactional experience and industry insight to design
                customized investment strategies aligned with our clients’
                objectives.
              </p>

              <p>
                We regularly advise on mergers and acquisitions, financing
                structures, private placements, and other capital-raising
                initiatives with a focus on long-term value creation.
              </p>
            </div>

            <Separator />

            {/* CAPITAL MARKETS */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Navigating Complex Capital Markets
              </h2>

              <p>
                Capital markets are governed by evolving regulatory frameworks
                and market dynamics. Our team guides clients through each stage
                of the investment process, including due diligence, deal
                structuring, regulatory compliance, and execution.
              </p>

              <p>
                We work closely with clients to ensure informed decision-making
                and to position them to take advantage of emerging market
                opportunities.
              </p>
            </div>

            <Separator />

            {/* PARTNERSHIP */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Partnering for Success
              </h2>

              <p>
                We view ourselves as strategic partners in our clients’ success.
                Our client-centric approach emphasizes long-term relationships
                built on trust, integrity, and results.
              </p>

              <p>
                Whether advising startups on seed funding or supporting
                multinational corporations in complex acquisitions, we provide
                practical, business-driven counsel to help clients achieve their
                goals and unlock new growth opportunities.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (UNCHANGED PATTERN) ================= */}
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
                    title: "Investment Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Capital Markets & Transactions",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Private Capital & Growth",
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

            <div>
              <h3 className="text-xl font-heading text-heading mb-4">
                Capabilities
              </h3>

              <Separator className="mb-6" />

              <ul className="space-y-3 text-sm text-paragraph">
                <li>Mergers & Acquisitions</li>
                <li>Private Equity & Venture Capital</li>
                <li>Debt & Equity Financing</li>
                <li>Strategic Transactions</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

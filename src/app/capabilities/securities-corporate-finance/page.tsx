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
            Securities & Corporate Finance
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
                Our Securities & Corporate Finance attorneys combine significant
                transactional capabilities with deep regulatory knowledge to
                help publicly traded and privately held companies plan and
                execute capital-raising transactions, manage disclosure
                obligations and establish effective governance policies and
                practices.
              </p>

              <p>
                We regularly advise companies, underwriters, placement agents
                and other capital markets participants across a broad range of
                industries, delivering practical, business-focused solutions
                efficiently and effectively.
              </p>
            </div>

            <Separator />

            {/* EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Capital Markets Experience
              </h2>

              <p>
                Our team has extensive experience counseling clients in a full
                spectrum of financial transactions, including public and private
                offerings and complex strategic transactions. This breadth of
                experience allows us to guide clients through evolving
                regulatory requirements while maintaining transaction momentum.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Areas of Focus
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Debt & Equity Capital Markets</li>
                <li>
                  SEC Disclosure, Corporate Governance & Listed Company
                  Compliance
                </li>
                <li>Real Estate Investment Trusts (REITs)</li>
                <li>
                  Mergers & Acquisitions, Going-Private and Strategic
                  Transactions
                </li>
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
                  Nationally ranked Tier 2 for Securities / Capital Markets Law
                  in the 2025 “Best Law Firms” list by Best Lawyers®
                </li>
              </ul>
            </div>
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
                    title: "Securities & Capital Markets",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Corporate Finance Transactions",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Public Company Compliance",
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

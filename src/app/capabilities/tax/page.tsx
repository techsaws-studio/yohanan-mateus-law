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
            Tax
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
                All companies, organizations and individuals can expect to
                encounter tax issues. To meet these needs,{" "}
                <strong>Polsinelli</strong> Tax attorneys bring advanced
                qualifications—including Master’s degrees in Accounting or Tax
                Law and Certified Public Accountant (CPA) credentials—to provide
                sophisticated and practical guidance across international,
                federal, state and local tax matters.
              </p>

              <p>
                Our attorneys partner with clients to develop business-driven
                tax solutions across all major industries and tax status
                classifications, helping preserve income, protect assets and
                manage risk.
              </p>
            </div>

            <Separator />

            {/* CORE SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Core Tax Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Taxation of Business Transactions</li>
                <li>Tax Controversy and Litigation</li>
                <li>Tax & Financial Services</li>
                <li>State & Local Tax</li>
                <li>International Tax</li>
                <li>Real Estate Tax</li>
                <li>Private Equity Tax Structuring</li>
              </ul>
            </div>

            <Separator />

            {/* EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Depth of Experience
              </h2>

              <p>
                Our strong reputation is built on sound planning, in-depth
                analysis and favorable outcomes—particularly in complex tax
                matters involving diverse businesses. We regularly structure
                formations, reorganizations, mergers, acquisitions and
                liquidations in the most tax-advantageous manner.
              </p>

              <p>
                When disputes arise, our litigation experience spans all
                judicial forums, including the U.S. Tax Court, federal and state
                courts, and administrative tribunals nationwide.
              </p>
            </div>

            <Separator />

            {/* ADDITIONAL CAPABILITIES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Tax Controversy & Advisory
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Income tax</li>
                <li>Sales and use tax</li>
                <li>Excise tax</li>
                <li>Property tax</li>
              </ul>

              <p className="mt-6 text-lg text-paragraph leading-relaxed">
                With offices coast-to-coast, our Tax attorneys are equipped to
                represent clients in audits, appeals and controversies across
                local, county and state jurisdictions. We pride ourselves on
                communicating highly technical tax matters in a clear,
                accessible manner.
              </p>
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
                    name: "James R. Whitman",
                    title: "Tax Planning & Controversy",
                    phone: "312.873.3689",
                  },
                  {
                    name: "Laura M. Chen",
                    title: "International & State Tax",
                    phone: "415.438.6332",
                  },
                  {
                    name: "Michael D. Ross",
                    title: "Transactional Tax",
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

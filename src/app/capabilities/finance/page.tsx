import { Separator } from "@/components/ui/separator";

export default function FinancePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/our-people-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Finance
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="layout-standard py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-12">
            {/* INTRO */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Our Finance practice partners with financial institutions,
                private lenders, and businesses across the country to provide
                insightful and practical counsel on all aspects of debt and
                equity financing. We represent lenders, borrowers, issuers,
                servicers, investors, and related parties throughout the full
                lifecycle of finance transactions.
              </p>

              <p>
                Our attorneys advise on matters ranging from loan origination,
                servicing, sales, and securitizations to financial
                restructurings, workouts, enforcement actions, and bankruptcy
                proceedings. We are committed to resolving challenges
                efficiently and creatively while aligning legal solutions with
                our clients’ broader business goals.
              </p>
            </div>

            <Separator />

            {/* EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Our finance teams bring extensive multidisciplinary experience,
                assisting lenders, borrowers, issuers, investors, debtors,
                creditors, and master and special servicers in meeting complex
                financing needs. We connect clients to regional, national, and
                international financial markets and products that support their
                unique objectives.
              </p>

              <p>
                Transactions documented and closed by our attorneys reflect a
                deep understanding of market trends, regulatory considerations,
                and industry-specific risks.
              </p>
            </div>

            <Separator />

            {/* TRANSACTIONS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Representative Finance Transactions
              </h2>

              <ul className="space-y-4 text-lg text-paragraph list-disc list-inside">
                <li>Asset-based lending</li>
                <li>
                  Commercial real estate loans, including CMBS conduit loans,
                  bridge loans, and construction loans
                </li>
                <li>Derivative transactions</li>
                <li>
                  Loan restructurings, workouts, enforcement actions,
                  bankruptcy, and business reorganizations
                </li>
                <li>Loan sales, purchases, and other portfolio transactions</li>
                <li>
                  Loan syndications, participations, and other lending
                  arrangements
                </li>
                <li>Mezzanine financing</li>
                <li>Private credit and private debt</li>
                <li>
                  Securitization and structured finance, including CRE CLOs
                </li>
                <li>Strategic alliances and joint ventures</li>
                <li>Tax credits and incentive-based financing</li>
                <li>
                  Venture capital financing involving financial services
                  companies
                </li>
                <li>Warehouse and repurchase loan facilities</li>
              </ul>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-12">
            {/* KEY CONTACTS */}
            <div>
              <h3 className="text-xl font-heading text-heading mb-4">
                Key Contacts
              </h3>

              <Separator className="mb-6" />

              <div className="space-y-6">
                {[
                  {
                    name: "William P. Sweeney",
                    title: "Finance & Capital Markets Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Commercial Finance & Lending",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Financial Restructuring & Workouts",
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

            {/* NATIONAL RECOGNITION */}
            <div>
              <h3 className="text-xl font-heading text-heading mb-4">
                National Recognition
              </h3>

              <Separator className="mb-6" />

              <div className="flex gap-6 items-center">
                <div className="h-16 w-32 bg-muted flex items-center justify-center text-sm">
                  Chambers
                </div>
                <div className="h-16 w-32 bg-muted flex items-center justify-center text-sm">
                  Best Law Firms 2025
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

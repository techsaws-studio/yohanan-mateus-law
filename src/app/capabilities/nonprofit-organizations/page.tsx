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
            Nonprofit Organizations
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
                Mission drives impact. Nonprofits face daily challenges that can
                hinder their ability to achieve meaningful results. With the
                right strategic partner, these challenges can become
                opportunities for growth, resilience and long-term success.
              </p>

              <p>
                We work closely with nonprofit organizations so they can focus
                on what they do best—furthering their mission. Our
                cross-disciplinary team brings practical insight gained from
                resolving similar challenges across the nonprofit sector.
              </p>
            </div>

            <Separator />

            {/* APPROACH */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Strategic Guidance with Real-World Insight
              </h2>

              <p>
                As active industry contributors and thought leaders, we keep
                nonprofit clients informed of legal and regulatory developments
                impacting their operations—often before those changes take
                effect. We invest time in understanding each organization’s
                objectives, operations and risk profile.
              </p>

              <p>
                This combination of broad industry perspective and client-
                specific knowledge allows us to deliver tailored guidance that
                enhances decision-making and maximizes organizational impact.
              </p>
            </div>

            <Separator />

            {/* CLIENT TYPES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Organizations We Serve
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Corporate, Community & Family Foundations</li>
                <li>Government Organizations</li>
                <li>Hospitals & Health Systems</li>
                <li>Public Charities</li>
                <li>Religious Organizations</li>
                <li>Research Institutions</li>
                <li>Social Enterprises</li>
                <li>Trade Associations</li>
                <li>Universities & Higher Education</li>
                <li>501(c)(4) Social Welfare Organizations</li>
              </ul>
            </div>

            <Separator />

            {/* CORE SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Nonprofit Legal Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Strategy and structuring for new nonprofit organizations and
                  innovative ventures
                </li>
                <li>
                  Governance counseling for boards, committees and executive
                  leadership
                </li>
                <li>Charitable giving and fundraising guidance</li>
                <li>Endowments and management of institutional funds</li>
                <li>
                  Tax planning, audits and compliance, including Forms 990,
                  990-PF and 990-T
                </li>
                <li>
                  International grant-making and foreign operations support
                </li>
                <li>Impact investment opportunities</li>
                <li>
                  Collaborations, affiliations, mergers and strategic alliances
                </li>
              </ul>
            </div>

            <Separator />

            {/* CROSS PRACTICE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Cross-Disciplinary Support
              </h2>

              <p>
                Supported by the depth of our full-service platform, we partner
                with colleagues across the firm to provide specialized guidance
                when additional expertise is required.
              </p>

              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Labor & Employment for workforce policies and compliance
                </li>
                <li>
                  Employee Benefits & Executive Compensation for compliant
                  compensation programs
                </li>
                <li>
                  Mergers, Acquisitions & Divestitures for complex transactions
                </li>
                <li>
                  Intellectual Property for trademark and brand protection
                </li>
                <li>
                  Government Contracts for grants and public-private
                  partnerships
                </li>
                <li>
                  Public Policy when engaging with legislators and regulators
                </li>
                <li>Nonprofit Finance for tax-exempt bond financing</li>
                <li>
                  Real Estate for property acquisitions, sales and leasing
                </li>
                <li>Litigation for dispute resolution and risk analysis</li>
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
                    title: "Nonprofit Strategy & Governance",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Nonprofit Transactions & Tax",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Nonprofit Compliance & Risk",
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

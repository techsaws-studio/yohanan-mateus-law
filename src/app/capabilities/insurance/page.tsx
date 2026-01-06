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
            Insurance
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
                With decades of experience, our attorneys understand the
                insurance industry and the complex regulatory environment in
                which it operates. We serve insurers, reinsurers, producers,
                administrators, and related entities across a broad spectrum of
                regulatory, transactional, and compliance matters.
              </p>

              <p>
                Our national platform allows us to stay ahead of rapid industry
                change and provide a full suite of legal services to insurance
                businesses operating in highly regulated and evolving markets.
              </p>

              <p>
                Our experience spans Accident & Health, HMOs, Brokerage,
                Captives, Life, Property & Casualty, Reinsurance, Risk Retention
                Groups, Third Party Administrators, Professional Liability,
                Public Entity Pooling, Workers’ Compensation, and more.
              </p>
            </div>

            <Separator />

            {/* RECOGNITION */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Recognition
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Regionally ranked for Insurance by Chambers USA: America’s
                  Leading Lawyers for Business (2022–2023)
                </li>
                <li>
                  Tier 2 national ranking in Insurance Law by Best Law Firms®
                  (2024)
                </li>
                <li>
                  Ranked among the Top 30 Law Firms Nationwide for Client
                  Service Excellence*
                </li>
              </ul>
            </div>

            <Separator />

            {/* REGULATION */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Insurance Company Regulation
              </h2>

              <p className="text-lg text-paragraph leading-relaxed mb-4">
                We advise insurers on federal and state regulatory and
                compliance matters across all jurisdictions.
              </p>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Financial examinations and reporting</li>
                <li>Risk-based capital and investment compliance</li>
                <li>Insurance Holding Company System approvals</li>
                <li>Dividend distributions</li>
                <li>50-state surveys and investigations</li>
                <li>Insolvency and rehabilitation matters</li>
                <li>Corporate governance and ERM</li>
              </ul>
            </div>

            <Separator />

            {/* TRANSACTIONS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Transactions & M&A
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Formations, reorganizations, and demutualizations</li>
                <li>M&A transactions and strategic affiliations</li>
                <li>Funding agreements and surplus notes</li>
                <li>Management services agreements</li>
                <li>Indemnity and assumption reinsurance</li>
                <li>Captives and risk retention groups</li>
                <li>Loss portfolio transfers and assumption reinsurance</li>
              </ul>
            </div>

            <Separator />

            {/* TPA */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Third Party Administrators (TPAs)
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>National and multi-state TPA and PBM licensing</li>
                <li>Licensure maintenance and annual reporting</li>
                <li>Administrative Services Agreements</li>
                <li>Regulatory inquiries and enforcement actions</li>
                <li>M&A and divestitures involving TPAs</li>
                <li>Regulatory monitoring and compliance reporting</li>
              </ul>
            </div>

            <Separator />

            {/* AGENCIES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Agencies & Producers
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Multi-state producer and agency licensing</li>
                <li>Agent and agency agreement drafting</li>
                <li>Acquisitions and sales of insurance agencies</li>
                <li>Regulatory investigations and compliance counseling</li>
                <li>HIPAA and ACA advisory services</li>
              </ul>
            </div>

            <Separator />

            {/* HEALTH PLANS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Health Plans & Health Entities
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Health insurers, HMOs, PPOs</li>
                <li>TPAs, UROs, PBMs</li>
                <li>IPAs, ACOs, CINs</li>
                <li>Market conduct and financial examinations</li>
                <li>HIPAA, GLBA, and data security compliance</li>
                <li>Provider network formation and contracting</li>
              </ul>
            </div>

            <Separator />

            {/* CAPTIVES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Captives & Alternative Risk Transfer
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Captive formation and licensure</li>
                <li>Choice of domicile and structure</li>
                <li>Regulatory reporting and examinations</li>
                <li>Taxation of captives</li>
                <li>Risk retention and purchasing groups</li>
              </ul>
            </div>

            <Separator />

            {/* DMPO */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Discount Medical Plans
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>DMPO licensing and renewals</li>
                <li>Marketing and website compliance</li>
                <li>Advertising review</li>
                <li>Regulatory investigations and enforcement defense</li>
              </ul>

              <p className="mt-4 text-sm text-muted-foreground">
                *BTI Client Service A-Team Report
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
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
                    title: "Insurance Regulatory Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Insurance Transactions & Compliance",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Insurance Litigation & Enforcement",
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
                National Recognition
              </h3>

              <Separator className="mb-6" />

              <div className="flex gap-6">
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

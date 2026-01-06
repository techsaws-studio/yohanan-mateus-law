import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function EmployeeBenefitsExecutiveCompensationPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/capability/bankruptchy-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Employee Benefits & Executive Compensation
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
                Our Employee Benefits and Executive Compensation practice
                advises publicly traded companies, private entities, nonprofit
                organizations, and public sector employers of all sizes and
                across industries on the full range of legal, financial, and
                administrative issues relating to benefit plans and executive
                compensation arrangements.
              </p>

              <p>
                We take a business-minded approach to help clients align benefit
                and compensation programs with organizational goals, enabling
                them to attract, motivate, and retain talent. Our team has
                extensive experience advising hospital systems, health care
                providers, faith-based organizations, and academic medical
                centers on the complex compliance and strategic issues unique to
                those organizations.
              </p>

              <p>
                Leveraging our firm’s national platform, we partner with clients
                to design and maintain benefit and executive compensation
                strategies that are compliant, competitive, and aligned with
                long-term objectives.
              </p>
            </div>

            <Separator />

            {/* EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Many of our employee benefits professionals bring prior
                experience from leading actuarial, accounting, and consulting
                firms, as well as significant in-house and government agency
                experience. This diverse background allows our attorneys to
                align legal strategies with practical, real-world solutions.
              </p>

              <p>
                We regularly represent employers before the Internal Revenue
                Service (IRS), Department of Labor (DOL), and Pension Benefit
                Guaranty Corporation (PBGC), enabling us to guide clients
                efficiently through audits and other government proceedings.
                Working alongside our Labor & Employment and ERISA Litigation
                teams, we advise clients on best practices to prevent or resolve
                benefit-related litigation—often with meaningful cost savings.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Representative Services
              </h2>

              <ul className="space-y-4 text-lg text-paragraph list-disc list-inside">
                <li>
                  Tax-qualified retirement plans, including 401(k), 403(b), 457,
                  profit-sharing, cash balance, and defined benefit pension
                  plans
                </li>
                <li>
                  Employee stock ownership plans (ESOPs), including business
                  strategy and tax efficiency counseling
                </li>
                <li>
                  Health and welfare plans, including self-funding arrangements,
                  stop-loss insurance, and HIPAA and COBRA compliance
                </li>
                <li>
                  Executive and non-qualified deferred compensation
                  arrangements, including equity-based plans, incentive
                  programs, and employment agreements
                </li>
                <li>
                  Compliance counseling under Code Sections 83, 162(m), 280G,
                  and 409A
                </li>
                <li>
                  Wellness programs designed to improve employee health outcomes
                  and reduce employer costs
                </li>
                <li>
                  Affordable Care Act (ACA) counseling and compliance strategy
                </li>
                <li>
                  Benefit plans for unionized workforces, including
                  multiemployer pension plan and collective bargaining issues
                </li>
                <li>
                  Negotiation of plan service provider arrangements to achieve
                  cost savings and improved commercial terms
                </li>
                <li>
                  Benefit and compensation issues arising in corporate
                  transactions, restructurings, and bankruptcy proceedings
                </li>
                <li>
                  ERISA fiduciary obligations, governance procedures, and
                  investment oversight
                </li>
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
                    title:
                      "Employee Benefits & Executive Compensation Co-Chair",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title:
                      "Office Managing Partner | Employee Benefits & Executive Compensation Co-Chair",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title:
                      "Employee Benefits & Executive Compensation Vice Chair",
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

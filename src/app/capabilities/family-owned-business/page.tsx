import { Separator } from "@/components/ui/separator";

export default function FamilyOwnedBusinessPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/our-people-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Family & Privately Owned Businesses
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
                Privately held and family-owned businesses represent the most
                vital economic force in the United States. These enterprises
                account for the vast majority of U.S. businesses and a
                significant portion of the Fortune 500. We serve as trusted
                general counsel to family-owned and closely held companies,
                supporting them through daily operations, long-term planning,
                and generational transitions.
              </p>

              <p>
                Our attorneys advise owners and leadership teams on legal
                matters that impact both the business and the family, helping
                clients navigate complex regulatory environments while
                protecting enterprise value and continuity.
              </p>
            </div>

            <Separator />

            {/* GENERAL COUNSEL SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                General Counsel Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Day-to-day legal matters, including contract review and
                  disputes
                </li>
                <li>
                  Conducting annual meetings and preparing corporate records and
                  minutes
                </li>
                <li>Advising on governance and ownership structure issues</li>
                <li>Providing ongoing general counsel guidance</li>
                <li>
                  Coordinating employee benefits and employment-related matters
                </li>
                <li>
                  Managing and coordinating litigation and other legal services
                </li>
              </ul>
            </div>

            <Separator />

            {/* CHALLENGES */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Navigating Risk, Transition, and Growth
              </h2>

              <p>
                Family-owned and privately held businesses face unique
                challenges involving regulatory compliance, governance,
                succession planning, taxation, and estate planning. Historical
                data shows that only a small percentage of family businesses
                successfully transition beyond the second and third generations,
                with leadership changes often driven by retirement or
                semi-retirement.
              </p>

              <p>
                We work closely with business owners to overcome these
                challenges by developing operational, governance, and growth
                strategies designed to preserve continuity, reduce risk, and
                position the business for long-term success.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Additional Areas of Counsel
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Entity formation and organizational structuring</li>
                <li>Human resources and workplace compliance issues</li>
                <li>Debt and equity financing arrangements</li>
                <li>Succession planning and estate planning coordination</li>
                <li>Intellectual property protection and licensing</li>
                <li>Business expansion and strategic growth initiatives</li>
                <li>Real estate acquisition, disposition, and leasing</li>
                <li>Equipment purchase and leasing</li>
                <li>Technology and software licensing</li>
                <li>
                  All other legal matters related to operating a family business
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
                    title: "Family Business & Governance Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Privately Held Business Advisory",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Succession & Risk Management",
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

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
            Transportation & Logistics
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
                The transportation industry is evolving rapidly, creating a
                critical need for innovative service models and forward-thinking
                corporate partnerships. Drawing on decades of experience across
                multiple industries, <strong>Yohanan Mateus Law</strong>’s
                Transportation & Logistics attorneys advise clients on complex
                legal, regulatory and operational challenges.
              </p>

              <p>
                Our multidisciplinary approach allows us to deliver strategic,
                business-oriented solutions that help transportation and
                logistics companies adapt to changing market conditions and
                regulatory environments.
              </p>
            </div>

            <Separator />

            {/* INDUSTRIES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Industry Experience
              </h2>

              <div className="space-y-6 text-lg text-paragraph leading-relaxed">
                <div>
                  <h3 className="text-xl font-heading text-heading mb-2">
                    Automotive
                  </h3>
                  <p>
                    We work with manufacturers, retailers and lessors on
                    innovative vehicle programs—including car-sharing
                    initiatives—along with litigation involving contract
                    disputes, class actions and product liability, protection of
                    product innovations, and insurance and risk management
                    programs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-heading mb-2">
                    Aviation
                  </h3>
                  <p>
                    Our aviation team counsels clients on aircraft ownership and
                    use, manufacturing and certification, uncrewed aircraft
                    systems, regulatory compliance and aviation-related
                    litigation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-heading mb-2">
                    Commercial Trucking
                  </h3>
                  <p>
                    With decades of collective experience advising major
                    trucking operators, we counsel some of the nation’s largest
                    companies on employment claims, class actions, logistics
                    issues and breach of contract matters.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* CORE SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Core Legal Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Corporate and transactional matters, including commercial
                  contracts, mergers and acquisitions, joint ventures and
                  strategic alliances
                </li>
                <li>
                  Financial services, including private equity investments,
                  sophisticated loan origination and capital tax leases
                </li>
                <li>
                  Employment counseling and defense, including compliance advice
                  and litigation
                </li>
                <li>
                  Insurance requirements, risk mitigation and insurance recovery
                </li>
                <li>
                  Intellectual property protection and litigation, including
                  patent, trademark and counterfeit goods matters
                </li>
                <li>
                  Regulatory compliance, permitting, import/export issues and
                  legislative advocacy
                </li>
                <li>
                  Litigation, risk mitigation and dispute avoidance related to
                  contracts, shareholder disputes, lease disputes, product
                  liability and accident-related claims
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
                    name: "Robert J. Matthews",
                    title: "Transportation & Logistics",
                    phone: "312.873.3648",
                  },
                  {
                    name: "Emily K. Foster",
                    title: "Aviation & Regulatory",
                    phone: "816.360.4172",
                  },
                  {
                    name: "Daniel R. Hayes",
                    title: "Transactional & Litigation",
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

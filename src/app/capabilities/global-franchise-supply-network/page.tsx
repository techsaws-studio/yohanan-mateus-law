import { Separator } from "@/components/ui/separator";

export default function GlobalFranchiseSupplyNetworkPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/our-people-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Global Franchise & Supply Network
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* CONTENT */}
      <section className="layout-standard py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* LEFT */}
          <div className="space-y-12">
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                We deliver responsive, practical, and business-focused legal
                counsel to companies ranging from startups to globally
                recognized brands in franchise, licensing, distribution, supply
                chain, and international trade matters.
              </p>

              <p>
                Our attorneys represent franchisors, licensors, manufacturers,
                and service providers in structuring transactions and
                negotiating agreements across every level of the supply chain.
              </p>
            </div>

            <Separator />

            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                We have structured and managed franchise, licensing, and
                distribution systems for hundreds of brands throughout the
                United States and in more than 60 countries, overseeing
                compliance, disclosure, and operational scalability.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Supply Chain & Commercial Transactions
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Manufacturer, supply, and service agreements</li>
                <li>Sales, agency, and distribution agreements</li>
                <li>Logistics, warehousing, and transportation contracts</li>
                <li>Equipment and finance leases</li>
                <li>Joint ventures and strategic alliances</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Litigation, Trade & Brand Protection
              </h2>

              <p className="text-lg text-paragraph leading-relaxed">
                Our litigation team handles domestic and international disputes
                involving franchise termination, trademark protection,
                non-compete enforcement, regulatory compliance, and
                international arbitration.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
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
                    title: "Global Franchise Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Distribution & Trade Counsel",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Franchise Litigation",
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

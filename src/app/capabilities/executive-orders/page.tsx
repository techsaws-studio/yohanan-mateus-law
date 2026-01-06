import { Separator } from "@/components/ui/separator";

export default function ExecutiveOrdersPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/capability-universal-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 " />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Executive Orders & Federal Policy Developments
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
                Executive orders and federal administrative actions play a
                significant role in shaping regulatory policy, economic
                conditions, and business strategy. Our team closely monitors
                executive actions and agency developments to help clients
                understand their implications and respond effectively to a
                rapidly evolving policy environment.
              </p>

              <p>
                Below are select highlights and insights addressing key
                executive actions, trade developments, and legislative
                initiatives with meaningful impact across industries.
              </p>
            </div>

            <Separator />

            {/* LATEST UPDATES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                2025 Administration Actions & Developments
              </h2>

              <ul className="space-y-4 text-lg text-paragraph list-disc list-inside">
                <li>
                  New Executive Order on Artificial Intelligence mandates a
                  minimally burdensome regulatory approach by states
                </li>
                <li>
                  White House draft executive order targets state-level AI laws,
                  emphasizing national security considerations
                </li>
                <li>
                  New tariff exemptions announced for agricultural products
                </li>
                <li>
                  President Trump secures new U.S.–Asia trade agreements and
                  foreign investment commitments
                </li>
                <li>
                  Reduced tariffs take effect under a revised U.S.–China trade
                  agreement
                </li>
                <li>
                  National security tariffs on trucks, truck parts, and buses
                  take effect November 1
                </li>
              </ul>

              <p className="mt-6 text-primary font-medium cursor-pointer">
                Read all Executive Order updates →
              </p>
            </div>

            <Separator />

            {/* BIG BEAUTIFUL BILL */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                The “One Big, Beautiful Bill”
              </h2>

              <ul className="space-y-4 text-lg text-paragraph list-disc list-inside">
                <li>
                  One concise overview of tax credit expansions under the One
                  Big, Beautiful Bill
                </li>
                <li>
                  A focused review of employee benefits and executive
                  compensation provisions
                </li>
                <li>
                  What businesses and organizations need to know about the One
                  Big, Beautiful Bill
                </li>
                <li>
                  D.C. Download – Season 1, Episode 2: The Big Beautiful Bill
                  and the future of Medicaid
                </li>
                <li>
                  D.C. Download – Season 1, Episode 1: “The Big Beautiful Bill”
                </li>
              </ul>

              <p className="mt-6 text-primary font-medium cursor-pointer">
                Read more →
              </p>
            </div>

            <Separator />

            {/* ADDITIONAL INSIGHTS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Additional Policy Insights
              </h2>

              <ul className="space-y-4 text-lg text-paragraph list-disc list-inside">
                <li>
                  Trade & Tariffs: New 25 percent tariffs on imports from India
                </li>
                <li>
                  Privacy & Cybersecurity: A closer look at America’s AI Action
                  Plan and its implications
                </li>
                <li>
                  Government Investigations: Supreme Court ruling freezing $65
                  million in teacher grants amid DEI controversy
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
                    title: "Policy & Regulatory Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Government Affairs & Trade Policy",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "National Security & Compliance",
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

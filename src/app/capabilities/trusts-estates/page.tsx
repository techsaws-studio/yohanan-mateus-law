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
            Trusts & Estates
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
                One of the most constant responsibilities clients face
                throughout personal and professional milestones is securing
                their family’s and business’s future. As life changes, estate
                plans must evolve accordingly. At <strong>Polsinelli</strong>,
                we understand the importance of creating a meaningful legacy
                while protecting the people and assets clients care about most.
              </p>

              <p>
                Our experienced Trusts & Estates attorneys take the time to
                understand family and business dynamics, design tailored estate
                plans, and develop and update related documents to optimize
                asset preservation and long-term administration.
              </p>
            </div>

            <Separator />

            {/* CORE PRACTICE AREAS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Core Trusts & Estates Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Wills and trusts</li>
                <li>Business succession planning</li>
                <li>Multi-generational transfer planning</li>
                <li>Trust and estate administration</li>
                <li>Charitable planning</li>
                <li>Fiduciary disputes and litigation</li>
                <li>Asset protection</li>
              </ul>
            </div>

            <Separator />

            {/* APPROACH */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Integrated Planning Approach
              </h2>

              <p>
                Our Trust & Estate attorneys bring extensive experience in
                personal estate planning, business succession planning and tax
                planning for business owners and high-net-worth individuals. We
                recognize that estate, gift and income tax planning, along with
                succession planning, must be holistically coordinated to achieve
                long-term financial objectives.
              </p>

              <p>
                Each estate plan is thoughtfully designed to reflect current
                law, individual family circumstances and a client’s long-term
                goals, while remaining flexible to adapt to life’s changes.
              </p>
            </div>

            <Separator />

            {/* EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Experience & Professional Recognition
              </h2>

              <p>
                Polsinelli’s Trust & Estate attorneys are widely respected in
                the field and maintain active membership in the American College
                of Trust and Estate Counsel (ACTEC), a prestigious national
                organization. Our attorneys focus exclusively on estate planning
                and administration and collaborate closely with colleagues on
                tax, business and charitable planning matters.
              </p>

              <p>
                We are well-equipped to guide clients through trust and estate
                administration, incapacity planning and the complexities that
                arise following a death, ensuring thoughtful stewardship of
                assets and wishes.
              </p>
            </div>

            <Separator />

            {/* PLANNING FOCUS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Comprehensive Planning Focus
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Accumulation of wealth and gifting strategies</li>
                <li>Planning for retirement, illness or disability</li>
                <li>Education planning for children and grandchildren</li>
                <li>Business management and succession planning</li>
                <li>
                  Asset disposition at death, including trust planning for
                  individuals and charitable beneficiaries
                </li>
                <li>
                  Coordination of asset ownership for efficient estate
                  administration
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
                  Regionally recognized for HNW Private Wealth Law in Missouri
                  by Chambers USA (2024)
                </li>
                <li>
                  Nationally ranked Tier 3 for Trusts and Estates Law in the
                  2024 edition of “Best Law Firms”
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
                    name: "Elizabeth M. Carter",
                    title: "Trusts & Estates",
                    phone: "816.360.4178",
                  },
                  {
                    name: "Michael J. Reynolds",
                    title: "Private Wealth Planning",
                    phone: "312.873.3654",
                  },
                  {
                    name: "Daniel R. Hayes",
                    title: "Business Succession Planning",
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

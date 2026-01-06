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
            Chemical Manufacturing
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="layout-standard py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-12">
            {/* OVERVIEW */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Polsinelli’s national chemical manufacturing team has deep
                experience in virtually all practice areas touching chemical
                manufacturing. From energy and transportation costs to changes
                in the regulatory landscape, our team has decades of high-level
                experience addressing the unique risks and challenges chemical
                manufacturers face.
              </p>

              <p>
                We have also served as outside general counsel to large chemical
                businesses, providing comprehensive legal support aligned with
                operational realities and long-term business objectives.
              </p>
            </div>

            <Separator />

            {/* INDUSTRY EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                High-Level Chemical Manufacturing Industry Experience
              </h2>

              <p>
                Our multidisciplinary team leverages deep industry knowledge to
                efficiently address our chemical manufacturing clients’ legal
                needs—often in high-stakes situations. We understand the
                importance of each matter we handle and the potential impact on
                our clients’ operations and reputation.
              </p>

              <p>
                Whether a matter is simple or complex, we pride ourselves on
                providing the attention, diligence, and strategic focus our
                clients expect. Our extensive background working with the
                chemical manufacturing industry is what sets our team apart.
              </p>
            </div>

            <Separator />

            {/* PRACTICE CAPABILITIES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Our Chemical Manufacturing Team’s Experience
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Commercial transactions</li>
                <li>Mergers & acquisitions</li>
                <li>Intellectual property</li>
                <li>Environmental regulation</li>
                <li>ESG analysis</li>
                <li>Logistics & transportation</li>
                <li>Crisis response management</li>
                <li>General counsel & risk management</li>
                <li>Antitrust investigations & internal investigations</li>
                <li>
                  Insurance issues, including coverage disputes & insurance
                  recovery litigation
                </li>
                <li>Government affairs at the federal & state level</li>
              </ul>
            </div>

            <Separator />

            {/* CTA */}
            <div className="space-y-4 text-lg text-paragraph leading-relaxed">
              <p>
                Are you a chemical manufacturer in need of legal representation?
                Contact a member of the chemical manufacturing practice group at
                Polsinelli to learn how our team can support your business.
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
                    title: "Health Care Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Health Care Transactions",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Health Care Compliance",
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

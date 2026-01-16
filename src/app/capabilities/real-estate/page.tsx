import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/real-estate-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 " />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Real Estate
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
                Our Real Estate practice equips clients with the ability to
                capitalize on market opportunities while effectively managing
                and resolving the challenges that inevitably arise throughout
                the lifecycle of real estate transactions.
              </p>

              <p>
                With decades of experience and broad knowledge across all
                segments of the real estate industry, our attorneys recognize
                both the strategic opportunities and inherent risks real estate
                matters present to clients.
              </p>
            </div>

            <Separator />

            {/* INDUSTRY EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Comprehensive Industry Experience
              </h2>

              <p>
                Our experience spans every major segment of the real estate
                industry. We collaborate with clients through every stage of a
                transaction and have been involved in projects across virtually
                every state in the country.
              </p>

              <p>
                We routinely advise on transactions involving office,
                industrial, student housing, retail, mixed-use, resort and
                hospitality, multifamily and single-family residential
                properties. Our team also brings focused experience in
                specialized sub-markets such as health care and renewable
                energy.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Full-Service Real Estate Representation
              </h2>

              <p className="text-lg text-paragraph leading-relaxed mb-4">
                Our real estate attorneys handle every aspect of a transaction,
                from acquisition through development, financing, leasing and
                disposition. Each year, our team closes billions of dollars in
                real estate transactions for industry leaders.
              </p>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Acquisitions and dispositions</li>
                <li>Commercial and residential development</li>
                <li>Debt and equity financing</li>
                <li>Leasing and asset management</li>
                <li>Single-asset and portfolio transactions</li>
                <li>Health care and renewable energy real estate</li>
              </ul>
            </div>

            <Separator />

            {/* RANKINGS */}
            {/* <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Rankings & Recognition
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Named a Tier 1 national firm in Real Estate Law by Best Law
                  Firms® (2026)
                </li>
                <li>
                  Ranked and recognized by Chambers USA for Real Estate Law
                </li>
              </ul>
            </div> */}
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
                    title: "Real Estate Strategy",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Real Estate Transactions",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Development & Financing",
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
    
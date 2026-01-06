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
            Sports & Entertainment
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
                <strong>Polsinelli</strong>’s Sports & Entertainment attorneys
                represent athletes, teams, leagues, production companies,
                studios, media entities and investors across the full spectrum
                of sports, entertainment and related commercial transactions.
              </p>

              <p>
                Our attorneys combine industry knowledge with transactional,
                litigation and regulatory experience to help clients protect
                their brands, monetize opportunities and navigate the complex
                business realities of the sports and entertainment industries.
              </p>
            </div>

            <Separator />

            {/* EXPERIENCE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Industry-Focused Counsel
              </h2>

              <p>
                We advise clients at every stage of their careers and business
                ventures — from contract negotiation and intellectual property
                protection to sponsorships, licensing, financing and dispute
                resolution.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Services & Capabilities
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Sports team ownership and league matters</li>
                <li>Media rights, broadcasting and content licensing</li>
                <li>Sponsorships, endorsements and brand partnerships</li>
                <li>Intellectual property protection and enforcement</li>
                <li>Talent agreements and representation matters</li>
                <li>Venue development, real estate and financing</li>
                <li>Dispute resolution and litigation</li>
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
                    name: "Michael J. O’Connor",
                    title: "Sports & Entertainment",
                    phone: "312.873.4501",
                  },
                  {
                    name: "Laura S. Bennett",
                    title: "Media & Licensing",
                    phone: "310.203.1254",
                  },
                  {
                    name: "David R. Simmons",
                    title: "Commercial Transactions",
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

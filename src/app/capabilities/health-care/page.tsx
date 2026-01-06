import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/healthcare-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Health Care
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
                As one of the largest health care practices in the country, our
                attorneys work as a fully integrated team to partner with
                clients across the full range of health care issues. We focus on
                understanding both industry-wide challenges and our clients’
                specific business objectives.
              </p>

              <p>
                Our team includes former in-house counsel at national health
                care institutions and attorneys with experience at the FDA, CMS,
                and the Department of Justice, providing deep regulatory insight
                in an increasingly complex environment.
              </p>
            </div>

            <Separator />

            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Navigating Industry Transformation
              </h2>

              <p>
                Health care has experienced unprecedented change in recent
                years. Value-based reimbursement models, telehealth adoption,
                private equity investment, and data expansion have reshaped how
                providers and investors operate.
              </p>

              <p>
                At the same time, regulatory enforcement has intensified.
                Providers must comply with evolving FDA, CMS, and DOJ
                requirements while maintaining operational efficiency and
                quality of care.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Representative Health Care Clients
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Hospitals & Health Systems</li>
                <li>Academic Medical Centers</li>
                <li>Behavioral Health Providers</li>
                <li>Rural Health Providers</li>
                <li>Dialysis Providers</li>
                <li>Home Health & Hospice</li>
                <li>Medical Device Companies</li>
                <li>Digital Health & Health Technology</li>
                <li>Private Equity in Health Care</li>
                <li>Senior Living & Long-Term Care</li>
              </ul>
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

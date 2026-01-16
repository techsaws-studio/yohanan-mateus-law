import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/corporate-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 " />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Corporate &amp; Transactional
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
                Yohanan Mateus Law’s Corporate and Transactional practice provides a
                full range of legal services—from selecting the appropriate
                choice of entity through exit strategies and everything in
                between during the life cycle of a business. By working
                collaboratively with attorneys from the firm’s Tax and other
                related practices, we deliver comprehensive legal advice
                designed to create value, minimize liability, maintain
                flexibility, and advance our clients’ objectives.
              </p>

              <p>
                Whether a client’s business is just getting started, expanding,
                winding down, or facing financial restructuring, our attorneys
                provide tailored counsel grounded in a deep understanding of the
                client’s business and the industries in which they operate.
              </p>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Corporate &amp; Transactional Services
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Planning, Choice of Entity &amp; Formation</li>
                <li>Outside General Counsel</li>
                <li>Corporate Governance</li>
                <li>Commercial Contracts &amp; Transactions</li>
                <li>Joint Ventures &amp; Strategic Alliances</li>
                <li>Mergers, Acquisitions &amp; Divestitures</li>
                <li>Employee Stock Ownership Plans</li>
                <li>Private Equity Services</li>
                <li>Exit Strategies &amp; Succession Planning</li>
              </ul>
            </div>

            <Separator />

            {/* APPROACH */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Business-Focused Legal Counsel
              </h2>

              <p>
                Our team is composed of experienced attorneys with diverse
                backgrounds, allowing us to address legal and related business
                issues creatively and effectively. By combining strong legal
                skills with practical business acumen, we provide advice that
                supports not only our clients’ immediate needs, but also
                positions their organizations for long-term success.
              </p>

              <p>
                We value the relationships we build with our clients and strive
                to deliver legal insights that are strategic, durable, and
                aligned with each client’s evolving business goals.
              </p>
            </div>

            <Separator />

            {/* RANKINGS */}
            {/* <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Recent Rankings &amp; Recognition
              </h2>

              <ul className="space-y-4 text-lg text-paragraph list-disc list-inside">
                <li>Regionally ranked for Corporate/M&amp;A by Chambers USA</li>
                <li>
                  Nationally ranked Tier 1 for Corporate Law in the 2025
                  <em> Best Law Firms</em> list by Best Lawyers®
                </li>
                <li>
                  Ranked among the top 20 most active law firms nationally and
                  globally in PitchBook’s 2024 Global League Tables
                </li>
                <li>Most Active Law Firm in the U.S.</li>
                <li>Most Active Law Firm Globally</li>
                <li>Most Active Representing U.S. Companies</li>
                <li>Most Active Representing Global Companies</li>
                <li>Most Active Representing U.S. Investors</li>
              </ul>
            </div> */}
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

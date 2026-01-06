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
            Technology Transactions
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
                <strong>Polsinelli</strong>’s Technology Transactions team is a
                cross-functional group of lawyers with significant experience in
                the technology industry, including prior in-house roles and
                professional backgrounds in engineering and technical
                consulting. We advise companies of all sizes and stages of
                development on the creation, acquisition, use and
                commercialization of technology.
              </p>

              <p>
                Our clients include domestic and international businesses,
                startups, governments, universities, hospitals, financial
                services institutions and nonprofit organizations operating
                across a broad range of industries.
              </p>
            </div>

            <Separator />

            {/* APPROACH */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Strategic, Business-Driven Guidance
              </h2>

              <p>
                Our attorneys invest the time to understand each client’s
                business model, operational practices and strategic objectives.
                We partner closely with clients to protect their assets and help
                them maximize value from their technology investments.
              </p>

              <p>
                We assist with intellectual property monetization strategies,
                technology acquisitions and divestitures, strategic research and
                development relationships, and procurement of information
                technology-related services. Our experience includes advising on
                sponsored research agreements with leading universities and
                joint development initiatives involving advanced technologies
                across industries.
              </p>
            </div>

            <Separator />

            {/* M&A & COLLABORATION */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Technology-Driven M&A and Collaboration
              </h2>

              <p>
                By aligning legal strategy with business goals, we add value to
                technology transactions by identifying negotiation leverage,
                structuring term sheets, anticipating closing challenges and
                recommending practical solutions.
              </p>

              <p>
                Our team regularly assists buyers and sellers in mergers and
                acquisitions involving technology and intellectual property,
                including diligence and post-closing integration planning to
                ensure contractual rights align with transaction objectives.
              </p>
            </div>

            <Separator />

            {/* TRANSACTION TYPES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Representative Types of Transactions
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Research and development agreements</li>
                <li>Strategic outsourcing and managed services agreements</li>
                <li>Software and SaaS licensing and subscription agreements</li>
                <li>End-user licenses and terms of use</li>
                <li>Technology platform subscription agreements</li>
                <li>OEM and value-added reseller arrangements</li>
                <li>Content and data licensing (in-bound and out-bound)</li>
                <li>Joint venture and strategic partner arrangements</li>
                <li>Patent, trademark, copyright and trade secret licenses</li>
                <li>Joint development and collaboration agreements</li>
                <li>Technology and IP purchase agreements</li>
                <li>Transition services agreements in M&A transactions</li>
                <li>Manufacturing and distribution agreements</li>
                <li>Source code and IP escrow agreements</li>
                <li>Sponsorship, co-branding and branded entertainment</li>
              </ul>
            </div>

            <Separator />

            {/* INDUSTRIES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Representative Industries
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Biotechnology and Life Sciences</li>
                <li>Health Care and Medical Devices</li>
                <li>Pharmaceuticals</li>
                <li>Financial Services and FinTech</li>
                <li>Software, SaaS and Digital Media</li>
                <li>E-commerce and Consumer Products</li>
                <li>Automotive and Autonomous Systems</li>
                <li>Robotics and Advanced Manufacturing</li>
                <li>Semiconductors and Materials Science</li>
                <li>Telecommunications and Media</li>
                <li>Aerospace and Defense</li>
                <li>Artificial Intelligence and Data Analytics</li>
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
                  Nationally ranked Tier 1 for Technology Law in the 2024 “Best
                  Law Firms” by U.S. News & World Report
                </li>
                <li>
                  Recognized as a 2025 BTI Litigation Standout in Cybersecurity
                  Litigation by BTI Consulting Group
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
                    name: "Alexandra R. Moore",
                    title: "Technology Transactions",
                    phone: "415.438.6391",
                  },
                  {
                    name: "Benjamin T. Clarke",
                    title: "Intellectual Property & Licensing",
                    phone: "312.873.3694",
                  },
                  {
                    name: "Daniel P. Flores",
                    title: "M&A and Strategic Alliances",
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

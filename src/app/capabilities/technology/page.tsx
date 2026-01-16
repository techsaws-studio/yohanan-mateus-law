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
            Technology
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
                Technology has shaped human existence since its beginning and
                continues to revolutionize the world at an unprecedented pace.
                Today’s technology companies are transforming industries through
                innovative products, services and business models spanning
                software, hardware, cloud services, robotics, artificial
                intelligence, information security and media.
              </p>

              <p>
                <strong>Yohanan Mateus Law</strong> shares this forward-looking mindset.
                Our technology lawyers play an integral role in helping shape
                the future of the industry through strategic guidance around the
                creation, acquisition, protection and commercial exploitation of
                technology.
              </p>
            </div>

            <Separator />

            {/* APPROACH */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Business-Focused Technology Counsel
              </h2>

              <p>
                We understand that issues facing technology companies often sit
                at the intersection of intellectual property, regulatory
                compliance and commercial transactions. Our attorneys craft
                custom solutions that reflect the opportunities, risks and
                lifecycle stage of each enterprise.
              </p>

              <p>
                Our clients range from entrepreneurs and research institutions
                to Fortune 500 companies. Whether advising a startup on
                first-round financing or guiding a mature company through
                expansion, our lawyers deliver the cutting-edge counsel today’s
                technology leaders expect.
              </p>
            </div>

            <Separator />

            {/* DEALS & ISSUES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Technology Transactions & Issues
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Blockchain</li>
                <li>Cloud Computing</li>
                <li>Data Center & Infrastructure</li>
                <li>Internet of Things (IoT)</li>
                <li>Joint Ventures & Licensing</li>
                <li>Outsourcing</li>
                <li>Privacy & Cybersecurity</li>
                <li>Technology Transactions</li>
              </ul>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Legal Services for Technology Companies
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Corporate & Transactional</li>
                <li>Corporate Finance</li>
                <li>Employee Benefits & Compensation</li>
                <li>Employment Law</li>
                <li>Health Care Technology</li>
                <li>Intellectual Property</li>
                <li>Mergers & Acquisitions</li>
                <li>Venture Capital & Emerging Growth</li>
                <li>Tax</li>
              </ul>
            </div>

            <Separator />

            {/* INDUSTRIES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Supporting Industries
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Aerospace</li>
                <li>Advertising & Digital Media</li>
                <li>Data Center & Infrastructure</li>
                <li>Digital Health</li>
                <li>Education Technology</li>
                <li>FinTech & Blockchain Technology</li>
                <li>Information Security (InfoSec)</li>
                <li>InsurTech</li>
                <li>Mobility & Vehicle Use</li>
                <li>Telehealth</li>
                <li>Uncrewed Aircraft Systems & Robotics</li>
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
                  Named in the 2025 edition of Best Law Firms® as a Tier 1
                  national firm in Technology Law
                </li>
                <li>
                  Recognized as a 2025 BTI Litigation Standout in Cybersecurity
                  Litigation by BTI Consulting Group
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
                    name: "Jonathan R. Ellis",
                    title: "Technology Transactions",
                    phone: "415.438.6372",
                  },
                  {
                    name: "Rachel M. Donovan",
                    title: "Privacy & Cybersecurity",
                    phone: "312.873.3619",
                  },
                  {
                    name: "Andrew K. Lewis",
                    title: "Venture Capital & Emerging Growth",
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

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
            Privacy & Cybersecurity
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
                The protection of data and personal information is critical to
                every organization. We assist clients in safeguarding
                information assets, complying with rapidly evolving privacy and
                security regulations, and responding effectively to data
                incidents, regulatory investigations and litigation.
              </p>

              <p>
                Our privacy and cybersecurity team brings together attorneys
                with international experience, former in-house privacy counsel,
                seasoned incident response professionals, and alumni of
                enforcement agencies responsible for privacy and security
                regulation.
              </p>
            </div>

            <Separator />

            {/* TEAM */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                A Deep, Multidisciplinary Team
              </h2>

              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Attorneys with international backgrounds and experience
                  advising on global data protection regimes
                </li>
                <li>
                  Former in-house privacy counsel with business-focused insight
                </li>
                <li>
                  One of the most experienced incident response teams in the
                  country
                </li>
                <li>
                  Alumni of enforcement agencies such as HHS Office for Civil
                  Rights
                </li>
                <li>
                  Technology transactions attorneys serving mid-market through
                  Fortune 500 companies
                </li>
              </ul>
            </div>

            <Separator />

            {/* PRIVACY COUNSELING */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Privacy Counseling
              </h2>

              <p>
                We take an interdisciplinary, risk-based approach to privacy and
                cybersecurity counseling, advising clients on state, federal and
                international privacy laws.
              </p>

              <ul className="space-y-3 list-disc list-inside">
                <li>CCPA / CPRA and emerging state privacy laws</li>
                <li>HIPAA, GLBA, CAN-SPAM, COPPA and FCRA</li>
                <li>GDPR and UK GDPR</li>
                <li>
                  International privacy laws including Brazil, Canada,
                  Australia, India and China
                </li>
                <li>
                  PCI compliance, vendor management and third-party data
                  transfers
                </li>
              </ul>
            </div>

            <Separator />

            {/* REPRESENTATIVE WORK */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Representative Privacy Work
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Designing enterprise-wide privacy compliance programs (GDPR,
                  CCPA/CPRA and global frameworks)
                </li>
                <li>Privacy and security risk assessments and gap analysis</li>
                <li>Outside privacy counsel and privacy hotline services</li>
                <li>Data mapping and records of processing activities</li>
                <li>
                  Development of policies, procedures and internal training
                </li>
                <li>Cookie, tracking and online advertising compliance</li>
                <li>Data subject rights management</li>
                <li>Privacy due diligence in M&A transactions</li>
                <li>
                  Counseling on ad tech, clinical trials, AI and machine
                  learning
                </li>
              </ul>
            </div>

            <Separator />

            {/* INCIDENT RESPONSE */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Data Incident Response & Preparedness
              </h2>

              <p>
                Our attorneys have counseled clients through more than two
                thousand data security incidents, including ransomware, malware,
                business email compromise, vendor breaches and misdirected
                disclosures.
              </p>

              <p>
                When incidents occur, we provide end-to-end response support,
                including forensic oversight, crisis management, regulatory
                notifications, litigation defense and coordination with
                forensic, public relations and identity protection providers.
              </p>
            </div>

            <Separator />

            {/* CLIENTS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Industries Served
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Consumer Brands</li>
                <li>Franchise & Retail</li>
                <li>Banking & Financial Services</li>
                <li>Health Care & Pharmaceuticals</li>
                <li>Technology & E-Commerce</li>
                <li>Life Sciences</li>
                <li>Manufacturing</li>
                <li>Food & Beverage</li>
                <li>Education (For-Profit & Nonprofit)</li>
                <li>Professional Services</li>
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
                    name: "William P. Sweeney",
                    title: "Privacy Strategy & Compliance",
                    phone: "312.873.3664",
                  },
                  {
                    name: "John D. Martini",
                    title: "Cybersecurity & Incident Response",
                    phone: "215.267.3003",
                  },
                  {
                    name: "Henry Talavera",
                    title: "Privacy Litigation & Enforcement",
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

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
            Telecommunications
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
                The Telecommunications Practice at <strong>Polsinelli</strong>{" "}
                provides business and regulatory guidance for telecommunications
                networks and service providers in the same manner our telecom
                clients deliver services to their customers — fast-paced,
                adaptive and highly responsive in a competitive and dynamic
                industry.
              </p>

              <p>
                Our attorneys have provided strategic advice and regulatory
                support at both the state and federal levels for decades,
                assisting clients in navigating evolving regulatory frameworks
                that promote innovation, competition and investment while
                protecting consumer interests.
              </p>
            </div>

            <Separator />

            {/* LEADERSHIP */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Industry Leadership & Regulatory Insight
              </h2>

              <p>
                The practice is led by a former General Counsel of the Kansas
                Corporation Commission and supported by attorneys with extensive
                governmental experience, including a former Chairman of the
                Missouri Public Service Commission and senior counsel to former
                U.S. Senator Bob Dole and former Kansas Governor Mike Hayden.
              </p>

              <p>
                This depth of regulatory leadership provides clients with
                unparalleled insight into how telecommunications policy is
                shaped, implemented and enforced.
              </p>
            </div>

            <Separator />

            {/* CLIENTS */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Telecommunications Clients
              </h2>

              <p>
                Polsinelli represents a wide range of telecommunications
                providers and industry participants, including ILECs, CLECs and
                IXCs, as well as producers and consumers of telecommunications
                services.
              </p>

              <p>
                Our clients benefit from extensive experience before regulatory
                bodies such as the Federal Communications Commission (FCC), the
                Kansas Corporation Commission and the Missouri Public Service
                Commission on complex state and federal regulatory matters.
              </p>
            </div>

            <Separator />

            {/* REGULATORY SOLUTIONS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Regulatory & Business Solutions
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>
                  Drafting and enacting comprehensive telecommunications and
                  CATV regulatory reform legislation
                </li>
                <li>
                  Representing national telecommunications companies in state
                  tax disputes, class actions and state and federal litigation
                </li>
                <li>
                  Advising on regulatory strategies connected to legislative and
                  policy developments
                </li>
              </ul>
            </div>

            <Separator />

            {/* SERVICES */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Telecommunications Services
              </h2>

              <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
                <li>Regulatory compliance and enforcement</li>
                <li>Universal service fund issues</li>
                <li>Certification and licensing proceedings</li>
                <li>General rate-making and tariff applications</li>
                <li>Mergers and acquisitions</li>
                <li>Rulemaking proceedings and administrative complaints</li>
                <li>Real estate, zoning and land use matters</li>
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
                    name: "Thomas J. Bennett",
                    title: "Telecommunications & Regulatory Affairs",
                    phone: "913.451.5100",
                  },
                  {
                    name: "Linda K. Morrison",
                    title: "State & Federal Telecommunications Regulation",
                    phone: "816.360.4142",
                  },
                  {
                    name: "Robert A. Fields",
                    title: "Telecom Litigation & Compliance",
                    phone: "312.873.3679",
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

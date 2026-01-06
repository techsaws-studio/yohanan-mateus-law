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
            Bankruptcy & Restructuring
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
                Our Bankruptcy and Restructuring practice is a nationally
                recognized practice that is part of a leading Am Law–caliber
                firm with a broad national footprint. Our attorneys advise
                clients across the United States, delivering cost-efficient
                legal services through a collaborative, mid-market rate
                structure.
              </p>

              <p>
                The practice focuses on representing Chapter 11 debtors,
                distressed borrowers, and buyers and sellers of distressed
                assets. We also represent official committees, trustees, and
                individual creditors, including equity security holders,
                vendors, landlords, and bankruptcy litigants in proceedings
                throughout the United States.
              </p>
            </div>

            <Separator />

            {/* PRACTICE FOCUS */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <h2 className="text-3xl font-heading text-heading">
                Restructuring & Insolvency Solutions
              </h2>

              <p>
                In addition to traditional bankruptcy proceedings, our team
                advises clients on non-bankruptcy alternatives such as
                assignments for the benefit of creditors, out-of-court workouts,
                receiverships, and state-court liquidations.
              </p>

              <p>
                In collaboration with leading health care practitioners, the
                practice maintains a special focus on distressed health care
                matters, combining regulatory insight with restructuring
                experience.
              </p>
            </div>

            <Separator />

            {/* INDUSTRY EXPERIENCE */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Industry-Specific Experience
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-paragraph list-disc list-inside">
                <li>Distressed Health Care</li>
                <li>Oil & Gas</li>
                <li>Retail</li>
                <li>Franchise & Hospitality</li>
                <li>Real Estate</li>
                <li>Trucking & Transportation</li>
              </ul>
            </div>

            <Separator />

            {/* RECOGNITIONS */}
            <div>
              <h2 className="text-3xl font-heading text-heading mb-6">
                Recognitions
              </h2>

              <ul className="space-y-4 text-lg text-paragraph list-disc list-inside">
                <li>
                  16th Annual Turnaround Awards, Healthcare/Lifesciences Deal of
                  the Year — 363 asset sale of Neopharma, Inc. and Neopharma
                  Tennessee (“Neopharma USA”)
                </li>
                <li>
                  16th Annual Turnaround Awards, Distressed M&A Deal of the Year
                  — Connections Community Support Programs, Inc.
                </li>
                <li>
                  14th Annual Turnaround Atlas Awards, Consumer Goods
                  Restructuring of the Year — Basic Fun! Liability Management
                  and Recapitalization
                </li>
                <li>
                  14th Annual Turnaround Atlas Awards, Private Equity Deal of
                  the Year — Gorham Paper & Tissue and White Mountain Tissue
                  Chapter 11 restructuring and acquisition by Behrens Investment
                  Group
                </li>
                <li>
                  12th Annual International M&A Advisor Awards, Restructuring
                  Deal of the Year — Chapter 11 sale of Orchids Paper Products
                  Company
                </li>
                <li>
                  12th Annual M&A Atlas Awards, Cross-Border M&A Deal of the
                  Year (Mid-Market) — Cascades acquisition of Orchids Paper
                  Products Company
                </li>
                <li>
                  12th Annual M&A Atlas Awards, Chapter 11 Restructuring of the
                  Year (Mid-Markets) — Senior Care Centers restructuring and
                  refinance
                </li>
                <li>
                  14th Annual M&A Advisor Turnaround Awards, Healthcare/Life
                  Sciences Deal of the Year ($50 million–$100 million) —
                  Elements Behavioral Health
                </li>
                <li>
                  10th Annual M&A Atlas Awards, Retail Services Restructuring of
                  the Year (above $500 million) — Payless ShoeSource
                </li>
                <li>
                  10th Annual M&A Atlas Awards, Turnaround of the Year ($50
                  million–$100 million) — California Proton Treatment Center
                  Chapter 11 restructuring and recapitalization
                </li>
              </ul>
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

import { Separator } from "@/components/ui/separator";

export default function ChemicalManufacturingPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/capability/bankruptchy-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Chemical Manufacturing
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="layout-standard py-16 max-w-5xl">
        {/* INTRO */}
        <div className="space-y-6 text-lg text-paragraph leading-relaxed">
          <p>
            Our Chemical Manufacturing practice advises companies operating
            across the full spectrum of the chemical industry. With decades of
            experience addressing the operational, regulatory, and commercial
            challenges faced by chemical manufacturers, our attorneys deliver
            strategic and practical legal guidance in both routine and
            high-stakes matters.
          </p>

          <p>
            We regularly advise clients on issues ranging from energy and
            transportation costs to evolving regulatory and compliance
            requirements. Our team has also served as outside general counsel to
            large chemical manufacturing businesses, providing integrated legal
            support aligned with long-term operational and risk-management
            objectives.
          </p>
        </div>

        <Separator className="my-12" />

        {/* EXPERIENCE OVERVIEW */}
        <div className="space-y-6 text-lg text-paragraph leading-relaxed">
          <h2 className="text-3xl font-heading text-heading">
            High-Level Industry Experience
          </h2>

          <p>
            Our multidisciplinary team leverages deep industry knowledge to
            efficiently address the legal needs of chemical manufacturing
            clients—often in time-sensitive or high-risk situations. We
            understand the operational significance of each matter we handle and
            approach every engagement with diligence, precision, and
            accountability.
          </p>

          <p>
            Whether advising on a discrete transaction or managing complex,
            enterprise-wide legal challenges, our extensive experience within
            the chemical manufacturing sector enables us to deliver solutions
            tailored to the realities of our clients’ businesses.
          </p>
        </div>

        <Separator className="my-12" />

        {/* SERVICES */}
        <div>
          <h2 className="text-3xl font-heading text-heading mb-6">
            Representative Experience
          </h2>

          <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
            <li>Commercial transactions and supply agreements</li>
            <li>Mergers, acquisitions, and strategic investments</li>
            <li>Intellectual property protection and licensing</li>
            <li>Environmental regulation and compliance</li>
            <li>ESG strategy, disclosure, and risk analysis</li>
            <li>Logistics and transportation matters</li>
            <li>Crisis response and incident management</li>
            <li>General counsel services and enterprise risk management</li>
            <li>Antitrust investigations and internal investigations</li>
            <li>
              Insurance matters, including coverage disputes and recovery
              litigation
            </li>
            <li>Government affairs at the federal and state levels</li>
          </ul>
        </div>

        <Separator className="my-12" />

        {/* CTA */}
        <div className="text-lg text-paragraph leading-relaxed">
          <p>
            If you are a chemical manufacturer seeking experienced legal
            counsel, we invite you to contact a member of our Chemical
            Manufacturing practice to discuss how we can support your business.
          </p>
        </div>
      </section>
    </main>
  );
}

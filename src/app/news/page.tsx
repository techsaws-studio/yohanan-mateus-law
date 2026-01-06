import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* ================= HERO (SAME AS OTHERS) ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/news-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Deals & Cases
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="layout-standard py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* ================= LEFT COLUMN ================= */}
          <article className="space-y-10">
            {/* META */}
            <div className="text-sm text-paragraph">
              December 29, 2025 ·{" "}
              <span className="text-primary font-medium">Deals & Cases</span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-heading text-heading leading-tight">
              Polsinelli Advises Commercial Door & Frame Distributors on
              Strategic Expansion
            </h2>

            <Separator />

            {/* BODY */}
            <div className="space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Polsinelli is proud to announce its role as outside general
                counsel to Commercial Door and Frame Distributors (CDF) and its
                affiliates (collectively, the “Company”) in connection with the
                Company’s recent expansion and relocation of all its corporate
                and manufacturing operations to Sumner County, Tennessee.
              </p>

              <p>
                This milestone marks a major growth phase for the Company — a
                leading national manufacturer and distributor of commercial
                doors, frames, bathroom partitions and hardware — reinforcing
                its long-term commitment to the region and its workforce.
              </p>

              <p>
                The Company announced plans to relocate its headquarters and all
                manufacturing operations into a new state-of-the-art facility,
                representing a $26.1 million capital investment and the creation
                of 85 new jobs, bringing total employment to approximately 195
                Tennesseans once complete.
              </p>

              <p>
                Polsinelli worked alongside Cushman & Wakefield and the
                Company’s management team on all aspects of the expansion and
                relocation, including comprehensive legal support across
                corporate, financing, real estate and regulatory matters
                integral to the execution of the project.
              </p>

              <p>
                Shareholder Daniel M. Kronberg advised the Company on the real
                estate acquisition and financing components of the transaction,
                while Shareholder J. David Wicker Jr. led Polsinelli’s work
                related to the Company’s participation in a
                payment-in-lieu-of-taxes (PILOT) incentive program, coordinating
                with state and local economic development authorities.
              </p>

              <p>
                The overall engagement was led by Polsinelli Shareholder Brian
                K. Adams Jr., who served as primary outside counsel to the
                Company and coordinated legal strategy across all practice
                areas.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-heading">
                “We are honored to have had the opportunity to stand alongside
                Commercial Door and Frame Distributors in this transformational
                project,” said Adams. “The Company’s growth is inspiring and a
                direct result of the belief each member of the Foreword
                Companies has in one another, their core values and the
                opportunities that are possible for those who place the needs of
                others above their own.”
              </blockquote>

              <p>
                More information about this transaction can be found{" "}
                <Link href="#" className="text-primary font-medium underline">
                  here
                </Link>
                .
              </p>
            </div>
          </article>

          {/* ================= RIGHT COLUMN ================= */}
          <aside className="space-y-12">
            {/* RELATED PEOPLE */}
            <div>
              <h3 className="text-xl font-heading text-heading mb-4">
                Related People
              </h3>

              <Separator className="mb-6" />

              <ul className="space-y-3 text-base">
                <li>
                  <Link
                    href="#"
                    className="text-primary hover:underline font-medium"
                  >
                    Brian K. Adams, Jr.
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-primary hover:underline font-medium"
                  >
                    Daniel M. Kronberg
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-primary hover:underline font-medium"
                  >
                    J. David Wicker, Jr.
                  </Link>
                </li>
              </ul>
            </div>

            {/* RELATED CAPABILITIES */}
            <div>
              <h3 className="text-xl font-heading text-heading mb-4">
                Related Capabilities
              </h3>

              <Separator className="mb-6" />

              <ul className="space-y-3 text-base">
                <li>
                  <Link
                    href="/capabilities/corporate-transactional"
                    className="text-primary hover:underline font-medium"
                  >
                    Corporate & Transactional
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/real-estate"
                    className="text-primary hover:underline font-medium"
                  >
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/real-estate-transactions"
                    className="text-primary hover:underline font-medium"
                  >
                    Real Estate Transactions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/commercial-contracts-transactions"
                    className="text-primary hover:underline font-medium"
                  >
                    Commercial Contracts & Transactions
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

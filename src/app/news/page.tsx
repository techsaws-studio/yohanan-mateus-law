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
          <article className="flex flex-col gap-10">
            <div className="space-y-4">
              <div className="text-sm text-paragraph">
                January 13, 2026 ·{" "}
                <span className="text-primary font-medium">Deals & Cases</span>
              </div>

              {/* TITLE */}
              <h2 className="text-3xl md:text-4xl font-heading text-heading font-bold">
                How to Tell a Real USPTO Communication From a Trademark Scam
              </h2>
            </div>

            <Separator />

            <div className="flex flex-col gap-4">
              <p className="text-lg text-paragraph leading-relaxed">
                Trademark scams are increasing across the United States each
                year and thousands of business owners, creators, and
                entrepreneurs report receiving calls, emails, and letters that
                appear official but are not. These scams often arrive shortly
                after a trademark application is filed, when applicants are
                still learning the process and are most vulnerable to confusion.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                Many of these communications look convincing. They use official
                language, legal terms, and strict deadlines. Some claim to come
                directly from the United States Patent and Trademark Office
                (Biz, 2025), while others say they are sent by “Federal
                Trademark Attorneys” or government enforcement units. The goal
                is to create urgency and fear. Knowing how the USPTO actually
                communicates is the most effective way to protect yourself.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                The USPTO has issued multiple public warnings confirming that it
                does not initiate contact through phone calls, text messages, or
                threatening emails demanding immediate payment. Yet scammers
                rely on the fact that many applicants do not know this.
                First-time applicants are especially at risk because trademark
                law involves unfamiliar procedures, deadlines, and terminology.
                Understanding the difference between real correspondence and
                fraud can prevent serious financial loss and long-term legal
                harm.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-1">
                How the USPTO Really Communicates
              </h1>

              <p className="text-lg text-paragraph leading-relaxed">
                Legitimate USPTO communications do not pressure applicants, use
                scare tactics, or claim that payment must be made immediately to
                avoid losing trademark rights. Deadlines set by the USPTO are
                measured in months, not minutes. They are clearly explained and
                allow time to seek legal advice if needed.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                In some cases, the USPTO also sends paper mail to the address
                listed on the application. These letters are informational in
                tone and clearly identify the USPTO as the sender. They do not
                demand immediate action within hours or days, and they do not
                threaten abandonment without an opportunity to respond.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-1">
                How USPTO Fees Are Paid
              </h1>

              <p className="text-lg text-paragraph leading-relaxed">
                All USPTO fees are paid directly through the official USPTO.gov
                website. Payments are processed through secure government
                payment systems. The USPTO does not accept payments by wire
                transfer, gift card, cryptocurrency.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                Any communication asking you to pay a trademark-related fee
                using one of these methods is a strong indicator of fraud. The
                USPTO has repeatedly stated that it will never ask for sensitive
                personal or financial information through unsolicited calls,
                emails, or text messages. Requests for banking details, Social
                Security numbers should be treated as immediate red flags.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-1">
                Common Red Flags of Trademark Scams
              </h1>

              <p className="text-lg text-paragraph leading-relaxed">
                Trademark scams tend to follow predictable patterns. One of the
                most common tactics is urgent language. Messages may state that
                your application will be “abandoned today,” “cancelled
                immediately,” or “lost forever” unless you act at once. These
                statements are designed to trigger panic, not to reflect real
                USPTO procedures.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                Scammers may also identify themselves as “Federal Filing
                Attorneys,” “USPTO agents,” or members of a government task
                force. These titles are meant to intimidate applicants into
                compliance. In reality, USPTO examining attorneys do not call
                applicants to demand payment, and they do not threaten legal
                consequences during unsolicited contact.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                Another frequent tactic is the use of official-looking logos,
                seals, or email addresses that closely resemble USPTO domains.
                These emails may include small spelling errors, unfamiliar
                sender addresses, or links that redirect away from USPTO.gov.
                Requests to bypass the official USPTO website and pay a third
                party should always raise concern.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                The Federal Trade Commission (FTC, 2026) identifies these
                behaviors as classic forms of government impersonation fraud.
                According to the FTC, scammers often rely on fear, authority,
                and urgency to push victims into acting before they can verify
                the information.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-1">
                Why These Scams Reach You So Quickly
              </h1>

              <p className="text-lg text-paragraph leading-relaxed">
                Trademark applications are public records. Once an application
                is filed, certain details become searchable within days.
                Scammers use automated tools to scrape this data and contact
                applicants while the filing is still new. This timing is
                intentional. Applicants are more likely to believe a message
                that arrives shortly after filing, even if it is fraudulent.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                The presence of accurate information in a message does not mean
                it is legitimate. Scammers often copy real application numbers,
                filing dates, and applicant names from public databases. The
                USPTO has warned that many misleading notices contain correct
                information but are still designed to deceive.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-1">
                What To Do If You Receive a Suspicious Notice
              </h1>

              <p className="text-lg text-paragraph leading-relaxed">
                If you receive a notice that feels urgent, confusing, or
                threatening, stop before responding. Do not send payment. Do not
                click links. Do not provide personal or financial information.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                First, verify your application status directly through the
                USPTO&apos;s public database. If the communication is
                legitimate, it will appear in your official record. Second,
                review the sender&apos;s contact information carefully. Official
                USPTO emails come from “@uspto.gov” addresses, not look-alike
                domains.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                Applicants should also consider consulting qualified trademark
                counsel. A New York Intellectual Property (IP) attorney can
                quickly determine whether a notice is real and explain your
                options. This review often takes far less time than resolving
                the consequences of responding to a scam.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                If the communication is fraudulent, report it to both the USPTO
                and the FTC. Reporting helps regulators track patterns, issue
                public warnings, and pursue enforcement actions. Silence allows
                scams to continue.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-1">
                Legal Context and Applicant Responsibility
              </h1>

              <p className="text-lg text-paragraph leading-relaxed">
                Under federal law, impersonating a government agency or official
                is a crime. Fraudulent trademark solicitations may violate wire
                fraud statutes and federal consumer protection laws. Claims that
                these scams are protected by free speech are legally incorrect.
                Courts have consistently held that fraud and deception are not
                protected expression.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                While the USPTO continues to publish warnings and guidance,
                education remains the strongest defense. Applicants who
                understand how the trademark system works are far less likely to
                be misled by false claims or urgent demands.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-1">
                Moving Forward With Confidence
              </h1>

              <p className="text-lg text-paragraph leading-relaxed">
                Understanding how the USPTO communicates allows applicants to
                move forward with confidence. Trademark protection is a valuable
                legal asset, especially for businesses operating in competitive
                markets like New York. Safeguarding that asset begins with
                accurate information, careful verification, and trusted legal
                guidance.
              </p>
              <p className="text-lg text-paragraph leading-relaxed">
                When in doubt, pause and verify. Legitimate government processes
                are transparent, documented, and designed to give applicants
                time to respond (American Bar Association, 2021). Scams rely on
                pressure and confusion. Knowing the difference protects both
                your trademark and your peace of mind.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-semibold mb-5">
                References
              </h1>

              <p className="text-lg text-paragraph leading-relaxed mb-2">
                1. <span className="italic">American Bar Association</span>,
                2021.{" "}
                <span className="italic">
                  Trademark Scams PDF (Pelton-Muller)
                </span>
                . [Online] Available at:{" "}
                <a
                  href="https://www.americanbar.org/content/dam/aba/publications/landslide/landslide-v014n01-sept-oct-2021-figures-1-5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-primary hover:underline break-all"
                >
                  https://www.americanbar.org/…
                </a>{" "}
                [Accessed 14 Jan 2026].
              </p>

              <p className="text-lg text-paragraph leading-relaxed mb-2">
                2. <span className="italic">Biz, A.</span>, 2025.{" "}
                <span className="italic">
                  USPTO: The Official Trademark and Patent Office of the United
                  States
                </span>
                . [Online] Available at:{" "}
                <a
                  href="https://agent.biz/blog/uspto-the-official-trademark-and-patent-office-of-the-united-states-71.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-primary hover:underline break-all"
                >
                  https://agent.biz/…
                </a>{" "}
                [Accessed 13 Jan 2026].
              </p>

              <p className="text-lg text-paragraph leading-relaxed mb-2">
                3. <span className="italic">Federal Trade Commission</span>,
                2026. <span className="italic">About the FTC</span>. s.l.:
                Government of the United States.
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

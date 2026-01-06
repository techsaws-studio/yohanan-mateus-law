import { Separator } from "@/components/ui/separator";

export default function CorporateTransactionalPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/capability/corporate-img.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Corporate & Transactional
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="layout-standard py-16 max-w-5xl">
        {/* INTRO */}
        <div className="space-y-6 text-lg text-paragraph leading-relaxed">
          <p>
            Our Corporate and Transactional practice provides comprehensive
            legal services across the full lifecycle of a business—from entity
            formation and early-stage planning through growth, restructuring,
            and exit strategies. Working collaboratively with attorneys across
            tax, regulatory, and industry-focused practices, we deliver
            integrated legal solutions designed to create value, manage risk,
            and preserve flexibility.
          </p>

          <p>
            Whether a business is just getting started, expanding into new
            markets, navigating a transition, or facing financial or strategic
            challenges, our attorneys provide tailored counsel grounded in a
            deep understanding of our clients’ operations and the industries in
            which they compete.
          </p>
        </div>

        <Separator className="my-12" />

        {/* SERVICES */}
        <div>
          <h2 className="text-3xl font-heading text-heading mb-6">
            Our Corporate & Transactional Services
          </h2>

          <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
            <li>Business planning, entity selection, and formation</li>
            <li>Outside general counsel services</li>
            <li>Corporate governance and compliance</li>
            <li>Commercial contracts and complex transactions</li>
            <li>Joint ventures and strategic alliances</li>
            <li>Mergers, acquisitions, and divestitures</li>
            <li>Employee stock ownership plans (ESOPs)</li>
            <li>Private equity and investment services</li>
            <li>Exit strategies and succession planning</li>
          </ul>
        </div>

        <Separator className="my-12" />

        {/* APPROACH */}
        <div className="space-y-6 text-lg text-paragraph leading-relaxed">
          <h2 className="text-3xl font-heading text-heading">
            Practical Counsel, Business-Focused Solutions
          </h2>

          <p>
            Our attorneys bring diverse professional backgrounds and extensive
            transactional experience, enabling us to address complex legal and
            business issues with creativity and precision. By combining legal
            acumen with commercial insight, we provide advice that supports both
            immediate objectives and long-term organizational success.
          </p>

          <p>
            We value the relationships we build with our clients and strive to
            deliver legal guidance that is practical, forward-looking, and
            enduring.
          </p>
        </div>

        <Separator className="my-12" />

        {/* RECOGNITION */}
        <div>
          <h2 className="text-3xl font-heading text-heading mb-6">
            Recognition
          </h2>

          <ul className="space-y-3 text-lg text-paragraph list-disc list-inside">
            <li>Regionally ranked for Corporate/M&A by Chambers USA</li>
            <li>
              Nationally ranked Tier 1 for Corporate Law in the 2025 “Best Law
              Firms” list by Best Lawyers®
            </li>
            <li>
              Ranked among the top 20 most active law firms nationally and
              globally in PitchBook’s 2024 Global League Tables
            </li>
            <li>Most Active Law Firm in the United States</li>
            <li>Most Active Law Firm Globally</li>
            <li>Most Active Firm Representing U.S. Companies</li>
            <li>Most Active Firm Representing Global Companies</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

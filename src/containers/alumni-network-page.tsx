import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import AlumniNetworkPageImg from "../../public/images/alumni-network-page-img.jpg";
import NewsletterImg from "../../public/images/newsletter-img.jpg";

function AlumniNetworkPage() {
  return (
    <main>
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/alumni-network-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Alumni Network
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section>

      <section className="section-margin-standard layout-standard lg:grid lg:grid-cols-3 lg:gap-16">
        <div className="lg:col-span-2 flex flex-col gap-12">
          <div>
            <h2 className="lg:5xl md:text-4xl text-3xl font-normal text-heading font-heading mb-4 md:mb-8 capitalize max-md:leading-[1.3]">
              Yohanan Mateus Law Alumni Network
            </h2>

            <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground font-medium mb-6">
              Yohanan Mateus Law&apos;s growth and success is the direct result
              of our talented and dedicated current and former attorneys.
              Whether you passed through our doors recently or years ago, we
              invite you to stay connected with your former colleagues and
              friends through our Alumni Network.
            </p>
            <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground font-medium mb-6">
              The Yohanan Mateus Law Alumni Network offers alumni access to
              newsletters, e-alerts and invitations to upcoming webinars and
              CLEs. Our objective is to provide you with valued resources and
              opportunities and to keep you in the know about firm ongoings.
            </p>
            <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground font-medium">
              Whether you are a recent or longtime alum, your contributions are
              present at the firm. Thank you for sharing your talents with us
              during your time at Yohanan Mateus Law.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <Image
              src={AlumniNetworkPageImg}
              alt="Alumni Network Page Img"
              className="w-full lg:h-[500px] md:h-[400px] h-[300px] object-cover object-center"
            />

            <Separator className="lg:my-6 bg-border border-border" />

            <div>
              <h1 className="lg:text-2xl md:text-xl text-lg font-medium text-heading font-heading mb-12">
                John McGurk, Vice President of Development, Milhaus
              </h1>

              <h3 className="lg:text-xl md:text-lg text-base font-medium text-heading font-heading mb-4">
                <span className="text-heading font-bold">Q:</span> What is your
                favorite Yohanan Mateus Law memory?
              </h3>

              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground">
                <span className="text-heading font-bold">A:</span> There are so
                many! But one that really stands out and was really impactful
                and emotional for me was right after I got my offer to be a
                first-year associate and they invited me to come to the old
                annual Plaza Lights Party (which should totally be brought back
                Chase!).
              </p>

              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground mt-2">
                Another great one for me is actually a few different ones
                combined. Before I left for Milhaus, I left 2 other times to
                pursue political positions. First it was 2008 and I left to go
                join the Obama campaign. The second was to go to Mayor
                James&apos; office as Chief of Staff. You would think when a
                young associate was leaving the firm would just wave goodbye,
                but Russ and Chase were always so encouraging and said I always
                had a home at Yohanan Mateus Law. It really made me feel like
                family and I&apos;ve never forgotten that.
              </p>
            </div>

            <div>
              <h3 className="lg:text-xl md:text-lg text-base font-medium text-heading font-heading mb-4">
                <span className="text-heading font-bold">Q:</span> How did your
                time at Yohanan Mateus Law prepare you for your current job?
              </h3>
              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground">
                <span className="text-heading font-bold">A:</span> I always
                joked that we were developers for hire. Petersen, Chase and Korb
                all stressed that we needed to learn our client&apos;s business.
                Not just their legal issues. We did proformas on deals. We
                helped solve issues with site plans. We really were part of the
                development team and not just their lawyer. While I had to learn
                some stuff when I came to Milhaus, the foundation was securely
                built and the network of people across the city and country from
                a business development standpoint was in place.
              </p>
            </div>

            <div>
              <h3 className="lg:text-xl md:text-lg text-base font-medium text-heading font-heading mb-4">
                <span className="text-heading font-bold">Q:</span> What do you
                love or what challenges do you enjoy about your job now?
              </h3>
              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground">
                <span className="text-heading font-bold">A:</span> I love the
                thrill of the hunt. Finding a new project, getting it under
                control. Getting it through the City&apos;s processes on zoning
                etc. It is all super exciting for me and it all ties back to the
                skills I learned as a lawyer at Yohanan Mateus Law.
              </p>
            </div>

            <div>
              <h3 className="lg:text-xl md:text-lg text-base font-medium text-heading font-heading mb-4">
                <span className="text-heading font-bold">Q:</span> What do you
                enjoy doing outside of the office?
              </h3>
              <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground">
                <span className="text-heading font-bold">A:</span> Well with 3
                kids, most of my time these days are spent with family. My 2
                oldest are boys and are deep into sports so I sit on a lot of
                sidelines and watch a lot of practices and games. And I love it.
                Both are into baseball currently and though it&apos;s hot and
                dusty, I won&apos;t miss a game if I can help it. Our daughter
                is 2 now and trying to keep up with her brothers so I have no
                doubt I&apos;ll be watching a lot of sports for the next decade
                and a half!
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-12 max-lg:hidden">
          <div>
            <h2 className="text-2xl font-medium text-heading font-heading mb-6">
              Alumni Newsletter
            </h2>
            <div className="bg-muted rounded-sm overflow-hidden mb-4">
              <Image
                src={NewsletterImg}
                alt="Yohanan Mateus Law Alumni Connection"
                className="w-full h-[200px] object-cover"
              />
            </div>
            <a
              href="#"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Read the Newsletter
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-2xl font-medium text-heading font-heading mb-4">
              Subscribe
            </h2>
            <p className="leading-relaxed text-sm mb-4">
              Stay informed about Yohanan Mateus Law news, events and the latest
              legal updates in your industry.
            </p>
            <a
              href="#"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Subscribe Now
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-2xl font-medium text-heading font-heading mb-4">
              Upcoming Events
            </h2>
            <p className="leading-relaxed text-sm">
              Stay on top of legal updates in your industry through our
              webinars, CLE presentations, virtual summits and conferences.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AlumniNetworkPage;

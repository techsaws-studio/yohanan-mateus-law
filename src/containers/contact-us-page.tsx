import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pin } from "lucide-react";

function ContactUsPage() {
  return (
    <main>
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact-us-page-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full layout-standard flex items-end md:pb-16 pb-8">
          <h1 className="text-white text-4xl md:text-6xl font-light font-heading tracking-tight">
            Contact Us
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[12px] bg-primary" />
      </section> 

      <section className="section-margin-standard layout-standard flex flex-col gap-8">
        <p className="lg:text-lg md:text-base text-sm max-lg:leading-[1.7] text-foreground font-medium">
          If you have a question or comment about the firm, please fill out the
          form below and a member of the Yohanan Mateus Law team will get in touch with
          you. We look forward to hearing from you!
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 max-lg:gap-8">
          <div className="col-span-1">
            <Card className="border border-border w-full">
              <CardHeader className="text-heading font-medium font-heading md:text-3xl text-lg max-md:px-3">
                Contact Form
              </CardHeader>

              <CardContent className="flex flex-col !gap-6 max-md:px-3">
                <div className="flex flex-col gap-2">
                  <Label className="font-heading font-medium text-heading md:text-base text-sm">
                    Name
                  </Label>
                  <Input className="h-[50px] bg-white border border-border" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-heading font-medium text-heading md:text-base text-sm">
                    Phone
                  </Label>
                  <Input className="h-[50px] bg-white border border-border" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-heading font-medium text-heading md:text-base text-sm">
                    Email
                  </Label>
                  <Input className="h-[50px] bg-white border border-border" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-heading font-medium text-heading md:text-base text-sm">
                    Company
                  </Label>
                  <Input className="h-[50px] bg-white border border-border" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-heading font-medium text-heading md:text-base text-sm">
                    Comment
                  </Label>
                  <Input className="h-[50px] bg-white border border-border" />
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-8 max-md:px-3">
                <div className="flex w-full items-center justify-start gap-2">
                  <Checkbox id="terms" className="rounded-none" />
                  <Label
                    htmlFor="terms"
                    className="text-muted-foreground font-normal md:text-sm text-xs translate-y-[1px]"
                  >
                    By checking this box I agree to the terms and conditions
                    outlined below.
                  </Label>
                </div>

                <Button className="hover:bg-primary-hover rounded-none h-12 w-full">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-2 col-span-1 flex flex-col gap-8 lg:pl-12">
            <Card className="border border-border">
              <CardHeader className="font-heading md:text-3xl text-xl font-medium text-heading flex items-center md:gap-2 gap-1 flex-row max-md:px-3">
                <Pin className="text-primary max-md:h-4 max-md:w-4 flex-shrink-0" />
                Our Office
              </CardHeader>

              <CardContent className="space-y-4 text-sm text-foreground max-md:px-3">
                <div>
                  <p className="font-semibold text-heading">Address</p>
                  <p>
                    123 Madison Avenue, Suite 1800
                    <br />
                    New York, NY 10010
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-heading">Phone</p>
                  <p>(212) 555-0198</p>
                </div>

                <div>
                  <p className="font-semibold text-heading">Email</p>
                  <p>contact@yohananmateuslaw.com</p>
                </div>

                <div>
                  <p className="font-semibold text-heading">Office Hours</p>
                  <p>Monday – Friday, 9:00 AM – 6:00 PM (ET)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-muted/40">
              <CardHeader className="font-heading md:text-3xl text-xl font-medium text-heading max-md:px-3">
                What Happens Next
              </CardHeader>

              <CardContent className="space-y-4 text-sm text-foreground max-md:px-3">
                <ul className="space-y-3 list-disc pl-5">
                  <li>Your message is reviewed by our legal intake team.</li>
                  <li>
                    An attorney or senior associate responds within 1 business
                    day.
                  </li>
                  <li>We determine next steps and any potential conflicts.</li>
                  <li>
                    No attorney-client relationship is formed unless confirmed
                    in writing.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-sm text-muted-foreground leading-relaxed">
              Communications submitted through this form are not guaranteed to
              be confidential. Please do not include sensitive or time-critical
              information.
            </div>
          </div>
        </div>

        <p className="text-sm max-lg:leading-[1.7] text-foreground font-medium">
          <span className="text-heading font-bold">
            DO NOT SEND CONFIDENTIAL INFORMATION.
          </span>{" "}
          This website presents general information about Yohanan Mateus Law and is not
          intended as legal advice nor should you consider it as such. You
          should not act upon this information without seeking professional
          counsel. Please keep in mind that merely contacting Yohanan Mateus Law will
          not establish an attorney-client relationship. Yohanan Mateus Law cannot
          represent you until the firm knows there would not be a conflict of
          interest, and the firm determines that it is otherwise able to accept
          the engagement. Accordingly, please do not send Yohanan Mateus Law any
          information or documents until a formal attorney-client relationship
          has been established through an interview with an attorney and you get
          authorization in the form of an engagement letter from Yohanan Mateus Law. Any
          information or documents sent prior to your receipt of an engagement
          letter cannot be treated as confidences, secrets or protected
          information of any nature.
        </p>
      </section>
    </main>
  );
}

export default ContactUsPage;

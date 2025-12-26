import { Metadata } from "next";

import ContactUsPage from "@/containers/contact-us-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Contact Yohanan Mateus Law | New York Business Attorneys",
  description:
    "Contact Yohanan Mateus Law to discuss your legal needs. Reach our New York business and corporate attorneys for professional, confidential inquiries and consultations.",
});

function ContactUs() {
  return <ContactUsPage />;
}

export default ContactUs;

import { Metadata } from "next";

import AboutUsPage from "@/containers/about-us-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "About Yohanan Mateus Law | New York Business & Corporate Law Firm",
  description:
    "Learn about Yohanan Mateus Law, a New York-based business and corporate law firm committed to providing strategic, client-focused legal counsel with integrity and professionalism.",
});

function AboutUs() {
  return <AboutUsPage />;
}

export default AboutUs;

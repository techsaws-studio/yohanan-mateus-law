import { Metadata } from "next";

import OurDiverseCulturePage from "@/containers/our-diverse-culture-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Our Diverse Culture | Yohanan Mateus Law",
  description:
    "Learn about the diverse and inclusive culture at Yohanan Mateus Law. Our firm values collaboration, respect, and professional excellence across all backgrounds and perspectives.",
});

function OurDiverseCulture() {
  return <OurDiverseCulturePage />;
}

export default OurDiverseCulture;

import { Metadata } from "next";

import OurCapabilitiesPage from "@/containers/our-capabilities-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Our Capabilities | Legal Services | Yohanan Mateus Law",
  description:
    "Explore the legal capabilities of Yohanan Mateus Law. We provide strategic counsel across corporate, commercial, real estate, and litigation matters for businesses and individuals in New York.",
});

function OurCapabilities() {
  return <OurCapabilitiesPage />;
}

export default OurCapabilities;

import { Metadata } from "next";

import OurPeoplePage from "@/containers/our-people-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Our People | Yohanan Mateus Law",
  description:
    "Meet the attorneys and professionals at Yohanan Mateus Law. Our team brings experience, integrity, and strategic insight to every matter we handle for clients in New York and beyond.",
});

function OurPeople() {
  return <OurPeoplePage />;
}

export default OurPeople;

import { Metadata } from "next";

import CareersPage from "@/containers/careers-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Careers | Yohanan Mateus Law",
  description:
    "Explore career opportunities at Yohanan Mateus Law. Learn about professional roles, firm culture, and opportunities for growth within our New York–based legal practice.",
});

function Careers() {
  return <CareersPage />;
}

export default Careers;

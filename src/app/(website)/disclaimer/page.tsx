import { Metadata } from "next";

import DisclaimerPage from "@/containers/disclaimer-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Legal Disclaimer | Yohanan Mateus Law",
  description:
    "Read the legal disclaimer for Yohanan Mateus Law. Information on this website is provided for general informational purposes only and does not constitute legal advice or create an attorney-client relationship.",
});

function Disclaimer() {
  return <DisclaimerPage />;
}

export default Disclaimer;

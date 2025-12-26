import { Metadata } from "next";

import TermsConditionsPage from "@/containers/terms-conditions-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Terms and Conditions | Yohanan Mateus Law",
  description:
    "Review the Terms and Conditions governing the use of the Yohanan Mateus Law website, including legal notices, limitations of liability, and conditions applicable to visitors and users.",
});

function TermsConditions() {
  return <TermsConditionsPage />;
}

export default TermsConditions;

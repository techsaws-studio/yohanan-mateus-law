import { Metadata } from "next";

import PrivacyNoticePage from "@/containers/privacy-notice-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Privacy Notice | Yohanan Mateus Law",
  description:
    "Review the Privacy Notice of Yohanan Mateus Law to understand how personal information is collected, used, stored, and protected when you visit our website or communicate with our firm.",
});

function PrivacyNotice() {
  return <PrivacyNoticePage />;
}

export default PrivacyNotice;

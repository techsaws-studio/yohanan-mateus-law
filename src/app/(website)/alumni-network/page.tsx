import { Metadata } from "next";

import AlumniNetworkPage from "@/containers/alumni-network-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Alumni Network | Yohanan Mateus Law",
  description:
    "Learn about the Yohanan Mateus Law Alumni Network, reflecting the professional relationships and shared experience of attorneys and professionals who have been part of our firm.",
});

function AlumniNetwork() {
  return <AlumniNetworkPage />;
}

export default AlumniNetwork;

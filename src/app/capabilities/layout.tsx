import { ReactNode } from "react";
import FirmHighlights from "@/components/partials/firm-highlights";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

export default function CapabilitiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <FirmHighlights />
      <Footer />
    </>
  );
}

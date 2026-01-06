import { ReactNode } from "react";
import FirmHighlights from "@/components/partials/firm-highlights";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header/>
      {children}
      <FirmHighlights />
      <Footer />
    </>
  );
}

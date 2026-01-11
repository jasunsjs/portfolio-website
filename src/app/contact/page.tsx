import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 py-12">
      <SectionHeading>{siteConfig.headings.contact}</SectionHeading>
      <div className="mt-6 w-full max-w-2xl">

      </div>
    </section>
  );
}

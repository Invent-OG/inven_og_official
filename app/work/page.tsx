import WorkPageContent from "@/components/WorkPages/WorkPageContent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Work | Portfolio Archive",
  description:
    "Explore our portfolio of digital experiences, innovative technology, and exceptional design.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}

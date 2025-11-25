import HeroBlog from "@/components/BlogPages/HeroBlog";
import React from "react";

function page() {
  return (
    <div>
      <HeroBlog />
    </div>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, trends, and updates from the world of web development, design, and AI.",
};

export default page;

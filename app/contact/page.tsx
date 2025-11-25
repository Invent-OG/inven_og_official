import ContactForm from "@/components/ContactPages/ContactForm";
import ContactHero from "@/components/ContactPages/ContactHero";
import DirectEmail from "@/components/ContactPages/DirectEmail";
import React from "react";

function page() {
  return (
    <>
      <ContactHero />
      <DirectEmail />
      <ContactForm />
    </>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with InventOG. We are ready to help you build your next digital product.",
};

export default page;

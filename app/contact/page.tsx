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

export default page;

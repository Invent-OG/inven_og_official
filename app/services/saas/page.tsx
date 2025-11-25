import HomeTestimonial from "@/components/HomePages/HomeTestimonial";
import Projects from "@/components/HomePages/Projects";
import SaasDesignProcess from "@/components/ServicePages/saas/SaasDesignProcess";
import SaasServices from "@/components/ServicePages/saas/SaasServices";
import SaasToolsTech from "@/components/ServicePages/saas/SaasToolsTech";
import SaasWebHero from "@/components/ServicePages/saas/SaasWebHero";
import ContactCTA from "@/components/ServicePages/WebDesignPages/ContactCTA.tsx";
import TeamDesigners from "@/components/ServicePages/WebDesignPages/TeamDesigners";
import React from "react";

function page() {
  return (
    <>
      <SaasWebHero />
      <SaasDesignProcess />
      <Projects />
      <SaasServices />
      <SaasToolsTech />
      <HomeTestimonial />
      <TeamDesigners />
      <ContactCTA />
    </>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Development Services",
  description:
    "End-to-end SaaS product development, from MVP to full-scale enterprise solutions.",
};

export default page;

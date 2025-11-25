import HomeTestimonial from "@/components/HomePages/HomeTestimonial";
import Projects from "@/components/HomePages/Projects";
import ContactCTA from "@/components/ServicePages/WebDesignPages/ContactCTA.tsx";
import DesignProcess from "@/components/ServicePages/WebDesignPages/DesignProcess";
import Services from "@/components/ServicePages/WebDesignPages/Services";
import TeamDesigners from "@/components/ServicePages/WebDesignPages/TeamDesigners";
import ToolsTech from "@/components/ServicePages/WebDesignPages/ToolsTech";
import WebHero from "@/components/ServicePages/WebDesignPages/WebHero";
import React from "react";

function page() {
  return (
    <>
      <WebHero />
      <DesignProcess />
      <Projects />
      <Services />
      <ToolsTech />
      <HomeTestimonial />
      <TeamDesigners />
      <ContactCTA />
    </>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Web Design Services",
  description:
    "Stunning, user-centric web designs that captivate your audience and elevate your brand.",
};

export default page;

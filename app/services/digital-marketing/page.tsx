import HomeTestimonial from "@/components/HomePages/HomeTestimonial";
import Projects from "@/components/HomePages/Projects";
import DigitalDesignProcess from "@/components/ServicePages/DigitalMarketing/DigitalDesignProcess";
import DigitalServices from "@/components/ServicePages/DigitalMarketing/DigitalServices";
import DigitalToolsTech from "@/components/ServicePages/DigitalMarketing/DigitalToolsTech";
import DigitalWebHero from "@/components/ServicePages/DigitalMarketing/DigitalWebHero";
import ContactCTA from "@/components/ServicePages/WebDesignPages/ContactCTA.tsx";
import TeamDesigners from "@/components/ServicePages/WebDesignPages/TeamDesigners";
import React from "react";

function page() {
  return (
    <>
      <DigitalWebHero />
      <DigitalDesignProcess />
      <Projects />
      <DigitalServices />
      <DigitalToolsTech />
      <HomeTestimonial />
      <TeamDesigners />
      <ContactCTA />
    </>
  );
}

export default page;

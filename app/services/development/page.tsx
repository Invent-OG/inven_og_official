import HomeTestimonial from "@/components/HomePages/HomeTestimonial";
import Projects from "@/components/HomePages/Projects";
import DevDesignProcess from "@/components/ServicePages/development/DevDesignProcess";
import DevServices from "@/components/ServicePages/development/DevServices";
import DevToolsTech from "@/components/ServicePages/development/DevToolsTech";
import DevWebHero from "@/components/ServicePages/development/DevWebHero";
import ContactCTA from "@/components/ServicePages/WebDesignPages/ContactCTA.tsx";
import TeamDesigners from "@/components/ServicePages/WebDesignPages/TeamDesigners";
import React from "react";

function page() {
  return (
    <>
      <DevWebHero />
      <DevDesignProcess />
      <Projects />
      <DevServices />
      <DevToolsTech />
      <HomeTestimonial />
      <TeamDesigners />
      <ContactCTA />
    </>
  );
}

export default page;

import HomeTestimonial from "@/components/HomePages/HomeTestimonial";
import Projects from "@/components/HomePages/Projects";
import SeoDesignProcess from "@/components/ServicePages/seo/SeoDesignProcess";
import SeoServices from "@/components/ServicePages/seo/SeoServices";
import SeoToolsTech from "@/components/ServicePages/seo/SeoToolsTech";
import SeoWebHero from "@/components/ServicePages/seo/SeoWebHero";
import ContactCTA from "@/components/ServicePages/WebDesignPages/ContactCTA.tsx";
import TeamDesigners from "@/components/ServicePages/WebDesignPages/TeamDesigners";
import React from "react";

function page() {
  return (
    <>
      <SeoWebHero />
      <SeoDesignProcess />
      <Projects />
      <SeoServices />
      <SeoToolsTech />
      <HomeTestimonial />
      <TeamDesigners />
      <ContactCTA />
    </>
  );
}

export default page;

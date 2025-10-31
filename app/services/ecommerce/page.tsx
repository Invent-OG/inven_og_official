import HomeTestimonial from "@/components/HomePages/HomeTestimonial";
import Projects from "@/components/HomePages/Projects";
import EcommerceDesignProcess from "@/components/ServicePages/ecommerce/EcommerceDesignProcess";
import EcommerceServices from "@/components/ServicePages/ecommerce/EcommerceServices";
import EcommerceToolsTech from "@/components/ServicePages/ecommerce/EcommerceToolsTech";
import EcommerceWebHero from "@/components/ServicePages/ecommerce/EcommerceWebHero";
import ContactCTA from "@/components/ServicePages/WebDesignPages/ContactCTA.tsx";
import TeamDesigners from "@/components/ServicePages/WebDesignPages/TeamDesigners";
import React from "react";

function page() {
  return (
    <>
      <EcommerceWebHero />
      <EcommerceDesignProcess />
      <Projects />
      <EcommerceServices />
      <EcommerceToolsTech />
      <HomeTestimonial />
      <TeamDesigners />
      <ContactCTA />
    </>
  );
}

export default page;

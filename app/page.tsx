import HeroHome from "@/components/HomePages/HeroHome";
import HomeAbout from "@/components/HomePages/HomeAbout";
import HomeFaq from "@/components/HomePages/HomeFaq";
import HomeMarquee from "@/components/HomePages/HomeMarquee";
import HomeService from "@/components/HomePages/HomeService";
import HomeTestimonial from "@/components/HomePages/HomeTestimonial";
import HomeVideo from "@/components/HomePages/HomeVideo";
import OurProcess from "@/components/HomePages/OurProcess";
import PricingPlan from "@/components/HomePages/PricingPlan";
import Projects from "@/components/HomePages/Projects";
import Rated from "@/components/HomePages/Rated";
import React from "react";

function page() {
  return (
    <>
      {/* <HeroHome /> */}
      <HomeVideo />
      <HomeService />
      <HomeMarquee />
      <HomeAbout />
      <OurProcess />
      <Rated />
      <Projects />
      <HomeTestimonial />
      {/* <PricingPlan /> */}
      <HomeFaq />
    </>
  );
}

export default page;

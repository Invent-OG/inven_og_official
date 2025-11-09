"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Target, Eye, Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeAbout() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out", // smoothness
      once: false, // whether animation should happen only once
      offset: 100, // how far from top before trigger
    });
  }, []);
  return (
    <section className="py-20 px-6  lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto relative">
        {/* Top section */}
        <div
          data-aos="fade-up"
          className="flex justify-between items-start mb-12"
        >
          <div>
            <div className="inline-flex mb-10 text-black/60 items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-[#0049ae] rounded-full"></span>
              ABOUT
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#171717] leading-tight">
              We Execute Ideas From <br /> Start to Finish
            </h2>
          </div>

          {/* <button className="border border-[#3B82F6] text-[#3B82F6] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#3B82F6] hover:text-white transition-all">
            Know More
          </button> */}
          <button className="hidden md:block bg-gradient-to-r from-blue-400 to-blue-700 border border-[#3B82F6] text-[#3B82F6] px-6 py-2 rounded-lg font-semibold text-sm text-white pointer-coarse: hover:bg-[#3B82F6] hover:text-white transition-all ">
            Know More
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left side - Mission/Vision/Awards */}
          <div data-aos="fade-right" className="flex flex-col gap-8">
            {/* Mission */}
            <div className="flex items-start gap-4">
              <div className="bg-[#EEF2FF] p-4 rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#171717] mb-1">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our mission is to push boundaries, engage audiences, and drive
                  innovation through.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-4">
              <div className="bg-[#EEF2FF] p-4 rounded-lg flex items-center justify-center">
                <Eye className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#171717] mb-1">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our vision is to push boundaries, engage audiences, and drive
                  innovation through.
                </p>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-start gap-4">
              <div className="bg-[#EEF2FF] p-4 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#171717] mb-1">
                  Our Awards
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our awards showcase our drive for excellence and innovation.
                </p>
              </div>
            </div>
          </div>
          {/* Center image +text */}
          <div data-aos="fade-up" className="flex flex-col gap-6">
            <div className="overflow-hidden shadow-md rounded-tl-[6rem] rounded-br-[6rem]">
              <Image
                src="https://images.pexels.com/photos/23496627/pexels-photo-23496627.jpeg"
                alt="Team collaboration"
                width={600}
                height={450}
                className="object-cover w-full h-[250px]"
              />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Repellendus autem ruibusdam et aut officiis debitis aut re
              necessitatibus saepe eveniet ut et repudiandae sint et molestiae
              non recusandae.
            </p>
          </div>

          {/* Right image + text */}
          <div
            data-aos="fade-left"
            className="relative rounded-tl-[6rem] md:bottom-16 bottom-0 rounded-br-[6rem] overflow-hidden shadow-md"
          >
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Team at work"
              width={600}
              height={450}
              className="object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

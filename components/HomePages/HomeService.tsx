"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function HomeService() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      image:
        "https://unblast.com/wp-content/uploads/2020/10/PowerPoint-Presentation-Template-1024x768.jpg",
    },
    {
      id: 2,
      title: "Branding & Identity",
      image:
        "https://unblast.com/wp-content/uploads/2023/06/Essential-Branding-Mockup-1024x768.jpg",
    },
    {
      id: 3,
      title: "Development",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    },
    {
      id: 4,
      title: "Digital Marketing",
      image: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg",
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      image:
        "https://images.pexels.com/photos/29502359/pexels-photo-29502359.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const hoverTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Fade-in animation when service changes
    const tl = gsap.timeline();
    tl.fromTo(
      ".service-image",
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );
  }, [activeIndex]);

  const handleMouseEnter = () => {
    if (imageInnerRef.current) {
      hoverTween.current = gsap.to(imageInnerRef.current, {
        scale: 2,
        rotate: 3,
        duration: 1,
        yoyo: true,
        // repeat: -1,
        ease: "sine.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    if (hoverTween.current) hoverTween.current.kill();
    if (imageInnerRef.current) {
      gsap.to(imageInnerRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="bg-white  w-full py-20 flex justify-center">
      <div className="max-w-7xl w-full px-6 lg:px-24">
        <div className="inline-flex mb-10 text-black/60 items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium">
          <span className="w-2 h-2 bg-[#0049ae] rounded-full"></span>
          SERVICES
        </div>
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-800 leading-tight text-left md:text-left">
          Tailored digital solutions <br /> for your success
        </h1>

        <div className="flex flex-col lg:flex-row items-center  mt-12">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Services List */}
            <div className="mt-8 space-y-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`block text-left w-full text-2xl md:text-4xl transition-all duration-300 ${
                    activeIndex === index
                      ? "text-black font-normal"
                      : "text-gray-400 hover:text-[#171817] hover:text-5xl"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Button */}
            {/* <button className="mt-10 text-[#171817] inline-flex items-center gap-2 px-6 py-3 border border-gray-400 hover:border-blue-700 rounded-md transition-all">
              View all Services
              <ArrowUpRight size={18} className="text-gray-700" />
            </button> */}
            <button className="mb-8 bg-gradient-to-r from-blue-400 to-blue-700 mt-10 text-[#ffffff] inline-flex items-center gap-2 px-6 py-3 border border-gray-400 hover:border-blue-700 rounded-md transition-all transition-all hover:from-blue-700 hover:to-blue-400 hover:shadow-lg">
              View all Services
              <ArrowUpRight size={18} className="text-white" />
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-md w-full max-w-lg h-[400px] md:h-[350px] cursor-pointer">
              <div
                ref={imageInnerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full h-full"
              >
                <Image
                  key={services[activeIndex].id}
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="service-image object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

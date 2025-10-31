"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Layout,
  PenTool,
  Monitor,
  Code,
  Brush,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function EcommerceServices() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Web Design",
      desc: "Crafting visually appealing, responsive websites optimized for performance and engagement.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading",
        "Modern UI",
      ],
      color: "blue",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Brand Identity",
      desc: "Building strong, cohesive brand visuals and tone that communicate authenticity and trust.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Style Systems",
      ],
      color: "purple",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "UI/UX Design",
      desc: "Designing seamless user experiences through wireframes, prototypes, and modern interfaces.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      color: "green",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      desc: "Scalable, maintainable front-end and back-end solutions that bring designs to life.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      features: ["Frontend", "Backend", "API Integration", "DevOps"],
      color: "orange",
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Creative Direction",
      desc: "Leading cohesive storytelling across digital, print, and brand experiences.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      features: [
        "Art Direction",
        "Content Strategy",
        "Campaigns",
        "Storytelling",
      ],
      color: "pink",
    },
  ];

  const colorClasses = {
    blue: {
      gradient: "from-blue-700 to-blue-700",
      light: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    purple: {
      gradient: "from-blue-700 to-blue-700",
      light: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    green: {
      gradient: "from-blue-700 to-blue-700",
      light: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    orange: {
      gradient: "from-blue-700 to-blue-700",
      light: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    pink: {
      gradient: "from-blue-700 to-blue-700",
      light: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
  };

  useEffect(() => {
    if (sectionRef.current) {
      const cards = cardRefs.current.filter(Boolean);
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-20 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Header */}
      <div className="text-left mb-14 sm:mb-16 px-2 sm:px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-sm font-medium mb-5">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          Our Services
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-snug">
          Comprehensive Digital Services
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
          Transforming your ideas into powerful digital experiences that inspire
          and perform. Every detail crafted to create lasting impressions.
        </p>
      </div>

      {/* Service Tabs */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-start gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 mb-10 sm:mb-12">
          {services.map((service, index) => {
            const color =
              colorClasses[service.color as keyof typeof colorClasses];
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                  activeIndex === index
                    ? `${color.light} ${color.text} shadow-md`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center ${
                    activeIndex === index
                      ? `bg-gradient-to-r ${color.gradient} text-white`
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {service.icon}
                </div>
                <span className="font-medium">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Display */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative w-full">
            <div className="relative overflow-hidden group">
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="w-full h-64 sm:h-80 object-cover rounded-br-[8rem] rounded-tl-[8rem] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Arrows */}
              <button
                onClick={prevService}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextService}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 sm:space-y-6 text-left">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                  colorClasses[
                    services[activeIndex].color as keyof typeof colorClasses
                  ].gradient
                } flex items-center justify-center text-white shadow-lg`}
              >
                {services[activeIndex].icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {services[activeIndex].title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500">Available Now</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {services[activeIndex].desc}
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                What&apos;s Included:
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {services[activeIndex].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${
                        colorClasses[
                          services[activeIndex]
                            .color as keyof typeof colorClasses
                        ].gradient
                      }`}
                    ></div>
                    <span className="text-gray-700 text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <button
                className={`px-5 sm:px-6 py-3 bg-gradient-to-r ${
                  colorClasses[
                    services[activeIndex].color as keyof typeof colorClasses
                  ].gradient
                } text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => router.push("/work")}
                className="px-5 sm:px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-start items-center gap-5 sm:gap-6">
          <button
            onClick={prevService}
            className="p-2 sm:p-3 rounded-full bg-white border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? `bg-gradient-to-r ${
                        colorClasses[
                          services[index].color as keyof typeof colorClasses
                        ].gradient
                      } scale-125`
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextService}
            className="p-2 sm:p-3 rounded-full bg-white border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

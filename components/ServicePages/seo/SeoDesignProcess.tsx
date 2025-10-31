"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SeoDesignProcess() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const processes = [
    {
      step: "01",
      title: "Research & Discovery",
      description:
        "We dive deep into your business, audience, and market to build a solid foundation for success.",
      icon: "🔍",
      color: "text-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-100",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Transforming insights into clear objectives and actionable roadmaps for your project.",
      icon: "🎯",
      color: "text-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-100",
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description:
        "Creating beautiful, intuitive interfaces through iterative design and user testing.",
      icon: "✨",
      color: "text-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-100",
    },
    {
      step: "04",
      title: "Development & Launch",
      description:
        "Building robust solutions with modern technologies and seamless deployment.",
      icon: "🚀",
      color: "text-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-100",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const steps = stepRefs.current.filter(Boolean);

      gsap.fromTo(
        steps,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
          },
        }
      );
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    stepRefs.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      id="design-process"
      className="bg-white text-gray-900 py-24 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-start mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          Our Process
        </div>
        <h2 className="text-5xl md:text-6xl max-w-2xl font-bold mb-6">
          How We Create Digital Excellence
        </h2>
        <p className="text-xl text-gray-600 text-start max-w-2xl ">
          A transparent, step-by-step approach that ensures every project
          delivers exceptional results
        </p>
      </div>

      {/* Process Steps - Horizontal Scroller */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-0 right-0 top-20 h-0.5 bg-gray-200 -z-10">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-500"
            style={{ width: `${(activeStep / (processes.length - 1)) * 100}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className={`relative text-center group cursor-pointer transition-all duration-300 ${
                activeStep === index ? "scale-105" : "scale-100"
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Number & Icon */}
              <div
                className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl ${process.bgColor} border-2 ${process.borderColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
              >
                <div className="text-2xl">{process.icon}</div>
                <div
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${process.bgColor} border-2 border-gray-200 flex items-center justify-center text-xs font-bold ${process.color}`}
                >
                  {process.step}
                </div>
              </div>

              {/* Content */}
              <div className="px-4">
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    activeStep === index ? process.color : "text-gray-900"
                  }`}
                >
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>

              {/* Active Indicator */}
              {activeStep === index && (
                <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-300 border-1 border-gray-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detailed View */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-50 to-gray-300 rounded-3xl p-8 border border-gray-200">
          <div className="flex items-start gap-6">
            <div
              className={`flex-shrink-0 w-16 h-16 rounded-2xl ${processes[activeStep].bgColor} flex items-center justify-center text-2xl`}
            >
              {processes[activeStep].icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {processes[activeStep].title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${processes[activeStep].bgColor} ${processes[activeStep].color}`}
                >
                  Step {processes[activeStep].step}
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {processes[activeStep].description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Collaborative Approach",
                  "Data-Driven Decisions",
                  "Continuous Testing",
                ].map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${processes[activeStep].bgColor}`}
                    ></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-12">
        {processes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

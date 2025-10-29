"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processData = [
  {
    step: "01",
    title: "ENROLLED",
    description: "Begin your journey by enrolling in our program",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 12a5 5 0 100-10 5 5 0 000 10zM20 22v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "APPLIED",
    description: "Submit your application and required documents",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "CONFIRMED",
    description: "Get your enrollment confirmed and schedule orientation",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 11.08V12a10 10 0 11-5.93-9.14"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "COMPLETED",
    description: "Successfully complete your program and graduate",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

function OurProcess() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");

      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full  min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-60 w-96 h-96 border-1 border-gray-700 rounded-full"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 border-1 border-gray-700 rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-start px-10 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-300 mb-6">
            <span className="w-2 h-2 bg-[#0049ae] rounded-full mr-2 "></span>
            <span className="text-gray-600 text-sm font-normal tracking-wider">
              OUR PROCESS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            How It Works
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl">
            Follow our streamlined 4-step process to transform your career. From
            enrollment to completion, we guide you every step of the way with
            personalized support and industry-leading expertise.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1  px-10 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processData.map((step, index) => (
              <div
                key={index}
                className="process-step group relative flex flex-col items-center text-center p-6 rounded-tl-[4rem] rounded-br-[4rem] border border-gray-700/30 transition-all duration-500 bg-white hover:shadow-xl"
              >
                {/* Step Icon */}
                <div className="step-icon w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gray-100 text-gray-700 border border-gray-400">
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="step-content">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-start px-10 mt-16">
          <button className="px-8 py-4 bg-[#0049ae] rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Start Your Journey Today
          </button>

          <p className="text-gray-600 mt-6 text-sm">
            Join over 10,000 successful graduates who transformed their careers
            with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;

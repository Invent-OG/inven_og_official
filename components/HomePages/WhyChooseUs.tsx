"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const features = [
    "Luxury-level design, built with modern simplicity",
    "Deep technical expertise backed by real strategy",
    "Clean UI, clean code, clean results",
    "Projects delivered on time—every time",
    "Transparent communication, no surprises",
    "Ongoing support long after launch",
  ];

  return (
    <section className="bg-neutral-50 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-6 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 bg-[#0049ae] rounded-full"></span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              The Inventog <br /> Standard
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              We don&apos;t just build websites; we build digital assets that drive
              growth. Our commitment to excellence ensures that every project we
              deliver meets the highest standards of quality and performance.
            </p>
            
            <div className="grid sm:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Visual */}
          <div data-aos="fade-left" className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay z-10"></div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Team collaboration"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 z-20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">Client Satisfaction</p>
                    <p className="text-3xl font-bold text-gray-900">100%</p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">Project Success</p>
                    <p className="text-3xl font-bold text-gray-900">50+</p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">Support</p>
                    <p className="text-3xl font-bold text-gray-900">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

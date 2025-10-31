"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function DigitalWebHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current && imageRef.current) {
      // Text animation
      gsap.from(textRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Image animation
      gsap.from(imageRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="bg-gradient-to-br from-slate-50 to-white text-black py-24 px-6 md:px-12 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <div ref={textRef} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Crafting Digital Excellence
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transform Your Digital Presence
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-2xl leading-relaxed">
            We design and develop beautiful, high-performing websites that drive
            results. From concept to launch, we&apos;re with you every step.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#showcase"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300"
            >
              Explore Portfolio
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>Fast & Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>Mobile First</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div ref={imageRef} className="lg:col-span-5 relative">
          <div className="relative">
            {/* Main image */}
            <div className="relative  overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1000&auto=format&fit=crop"
                alt="Modern website design"
                className="w-full rounded-tl-[8rem] rounded-br-[8rem] h-96 object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating card 1 */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    +45%
                  </div>
                  <div className="text-xs text-gray-500">Conversion</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    100%
                  </div>
                  <div className="text-xs text-gray-500">Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

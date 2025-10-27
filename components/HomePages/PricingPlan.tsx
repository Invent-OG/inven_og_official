"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PricingPlan() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const plans = [
    {
      title: "Starter",
      price: "49",
      period: "/mo",
      features: [
        "Custom landing page (up to 3 sections)",
        "Basic SEO optimization",
        "Email & chat support",
        "Monthly performance report",
      ],
    },
    {
      title: "Professional",
      price: "99",
      period: "/mo",
      features: [
        "Up to 10 website pages",
        "Advanced SEO & analytics",
        "Priority support via chat & email",
        "Monthly strategy consultation",
        "Hosting & maintenance included",
      ],
      featured: true,
    },
    {
      title: "Enterprise",
      price: "199",
      period: "/mo",
      features: [
        "Unlimited website pages",
        "Custom API & integrations",
        "Dedicated account manager",
        "24/7 technical support",
        "Quarterly performance audit",
        "Full scalability solutions",
      ],
    },
  ];

  return (
    <section className="bg-white font-serif py-16 relative min-h-screen flex flex-col items-start justify-center">
      <div className="w-full px-10 md:px-5 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 bg-white border rounded-full px-4 py-1 shadow-sm">
          <div className="w-2.5 h-2.5 bg-blue-700 rounded-full"></div>
          <span className="text-sm font-medium text-gray-600">PRICING</span>
        </div>
        {/* Header */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-6xl font-bold text-neutral-900">
            Flexible Plans for Every Business
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Whether you&apos;re just starting out or scaling up, our plans are
            built to match your IT growth and digital goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-start gap-16 w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`relative w-80 flex flex-col items-center text-center bg-white shadow-xl rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${
                plan.featured ? "z-10 scale-105 border-1 border-gray-500" : ""
              }`}
            >
              {/* Decorative Header */}
              <div className="relative bg-black w-full h-56 flex flex-col justify-center items-center text-white rounded-t-2xl">
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                    c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                    fill="white"
                    opacity="0.6"
                  />
                  <path
                    d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                    c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                    fill="white"
                    opacity="0.6"
                  />
                  <path
                    d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                    H42.401L43.415,98.342z"
                    fill="white"
                    opacity="0.7"
                  />
                  <path
                    d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                    c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                    fill="white"
                  />
                </svg>

                <h3 className="text-sm uppercase tracking-widest">
                  {plan.title}
                </h3>
                <div className="text-6xl font-extrabold mt-2 leading-tight">
                  <span className="align-top text-xl">$</span>
                  {plan.price}
                  <span className="text-base font-light italic">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="w-full py-8 px-8 text-black text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="py-2 border-b border-gray-200 last:border-none"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mb-6 px-6 py-3 bg-black text-white font-semibold rounded-2xl hover:bg-gray-900 transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;

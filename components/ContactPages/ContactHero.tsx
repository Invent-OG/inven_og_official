"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Clock, Zap, TrendingUp } from "lucide-react";

function ContactHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        delay: 0.2,
        duration: 1,
      });
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.4,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: "Fast Delivery",
      subtitle: "4–6 weeks",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      title: "100% Guarantee",
      subtitle: "Money back",
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      title: "24/7 Support",
      subtitle: "Always available",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      title: "Performance",
      subtitle: "Optimized",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#ffffff] text-neutral-900 overflow-hidden px-6 py-24 md:py-32"
    >
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center bg-repeat"></div>

      {/* Header */}
      <div className="text-center z-10">
        <p className="text-sm text-gray-700 uppercase tracking-[0.2em] mb-3">
          Let’s Talk
        </p>
        <h1
          ref={titleRef}
          className="text-[3rem] sm:text-[6rem] md:text-[8rem]  leading-none"
        >
          CONTACT
        </h1>
        <p
          ref={subtitleRef}
          className="text-gray-600 mt-6 text-base md:text-lg"
        >
          Join 50+ satisfied clients. Response within 24 hours guaranteed.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 max-w-5xl sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full  z-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className="border border-gray-700 hover:border-gray-400 transition-all p-6 md:p-8 rounded-2xl bg-black/10 backdrop-blur-sm hover:bg-black/40"
          >
            <div className="flex flex-col gap-3">
              {feature.icon}
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactHero;

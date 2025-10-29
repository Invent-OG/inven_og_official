"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".cta-animate");
      gsap.fromTo(
        elements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 text-white overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="cta-animate text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Let’s Build Something Great Together
        </h2>
        <p className="cta-animate text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Ready to bring your vision to life? Connect with our creative team and
          let’s make your next project extraordinary.
        </p>

        {/* CTA Button */}
        <div className="cta-animate flex justify-center">
          <button
            onClick={() => router.push("/contact")}
            className="group bg-white text-blue-700 font-semibold px-8 py-4 rounded-full flex items-center gap-2 text-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Let’s Connect
          </button>
        </div>
      </div>

      {/* Floating Circles */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-16 right-12 w-36 h-36 bg-blue-300/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}

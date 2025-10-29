"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeamDesigners() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const team = [
    {
      name: "Ava Thompson",
      role: "Lead UX Designer",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1000&auto=format&fit=crop",
      linkedin:
        "https://www.linkedin.com/company/invent-og/posts/?feedView=all",
    },
    {
      name: "Liam Rodriguez",
      role: "Front-End Developer",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
      linkedin: "#",
    },
    {
      name: "Olivia Chen",
      role: "Brand Strategist",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      linkedin: "#",
    },
    {
      name: "Noah Patel",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      linkedin: "#",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const cards = cardsRef.current.filter(Boolean);
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="bg-gradient-to-b from-slate-50 via-white to-blue-50/20 text-gray-900 py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      {/* Header */}
      <div className="text-left mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-700 text-sm font-medium mb-5">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          Our Team
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Meet the Creative Minds
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
          A passionate team of designers, developers, and strategists dedicated
          to crafting innovative and human-centered digital experiences.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div
            key={i}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="group relative border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* LinkedIn Button */}
              <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md hover:scale-105 transition-transform"
                >
                  <Linkedin className="w-4 h-4" /> Connect
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-blue-700 transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {member.role}
              </p>
            </div>

            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-700 to-blue-400 transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

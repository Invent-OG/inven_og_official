"use client";

import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "@/data/projectsData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeView, setActiveView] = useState<"list" | "grid">("list");
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  // Get unique categories
  const categories = [
    "all",
    ...new Set(projectsData.flatMap((project) => project.category)),
  ];

  // Filter projects based on category
  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeCategory)
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typewriter effect for hero
      const heroText = "Portfolio Archive";
      let currentText = "";
      let charIndex = 0;

      const typeWriter = () => {
        if (charIndex < heroText.length) {
          currentText += heroText.charAt(charIndex);
          const heroElement = document.querySelector(".hero-title");
          if (heroElement) {
            heroElement.textContent = currentText;
          }
          charIndex++;
          setTimeout(typeWriter, 80);
        }
      };

      setTimeout(typeWriter, 500);

      // Animated counter for stats
      gsap.to(".stat-number", {
        innerText: (i: number, target: Element) => {
          const value = parseInt(target.getAttribute("data-value") || "0");
          return value;
        },
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      });

      // Enhanced image reveal animation
      gsap.utils
        .toArray<HTMLElement>(".project-image-container")
        .forEach((container) => {
          const el = container as HTMLElement;
          gsap.fromTo(
            el,
            {
              clipPath: "inset(100% 0% 0% 0%)",
              opacity: 0,
              scale: 1.1,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
              },
            }
          );
        });

      // Text stagger animation with enhanced effects
      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item, i) => {
        const el = item as HTMLElement;
        gsap.fromTo(
          el.querySelectorAll(".stagger-item"),
          {
            y: 60,
            opacity: 0,
            rotationX: 45,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
            },
          }
        );
      });

      // Floating animation for numbers
      gsap.to(".project-number", {
        y: -30,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
        },
      });

      // Background shape animations
      gsap.to(".float-shape-1", {
        y: 40,
        rotation: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-shape-2", {
        y: -30,
        rotation: -8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-neutral-900">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="float-shape-1 absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-60"></div>
        <div className="float-shape-2 absolute bottom-1/4 -right-8 w-64 h-64 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full opacity-40"></div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-none opacity-90">
            Portfolio Archive
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12 rounded-full"></div>

          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Crafting digital experiences that merge innovative technology with
            exceptional design. Each project represents a unique journey of
            collaboration and creative problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-4 bg-neutral-900 text-white rounded-2xl hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
              Explore Projects
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="group px-10 py-4 border-2 border-neutral-300 rounded-2xl hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-300 flex items-center gap-3">
              View Case Studies
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-neutral-50/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div
                className="stat-number text-4xl md:text-6xl font-bold text-neutral-950 mb-2"
                data-value="42"
              >
                0
              </div>
              <p className="text-neutral-600 font-medium">Projects Delivered</p>
            </div>
            <div className="p-6">
              <div
                className="stat-number text-4xl md:text-6xl font-bold text-neutral-950 mb-2"
                data-value="36"
              >
                0
              </div>
              <p className="text-neutral-600 font-medium">Technologies</p>
            </div>
            <div className="p-6">
              <div
                className="stat-number text-4xl md:text-6xl font-bold text-neutral-950 mb-2"
                data-value="18"
              >
                0
              </div>
              <p className="text-neutral-600 font-medium">Happy Clients</p>
            </div>
            <div className="p-6">
              <div
                className="stat-number text-4xl md:text-6xl font-bold text-neutral-950 mb-2"
                data-value="5"
              >
                0
              </div>
              <p className="text-neutral-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced View Controls */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Project Gallery
                </span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                Browse through our collection of digital innovations and
                creative solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-neutral-900 text-white shadow-lg"
                        : "bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex gap-2 p-1 bg-neutral-100 rounded-2xl">
                <button
                  onClick={() => setActiveView("list")}
                  className={`p-3 rounded-xl transition-all ${
                    activeView === "list"
                      ? "bg-white text-neutral-900 shadow-lg"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveView("grid")}
                  className={`p-3 rounded-xl transition-all ${
                    activeView === "grid"
                      ? "bg-white text-neutral-900 shadow-lg"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="projects-section pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {activeView === "list" ? (
            /* ENHANCED LIST VIEW */
            <div className="space-y-24">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="project-item group">
                  <div className="flex flex-col lg:flex-row gap-12 md:gap-28 items-start">
                    {/* Project Number and Image */}
                    <div className="flex-shrink-0 lg:w-96">
                      <div className="flex items-start gap-6 mb-8 lg:mb-0">
                        <div className="project-number text-6xl font-black text-neutral-400 opacity-0">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Enhanced Image Container */}
                        <div className="flex-shrink-0 w-64 lg:w-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 transform lg:translate-x-8 lg:group-hover:translate-x-0">
                          <div className="project-image-container relative aspect-[4/5] rounded-tl-[8rem] rounded-br-[8rem] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                              onClick={() => router.push(`/work/${project.id}`)}
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="flex-grow">
                      <div className="stagger-item">
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                          {project.category}
                        </span>
                      </div>

                      <div className="stagger-item">
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 group-hover:text-blue-900 transition-colors duration-300">
                          {project.title}
                        </h2>
                      </div>

                      <div className="stagger-item">
                        <p className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-3xl">
                          {project.description}
                        </p>
                      </div>

                      {/* Enhanced Project Meta */}
                      <div className="stagger-item grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-8">
                        <div className="p-4 bg-neutral-50 rounded-2xl">
                          <span className="block text-xs uppercase tracking-wide mb-2 text-neutral-500">
                            Duration
                          </span>
                          <span className="font-semibold text-lg">
                            {project.duration}
                          </span>
                        </div>
                        <div className="p-4 bg-neutral-50 rounded-2xl">
                          <span className="block text-xs uppercase tracking-wide mb-2 text-neutral-500">
                            Team
                          </span>
                          <span className="font-semibold text-lg">
                            {project.team}
                          </span>
                        </div>
                        <div className="p-4 bg-neutral-50 rounded-2xl">
                          <span className="block text-xs uppercase tracking-wide mb-2 text-neutral-500">
                            Status
                          </span>
                          <span className="font-semibold text-lg capitalize">
                            {project.status}
                          </span>
                        </div>
                        <div className="p-4 bg-neutral-50 rounded-2xl">
                          <span className="block text-xs uppercase tracking-wide mb-2 text-neutral-500">
                            Client
                          </span>
                          <span className="font-semibold text-lg">
                            {project.client}
                          </span>
                        </div>
                      </div>

                      {/* Enhanced Technologies */}
                      <div className="stagger-item mb-8">
                        <p className="text-sm text-neutral-500 mb-4">
                          Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-white border border-neutral-200 rounded-xl text-neutral-700 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Actions */}
                      <div className="stagger-item flex flex-col sm:flex-row gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-2xl hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          View Live Project
                        </a>
                        <button
                          onClick={() => router.push(`/work/${project.id}`)}
                          className="flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-2xl hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          View Project Details
                        </button>
                      </div>

                      {/* Client Testimonial */}
                      {project.clientFeedback && (
                        <div className="stagger-item mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-l-4 border-blue-500">
                          <p className="text-lg italic text-neutral-700">
                            {project.clientFeedback}
                          </p>
                          <p className="text-sm text-neutral-600 mt-3 font-semibold">
                            — {project.client}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ENHANCED GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-blue-200 overflow-hidden"
                >
                  {/* Enhanced Image Container */}
                  <div className="project-image-container relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-neutral-700">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-2xl font-black text-white/90">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-neutral-600 leading-relaxed">
                        {project.description.slice(0, 120)}...
                      </p>

                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-neutral-100 rounded-lg text-xs text-neutral-600 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-neutral-100 rounded-lg text-xs text-neutral-600 font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 pt-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors text-sm font-semibold"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 border border-neutral-300 rounded-xl hover:border-neutral-400 transition-colors text-sm font-semibold"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s collaborate to transform your vision into an exceptional
            digital experience that stands out from the crowd.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-12 py-5 bg-white text-neutral-900 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 font-semibold text-lg flex items-center gap-3">
              Start a Project
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="group px-12 py-5 border-2 border-white/30 rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm font-semibold text-lg flex items-center gap-3">
              Schedule a Call
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 text-center text-blue-200">
            <div>
              <div className="text-2xl font-bold text-white mb-2">24-48h</div>
              <div className="text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Free</div>
              <div className="text-sm">Initial Consultation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

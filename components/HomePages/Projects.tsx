"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projectsData"; // import your array
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  // Determine how many projects to show initially (3)
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handleCardClick = (id: number) => {
    router.push(`/projects/${id}`);
  };
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out", // smoothness
      once: false, // whether animation should happen only once
      offset: 100, // how far from top before trigger
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen  bg-white py-16 px-4">
      <div data-aos="fade-left" className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"></div>
          Our Projects
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-start text-gray-900 mb-4">
            Our <span className="text-black">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 text-start max-w-2xl">
            A showcase of my latest web, AI, and full-stack projects — combining
            performance, design, and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              ref={addToCardsRef}
              onClick={() => handleCardClick(project.id)}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {project.status === "completed" ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Completed
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3"
                        />
                      </svg>
                      In Progress
                    </>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-sm text-blue-700">
                    {project.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-black transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-blue-700 text-xs font-medium rounded border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {projectsData.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-[#0049ae] text-white rounded-xl font-medium hover:bg-blue-600 transition-all duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

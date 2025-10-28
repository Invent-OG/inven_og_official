"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/projectsData";
import {
  Moon,
  Sun,
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Folder,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();
  const project = projectsData.find((p) => p.id === Number(id));
  const [isDark, setIsDark] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const projectImages = [
    project?.image,
    project?.secondimage,
    project?.thirdimage,
  ].filter(Boolean) as string[];

  useEffect(() => {
    if (project) {
      const ctx = gsap.context(() => {
        // Hero animation
        gsap.from(".hero-content", {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: "power3.out",
        });

        // Image reveal animation
        gsap.from(".image-reveal", {
          scale: 1.1,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".image-reveal",
            start: "top 80%",
          },
        });
      });
      return () => ctx.revert();
    }
  }, [project]);

  if (!project) {
    return (
      <div
        className={`min-h-screen  flex flex-col items-center justify-center ${
          isDark ? "bg-black text-white" : "bg-gray-50 text-gray-700"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
          <p className="text-lg mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push("/projects")}
            className={`px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2 ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <section
      className={`min-h-screen font-serif overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm ${
          isDark
            ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            : "bg-black text-white hover:bg-gray-700"
        }`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero Section */}
      <div className="relative h-screen flex items-end pb-20">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 transition-colors duration-300 ${
              isDark
                ? "bg-gradient-to-t from-black via-black/50 to-transparent"
                : "bg-gradient-to-t from-white via-white/50 to-transparent"
            }`}
          />
        </div>

        <div className="hero-content relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          <button
            onClick={() => router.push("/projects")}
            className={`mb-8 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2 backdrop-blur-sm ${
              isDark
                ? "bg-black text-white hover:bg-white/20"
                : "bg-black/10 text-black hover:bg-black/20"
            }`}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                  isDark ? "bg-black" : "bg-black/10"
                }`}
              >
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 min-w-[200px] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-3 ${
                  isDark
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                <ExternalLink size={20} />
                Live Preview
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 min-w-[200px] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-3 ${
                  isDark
                    ? "bg-black text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20"
                }`}
              >
                <Github size={20} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className={`fade-up p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-black border-blue-700 border-l-2 border-r-2"
                : "bg-gray-100"
            }`}
          >
            <Folder
              className={`mb-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}
              size={32}
            />
            <h3 className="text-sm font-medium uppercase opacity-70 mb-2">
              Category
            </h3>
            <p className="text-2xl font-bold">{project.category}</p>
          </div>

          <div
            className={`fade-up p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-black border-blue-700 border-l-2 border-r-2"
                : "bg-gray-100"
            }`}
          >
            <Calendar
              className={`mb-4 ${isDark ? "text-green-400" : "text-green-600"}`}
              size={32}
            />
            <h3 className="text-sm font-medium uppercase opacity-70 mb-2">
              Duration
            </h3>
            <p className="text-2xl font-bold">{project.duration}</p>
          </div>

          <div
            className={`fade-up p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-black border-blue-700 border-l-2 border-r-2"
                : "bg-gray-100"
            }`}
          >
            <Users
              className={`mb-4 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
              size={32}
            />
            <h3 className="text-sm font-medium uppercase opacity-70 mb-2">
              Team
            </h3>
            <p className="text-2xl font-bold">{project.team}</p>
          </div>

          <div
            className={`fade-up p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-black-800 border-blue-700 border-l-2 border-r-2"
                : "bg-gray-100"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full mb-4 ${
                project.status === "completed"
                  ? isDark
                    ? "bg-green-500"
                    : "bg-green-400"
                  : isDark
                  ? "bg-yellow-500"
                  : "bg-yellow-400"
              }`}
            />
            <h3 className="text-sm font-medium uppercase opacity-70 mb-2">
              Status
            </h3>
            <p className="text-2xl font-bold capitalize">{project.status}</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-20 pb-20">
        {/* About Section */}
        <section className="fade-up">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed opacity-80">
                {project.overview ||
                  `This project represents a perfect fusion of innovative design and cutting-edge technology. 
                  We focused on creating an immersive experience that not only captivates users but also delivers 
                  exceptional performance across all platforms.`}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div
                  className={`p-6 rounded-xl ${
                    isDark
                      ? "bg-black border-blue-700 border-r-4  "
                      : "bg-gray-100"
                  }`}
                >
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm opacity-70">
                    Pushing boundaries with modern solutions
                  </p>
                </div>
                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <p className="text-sm opacity-70">
                    Optimized for speed and efficiency
                  </p>
                </div>
              </div>
            </div>
            <div className="image-reveal">
              <img
                src={project.secondimage || project.image}
                alt="Project Overview"
                className={`w-full h-[500px] rounded-tl-[8rem] rounded-br-[8rem] object-cover  shadow-2xl ${
                  isDark ? "shadow-black" : "shadow-gray-200"
                }`}
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="fade-up">
          <div className="text-start mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Project Gallery
            </h2>
            <p className="text-lg opacity-70">
              A visual journey through the project&apos;s development
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative h-[600px] rounded-tl-[8rem] rounded-br-[8rem] overflow-hidden">
              <img
                src={projectImages[activeImage]}
                alt={`Gallery ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? "" : ""}`} />
            </div>

            {projectImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4">
                {projectImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden transition-all duration-300 ${
                      activeImage === index
                        ? isDark
                          ? "ring-2 ring-white"
                          : "ring-2 ring-black"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="fade-up">
          <div className="text-start mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Technology Stack
            </h2>
            <p className="text-lg opacity-70">
              Powered by modern tools and frameworks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl text-start border border-white transition-all duration-300 hover:scale-105 floating-element ${
                  isDark ? "bg-black" : "bg-gray-100"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center ${
                    isDark ? "bg-black" : "bg-black/10"
                  }`}
                >
                  <span className="text-lg font-bold">{tech.charAt(0)}</span>
                </div>
                <h3 className="font-semibold">{tech}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Process & Results */}
        <section className="fade-up">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black">
                Development Process
              </h2>
              <p className="text-lg leading-relaxed opacity-80">
                Our approach combined agile methodology with user-centered
                design principles. We iterated rapidly, tested thoroughly, and
                delivered a product that exceeds expectations in both form and
                function.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-blue-500" : "bg-blue-400"
                    }`}
                  >
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Research & Planning</h4>
                    <p className="text-sm opacity-70">
                      Comprehensive market analysis and user research
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-blue-500" : "bg-green-400"
                    }`}
                  >
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Design & Prototyping</h4>
                    <p className="text-sm opacity-70">
                      Interactive prototypes and user experience design
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-blue-500" : "bg-purple-400"
                    }`}
                  >
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Development</h4>
                    <p className="text-sm opacity-70">
                      Agile development with continue integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-reveal">
              <img
                src={project.thirdimage || project.image}
                alt="Development Process"
                className={`w-full h-[400px] object-cover  rounded-tl-[8rem] rounded-br-[8rem] shadow-2xl ${
                  isDark ? "shadow-gray-900" : "shadow-gray-200"
                }`}
              />
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="fade-up">
          <div
            className={`rounded-3xl p-12 text-center ${
              isDark ? "bg-black" : "bg-gray-100"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Impact & Results
            </h2>
            <p className="text-xl leading-relaxed opacity-80 max-w-4xl mx-auto mb-8">
              {project.results ||
                "The project delivered exceptional results, including improved user engagement, faster load times, and positive client feedback. Our solution set new standards for performance and user experience in its category."}
            </p>
            <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-black mb-2">98%</div>
                <div className="text-sm opacity-70">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-2">2.1s</div>
                <div className="text-sm opacity-70">Load Time</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-2">45%</div>
                <div className="text-sm opacity-70">Performance Gain</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="fade-up">
          <div
            className={`rounded-3xl p-12 ${
              isDark ? "bg-black" : "bg-gray-100"
            }`}
          >
            <div className="text-center mb-8">
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl ${
                  isDark ? "bg-white/10" : "bg-black/10"
                }`}
              >
                ❝
              </div>
              <p className="text-2xl italic leading-relaxed max-w-3xl mx-auto">
                {project.clientFeedback ||
                  "The team delivered beyond our expectations. Their attention to detail and commitment to quality resulted in a product that our users love. The project was completed on time and exceeded all our performance targets."}
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">
                {project.client || "Project Client"}
              </p>
              <p className="opacity-70">Client</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Figma,
  Code2,
  Cpu,
  Layers,
  Brush,
  Globe,
  MonitorSmartphone,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EcommerceToolsTech() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTool, setActiveTool] = useState(0);

  const tools = [
    {
      icon: <Figma className="w-7 h-7" />,
      title: "Figma",
      desc: "Collaborative UI design, prototyping, and design system creation with real-time collaboration features.",
      category: "Design Tools",
      color: "from-purple-500 to-pink-500",
      features: [
        "Prototyping",
        "Design Systems",
        "Real-time Collaboration",
        "Component Libraries",
      ],
    },
    {
      icon: <Brush className="w-7 h-7" />,
      title: "Adobe Creative Suite",
      desc: "Industry-standard tools for photo editing, vector graphics, and comprehensive visual design solutions.",
      category: "Design Tools",
      color: "from-orange-500 to-red-500",
      features: ["Photoshop", "Illustrator", "XD", "After Effects"],
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Next.js & React",
      desc: "Modern React framework for production-grade applications with server-side rendering and optimal performance.",
      category: "Development",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Server Components",
        "App Router",
        "API Routes",
        "Optimized Performance",
      ],
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Tailwind CSS",
      desc: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
      category: "Development",
      color: "from-teal-500 to-green-500",
      features: [
        "Utility-First",
        "JIT Compiler",
        "Responsive Design",
        "Customizable",
      ],
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "GSAP Animations",
      desc: "High-performance animation library for creating smooth, engaging user interactions and micro-interactions.",
      category: "Animation",
      color: "from-green-500 to-emerald-500",
      features: [
        "Smooth Animations",
        "Scroll Triggers",
        "Cross-browser",
        "Performance Optimized",
      ],
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Headless CMS",
      desc: "Flexible content management systems including WordPress, Sanity, and Contentful for dynamic content.",
      category: "Development",
      color: "from-indigo-500 to-blue-500",
      features: ["Contentful", "Sanity", "WordPress", "Strapi"],
    },
    {
      icon: <MonitorSmartphone className="w-7 h-7" />,
      title: "Responsive Design",
      desc: "Mobile-first approach ensuring perfect experiences across all devices and screen sizes.",
      category: "Design Principles",
      color: "from-violet-500 to-purple-500",
      features: [
        "Mobile First",
        "Fluid Layouts",
        "Cross-device Testing",
        "Adaptive Images",
      ],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Performance Optimization",
      desc: "Advanced techniques for lightning-fast loading times and optimal Core Web Vitals scores.",
      category: "Development",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Lazy Loading",
        "Image Optimization",
        "Code Splitting",
        "Caching Strategies",
      ],
    },
  ];

  const categories = [...new Set(tools.map((tool) => tool.category))];

  useEffect(() => {
    if (sectionRef.current) {
      const cards = cardRefs.current.filter(Boolean);

      gsap.fromTo(
        cards,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      id="tools-tech"
      className="bg-white text-gray-900 py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Left Aligned */}
        <div className="mb-16">
          <div className="flex items-center gap-2 ">
            <div className="inline-flex mb-10 text-black/60 items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-[#0049ae] rounded-full"></span>
              TOOLS & TECHNOLOGIES
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Tools &<br />
              Technologies
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              We leverage a carefully curated stack of modern tools and
              frameworks to build exceptional digital experiences. Each
              technology is chosen for its performance, scalability, and ability
              to deliver outstanding results.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Tools List - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  ref={(el) => addToRefs(el, index)}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveTool(index)}
                >
                  <div
                    className={`bg-white border-2 rounded-2xl p-6 transition-all duration-500 h-full ${
                      activeTool === index
                        ? "border-blue-200 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                      >
                        {tool.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3
                            className={`text-xl font-bold transition-colors ${
                              activeTool === index
                                ? "text-gray-900"
                                : "text-gray-800"
                            }`}
                          >
                            {tool.title}
                          </h3>
                          {activeTool === index && (
                            <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                          )}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {tool.desc}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {tool.features
                            .slice(0, 2)
                            .map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          {tool.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-medium">
                              +{tool.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Active Tool Details */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tools[activeTool].color} flex items-center justify-center text-white shadow-lg mb-4`}
                >
                  {tools[activeTool].icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tools[activeTool].title}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {tools[activeTool].desc}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Key Features:
                  </h4>
                  <div className="space-y-2">
                    {tools[activeTool].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tools[activeTool].color}`}
                        ></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white hidden lg:block rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">
                  Technology Categories
                </h4>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700">{category}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {
                          tools.filter((tool) => tool.category === category)
                            .length
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-200 pt-16">
          {[
            { number: "50+", label: "Projects Completed", suffix: "" },
            { number: "99.9%", label: "Uptime Record", suffix: "" },
            { number: "2.5", label: "Seconds Average", suffix: "Load Time" },
            { number: "100%", label: "Client Satisfaction", suffix: "" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                {stat.number}
                {stat.suffix && <span className="text-lg"> {stat.suffix}</span>}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

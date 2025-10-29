"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FacebookIcon,
  FrameIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  ArrowUpIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "#testimonials" },
      { title: "Integration", href: "/" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "/faqs" },
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Services", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Changelog", href: "/changelog" },
      { title: "Brand", href: "/brand" },
      { title: "Help", href: "/help" },
    ],
  },
  {
    label: "Connect With Us",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".footer-animate").forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate the scroll-to-top button
      gsap.fromTo(
        ".scroll-top-btn",
        {
          scale: 0,
          rotation: -180,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full  overflow-hidden bg-gradient-to-br from-blue-900 via-slate-950 to-slate-900"
    >
      {/* Background SVG Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="grid-grad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="url(#grid-grad)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Orbs */}
      <div className="absolute -top-20 left-1/4 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Top subtle line with gradient */}
        <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Brand & Description */}
          <div className="footer-animate space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <FrameIcon className="size-10 text-white" />
                <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur-sm" />
              </div>
              <span className="text-xl font-bold text-white">
                Invent <span className="text-blue-500">OG</span>
              </span>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-gray-300">
              Building the future of digital experiences with innovative
              solutions that empower creators and businesses worldwide.
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <label className="mb-3 block text-sm font-medium text-gray-300">
                Stay updated with our newsletter
              </label>
              <div className="flex max-w-sm gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 font-medium text-white transition-all hover:from-blue-700 hover:to-blue-400 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Asme. All rights reserved.
            </p>
          </div>

          {/* Right Column - Links Grid */}
          <div className="footer-animate grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {footerLinks.map((section, index) => (
              <div key={section.label} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-gray-400 transition-all duration-300 hover:text-white"
                      >
                        {link.icon ? (
                          <>
                            <link.icon className="me-3 size-4 transition-transform group-hover:scale-110" />
                            <span className="text-sm">{link.title}</span>
                          </>
                        ) : (
                          <span className="text-sm transition-all group-hover:translate-x-1">
                            {link.title}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-animate mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Trusted by 10,000+ companies worldwide</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Additional Social Links */}
            <div className="flex gap-4">
              {footerLinks[3].links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-white/10 bg-white/5 p-2 transition-all hover:bg-white/10 hover:shadow-lg"
                >
                  {link.icon && (
                    <link.icon className="size-5 text-gray-400 transition-all group-hover:scale-110 group-hover:text-white" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-top-btn group fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 p-3 text-white shadow-2xl transition-all hover:from-blue-700 hover:to-blue-400 hover:shadow-3xl"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="size-5 transition-transform group-hover:-translate-y-0.5" />
      </button>

      {/* Decorative Bottom SVG Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-12 w-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-white/5"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-white/10"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white/15"
          ></path>
        </svg>
      </div>
    </footer>
  );
}

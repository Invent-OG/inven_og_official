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
              <img
                src="/asstes/logo/og logo b.png"
                alt="Logo"
                className="w-32 h-6 object-contain"
              />
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
    </footer>
  );
}

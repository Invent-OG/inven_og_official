"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroimg from "@/public/asstes/homepageimages/hero2.jpg";

gsap.registerPlugin(ScrollTrigger);

function HeroHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      // CTA buttons animation
      gsap.fromTo(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // Floating elements animation
      gsap.fromTo(
        ".floating-element",
        {
          y: 20,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );

      // Background elements animation
      gsap.fromTo(
        ".bg-shape",
        {
          scale: 0,
          rotation: -45,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.1,
        }
      );

      // Continuous floating animation for elements
      gsap.to(".float-animation", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // SVG Icons with gradient
  const GradientIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3559E0" />
          <stop offset="100%" stopColor="#2a47b3" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CodeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3559E0" />
          <stop offset="100%" stopColor="#2a47b3" />
        </linearGradient>
      </defs>
      <path
        d="M16 18L22 12L16 6"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6L2 12L8 18"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CloudIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3559E0" />
          <stop offset="100%" stopColor="#2a47b3" />
        </linearGradient>
      </defs>
      <path
        d="M18 10H16.74C16.365 8.551 15.592 7.235 14.5 6.2C13.408 5.165 12.038 4.453 10.567 4.144C9.095 3.835 7.579 3.941 6.168 4.451C4.757 4.96 3.508 5.853 2.57 7.028C1.632 8.204 1.04 9.615 0.86 11.105C0.68 12.595 0.92 14.106 1.556 15.466C2.192 16.826 3.2 17.982 4.47 18.8C5.74 19.618 7.222 20.066 8.74 20.09H18C19.591 20.09 21.117 19.458 22.242 18.333C23.367 17.208 24 15.682 24 14.09C24 12.498 23.367 10.972 22.242 9.847C21.117 8.722 19.591 8.09 18 8.09V10Z"
        fill="url(#gradient3)"
      />
    </svg>
  );

  const ShieldIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3559E0" />
          <stop offset="100%" stopColor="#2a47b3" />
        </linearGradient>
      </defs>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="url(#gradient4)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const RocketIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3559E0" />
          <stop offset="100%" stopColor="#2a47b3" />
        </linearGradient>
      </defs>
      <path
        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
        stroke="url(#gradient5)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="url(#gradient5)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const BrainIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3559E0" />
          <stop offset="100%" stopColor="#2a47b3" />
        </linearGradient>
      </defs>
      <path
        d="M12 4C13.5 4 15 5.5 15 7C15 8.5 13.5 10 12 10C10.5 10 9 8.5 9 7C9 5.5 10.5 4 12 4Z"
        stroke="url(#gradient6)"
        strokeWidth="2"
      />
      <path
        d="M8 16C8 16 9.5 14 12 14C14.5 14 16 16 16 16"
        stroke="url(#gradient6)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 18H12.01"
        stroke="url(#gradient6)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroimg.src})`,
        }}
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="bg-shape absolute -top-20 -left-20 w-72 h-72 bg-[#3559E0]/10 rounded-full opacity-40 blur-3xl"></div>
        <div className="bg-shape absolute -bottom-20 -right-20 w-96 h-96 bg-[#3559E0]/5 rounded-full opacity-30 blur-3xl"></div>
        <div className="bg-shape absolute top-1/2 left-1/4 w-48 h-48 bg-[#3559E0]/10 rounded-full opacity-50 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-start">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-4xl  pr-32 md:text-6xl lg:text-7xl font-extrabold text-[#171817] mb-6 leading-tight  tracking-tight"
          >
            Turning Ideas <br /> Into Reality
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl font-medium  md:text-base text-black/80 mx-auto mb-12 leading-relaxed"
          >
            We build cutting-edge software solutions that drive growth, <br />{" "}
            enhance efficiency, and transform businesses for the digital age.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-start  items-start"
          >
            <button className="group bg-gradient-to-r from-[#3559E0] to-[#2a47b3] hover:from-[#2a47b3] hover:to-[#1f3599] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3">
              Start Your Project
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icons with Gradient */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        {[
          { Icon: CodeIcon, top: "20%", left: "10%" },
          { Icon: CloudIcon, top: "30%", right: "15%" },
          { Icon: RocketIcon, bottom: "25%", left: "12%" },
          { Icon: BrainIcon, bottom: "35%", right: "10%" },
          { Icon: GradientIcon, top: "40%", left: "5%" },
          { Icon: ShieldIcon, top: "60%", right: "8%" },
        ].map((item, index) => (
          <div
            key={index}
            className="floating-element float-animation absolute opacity-30"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
          >
            <item.Icon className="w-8 h-8" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroHome;

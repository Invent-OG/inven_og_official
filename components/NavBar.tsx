"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react"; // Added for dropdown icon
import { ScrollTrigger } from "gsap/ScrollTrigger";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const spanRefs = useRef<HTMLSpanElement[]>([]);
  const router = useRouter();

  gsap.registerPlugin(ScrollTrigger);

  const logoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = logoRef.current;

    if (!el) return;

    // Animate color inversion when background changes
    gsap.to(el, {
      color: "#000", // black text when white bg
      scrollTrigger: {
        trigger: "#light-section", // 👈 adjust to your white section ID or class
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => gsap.to(el, { color: "#000", duration: 0.5 }),
        onLeaveBack: () => gsap.to(el, { color: "#fff", duration: 0.5 }),
      },
    });
  }, []);

  const toggleHamburger = () => {
    setIsMenuOpen((prev) => !prev);

    if (!isMenuOpen) {
      gsap.to(spanRefs.current[0], {
        y: 6,
        rotation: 45,
        transformOrigin: "center",
        duration: 0.3,
      });
      gsap.to(spanRefs.current[1], {
        y: -6,
        rotation: -45,
        transformOrigin: "center",
        duration: 0.3,
      });
    } else {
      gsap.to(spanRefs.current[0], { y: 0, rotation: 0, duration: 0.3 });
      gsap.to(spanRefs.current[1], { y: 0, rotation: 0, duration: 0.3 });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      if (window.innerWidth < 768) {
        tl.fromTo(
          ".mobile-panel",
          { y: "-100%" },
          { y: "0%", duration: 0.8, ease: "power4.inOut" }
        );
      } else {
        tl.fromTo(
          ".left-panel",
          { y: "-100%" },
          { y: "0%", duration: 0.8, ease: "power4.inOut" }
        );
        tl.fromTo(
          ".right-panel",
          { y: "100%" },
          { y: "0%", duration: 0.8, ease: "power4.inOut" },
          "<"
        );
      }

      tl.to(
        ".menu-item",
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );

      tl.to(
        ".menu-title span",
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );
    } else {
      tl.to(".menu-item", {
        x: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        stagger: { each: 0.05, from: "end" },
      });
      tl.to(
        ".menu-title span",
        {
          x: (i) => (i % 2 === 0 ? -50 : 50),
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        },
        "<"
      );

      if (window.innerWidth < 768) {
        tl.to(".mobile-panel", {
          y: "-100%",
          duration: 0.6,
          ease: "power4.inOut",
        });
      } else {
        tl.to(".left-panel", {
          y: "-100%",
          duration: 0.6,
          ease: "power4.inOut",
        });
        tl.to(
          ".right-panel",
          { y: "100%", duration: 0.6, ease: "power4.inOut" },
          "<"
        );
      }
    }
  }, [isMenuOpen]);

  // Submenu animation
  const submenuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (submenuRef.current) {
      gsap.to(submenuRef.current, {
        height: showSubMenu ? "auto" : 0,
        opacity: showSubMenu ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [showSubMenu]);

  return (
    <div className="w-full z-50 text-white font-bold tracking-widest overflow-x-hidden">
      {/* Header */}
      <header
        className={`z-50 flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full transition-colors duration-500 ${
          isMenuOpen ? "bg-transparent" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div
          className={`flex items-center gap-3 transition-opacity duration-500 ${
            isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img
            onClick={() => router.push("/")}
            src="/asstes/logo/OG logo black.png"
            alt="Logo"
            className="w-32 h-6 object-contain cursor-pointer"
          />
        </div>

        {/* Hamburger Button */}
        <div
          className="relative w-12 h-12 cursor-pointer z-[60] flex flex-col justify-center items-center"
          onClick={toggleHamburger}
        >
          {[0, 1].map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) spanRefs.current[i] = el;
              }}
              className="block w-5 h-0.5 my-1 bg-white transition-all duration-300"
            ></span>
          ))}
          <span className="absolute w-16 h-16 rounded-full bg-black opacity-70 animate-ping -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
      </header>

      {/* Menu Overlay */}
      <nav
        className={`fixed inset-0 z-40 overflow-hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Panels */}
        <div className="hidden md:block">
          <div className="left-panel absolute left-0 top-0 w-1/2 h-full bg-[#ffffff] -translate-y-full" />
          <div className="right-panel absolute left-1/2 top-0 w-1/2 h-full bg-[#0049ae] translate-y-full" />
        </div>

        {/* Mobile */}
        <div className="mobile-panel md:hidden absolute top-0 left-0 w-full h-full bg-[#d6d5d5] -translate-y-full" />

        {/* Menu items */}
        <ul className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start md:pl-[10%] space-y-6 z-50">
          {[
            { name: "Work", href: "/work" },
            { name: "About", href: "/about" },
            { name: "Services", href: "" },
            { name: "Contact", href: "/contact" },
          ].map((item, i) => (
            <li
              key={i}
              className="menu-item text-[10vw] md:text-[8vmin] font-bold cursor-pointer text-black relative group"
              style={{
                opacity: 0,
                transform: "translateY(50px) rotateX(15deg)",
              }}
              onMouseEnter={() =>
                item.name === "Services" &&
                window.innerWidth >= 768 &&
                setShowSubMenu(true)
              }
              onMouseLeave={() =>
                item.name === "Services" &&
                window.innerWidth >= 768 &&
                setShowSubMenu(false)
              }
            >
              <div className="flex flex-col items-center md:items-start w-full">
                <div className="flex justify-center md:justify-start items-center w-full">
                  {item.name === "Services" ? (
                    <>
                      {/* Services - behaves differently on mobile vs desktop */}
                      <span
                        className=" hover:text-gray-600 transition-transform duration-500 cursor-pointer"
                        onClick={(e) => {
                          if (window.innerWidth < 768) {
                            e.preventDefault();
                            setShowSubMenu((prev) => !prev);
                          } else {
                            router.push(item.href); // Desktop click navigates
                            setIsMenuOpen(false);
                          }
                        }}
                      >
                        {item.name}
                      </span>

                      {/* Dropdown icon (mobile only) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowSubMenu((prev) => !prev);
                        }}
                        className="md:hidden ml-2 text-black"
                      >
                        {showSubMenu ? (
                          <ChevronUp size={28} />
                        ) : (
                          <ChevronDown size={28} />
                        )}
                      </button>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block hover:text-gray-600 transition-transform duration-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
                <span className="md:block hidden w-full  bg-black opacity-50"></span>
              </div>

              {/* Submenu for Services */}
              {showSubMenu && item.name === "Services" && (
                <ul
                  ref={submenuRef}
                  className="overflow-hidden transform duration-500 md:absolute md:left-50 md:-top-20  bg-white text-black text-[5vw] md:text-[2.5vmin] font-medium rounded-lg shadow-lg w-[80vw] md:w-[250px] space-y-3 py-3 md:py-4 px-6 mt-2 md:mt-0"
                >
                  {[
                    { name: "Web Design", href: "/services/webdesign" },
                    { name: "Development", href: "/services/development" },
                    {
                      name: "Digital Marketing",
                      href: "/services/digital-marketing",
                    },
                    {
                      name: "E-commerce Solutions",
                      href: "/services/ecommerce",
                    },
                    { name: "SaaS Development", href: "/services/saas" },
                    { name: "SEO Optimization", href: "/services/seo" },
                  ].map((sub, j) => (
                    <li key={j}>
                      <Link
                        href={sub.href}
                        className="hover:text-blue-600 transition-colors duration-300 block text-start md:text-left"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Title */}
        <div className="hidden md:block menu-title absolute bottom-0 right-0 text-[12vw] font-black text-[#ffffff] leading-none z-50">
          {/* 🔵 SVG Background */}
          <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center scale-250">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29700 21000"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="id0"
                  gradientUnits="userSpaceOnUse"
                  x1="11590.3"
                  y1="3913.46"
                  x2="18109.7"
                  y2="17086.5"
                >
                  <stop offset="0" stopColor="#536FFE" />
                  <stop offset="0.541176" stopColor="#39458F" />
                  <stop offset="1" stopColor="#1F1B20" />
                </linearGradient>
              </defs>
              <path
                fill="url(#id0)"
                d="M14850 17834c52,-4032 3366,-7314 7410,-7314 -4057,0 -7380,-3304 -7410,-7354 -30,4050 -3353,7354 -7410,7354 4044,0 7358,3282 7410,7314z"
              />
            </svg>
          </div>

          {/* 🧠 Text Layer */}
          <span className="block opacity-0 -translate-x-12 relative z-10">
            CODE
          </span>
          <span className="block opacity-0 translate-x-12 relative z-10">
            LIKE
          </span>
          <span className="block opacity-0 -translate-x-12 relative z-10">
            AN OG
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

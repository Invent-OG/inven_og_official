"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

function Rated() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const wavesRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the containers
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate numbers and waves
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const numberElement = numbersRef.current[index];
        const waveElement = wavesRef.current[index];
        // eslint-disable-next-line react-hooks/immutability
        const targetNumber = getTargetNumber(stats[index].number);

        if (numberElement && waveElement) {
          // Number counter animation
          gsap.fromTo(
            numberElement,
            { textContent: 0 },
            {
              textContent: targetNumber,
              duration: 2.5,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
              },
            }
          );

          // Wave fill animation with wave motion
          const wavePath = waveElement.querySelector("path");
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
              },
            })
            .to(waveElement, {
              y: 0,
              duration: 2,
              ease: "power2.out",
            })
            .to(
              wavePath,
              {
                attr: { d: "M0,10 C30,5 70,15 100,10 L100,20 L0,20 Z" },
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              },
              "-=1.5"
            );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out", // smoothness
      once: false, // whether animation should happen only once
      offset: 100, // how far from top before trigger
    });
  }, []);

  const getTargetNumber = (numberStr: string) => {
    if (numberStr.includes("K")) return parseInt(numberStr) * 1000;
    if (numberStr.includes("%")) return parseInt(numberStr);
    return parseInt(numberStr);
  };

  const stats = [
    { number: "25", label: "Years Experience", color: "bg-gray-100" },
    { number: "97%", label: "Retention Rate", color: "bg-gray-100" },
    { number: "8K", label: "Projects Completed", color: "bg-gray-100" },
    { number: "19K", label: "Happy Clients", color: "bg-gray-100" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white  py-24 flex flex-col items-center justify-center"
    >
      <div
        data-aos="fade-up"
        className="max-w-6xl w-full px-5 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
      >
        {stats.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="flex flex-col items-center"
          >
            {/* Circular Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
              {/* Background Circle */}
              <div
                ref={(el) => {
                  circlesRef.current[index] = el;
                }}
                className="absolute inset-0 rounded-full border-4 border-gray-200"
              />

              {/* Wave Fill Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  ref={(el) => {
                    wavesRef.current[index] = el;
                  }}
                  className={`absolute bottom-0 left-0 right-0 ${item.color} origin-bottom`}
                  style={{ height: "100%", transform: "translateY(100%)" }}
                >
                  {/* Animated Wave SVG */}
                  <svg
                    className="absolute bottom-0 w-full text-blue-700 opacity-80"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    style={{ height: "60px" }}
                  >
                    <path
                      d="M0,10 C20,15 50,5 100,10 L100,20 L0,20 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2
                  ref={(el) => {
                    numbersRef.current[index] = el;
                  }}
                  className="text-3xl md:text-4xl font-extrabold text-black relative z-10"
                >
                  0
                </h2>
              </div>
            </div>

            <p className="text-neutral-900 text-sm md:text-base font-normal uppercase tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rated;

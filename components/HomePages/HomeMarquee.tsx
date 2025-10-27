"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomeMarquee() {
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const marqueeText = [
    "Since 1999",
    "Creativity",
    "Vision",
    "Innovation",
    "Excellence",
  ];

  useEffect(() => {
    const marqueeElement = marqueeInnerRef.current;
    if (!marqueeElement) return;

    const width = marqueeElement.scrollWidth / 2;
    tweenRef.current = gsap.to(marqueeElement, {
      x: -width,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <div
      className="w-full overflow-hidden font-serif bg-white py-8 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={marqueeInnerRef} className="flex whitespace-nowrap">
        {[...marqueeText, ...marqueeText].map((word, index) => (
          <span
            key={index}
            className={`
              mx-6 text-7xl font-extrabold tracking-wide
              ${
                index % 2 === 0
                  ? "text-[#4f504f]"
                  : "text-transparent [-webkit-text-stroke:1px_#4f504f]"
              }
            `}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

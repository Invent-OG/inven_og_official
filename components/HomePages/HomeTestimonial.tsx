"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const testimonials = [
  {
    name: "Jenny Wilson",
    position: "Position, Company name",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
    image: "https://images.pexels.com/photos/6140203/pexels-photo-6140203.jpeg",
  },
  {
    name: "Guy Hawkins",
    position: "Position, Company name",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
    image: "https://images.pexels.com/photos/6940512/pexels-photo-6940512.jpeg",
  },
  {
    name: "Albert Flores",
    position: "Position, Company name",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
    image: "https://images.pexels.com/photos/7915359/pexels-photo-7915359.jpeg",
  },
  {
    name: "Cameron Williamson",
    position: "Position, Company name",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
    image:
      "https://images.pexels.com/photos/10983885/pexels-photo-10983885.jpeg",
  },
  {
    name: "Kristin Watson",
    position: "Position, Company name",
    text: "Amazing support and easy-to-use template. My team loved it!",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    name: "Albert Flores",
    position: "Position, Company name",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
    image: "https://images.pexels.com/photos/7915359/pexels-photo-7915359.jpeg",
  },
  {
    name: "Jenny Wilson",
    position: "Position, Company name",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
    image: "https://images.pexels.com/photos/6140203/pexels-photo-6140203.jpeg",
  },
];

const clientAvatars = [
  "https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg",
  "https://images.pexels.com/photos/6140203/pexels-photo-6140203.jpeg",
  "https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg",
  "https://images.pexels.com/photos/6140203/pexels-photo-6140203.jpeg",
  "https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg",
];

export default function HomeTestimonial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleStart, setVisibleStart] = useState(0);

  // Carousel effect: shift cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStart((prev) =>
        prev + 1 + 3 >= testimonials.length ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate cards on mount
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".testimonial-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <section className="testimonial-section font-serif py-16 md:py-20 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-start">
        <div className="inline-flex items-center border border-gray-400 rounded-full p-2 gap-2 mb-4 md:mb-6">
          <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
          <span className="text-black/70 uppercase text-xs md:text-sm font-medium">
            Testimonial
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-snug">
          What <span className="font-bold">startups</span> say about us
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="max-w-6xl mx-auto px-6 mt-10 overflow-hidden"
        ref={containerRef}
      >
        <div
          className="flex gap-6 transition-transform duration-1000"
          style={{ transform: `translateX(-${visibleStart * (100 / 4)}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative testimonial-card flex-shrink-0 w-[100%] sm:w-[50%] md:w-[25%] lg:w-[25%] bg-white border border-gray-200 rounded-xl shadow-sm transition-transform duration-500 hover:-translate-y-3 group"
            >
              {/* Card Content */}
              <div className="p-6 relative z-10">
                <p className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-base text-gray-900">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500">{t.position}</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 px-4">
                <div className="text-black text-2xl md:text-3xl font-bold">
                  4.8
                </div>
                <p className="text-gray-600 text-xs font-medium">
                  Client Review
                </p>

                <div className="flex items-center justify-center -space-x-3 mt-4 mb-2">
                  {clientAvatars.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      alt="client"
                      width={30}
                      height={30}
                      className="rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

                <p className="text-xs text-gray-500 font-medium text-center">
                  30k+ of our trusted clients overall with better experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

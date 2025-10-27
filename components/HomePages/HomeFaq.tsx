"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of digital services including web design, development, branding, and digital marketing solutions tailored to your needs.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the scope and complexity of your project. We provide custom quotes after understanding your requirements in detail.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on the deliverables, but typically range from 2 to 6 weeks depending on size and complexity.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide post-launch maintenance and continuous support plans to ensure your project remains up-to-date and optimized.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across various industries including technology, healthcare, education, e-commerce, and more.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book an intro call with us, and we'll guide you through the next steps to kickstart your project.",
  },
];

export default function HomeFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    faqs.forEach((_, i) => {
      const content = faqRefs.current[i];
      if (content) gsap.set(content, { height: 0, opacity: 0 });
    });
  }, []);

  const toggleFAQ = (index: number) => {
    const content = faqRefs.current[index];

    if (activeIndex === index) {
      // close
      if (content) {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
      setActiveIndex(null);
    } else {
      // close previous
      if (activeIndex !== null) {
        const prev = faqRefs.current[activeIndex];
        if (prev) {
          gsap.to(prev, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        }
      }
      // open current
      if (content) {
        gsap.to(content, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full font-serif bg-white py-20 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
      {/* Left Section */}
      <div className="md:w-1/3 px-6">
        <div className="inline-flex items-center gap-2 mb-4 bg-white border rounded-full px-4 py-1 shadow-sm">
          <div className="w-2.5 h-2.5 bg-blue-700 rounded-full"></div>
          <span className="text-sm font-medium text-gray-600">FAQ’S</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-semibold text-gray-800 leading-tight tracking-tight">
          Frequently <br /> Asked <br /> Questions
        </h2>
        <button className="mt-10 inline-flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2 hover:bg-gray-100 transition-all text-gray-700 font-medium shadow-sm">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="icon"
            className="w-6 h-6 rounded-full"
          />
          Book an intro call
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 flex flex-col divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              {activeIndex === index ? (
                <Minus className="w-6 h-6 text-gray-700" />
              ) : (
                <Plus className="w-6 h-6 text-gray-700" />
              )}
            </button>

            <div
              ref={(el) => {
                faqRefs.current[index] = el;
              }}
              className="overflow-hidden"
            >
              <p className="text-gray-500 border-blue-700 border-l-4 px-4 mt-3 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

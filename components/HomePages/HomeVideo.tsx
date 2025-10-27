"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomeVideo() {
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure the body does not scroll horizontally
    document.body.style.overflowX = "hidden";

    // Auto play video when component mounts
    videoElementRef.current?.play().catch(console.error);

    const ctx = gsap.context(() => {
      // Initial zoom animation
      gsap.fromTo(
        videoRef.current,
        { scale: 0.5, opacity: 0.9 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Fullscreen zoom + pin effect
      gsap.to(videoRef.current, {
        scale: 1.7,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "center center",
          end: "+=800",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, videoRef);

    return () => {
      ctx.revert();
      document.body.style.overflowX = "auto"; // Reset on unmount
    };
  }, []);

  const handleVideoClick = () => {
    videoElementRef.current?.play().catch(console.error);
  };

  return (
    <section className="relative bg-white w-full overflow-hidden">
      <div
        ref={videoRef}
        className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] overflow-hidden bg-white cursor-pointer"
        onClick={handleVideoClick}
      >
        <video
          ref={videoElementRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source
            src="https://innovatex-react-next-js-template.vercel.app/assets/images/promo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:hidden">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeVideo;

// "use client";

// import { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { gsap } from "gsap";

// export default function PageTransition() {
//   const portalRef = useRef<HTMLDivElement>(null);
//   const ring1Ref = useRef<HTMLDivElement>(null);
//   const ring2Ref = useRef<HTMLDivElement>(null);
//   const companyNameRef = useRef<HTMLDivElement>(null);
//   const taglineRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       if (
//         portalRef.current &&
//         ring1Ref.current &&
//         ring2Ref.current &&
//         companyNameRef.current
//       ) {
//         const tl = gsap.timeline();

//         // Main portal animation
//         tl.to(portalRef.current, {
//           rotationY: 720,
//           scale: 1.5,
//           duration: 1.2,
//           ease: "power2.inOut",
//           transformPerspective: 1500,
//         });

//         // Outer rings animation
//         tl.to(
//           ring1Ref.current,
//           {
//             rotationX: 360,
//             scale: 2,
//             duration: 1,
//             ease: "power2.inOut",
//           },
//           "-=1.2"
//         );

//         tl.to(
//           ring2Ref.current,
//           {
//             rotationY: -360,
//             scale: 2.5,
//             duration: 1,
//             ease: "power2.inOut",
//           },
//           "-=1.2"
//         );

//         // Company name animation - appears during portal expansion
//         tl.fromTo(
//           companyNameRef.current,
//           { scale: 0, opacity: 0, rotationY: -90 },
//           {
//             scale: 1,
//             opacity: 1,
//             rotationY: 0,
//             duration: 0.8,
//             ease: "back.out(1.7)",
//             transformPerspective: 1000,
//           },
//           "-=0.8"
//         );

//         // Tagline animation
//         tl.fromTo(
//           taglineRef.current,
//           { y: 20, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.6,
//             ease: "power2.out",
//           },
//           "-=0.4"
//         );

//         // Final collapse - everything disappears together
//         tl.to(
//           [
//             portalRef.current,
//             ring1Ref.current,
//             ring2Ref.current,
//             companyNameRef.current,
//             taglineRef.current,
//           ],
//           {
//             scale: 0,
//             opacity: 0,
//             duration: 0.5,
//             ease: "power2.in",
//           }
//         );
//       }
//     });

//     return () => ctx.revert();
//   }, [pathname]);

//   return (
//     <>
//       {/* Portal Elements */}
//       <div
//         ref={portalRef}
//         className="fixed  w-32 h-32 bg-gradient-to-br from-blue-700 via-blue-700 to-blue-900 rounded-full z-50 pointer-events-none"
//         style={{
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />
//       <div
//         ref={ring1Ref}
//         className="fixed w-40 h-40 border-1 border-blue-500 rounded-full z-50 pointer-events-none"
//         style={{
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />
//       <div
//         ref={ring2Ref}
//         className="fixed w-48 h-48 border-1 border-blue-400 rounded-full z-50 pointer-events-none"
//         style={{
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />

//       {/* Company Name */}
//       <div
//         ref={companyNameRef}
//         className="fixed top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none text-center"
//         style={{ opacity: 0 }}
//       >
//         <h1 className="text-3xl md:text-3xl font-bold text-white drop-shadow-lg">
//           <span className="text-white">INVENT</span>
//           <span className="text-white ml-2">OG</span>
//         </h1>

//         {/* Tagline */}
//         <div
//           ref={taglineRef}
//           className="text-blue-200 text-sm md:text-base font-light mt-2 tracking-wide opacity-0"
//         >
//           Innovation Portal
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransitionOneLayer() {
  const panelRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (wrapperRef.current)
            wrapperRef.current.style.pointerEvents = "none";
        },
      });

      if (wrapperRef.current) wrapperRef.current.style.pointerEvents = "auto";

      // Initial states
      gsap.set(panelRef.current, { xPercent: -100 });
      gsap.set([logoRef.current, glowRef.current], { opacity: 0, scale: 0.8 });

      // Panel slides in (cover page)
      tl.to(panelRef.current, {
        xPercent: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });

      // Glow pulse & logo appear
      tl.to(
        glowRef.current,
        {
          opacity: 0.6,
          scale: 1.4,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.6, rotationY: -45 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

      // Pause briefly, then slide out (reveal new page)
      tl.to(
        panelRef.current,
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power3.inOut",
          delay: 0.6,
        },
        "+=0.3"
      );

      // Fade out glow and logo
      tl.to(
        [glowRef.current, logoRef.current],
        {
          opacity: 0,
          scale: 0.6,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
    >
      {/* Sliding Panel */}
      <div
        ref={panelRef}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-800"
      ></div>

      {/* Glow Pulse */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl"
      ></div>

      {/* Logo */}
      <div
        ref={logoRef}
        className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white"
      >
        <h1 className="text-4xl  font-bold tracking-wider">
          <img
            src="/asstes/logo/og logo b.png"
            alt="Logo"
            className="w-42 h-6 object-contain"
          />
        </h1>
        <p className="text-blue-300 text-sm font-light mt-1">
          Elevate the Future
        </p>
      </div>
    </div>
  );
}

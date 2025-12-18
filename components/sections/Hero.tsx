"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import { smoothScrollTo } from "@/lib/utils";
import Silk from "@/components/ui/Silk";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <Silk 
          color="#003E7D" 
          speed={5.5} 
          scale={1.2} 
          noiseIntensity={0.5} 
        />
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-4 sm:mb-6 leading-tight px-2"
        >
          Transforme suas Unhas
          <br />
          <span className="text-pink-lighter">em Obras de Arte</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
        >
          Design de unhas profissional com técnicas modernas e delicadas.
          Cada detalhe é pensado para realçar sua beleza única.
        </p>

        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            size="lg"
            onClick={() => smoothScrollTo("contact")}
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-pink-accent hover:bg-pink-dark border-none"
          >
            Agendar Agora
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => smoothScrollTo("services-detailed")}
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-white border-white hover:bg-white/10"
          >
            Conhecer Serviços
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


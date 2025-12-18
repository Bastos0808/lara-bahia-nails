"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, scrollReveal } from "@/lib/gsap";
import Card from "@/components/ui/Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Fiquei encantada com o trabalho! As unhas ficaram perfeitas e o atendimento foi impecável. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Profissionalismo e criatividade em cada detalhe. Minhas unhas nunca estiveram tão bonitas. Já marquei a próxima sessão!",
      rating: 5,
    },
    {
      name: "Juliana Santos",
      text: "A Lara é uma artista! Transformou minhas unhas em verdadeiras obras de arte. O design ficou exatamente como eu queria.",
      rating: 5,
    },
    {
      name: "Fernanda Oliveira",
      text: "Atendimento personalizado e atenção aos detalhes. Cada visita é uma experiência única. Amo o trabalho da Lara!",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        scrollReveal(titleRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 bg-[#FFFAFF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-blue-dark mb-3 sm:mb-4"
          >
            O Que Minhas Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-dark/70 max-w-2xl mx-auto px-4">
            A satisfação das minhas clientes é a minha maior recompensa.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="min-h-[250px] sm:min-h-[300px] flex flex-col justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-blue-dark/80 mb-6 italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <p className="text-blue-dark font-semibold">
                — {testimonials[currentIndex].name}
              </p>
            </div>
          </Card>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-12 md:-translate-x-16 bg-white/80 backdrop-blur-md rounded-full p-2 sm:p-3 shadow-lg hover:bg-pink-lighter transition-colors z-20"
            aria-label="Depoimento anterior"
          >
            <FiChevronLeft className="text-blue-dark text-xl sm:text-2xl" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-12 md:translate-x-16 bg-white/80 backdrop-blur-md rounded-full p-2 sm:p-3 shadow-lg hover:bg-pink-lighter transition-colors z-20"
            aria-label="Próximo depoimento"
          >
            <FiChevronRight className="text-blue-dark text-xl sm:text-2xl" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-pink-accent w-8"
                    : "bg-blue-dark/30"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


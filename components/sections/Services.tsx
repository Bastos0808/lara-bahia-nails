"use client";

import React, { useEffect, useRef } from "react";
import { gsap, scrollReveal, staggerFadeIn } from "@/lib/gsap";
import Card from "@/components/ui/Card";
import { FiZap, FiScissors, FiHeart, FiStar, FiAward, FiLayers } from "react-icons/fi";

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: FiLayers,
      title: "Aplicação em Fibra de Vidro",
      price: "R$ 180",
      description:
        "Técnica de alongamento com fibra de vidro para unhas resistentes e naturais.",
    },
    {
      icon: FiZap,
      title: "Banho de Gel",
      price: "R$ 130",
      description:
        "Impede que as unhas naturais quebrem e aumenta a durabilidade das decorações.",
    },
    {
      icon: FiAward,
      title: "Blindagem",
      price: "R$ 75",
      description:
        "Facilita o crescimento das unhas naturais e evita unhas quebradas.",
    },
    {
      icon: FiStar,
      title: "Blindagem + Esmaltação em Gel",
      price: "R$ 85",
      description:
        "O combo perfeito: a resistência da blindagem com o acabamento impecável do gel.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        scrollReveal(titleRef.current);
      }
      const cards = cardsRef.current?.children;
      if (cards) {
        staggerFadeIn(Array.from(cards), 0.15);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 bg-[#FFFAFF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-blue-dark mb-3 sm:mb-4"
          >
            Meus Serviços
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-dark/70 max-w-2xl mx-auto px-4">
            Serviços profissionais com técnicas modernas para cuidar e embelezar
            suas unhas com dedicação e excelência.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-lighter rounded-full flex items-center justify-center">
                    <Icon className="text-2xl sm:text-3xl text-pink-accent" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-blue-dark mb-2">
                  {service.title}
                </h3>
                <div className="text-xl sm:text-2xl font-bold text-pink-accent mb-2 sm:mb-3">
                  {service.price}
                </div>
                <p className="text-sm sm:text-base text-blue-dark/70">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


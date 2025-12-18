"use client";

import React, { useEffect, useRef } from "react";
import { gsap, scrollReveal } from "@/lib/gsap";
import Image from "next/image";

const ServicesDetailed: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const services = [
    {
      id: "fibra-vidro",
      title: "Aplicação em Fibra de Vidro",
      price: "R$ 180",
      description:
        "Técnica de alongamento com fibra de vidro para unhas resistentes e naturais. Ideal para quem busca durabilidade e um visual impecável.",
      benefits: [
        "Resistência superior",
        "Aparência natural",
        "Durabilidade prolongada",
        "Ideal para unhas fracas",
      ],
      image: "/images/services/fibra-vidro/main.jpg",
      reverse: false,
    },
    {
      id: "banho-gel",
      title: "Banho de Gel",
      price: "R$ 130",
      description:
        "Proteção completa para suas unhas naturais. O banho de gel impede que as unhas quebrem e aumenta significativamente a durabilidade das decorações.",
      benefits: [
        "Proteção das unhas naturais",
        "Maior durabilidade",
        "Base perfeita para decorações",
        "Unhas mais fortes",
      ],
      image: "/images/services/banho-gel/main.jpg",
      reverse: true,
    },
    {
      id: "blindagem",
      title: "Blindagem",
      price: "R$ 75",
      description:
        "Tratamento especializado que facilita o crescimento das unhas naturais e evita quebras. Perfeito para unhas que precisam de fortalecimento.",
      benefits: [
        "Facilita o crescimento",
        "Evita unhas quebradas",
        "Fortalecimento natural",
        "Tratamento contínuo",
      ],
      image: "/images/services/blindagem/main.jpg",
      reverse: false,
    },
    {
      id: "blindagem-esmaltacao",
      title: "Blindagem + Esmaltação em Gel",
      price: "R$ 85",
      description:
        "O combo perfeito para quem busca proteção e beleza. A blindagem fortalece a unha natural enquanto a esmaltação em gel garante brilho e cor por muito mais tempo.",
      benefits: [
        "Fortalecimento e cor",
        "Alta durabilidade",
        "Brilho intenso e duradouro",
        "Secagem imediata",
      ],
      image: "/images/services/blindagem/main.jpg",
      reverse: true,
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        scrollReveal(titleRef.current);
      }

      // Animar cada serviço ao aparecer
      const serviceCards = sectionRef.current?.querySelectorAll(".service-card");
      if (serviceCards) {
        serviceCards.forEach((card, index) => {
          scrollReveal(card, {
            delay: index * 0.1,
            start: "top 85%",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services-detailed"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-pink-lighter/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-blue-dark mb-3 sm:mb-4"
          >
            Meus Serviços em Detalhes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-dark/70 max-w-2xl mx-auto px-4">
            Conheça cada serviço com cuidado e dedicação para transformar suas unhas
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                className={`service-card flex flex-col ${
                  service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-12`}
              >
                {/* Imagem com degradê */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative overflow-visible">
                    {/* Efeito de brilho mais suave ao redor */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-pink-accent/20 via-pink-lighter/15 to-blue-lighter/20 blur-2xl transform scale-105 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl image-edge-fade">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-blue-dark mb-2">
                      {service.title}
                    </h3>
                    <div className="mb-4">
                      <span className="relative inline-block px-3 py-2">
                        <span className="relative text-2xl sm:text-3xl font-bold text-pink-accent">{service.price}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-blue-dark/80 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-blue-dark mb-3">
                      Benefícios:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-blue-dark/70"
                        >
                          <span className="text-pink-accent no-pill mr-2 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailed;


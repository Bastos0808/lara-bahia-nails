"use client";

import React, { useEffect, useRef } from "react";
import { gsap, scrollReveal, staggerFadeIn } from "@/lib/gsap";
import Card from "@/components/ui/Card";

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const maintenanceRef = useRef<HTMLDivElement>(null);
  const decorationsRef = useRef<HTMLDivElement>(null);

  const applicationServices = [
    { name: "fibra", price: "R$ 180" },
    { name: "banho", price: "R$ 130" },
    { name: "blindagem", price: "R$ 75" },
    { name: "blindagem + esm. gel.", price: "R$ 85" },
  ];

  const maintenanceServices = [
    { name: "fibra", price: "R$ 140" },
    { name: "Banho", price: "R$ 130" },
    { name: "Blindagem", price: "R$ 75" },
    { name: "Blindagem + esm. gel.", price: "R$ 85" },
  ];

  const decorationsSimple = {
    title: "Decorações simples",
    price: "R$ 15",
    items: ["Esmaltação em gel", "Nail art", "Pedraria", "Pó cromado"],
  };

  const decorationsSpecial = {
    title: "Decorações especiais",
    price: "R$ 30",
    items: ["Encapsulada", "Baby boomer", "Baby color", "Borda camuflada"],
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        scrollReveal(titleRef.current);
      }
      if (maintenanceRef.current) {
        scrollReveal(maintenanceRef.current, { delay: 0.2 });
      }
      if (decorationsRef.current) {
        scrollReveal(decorationsRef.current, { delay: 0.4 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 bg-[#FFFAFF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4"
          >
            <span className="relative inline-block px-3 py-1">
              <span
                className="relative"
                style={{ color: "rgba(0, 62, 125, 1)", textAlign: "left" }}
              >
                Tabela de
              </span>
            </span>{" "}
            <span className="text-blue-dark">Preços</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 text-blue-dark">
            Valores atualizados e informações sobre manutenções e decorações.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div ref={maintenanceRef}>
            <Card>
              <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 text-center">
                <span className="relative inline-block px-3 py-1">
                  <span className="relative text-blue-dark">Aplicações & Manutenções</span>
                </span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-blue-dark mb-3">
                    Aplicações
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {applicationServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 sm:py-3 border-b border-blue-dark/10 last:border-0"
                      >
                        <span className="text-sm sm:text-base text-blue-dark font-medium">
                          {service.name}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-pink-accent">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-blue-dark mb-3">
                    Manutenções
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {maintenanceServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 sm:py-3 border-b border-blue-dark/10 last:border-0"
                      >
                        <span className="text-sm sm:text-base text-blue-dark font-medium">
                          {service.name}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-pink-accent">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-blue-dark/60 mt-4 sm:mt-6 italic">
                    *Na manutenção, a partir de duas unhas quebradas, será cobrado o valor da aplicação.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div ref={decorationsRef}>
            <Card>
              <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 text-center">
                <span className="relative inline-block px-3 py-1">
                  <span className="relative text-blue-dark">Decorações</span>
                </span>
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {[decorationsSimple, decorationsSpecial].map((group, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl p-4 sm:p-5 border border-white/20 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-blue-dark">
                          {group.title}
                        </h4>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-pink-accent">
                        {group.price}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-blue-dark/90">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-pink-accent/80"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;


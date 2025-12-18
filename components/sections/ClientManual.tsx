"use client";

import React, { useEffect, useRef } from "react";
import { gsap, scrollReveal, staggerFadeIn } from "@/lib/gsap";
import Card from "@/components/ui/Card";
import { FiClock, FiAlertCircle, FiDollarSign, FiCalendar, FiCheckCircle } from "react-icons/fi";

const ClientManual: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const rules = [
    {
      icon: FiClock,
      title: "Duração",
      description:
        "Os atendimentos duram, em média, de 2 a 3 horas.",
    },
    {
      icon: FiAlertCircle,
      title: "Atrasos",
      description:
        "Evite atrasos! Tolerância de até 15 minutos. Caso contrário, não será possível a adição de decorações.",
    },
    {
      icon: FiDollarSign,
      title: "Decorações e Adicionais",
      description:
        "Decorações e adicionais são cobrados à parte, consulte os valores antes do procedimento.",
    },
    {
      icon: FiCalendar,
      title: "Manutenções",
      description:
        "É recomendado deixar a manutenção marcada ao final de todo atendimento.",
    },
    {
      icon: FiCheckCircle,
      title: "Agendamentos",
      description:
        "Para realizarmos os agendamentos de qualquer procedimento será cobrado um sinal de R$ 30,00 que será subtraído do valor total do procedimento ao final do atendimento.",
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
        staggerFadeIn(Array.from(cards), 0.1);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manual"
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
              <span className="relative text-blue-dark">Manual da</span>
            </span>{" "}
            <span className="text-blue-dark">Cliente</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 text-blue-dark">
            Algumas informações úteis para você, cliente maravilhosa.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <Card key={index} className="flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-pink-lighter rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="text-2xl text-pink-accent" />
                  </div>
                  <h3 className="text-xl font-serif">
                    <span className="relative inline-block px-2 py-1">
                      <span className="relative text-pink-accent">{rule.title}</span>
                    </span>
                  </h3>
                </div>
                <p className="text-blue-dark/70 flex-grow">{rule.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientManual;


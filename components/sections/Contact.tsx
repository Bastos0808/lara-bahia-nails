"use client";

import React, { useEffect, useRef } from "react";
import { gsap, scrollReveal } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        scrollReveal(titleRef.current);
      }
      if (buttonsRef.current) {
        scrollReveal(buttonsRef.current, { delay: 0.2 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = (
    message: string = "Olá! Gostaria de agendar um horário."
  ) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/556282259644?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-pink-lighter/30 to-white"
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
                style={{ color: "rgba(0, 62, 125, 1)" }}
              >
                Entre em
              </span>
            </span>{" "}
            <span className="text-blue-dark">Contato</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 text-blue-dark">
            Estou pronta para transformar suas unhas. Agende seu horário agora mesmo!
          </p>
        </div>

        <div ref={buttonsRef} className="max-w-2xl mx-auto space-y-6">
          <Card className="text-center border-2 border-pink-accent/30">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-4">
              <span className="relative inline-block px-4 py-2">
                <span
                  className="relative"
                  style={{ color: "rgba(0, 62, 125, 1)" }}
                >
                  Agende pelo WhatsApp
                </span>
              </span>
            </h3>
            <p className="mb-6 text-blue-dark/80">
              Para um atendimento mais rápido, entre em contato diretamente pelo WhatsApp!
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto bg-[rgba(208,114,213,1)] bg-none text-[rgba(255,255,255,0.8)] hover:bg-[rgba(208,114,213,1)] hover:text-[rgba(255,255,255,0.8)] px-8"
            >
              <FaWhatsapp className="inline mr-2" size={20} />
              Abrir WhatsApp
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

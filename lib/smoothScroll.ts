"use client";

import { gsap } from "./gsap";

let isScrolling = false;
let scrollTween: gsap.core.Tween | null = null;

export function initSmoothScroll() {
  if (typeof window === "undefined") return;

  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let targetScroll = currentScroll;

  // Interceptar eventos de scroll
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    // Calcular direção e quantidade do scroll
    const delta = e.deltaY;
    const scrollAmount = delta * 1.0; // Movimento direto
    targetScroll = Math.max(
      0,
      Math.min(
        document.documentElement.scrollHeight - window.innerHeight,
        currentScroll + scrollAmount
      )
    );

    // Animar scroll suave - permitir interrupção
    if (scrollTween) {
      scrollTween.kill();
    }

    scrollTween = gsap.to(window, {
      scrollTo: {
        y: targetScroll,
        autoKill: true,
      },
      duration: 0.6,
      ease: "power1.out",
      onUpdate: () => {
        currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      },
      onComplete: () => {
        currentScroll = targetScroll;
      },
    });
  };

  // Adicionar listener com passive: false para poder prevenir default
  window.addEventListener("wheel", handleWheel, { passive: false });

  // Atualizar currentScroll durante scroll manual
  const handleScroll = () => {
    if (!isScrolling) {
      currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      targetScroll = currentScroll;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("scroll", handleScroll);
    if (scrollTween) {
      scrollTween.kill();
    }
  };
}


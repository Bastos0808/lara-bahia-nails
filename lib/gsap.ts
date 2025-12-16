"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export { gsap, ScrollTrigger, ScrollToPlugin };

export const fadeInUp = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
    }
  );
};

export const staggerFadeIn = (elements: string | Element[], delay = 0.1) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: delay,
      ease: "power2.out",
    }
  );
};

export const scrollReveal = (
  element: string | Element,
  options?: {
    delay?: number;
    duration?: number;
    start?: string;
  }
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration || 0.8,
      delay: options?.delay || 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: options?.start || "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};


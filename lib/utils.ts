import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { gsap } from "./gsap";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(elementId: string) {
  if (typeof window === "undefined") return;
  
  const element = document.getElementById(elementId);
  if (!element) return;

  const offset = 80; // Altura da navbar
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const elementY = element.getBoundingClientRect().top + startY;
  const targetY = Math.max(0, elementY - offset);

  // Tentar usar ScrollToPlugin do GSAP primeiro
  try {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: targetY,
        autoKill: true,
      },
      ease: "power3.inOut",
    });
  } catch (error) {
    // Fallback para scroll nativo suave
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }
}


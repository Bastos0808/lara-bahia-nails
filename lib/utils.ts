import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

  window.scrollTo({
    top: targetY,
    behavior: "auto",
  });
}


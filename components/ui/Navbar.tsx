"use client";

import React, { useState, useEffect } from "react";
import { smoothScrollTo } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Início" },
    { id: "services-detailed", label: "Serviços" },
    { id: "pricing", label: "Preços" },
    { id: "testimonials", label: "Depoimentos" },
    { id: "manual", label: "Manual" },
    { id: "contact", label: "Contato" },
  ];

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-black/40 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div
            className={`text-lg sm:text-xl md:text-2xl font-serif cursor-pointer transition-colors duration-300 ${
              isScrolled ? "text-blue-dark" : "text-white"
            }`}
            onClick={() => handleNavClick("hero")}
          >
            Lara Bahia Nails
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled ? "text-blue-dark hover:text-pink-accent" : "text-white hover:text-pink-lighter"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-blue-dark" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in bg-white/80 backdrop-blur-lg rounded-xl mt-2 p-2 border border-white/20 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-4 py-3 text-blue-dark hover:bg-pink-lighter/50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


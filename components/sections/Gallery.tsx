"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, scrollReveal, staggerFadeIn } from "@/lib/gsap";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - substitua pelas imagens reais em /public/images/
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery-${i + 1}.jpg`,
    alt: `Trabalho de nail design ${i + 1}`,
  }));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      scrollReveal(titleRef.current);
      const items = gridRef.current?.children;
      if (items) {
        staggerFadeIn(Array.from(items), 0.1);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
      }
      if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
      }
      if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev === null ? null : (prev + 1) % images.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images.length]);

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-pink-lighter/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-blue-dark mb-3 sm:mb-4"
            >
              Minha Galeria
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-dark/70 max-w-2xl mx-auto px-4">
              Confira alguns dos meus trabalhos e inspire-se com designs
              únicos e delicados.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-pink-lighter to-blue-lighter">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    onError={(e) => {
                      // Fallback para placeholder se a imagem não existir
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Degradê nas bordas que se mistura com o branco */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/50 z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/0 to-white/0 z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 z-10 pointer-events-none"></div>
                  {/* Overlay no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-pink-lighter/50 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="text-blue-dark font-medium">Ver imagem</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-pink-accent transition-colors z-10"
            aria-label="Fechar"
          >
            <FiX size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 text-white hover:text-pink-accent transition-colors z-10"
            aria-label="Imagem anterior"
          >
            <FiChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 text-white hover:text-pink-accent transition-colors z-10"
            aria-label="Próxima imagem"
          >
            <FiChevronRight size={40} />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-pink-lighter to-blue-lighter">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;


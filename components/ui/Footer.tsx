import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/larabahianails/",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/556282259644",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-blue-dark text-white py-12 sm:py-20 relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10 sm:mb-14">
            <h3 className="text-3xl sm:text-5xl font-sans font-bold mb-6 tracking-tight">
              Lara Bahia Nails
            </h3>
            <p className="text-blue-lighter/70 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans">
              Transformando suas unhas em obras de arte com dedicação, 
              técnicas modernas e um toque de criatividade única.
            </p>
          </div>

          {/* Mapa */}
          <div id="location" className="w-full max-w-4xl mx-auto mb-14 scroll-mt-24">
            <h4 className="font-sans font-semibold text-pink-light mb-6 uppercase tracking-[0.2em] text-xs">Localização</h4>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4359342623206!2d-49.24356018848412!3d-16.70508674597391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1abc9965483%3A0x388cdbfcc7234dbb!2sMetropolitan%20Tokyo!5e0!3m2!1spt-BR!2sbr!4v1766017693963!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-24 mb-14 sm:mb-20 w-full max-w-3xl">
            <div className="flex flex-col items-center sm:items-end">
              <h4 className="font-sans font-semibold text-pink-light mb-3 uppercase tracking-[0.2em] text-xs">Contato</h4>
              <p className="text-xl sm:text-2xl font-sans font-medium">+55 62 8225-9644</p>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h4 className="font-sans font-semibold text-pink-light mb-3 uppercase tracking-[0.2em] text-xs">Siga-me</h4>
              <div className="flex space-x-8">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl sm:text-4xl hover:text-pink-accent hover:-translate-y-1 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-blue-lighter/40 text-[10px] sm:text-xs uppercase tracking-widest gap-6 font-sans">
            <p>&copy; {currentYear} Lara Bahia Nails. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/10 hidden sm:block"></span>
              <p className="italic">Beleza e cuidado em cada detalhe</p>
              <span className="w-8 h-[1px] bg-white/10 hidden sm:block"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/556282259644",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-blue-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">
              Lara Bahia Nails
            </h3>
            <p className="text-blue-lighter">
              Transformando suas unhas em obras de arte com dedicação e
              criatividade.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-blue-lighter">Telefone: +55 62 8225-9644</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-pink-accent transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-light pt-8 text-center text-blue-lighter">
          <p>&copy; {currentYear} Lara Bahia Nails. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


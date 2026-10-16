import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../.././../i18n';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { labelKey: 'nav_inicio', href: '#home' },
    { labelKey: 'nav_sobre', href: '#about' },
    { labelKey: 'nav_que', href: '#what-we-do' },
    { labelKey: 'nav_productos', href: '#products' },
    { labelKey: 'nav_contacto', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1B5E20] shadow-lg' : 'bg-[#1B5E20] shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            alt="Merandia Logo"
            className="h-12 w-auto object-contain cursor-pointer brightness-0 invert"
            src="https://public.readdy.ai/ai/img_res/e7bfb264-c527-4e3e-894a-ffc0f976cd6f.png"
            onClick={() => handleNavClick('#home')}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.labelKey}
              onClick={() => handleNavClick(link.href)}
              className="text-white hover:text-[#FFD700] transition-colors duration-300 font-medium cursor-pointer whitespace-nowrap"
            >
              {t(link.labelKey)}
            </button>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700] text-[#2C2C2C] hover:bg-[#FFC107] transition-all duration-300 font-semibold text-sm cursor-pointer whitespace-nowrap shadow-md"
          >
            <i className="ri-translate-2 text-base"></i>
            {t('lang_switch')}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#FFD700] text-[#2C2C2C] hover:bg-[#FFC107] transition-all duration-300 font-semibold text-sm cursor-pointer whitespace-nowrap shadow-md"
          >
            <i className="ri-translate-2 text-base"></i>
            {t('lang_switch')}
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1B5E20] border-t border-white/10 px-6 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.labelKey}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 text-white hover:text-[#FFD700] transition-colors duration-300 font-medium cursor-pointer border-b border-white/10"
            >
              {t(link.labelKey)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

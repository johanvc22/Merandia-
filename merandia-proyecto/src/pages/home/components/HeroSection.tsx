import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Merandia Hero Background"
          className="w-full h-full object-cover object-bottom"
          src="/images/backgrounds/hero-alimorca.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-8 drop-shadow-lg">
            {t('hero_title')}
          </h1>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProducts}
              className="group px-10 py-4 bg-[#FFD700] text-[#2C2C2C] rounded-full hover:bg-white hover:text-[#2C2C2C] transition-all duration-300 font-semibold flex items-center gap-3 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              {t('hero_btn_products')}
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-10 py-4 bg-white/10 border border-white/40 text-white rounded-full hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-3 hover:-translate-y-1 cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              {t('hero_btn_info')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import '../../../i18n';

const sectorKeys = [
  { icon: 'ri-store-2-line', titleKey: 'sector_1_title', descKey: 'sector_1_desc' },
  { icon: 'ri-shopping-cart-line', titleKey: 'sector_2_title', descKey: 'sector_2_desc' },
  { icon: 'ri-building-line', titleKey: 'sector_3_title', descKey: 'sector_3_desc' },
  { icon: 'ri-restaurant-line', titleKey: 'sector_4_title', descKey: 'sector_4_desc' },
  { icon: 'ri-box-3-line', titleKey: 'sector_5_title', descKey: 'sector_5_desc' },
  { icon: 'ri-government-line', titleKey: 'sector_6_title', descKey: 'sector_6_desc' },
];

export default function DistributorsSection() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sectors" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-[#8C8C8C] mb-3 font-light uppercase tracking-widest">{t('sectors_label')}</p>
          <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">{t('sectors_title')}</h2>
          <p className="text-lg text-[#8C8C8C] max-w-2xl mx-auto">{t('sectors_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sectorKeys.map((sector) => (
            <div
              key={sector.titleKey}
              className="bg-[#FAFAF8] rounded-2xl p-8 group hover:bg-[#2E7D32] transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2E7D32]/10 mb-5 group-hover:bg-white/20 transition-colors duration-300">
                <i className={`${sector.icon} text-2xl text-[#2E7D32] group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-3 group-hover:text-white transition-colors duration-300">
                {t(sector.titleKey)}
              </h3>
              <p className="text-sm text-[#777] leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {t(sector.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#2E7D32] rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">{t('sectors_cta_title')}</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{t('sectors_cta_desc')}</p>
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-[#FFD700] text-[#2C2C2C] rounded-full font-bold hover:bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
          >
            {t('sectors_cta_btn')}
          </button>
        </div>
      </div>
    </section>
  );
}

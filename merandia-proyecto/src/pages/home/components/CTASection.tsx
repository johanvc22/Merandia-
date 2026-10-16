import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function CTASection() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FAFAF8] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[500px] bg-[#F5F1E8]">
              <img
                alt="Merandia Operaciones"
                className="w-full h-full object-cover object-top"
                src="https://readdy.ai/api/search-image?query=professional%20food%20industry%20worker%20in%20white%20lab%20coat%20and%20safety%20helmet%20inspecting%20bottles%20of%20cooking%20oil%20on%20production%20line%20quality%20control%20in%20modern%20food%20processing%20facility%20clean%20industrial%20environment%20Honduras%20food%20packaging%20company%20professional%20corporate%20photography&width=700&height=700&seq=cta-operations-002&orientation=squarish"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white z-10">
                <p className="text-xs tracking-[0.3em] mb-2 uppercase font-semibold text-[#FFD700]">
                  {t('cta_quality_label')}
                </p>
                <h3 className="text-4xl font-extrabold leading-tight whitespace-pre-line">
                  {t('cta_quality_title')}
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-12 lg:p-16 text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] leading-tight mb-6">
                {t('cta_title')}
              </h3>
              <p className="text-lg text-[#8C8C8C] leading-relaxed mb-10 max-w-md">
                {t('cta_desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                <button
                  onClick={scrollToContact}
                  className="group flex-1 px-8 py-4 bg-[#2C2C2C] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2C2C2C] transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                >
                  {t('cta_btn_info')}
                </button>
                <button
                  onClick={scrollToProducts}
                  className="group flex-1 px-8 py-4 border border-[#2C2C2C] text-[#2C2C2C] rounded-full hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                >
                  {t('cta_btn_products')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

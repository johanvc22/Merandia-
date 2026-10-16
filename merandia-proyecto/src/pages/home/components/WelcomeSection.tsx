import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function WelcomeSection() {
  const { t } = useTranslation();

  const features = [
    { icon: 'ri-shield-check-line', key: 'about_feat1' },
    { icon: 'ri-truck-line', key: 'about_feat2' },
    { icon: 'ri-archive-line', key: 'about_feat3' },
    { icon: 'ri-file-list-3-line', key: 'about_feat4' },
  ];

  return (
    <section id="about" className="bg-[#FAFAF8] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <p className="text-sm text-[#8C8C8C] mb-3 font-light uppercase tracking-widest">{t('about_label')}</p>
            <h2 className="text-5xl font-bold text-[#2C2C2C] leading-tight mb-10">
              {t('about_title')} <span className="text-[#2E7D32]">{t('about_title_accent')}</span>
            </h2>
            <p className="text-lg text-[#2C2C2C] leading-relaxed mb-6">
              {t('about_p1')}
            </p>
            <p className="text-base text-[#555] leading-relaxed mb-8">
              {t('about_p2')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item.key} className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2E7D32]/10 shrink-0">
                    <i className={`${item.icon} text-[#2E7D32] text-lg`}></i>
                  </div>
                  <span className="text-sm text-[#2C2C2C] font-medium">{t(item.key)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden w-full h-[420px]">
              <img
                alt="Instalaciones Merandia"
                className="w-full h-full object-cover object-top"
                src="https://readdy.ai/api/search-image?query=industrial%20food%20packaging%20facility%20interior%20with%20stainless%20steel%20equipment%20large%20storage%20tanks%20oil%20bottling%20machinery%20workers%20in%20safety%20equipment%20modern%20clean%20industrial%20warehouse%20Honduras%20Latin%20America%20professional%20industrial%20photography%20with%20natural%20lighting%20orderly%20and%20organized%20facility%20showing%20food%20safety%20standards%20and%20quality%20control%20processes&width=570&height=630&seq=about-facility-001&orientation=portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

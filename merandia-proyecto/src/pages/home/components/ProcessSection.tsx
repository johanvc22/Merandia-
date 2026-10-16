import { useTranslation } from 'react-i18next';
import '../../../i18n';

const serviceImages = [
  'https://readdy.ai/api/search-image?query=industrial%20oil%20bottling%20production%20line%20with%20automated%20filling%20machines%20bottles%20moving%20on%20conveyor%20belt%20in%20clean%20modern%20food%20processing%20plant%20stainless%20steel%20equipment%20bright%20factory%20lighting%20quality%20control%20station%20workers%20monitoring%20process%20professional%20industrial%20photography&width=700&height=480&seq=service-bottling-001&orientation=landscape',
  '/images/process/bodega-alimorca.png',
  'https://readdy.ai/api/search-image?query=delivery%20truck%20loading%20dock%20at%20food%20distribution%20warehouse%20workers%20loading%20pallets%20of%20cooking%20oil%20boxes%20onto%20truck%20logistics%20operation%20Honduras%20distribution%20center%20daytime%20natural%20lighting%20professional%20logistics%20photography%20showing%20supply%20chain%20operations&width=700&height=480&seq=service-distribution-001&orientation=landscape',
];

export default function ProcessSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'ri-flask-line',
      titleKey: 'process_1_title',
      descKey: 'process_1_desc',
      detailKeys: ['process_1_d1', 'process_1_d2', 'process_1_d3', 'process_1_d4'],
    },
    {
      icon: 'ri-archive-drawer-line',
      titleKey: 'process_2_title',
      descKey: 'process_2_desc',
      detailKeys: ['process_2_d1', 'process_2_d2', 'process_2_d3', 'process_2_d4'],
    },
    {
      icon: 'ri-truck-line',
      titleKey: 'process_3_title',
      descKey: 'process_3_desc',
      detailKeys: ['process_3_d1', 'process_3_d2', 'process_3_d3', 'process_3_d4'],
    },
  ];

  return (
    <section id="what-we-do" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm text-[#8C8C8C] mb-3 font-light uppercase tracking-widest">{t('process_label')}</p>
          <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">{t('process_title')}</h2>
          <p className="text-lg text-[#8C8C8C] max-w-2xl mx-auto">{t('process_subtitle')}</p>
        </div>

        <div className="space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.titleKey}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#2E7D32]/10">
                    <i className={`${service.icon} text-3xl text-[#2E7D32]`}></i>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
                      {t('process_service')} 0{idx + 1}
                    </span>
                    <h3 className="text-3xl font-bold text-[#2C2C2C]">{t(service.titleKey)}</h3>
                  </div>
                </div>
                <p className="text-base text-[#555] leading-relaxed mb-6">{t(service.descKey)}</p>
                <ul className="space-y-3">
                  {service.detailKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <i className="ri-checkbox-circle-fill text-[#2E7D32] text-lg"></i>
                      </div>
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`rounded-3xl overflow-hidden w-full h-[360px] ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover object-top"
                  src={serviceImages[idx]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

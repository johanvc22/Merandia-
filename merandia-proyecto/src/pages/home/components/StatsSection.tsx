import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function StatsSection() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: 'ri-shield-check-line',
      valueKey: 'stats_1_value',
      labelKey: 'stats_1_label',
      descKey: 'stats_1_desc',
    },
    {
      icon: 'ri-award-line',
      valueKey: 'stats_2_value',
      labelKey: 'stats_2_label',
      descKey: 'stats_2_desc',
    },
    {
      icon: 'ri-route-line',
      valueKey: 'stats_3_value',
      labelKey: 'stats_3_label',
      descKey: 'stats_3_desc',
    },
  ];

  const features = [
    { icon: 'ri-map-pin-2-line', key: 'stats_feat1' },
    { icon: 'ri-drop-line', key: 'stats_feat2' },
    { icon: 'ri-box-3-line', key: 'stats_feat3' },
    { icon: 'ri-customer-service-line', key: 'stats_feat4' },
  ];

  return (
    <section id="why-us" className="bg-[#F7F7F5] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm text-[#8C8C8C] mb-3 font-light uppercase tracking-widest">{t('stats_label')}</p>
          <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">{t('stats_title')}</h2>
          <p className="text-lg text-[#8C8C8C] max-w-2xl mx-auto">{t('stats_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.valueKey}
              className="bg-white rounded-2xl p-10 text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2E7D32]/10 mx-auto mb-6 group-hover:bg-[#2E7D32] transition-colors duration-300">
                <i className={`${adv.icon} text-3xl text-[#2E7D32] group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-1">{t(adv.valueKey)}</h3>
              <p className="text-[#FFD700] font-semibold text-lg mb-4">{t(adv.labelKey)}</p>
              <p className="text-sm text-[#777] leading-relaxed">{t(adv.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div key={feat.key} className="flex items-center gap-3 bg-white rounded-xl px-4 py-4">
              <div className="w-9 h-9 flex items-center justify-center shrink-0">
                <i className={`${feat.icon} text-[#2E7D32] text-xl`}></i>
              </div>
              <span className="text-sm text-[#2C2C2C] font-medium leading-snug">{t(feat.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

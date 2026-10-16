import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function LocationSection() {
  const { t } = useTranslation();
  const [mapHovered, setMapHovered] = useState(false);

  const mapsUrl =
    'https://www.google.com/maps/place/45+Anne+Ave,+Jacksonville,+FL+32254,+USA/@30.3232149,-81.7556088,17z/data=!3m1!4b1!4m6!3m5!1s0x88e5b919bc9baea9:0x391dc2864d86a558!8m2!3d30.3232149!4d-81.7530339!16s%2Fg%2F11c1zqw10p?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D';

  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1733.6!2d-81.7543213!3d30.3232149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b919bc9baea9%3A0x391dc2864d86a558!2s45%20Anne%20Ave%2C%20Jacksonville%2C%20FL%2032254%2C%20USA!5e0!3m2!1sen!2sus!4v1713200000001!5m2!1sen!2sus';

  const contactItems = [
    {
      icon: 'ri-map-pin-2-fill',
      label: t('location_address_label'),
      content: (
        <>
          <p className="text-sm font-semibold text-[#2C2C2C] leading-snug">
            45 ANNE AV JACKSONVILLE, FL 32254
          </p>
          <p className="text-sm text-[#8C8C8C] mt-0.5">Jacksonville, United States</p>
        </>
      ),
    },
    {
      icon: 'ri-mail-line',
      label: t('location_email_label'),
      content: (
        <a
          href="mailto:merandiallc@gmail.com"
          className="text-sm font-medium text-[#2C2C2C] hover:text-[#B8860B] transition-colors duration-200"
        >
          merandiallc@gmail.com
        </a>
      ),
    },
    {
      icon: 'ri-phone-line',
      label: t('location_phone_label'),
      content: (
        <a
          href="tel:+17869123424"
          className="text-sm font-medium text-[#2C2C2C] hover:text-[#B8860B] transition-colors duration-200"
        >
          +1 786 9123424
        </a>
      ),
    },
  ];

  return (
    <section id="location" className="bg-[#FAFAF8] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#B8860B] mb-3">
            {t('location_label')}
          </span>
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-3">{t('location_title')}</h2>
          <p className="text-base text-[#8C8C8C]">{t('location_subtitle')}</p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-stretch">

          {/* ── LEFT: Map ── */}
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ minHeight: '420px' }}
            onMouseEnter={() => setMapHovered(true)}
            onMouseLeave={() => setMapHovered(false)}
            onClick={() => window.open(mapsUrl, '_blank', 'noopener,noreferrer')}
          >
            {/* iframe */}
            <iframe
              title="Merandia Location Map"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '420px', pointerEvents: mapHovered ? 'none' : 'auto' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-[#2C2C2C]/40 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${mapHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFD700]">
                <i className="ri-external-link-line text-[#2C2C2C] text-2xl" />
              </div>
              <span className="text-white text-sm font-semibold tracking-wide">
                {t('location_btn')}
              </span>
            </div>

            {/* Corner badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 rounded-full px-3 py-1.5 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="text-xs font-semibold text-[#2C2C2C]">Jacksonville, FL</span>
            </div>
          </div>

          {/* ── RIGHT: Info card ── */}
          <div className="bg-white rounded-2xl border border-gray-100 flex flex-col justify-between px-8 py-9">

            {/* Top: contact items */}
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.icon} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD700]/15 shrink-0 mt-0.5">
                    <i className={`${item.icon} text-[#B8860B] text-lg`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#8C8C8C] mb-1">
                      {item.label}
                    </p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-7" />

            {/* Description */}
            <p className="text-sm text-[#8C8C8C] leading-relaxed mb-7">
              {t('location_desc')}
            </p>

            {/* CTA */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#FFD700] text-[#2C2C2C] font-semibold rounded-full hover:bg-[#e6c200] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap text-sm"
            >
              <i className="ri-map-pin-2-line text-base" />
              {t('location_btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

# MERANDIA - PARTE 4: COMPONENTES DE LA PÁGINA (2/2)

---

## src/pages/home/components/DistributorsSection.tsx

```typescript
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
```

---

## src/pages/home/components/CTASection.tsx

```typescript
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
```

---

## src/pages/home/components/LocationSection.tsx

```typescript
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

          {/* LEFT: Map */}
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ minHeight: '420px' }}
            onMouseEnter={() => setMapHovered(true)}
            onMouseLeave={() => setMapHovered(false)}
            onClick={() => window.open(mapsUrl, '_blank', 'noopener,noreferrer')}
          >
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

          {/* RIGHT: Info card */}
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
```

---

## src/pages/home/components/ContactSection.tsx

```typescript
import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function ContactSection() {
  const { t } = useTranslation();
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new URLSearchParams();
    data.append('name', (form.elements.namedItem('name') as HTMLInputElement).value);
    data.append('email', (form.elements.namedItem('email') as HTMLInputElement).value);
    data.append('phone', (form.elements.namedItem('phone') as HTMLInputElement).value);
    data.append('message', (form.elements.namedItem('message') as HTMLTextAreaElement).value);
    try {
      const res = await fetch('https://readdy.ai/api/form/d71eu7rk1jkj467r5f60', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) { setStatus('success'); form.reset(); setCharCount(0); }
      else setStatus('error');
    } catch { setStatus('error'); }
    finally { setLoading(false); }
  };

  return (
    <section id="contact" className="bg-white py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2C2C2C] mb-4">{t('contact_title')}</h2>
          <p className="text-lg text-[#8C8C8C]">{t('contact_subtitle')}</p>
        </div>
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center font-medium">{t('contact_success')}</div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center font-medium">{t('contact_error')}</div>
        )}
        <form id="contact-form" data-readdy-form="true" onSubmit={handleSubmit} className="bg-[#FAFAF8] rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_name')}</label>
              <input id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_email')}</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all text-sm" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_phone')}</label>
            <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all text-sm" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_message')}</label>
            <textarea id="message" name="message" rows={6} maxLength={500} required onChange={(e) => setCharCount(e.target.value.length)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all resize-none text-sm" />
            <p className="text-xs text-[#8C8C8C] mt-1">{t('contact_chars')} ({charCount}/500)</p>
          </div>
          <button type="submit" disabled={loading} className="w-full px-8 py-4 bg-[#2C2C2C] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2C2C2C] transition-all duration-300 font-medium cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? t('contact_sending') : t('contact_submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
```

---

## src/pages/home/components/Footer.tsx

```typescript
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A3A3A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <img alt="Merandia" className="h-12 w-auto object-contain mb-8 brightness-0 invert" src="https://public.readdy.ai/ai/img_res/640feccf-06d7-46a9-9dca-1cafade361d5.png" />
            <p className="text-xl font-light leading-relaxed text-white/80 mb-8">{t('footer_tagline')}</p>
            <div className="flex gap-3">
              {[
                { icon: 'ri-facebook-fill', href: 'https://facebook.com/merandia' },
                { icon: 'ri-instagram-line', href: 'https://instagram.com/merandia' },
                { icon: 'ri-whatsapp-line', href: 'https://wa.me/50400000000' },
              ].map((s) => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-[#FFD700] hover:border-[#FFD700] transition-all cursor-pointer group">
                  <i className={`${s.icon} text-white group-hover:text-[#2C2C2C]`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">{t('footer_products_title')}</h3>
            <ul className="space-y-4">
              {(['footer_palm', 'footer_soya', 'footer_presentations'] as const).map((key) => (
                <li key={key}><button onClick={() => handleNavClick('#products')} className="text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer">{t(key)}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">{t('footer_company_title')}</h3>
            <ul className="space-y-4">
              {[
                { key: 'footer_about', href: '#about' },
                { key: 'footer_what', href: '#what-we-do' },
                { key: 'footer_why', href: '#why-us' },
              ].map((item) => (
                <li key={item.key}><button onClick={() => handleNavClick(item.href)} className="text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer">{t(item.key)}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">{t('footer_contact_title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-gray-300 text-sm"><div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0"><i className="ri-map-pin-line text-[#FFD700]"></i></div>45 ANNE AV JACKSONVILLE, FL 32254</li>
              <li className="flex items-start gap-2 text-gray-300 text-sm"><div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0"><i className="ri-mail-line text-[#FFD700]"></i></div>info@merandia.com</li>
              <li className="flex items-start gap-2 text-gray-300 text-sm"><div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0"><i className="ri-phone-line text-[#FFD700]"></i></div>+1 786 9123424</li>
              <li><button onClick={() => handleNavClick('#sectors')} className="text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer text-sm">{t('footer_sectors')}</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#0F2525] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">{t('footer_copyright')}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FFD700] transition-colors cursor-pointer">{t('footer_privacy')}</a>
              <span>·</span>
              <a href="#" className="hover:text-[#FFD700] transition-colors cursor-pointer">{t('footer_terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## src/pages/home/components/FloatingButtons.tsx

```typescript
const floatingButtons = [
  {
    href: 'https://wa.me/50498765432',
    bg: 'bg-[#25D366]',
    icon: 'ri-whatsapp-fill',
    label: 'WhatsApp',
  },
  {
    href: 'https://facebook.com/merandia',
    bg: 'bg-[#1877F2]',
    icon: 'ri-facebook-fill',
    label: 'Facebook',
  },
  {
    href: 'https://instagram.com/merandia',
    bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
    icon: 'ri-instagram-fill',
    label: 'Instagram',
  },
];

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {floatingButtons.map((btn) => (
        <div key={btn.label} className="relative">
          <a
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={btn.label}
            className={`flex items-center justify-center w-14 h-14 ${btn.bg} rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
          >
            <i className={`${btn.icon} text-white text-2xl`}></i>
          </a>
        </div>
      ))}
    </div>
  );
}
```
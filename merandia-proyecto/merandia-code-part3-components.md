# MERANDIA - PARTE 3: COMPONENTES DE LA PÁGINA (1/2)

---

## src/pages/home/components/Navbar.tsx

```typescript
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
```

---

## src/pages/home/components/HeroSection.tsx

```typescript
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
          className="w-full h-full object-cover object-top"
          src="https://static.readdy.ai/image/20c82946e4b055a084f66b494c31755d/084b4f8cfb97b9777c8cfc4c23fdda0f.jpeg"
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
```

---

## src/pages/home/components/WelcomeSection.tsx

```typescript
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
```

---

## src/pages/home/components/ProcessSection.tsx

```typescript
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const serviceImages = [
  'https://readdy.ai/api/search-image?query=industrial%20oil%20bottling%20production%20line%20with%20automated%20filling%20machines%20bottles%20moving%20on%20conveyor%20belt%20in%20clean%20modern%20food%20processing%20plant%20stainless%20steel%20equipment%20bright%20factory%20lighting%20quality%20control%20station%20workers%20monitoring%20process%20professional%20industrial%20photography&width=700&height=480&seq=service-bottling-001&orientation=landscape',
  'https://readdy.ai/api/search-image?query=large%20organized%20food%20storage%20warehouse%20with%20tall%20metal%20shelving%20racks%20stacked%20cooking%20oil%20containers%20pallets%20neatly%20arranged%20forklift%20visible%20clean%20and%20well-lit%20industrial%20warehouse%20interior%20logistics%20facility%20Latin%20America%20professional%20warehouse%20photography%20showing%20inventory%20management%20and%20food%20safety%20compliance&width=700&height=480&seq=service-storage-001&orientation=landscape',
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
```

---

## src/pages/home/components/StatsSection.tsx

```typescript
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
```

---

## src/pages/home/components/ProductsSection.tsx

```typescript
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

interface Product {
  id: string;
  nameKey: string;
  presKey: string;
  image: string;
}

interface ProductType {
  typeKey: string;
  products: Product[];
}

interface Brand {
  id: string;
  nameKey: string;
  descKey: string;
  color: string;
  accentColor: string;
  types: ProductType[];
}

const BRANDS: Brand[] = [
  {
    id: 'mia',
    nameKey: 'brand_mia_name',
    descKey: 'brand_mia_desc',
    color: '#F5A623',
    accentColor: '#2E7D32',
    types: [
      {
        typeKey: 'products_vegetal',
        products: [
          { id: 'mia-v1', nameKey: 'mia_veg_1_name', presKey: 'mia_veg_1_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20250ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v1&orientation=portrait' },
          { id: 'mia-v2', nameKey: 'mia_veg_2_name', presKey: 'mia_veg_2_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20500ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v2&orientation=portrait' },
          { id: 'mia-v3', nameKey: 'mia_veg_3_name', presKey: 'mia_veg_3_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20830ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v3&orientation=portrait' },
          { id: 'mia-v4', nameKey: 'mia_veg_4_name', presKey: 'mia_veg_4_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20900ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v4&orientation=portrait' },
          { id: 'mia-v5', nameKey: 'mia_veg_5_name', presKey: 'mia_veg_5_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%201%20liter%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v5&orientation=portrait' },
          { id: 'mia-v6', nameKey: 'mia_veg_6_name', presKey: 'mia_veg_6_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20jug%209%20liter%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v6&orientation=portrait' },
          { id: 'mia-v7', nameKey: 'mia_veg_7_name', presKey: 'mia_veg_7_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20container%2020%20liter%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v7&orientation=portrait' },
        ],
      },
      {
        typeKey: 'products_soya',
        products: [
          { id: 'mia-s1', nameKey: 'mia_soy_1_name', presKey: 'mia_soy_1_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20250ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s1&orientation=portrait' },
          { id: 'mia-s2', nameKey: 'mia_soy_2_name', presKey: 'mia_soy_2_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20500ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s2&orientation=portrait' },
          { id: 'mia-s3', nameKey: 'mia_soy_3_name', presKey: 'mia_soy_3_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20830ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s3&orientation=portrait' },
          { id: 'mia-s4', nameKey: 'mia_soy_4_name', presKey: 'mia_soy_4_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20900ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s4&orientation=portrait' },
          { id: 'mia-s5', nameKey: 'mia_soy_5_name', presKey: 'mia_soy_5_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%201%20liter%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s5&orientation=portrait' },
          { id: 'mia-s6', nameKey: 'mia_soy_6_name', presKey: 'mia_soy_6_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20jug%209%20liter%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s6&orientation=portrait' },
          { id: 'mia-s7', nameKey: 'mia_soy_7_name', presKey: 'mia_soy_7_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20container%2020%20liter%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s7&orientation=portrait' },
        ],
      },
    ],
  },
  {
    id: 'del',
    nameKey: 'brand_del_name',
    descKey: 'brand_del_desc',
    color: '#2E7D32',
    accentColor: '#F5A623',
    types: [
      {
        typeKey: 'products_vegetal',
        products: [
          { id: 'del-v1', nameKey: 'del_veg_1_name', presKey: 'del_veg_1_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20250ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v1&orientation=portrait' },
          { id: 'del-v2', nameKey: 'del_veg_2_name', presKey: 'del_veg_2_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20500ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v2&orientation=portrait' },
          { id: 'del-v3', nameKey: 'del_veg_3_name', presKey: 'del_veg_3_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20830ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v3&orientation=portrait' },
          { id: 'del-v4', nameKey: 'del_veg_4_name', presKey: 'del_veg_4_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20900ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v4&orientation=portrait' },
          { id: 'del-v5', nameKey: 'del_veg_5_name', presKey: 'del_veg_5_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%201%20liter%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v5&orientation=portrait' },
          { id: 'del-v6', nameKey: 'del_veg_6_name', presKey: 'del_veg_6_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20jug%209%20liter%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v6&orientation=portrait' },
          { id: 'del-v7', nameKey: 'del_veg_7_name', presKey: 'del_veg_7_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20container%2020%20liter%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v7&orientation=portrait' },
        ],
      },
      {
        typeKey: 'products_soya',
        products: [
          { id: 'del-s1', nameKey: 'del_soy_1_name', presKey: 'del_soy_1_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20250ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s1&orientation=portrait' },
          { id: 'del-s2', nameKey: 'del_soy_2_name', presKey: 'del_soy_2_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20500ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s2&orientation=portrait' },
          { id: 'del-s3', nameKey: 'del_soy_3_name', presKey: 'del_soy_3_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20830ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s3&orientation=portrait' },
          { id: 'del-s4', nameKey: 'del_soy_4_name', presKey: 'del_soy_4_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20900ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s4&orientation=portrait' },
          { id: 'del-s5', nameKey: 'del_soy_5_name', presKey: 'del_soy_5_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%201%20liter%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s5&orientation=portrait' },
          { id: 'del-s6', nameKey: 'del_soy_6_name', presKey: 'del_soy_6_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20jug%209%20liter%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s6&orientation=portrait' },
          { id: 'del-s7', nameKey: 'del_soy_7_name', presKey: 'del_soy_7_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20container%2020%20liter%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s7&orientation=portrait' },
        ],
      },
    ],
  },
];

interface CarouselProps {
  products: Product[];
  accentColor: string;
  onImageClick: (product: Product) => void;
}

function ProductCarousel({ products, accentColor, onImageClick }: CarouselProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const visibleCount = 4;
  const maxIndex = Math.max(0, products.length - visibleCount);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    autoplayRef.current = setInterval(next, 3200);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [next]);

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 3200);
  };

  const handlePrev = () => { prev(); resetAutoplay(); };
  const handleNext = () => { next(); resetAutoplay(); };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{ transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 16 / visibleCount}px))` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 cursor-pointer group"
              style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 16 / visibleCount}px)` }}
              onClick={() => onImageClick(product)}
            >
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-b from-gray-50 to-white p-4 flex items-center justify-center h-44 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center">
                      <i className="ri-zoom-in-line text-sm" style={{ color: accentColor }}></i>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-3 border-t border-gray-50">
                  <p className="text-xs font-semibold text-[#2C2C2C] leading-tight mb-1 truncate">{t(product.nameKey)}</p>
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                  >
                    {t(product.presKey)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {products.length > visibleCount && (
        <>
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer z-10"
          >
            <i className="ri-arrow-left-s-line text-[#2C2C2C]"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer z-10"
          >
            <i className="ri-arrow-right-s-line text-[#2C2C2C]"></i>
          </button>
        </>
      )}

      {products.length > visibleCount && (
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); resetAutoplay(); }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: i === currentIndex ? accentColor : '#D1D5DB' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ModalProps) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (product) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/90 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-[#2C2C2C]"></i>
        </button>
        <div className="bg-gradient-to-b from-gray-50 to-white p-8 flex items-center justify-center h-72">
          <img
            src={product.image}
            alt={t(product.nameKey)}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="px-6 py-5 border-t border-gray-100">
          <h4 className="text-base font-bold text-[#2C2C2C] mb-2">{t(product.nameKey)}</h4>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#777]">{t('products_presentations')}:</span>
            <span className="text-xs font-semibold text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-full">{t(product.presKey)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const { t } = useTranslation();
  const [activeBrand, setActiveBrand] = useState<string>('mia');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentBrand = BRANDS.find((b) => b.id === activeBrand) ?? BRANDS[0];

  return (
    <section id="products" className="bg-[#FAFAF8] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs text-[#8C8C8C] mb-2 font-light uppercase tracking-widest">{t('products_label')}</p>
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-3">{t('products_title')}</h2>
          <p className="text-base text-[#8C8C8C] max-w-lg mx-auto">{t('products_subtitle')}</p>
        </div>

        {/* Brand Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 gap-1">
            {BRANDS.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setActiveBrand(brand.id)}
                className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={
                  activeBrand === brand.id
                    ? { backgroundColor: brand.color, color: '#fff' }
                    : { color: '#555', backgroundColor: 'transparent' }
                }
              >
                {t(brand.nameKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Description */}
        <div className="text-center mb-8">
          <p className="text-sm text-[#777]">{t(currentBrand.descKey)}</p>
        </div>

        {/* Product Types */}
        <div className="space-y-10" data-product-shop>
          {currentBrand.types.map((type) => (
            <div key={type.typeKey} className="bg-white rounded-2xl border border-gray-100 p-6">
              {/* Type Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: currentBrand.color }}
                />
                <h3 className="text-base font-bold text-[#2C2C2C] uppercase tracking-wide">{t(type.typeKey)}</h3>
                <span className="text-xs text-[#999] ml-1">— {type.products.length} {t('products_presentations').toLowerCase()}</span>
              </div>

              {/* Carousel */}
              <div className="px-5">
                <ProductCarousel
                  products={type.products}
                  accentColor={currentBrand.accentColor}
                  onImageClick={setModalProduct}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={scrollToContact}
            className="group px-10 py-3.5 bg-[#2C2C2C] text-white rounded-full hover:bg-[#F5A623] hover:text-[#2C2C2C] transition-all duration-300 font-semibold flex items-center gap-3 mx-auto cursor-pointer whitespace-nowrap text-sm"
          >
            {t('product_btn')}
            <i className="ri-arrow-right-line text-base group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>

      {/* Modal */}
      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
    </section>
  );
}
```
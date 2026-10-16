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
                { icon: 'ri-facebook-fill', href: 'https://www.facebook.com/profile.php?id=61595042845069' },
                { icon: 'ri-instagram-line', href: 'https://www.instagram.com/merandia_oficial/' },
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
              <li className="flex items-start gap-2 text-gray-300 text-sm"><div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0"><i className="ri-mail-line text-[#FFD700]"></i></div>Llcmerandia@gmail.com</li>
              <li className="flex items-start gap-2 text-gray-300 text-sm"><div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0"><i className="ri-phone-line text-[#FFD700]"></i></div>7869123424</li>
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

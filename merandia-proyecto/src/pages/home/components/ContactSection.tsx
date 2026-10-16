import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

// Consigue tu clave gratis en https://web3forms.com (solo con tu correo, sin backend).
// Reemplaza esto por la clave real antes de publicar el sitio.
const WEB3FORMS_ACCESS_KEY = '498b7c46-3a69-483e-8689-c1a3e1afa5ce';

export default function ContactSection() {
  const { t } = useTranslation();
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: campo invisible para humanos. Si un bot lo llena, descartamos
    // el envío en silencio (sin avisarle que fue detectado) y no gastamos cuota
    // del servicio de correo en spam.
    const honeypot = (form.elements.namedItem('company_website') as HTMLInputElement)?.value;
    if (honeypot) {
      form.reset();
      setCharCount(0);
      setStatus('success');
      return;
    }

    setLoading(true);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Nuevo mensaje desde el sitio de Merandia',
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.success) { setStatus('success'); form.reset(); setCharCount(0); }
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
        <form id="contact-form" onSubmit={handleSubmit} className="bg-[#FAFAF8] rounded-3xl p-12">
          {/* Honeypot anti-spam: oculto visualmente y fuera del flujo de tabulación.
              Un humano nunca lo ve ni lo llena; los bots que auto-rellenan formularios sí. */}
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute w-px h-px opacity-0 overflow-hidden -z-10"
            style={{ left: '-9999px' }}
          />
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

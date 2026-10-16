const floatingButtons = [
  {
    href: 'https://wa.me/50498765432',
    bg: 'bg-[#25D366]',
    icon: 'ri-whatsapp-fill',
    label: 'WhatsApp',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61595042845069',
    bg: 'bg-[#1877F2]',
    icon: 'ri-facebook-fill',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/merandia_oficial/',
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

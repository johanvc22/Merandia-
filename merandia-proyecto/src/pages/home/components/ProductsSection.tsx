import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import { productBgColors } from './productBgColors';

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
    id: 'alimorca',
    nameKey: 'brand_alimorca_name',
    descKey: 'brand_alimorca_desc',
    color: '#F5A623',
    accentColor: '#2E7D32',
    types: [
      {
        typeKey: 'products_soya',
        products: [
          { id: 'alimorca-1', nameKey: 'alimorca_1_name', presKey: 'alimorca_1_pres', image: '/images/products/alimorca-soya-430ml.png' },
          { id: 'alimorca-2', nameKey: 'alimorca_2_name', presKey: 'alimorca_2_pres', image: '/images/products/alimorca-soya-500ml.png' },
          { id: 'alimorca-3', nameKey: 'alimorca_3_name', presKey: 'alimorca_3_pres', image: '/images/products/alimorca-soya-750ml.png' },
          { id: 'alimorca-4', nameKey: 'alimorca_4_name', presKey: 'alimorca_4_pres', image: '/images/products/alimorca-soya-828ml.png' },
          { id: 'alimorca-5', nameKey: 'alimorca_5_name', presKey: 'alimorca_5_pres', image: '/images/products/alimorca-soya-900ml.png' },
          { id: 'alimorca-6', nameKey: 'alimorca_6_name', presKey: 'alimorca_6_pres', image: '/images/products/alimorca-soya-1000ml.png' },
          { id: 'alimorca-7', nameKey: 'alimorca_7_name', presKey: 'alimorca_7_pres', image: '/images/products/alimorca-soya-9l.png' },
          { id: 'alimorca-8', nameKey: 'alimorca_8_name', presKey: 'alimorca_8_pres', image: '/images/products/alimorca-soya-18l.png' },
        ],
      },
      {
        typeKey: 'products_palma',
        products: [
          { id: 'alimorca-p1', nameKey: 'alimorca_p1_name', presKey: 'alimorca_p1_pres', image: '/images/products/alimorca-palma-430ml.png' },
          { id: 'alimorca-p2', nameKey: 'alimorca_p2_name', presKey: 'alimorca_p2_pres', image: '/images/products/alimorca-palma-500ml.png' },
          { id: 'alimorca-p3', nameKey: 'alimorca_p3_name', presKey: 'alimorca_p3_pres', image: '/images/products/alimorca-palma-750ml.png' },
          { id: 'alimorca-p4', nameKey: 'alimorca_p4_name', presKey: 'alimorca_p4_pres', image: '/images/products/alimorca-palma-828ml.png' },
          { id: 'alimorca-p5', nameKey: 'alimorca_p5_name', presKey: 'alimorca_p5_pres', image: '/images/products/alimorca-palma-900ml.png' },
          { id: 'alimorca-p6', nameKey: 'alimorca_p6_name', presKey: 'alimorca_p6_pres', image: '/images/products/alimorca-palma-1000ml.png' },
          { id: 'alimorca-p7', nameKey: 'alimorca_p7_name', presKey: 'alimorca_p7_pres', image: '/images/products/alimorca-palma-9l.png' },
          { id: 'alimorca-p8', nameKey: 'alimorca_p8_name', presKey: 'alimorca_p8_pres', image: '/images/products/alimorca-palma-18l.png' },
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
        typeKey: 'products_soya',
        products: [
          { id: 'del-1', nameKey: 'del_1_name', presKey: 'del_1_pres', image: '/images/products/delsarten-soya-430ml.png' },
          { id: 'del-2', nameKey: 'del_2_name', presKey: 'del_2_pres', image: '/images/products/delsarten-soya-500ml.png' },
          { id: 'del-3', nameKey: 'del_3_name', presKey: 'del_3_pres', image: '/images/products/delsarten-soya-750ml.png' },
          { id: 'del-4', nameKey: 'del_4_name', presKey: 'del_4_pres', image: '/images/products/delsarten-soya-828ml.png' },
          { id: 'del-5', nameKey: 'del_5_name', presKey: 'del_5_pres', image: '/images/products/delsarten-soya-900ml.png' },
          { id: 'del-6', nameKey: 'del_6_name', presKey: 'del_6_pres', image: '/images/products/delsarten-soya-1000ml.png' },
          { id: 'del-7', nameKey: 'del_7_name', presKey: 'del_7_pres', image: '/images/products/delsarten-soya-9l.png' },
          { id: 'del-8', nameKey: 'del_8_name', presKey: 'del_8_pres', image: '/images/products/delsarten-soya-18l.png' },
        ],
      },
      {
        typeKey: 'products_palma',
        products: [
          { id: 'del-p1', nameKey: 'del_p1_name', presKey: 'del_p1_pres', image: '/images/products/delsarten-palma-430ml.png' },
          { id: 'del-p2', nameKey: 'del_p2_name', presKey: 'del_p2_pres', image: '/images/products/delsarten-palma-500ml.png' },
          { id: 'del-p3', nameKey: 'del_p3_name', presKey: 'del_p3_pres', image: '/images/products/delsarten-palma-750ml.png' },
          { id: 'del-p4', nameKey: 'del_p4_name', presKey: 'del_p4_pres', image: '/images/products/delsarten-palma-828ml.png' },
          { id: 'del-p5', nameKey: 'del_p5_name', presKey: 'del_p5_pres', image: '/images/products/delsarten-palma-900ml.png' },
          { id: 'del-p6', nameKey: 'del_p6_name', presKey: 'del_p6_pres', image: '/images/products/delsarten-palma-1000ml.png' },
          { id: 'del-p7', nameKey: 'del_p7_name', presKey: 'del_p7_pres', image: '/images/products/delsarten-palma-9l.png' },
          { id: 'del-p8', nameKey: 'del_p8_name', presKey: 'del_p8_pres', image: '/images/products/delsarten-palma-18l.png' },
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
              <div
                className="rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(to bottom, ${productBgColors[product.image]?.top || '#ffffff'}, ${productBgColors[product.image]?.bottom || '#ffffff'})`,
                }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, black 88%, transparent 100%)',
                      maskImage: 'radial-gradient(ellipse 100% 100% at center, black 88%, transparent 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center">
                      <i className="ri-zoom-in-line text-base" style={{ color: accentColor }}></i>
                    </div>
                  </div>
                </div>
                <div
                  className="px-3 py-3"
                  style={{
                    background: `linear-gradient(to bottom, ${productBgColors[product.image]?.bottom || '#ffffff'}, #ffffff 60%)`,
                  }}
                >
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
        className="rounded-2xl overflow-hidden max-w-sm w-full relative"
        style={{
          background: `linear-gradient(to bottom, ${productBgColors[product.image]?.top || '#ffffff'}, ${productBgColors[product.image]?.bottom || '#ffffff'})`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/90 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-[#2C2C2C]"></i>
        </button>
        <div className="relative overflow-hidden h-80">
          <img
            src={product.image}
            alt={t(product.nameKey)}
            className="w-full h-full object-contain object-center"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, black 90%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 100% 100% at center, black 90%, transparent 100%)',
            }}
          />
        </div>
        <div
          className="px-6 py-5"
          style={{
            background: `linear-gradient(to bottom, ${productBgColors[product.image]?.bottom || '#ffffff'}, #ffffff 60%)`,
          }}
        >
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
  const [activeBrand, setActiveBrand] = useState<string>('alimorca');
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

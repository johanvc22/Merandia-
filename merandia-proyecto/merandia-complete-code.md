# MERANDIA - CODIGO COMPLETO DEL PROYECTO
# React 19 + TypeScript + TailwindCSS + Vite | ES/EN i18n
# Fecha: 2026-04-24

================================================================================
## ARCHIVOS DE CONFIGURACION
================================================================================

--- index.html ---
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Merandia - Aceites y Margarinas Premium</title>
<meta name="description" content="Merandia ofrece aceites premium y margarinas suaves de la mas alta calidad." />
<meta name="keywords" content="Merandia, aceites premium, margarinas, productos de cocina" />
<meta name="last-modified" content="2026-03-24" />
<meta property="og:title" content="Merandia - Aceites y Margarinas Premium" />
<meta property="og:description" content="Calidad que acompana cada preparacion." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css">
</head>
<body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body>
</html>

--- package.json ---
{"name":"react","private":true,"version":"0.0.0","type":"module","scripts":{"dev":"vite","build":"vite build","preview":"vite preview","lint":"eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0","type-check":"tsc --noEmit --project tsconfig.app.json"},"dependencies":{"i18next":"^25.3.2","react":"^19.1.2","react-dom":"^19.1.2","react-i18next":"^15.6.0","react-router-dom":"^7.6.3","i18next-browser-languagedetector":"^8.2.0","firebase":"12.0.0","@supabase/supabase-js":"2.57.4","@stripe/react-stripe-js":"4.0.2","recharts":"3.2.0","lucide-react":"^0.469.0"},"devDependencies":{"@eslint/js":"^9.30.1","@types/react":"^19.1.8","@types/react-dom":"^19.1.6","@vitejs/plugin-react-swc":"^3.10.2","autoprefixer":"^10.4.21","eslint":"^9.30.1","eslint-plugin-react-hooks":"^5.2.0","eslint-plugin-react-refresh":"^0.4.20","globals":"^16.3.0","postcss":"^8.5.6","tailwindcss":"^3.4.17","typescript":"~5.8.3","typescript-eslint":"^8.35.1","vite":"^7.0.3","unplugin-auto-import":"^19.3.0","source-map":"^0.7.6","jiti":"^2.6.1"}}

--- vite.config.ts ---
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";
const base = process.env.BASE_PATH || "/";
const isPreview = process.env.IS_PREVIEW ? true : false;
export default defineConfig({
define: { __BASE_PATH__: JSON.stringify(base), __IS_PREVIEW__: JSON.stringify(isPreview), __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""), __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""), __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || "") },
plugins: [react(), AutoImport({ imports: [{ react: ["React","useState","useEffect","useContext","useReducer","useCallback","useMemo","useRef","useImperativeHandle","useLayoutEffect","useDebugValue","useDeferredValue","useId","useInsertionEffect","useSyncExternalStore","useTransition","startTransition","lazy","memo","forwardRef","createContext","createElement","cloneElement","isValidElement"] },{ "react-router-dom": ["useNavigate","useLocation","useParams","useSearchParams","Link","NavLink","Navigate","Outlet"] },{ "react-i18next": ["useTranslation","Trans"] }], dts: true })],
base, build: { sourcemap: true, outDir: "out" },
resolve: { alias: { "@": resolve(__dirname, "./src") } },
server: { port: 3000, host: "0.0.0.0" }
});

--- tailwind.config.ts ---
/** @type {import('tailwindcss').Config} */
export default { content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"], theme: { extend: {} }, plugins: [] }

--- src/index.css ---
@tailwind base;
@tailwind components;
@tailwind utilities;

================================================================================
## ARCHIVOS BASE (src/)
================================================================================

--- src/main.tsx ---
import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)

--- src/App.tsx ---
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
function App() {
return (<I18nextProvider i18n={i18n}><BrowserRouter basename={__BASE_PATH__}><AppRoutes /></BrowserRouter></I18nextProvider>);
}
export default App;

--- src/router/index.ts ---
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";
let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;
declare global { interface Window { REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>; } }
export const navigatePromise = new Promise<NavigateFunction>((resolve) => { navigateResolver = resolve; });
export function AppRoutes() {
const element = useRoutes(routes);
const navigate = useNavigate();
useEffect(() => { window.REACT_APP_NAVIGATE = navigate; navigateResolver(window.REACT_APP_NAVIGATE); });
return element;
}

--- src/router/config.tsx ---
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
const routes: RouteObject[] = [{ path: "/", element: <Home /> },{ path: "*", element: <NotFound /> }];
export default routes;

--- src/i18n/index.ts ---
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';
i18n.use(LanguageDetector).use(initReactI18next).init({ lng: 'es', fallbackLng: 'es', debug: false, resources: messages, interpolation: { escapeValue: false } });
export default i18n;

--- src/i18n/local/index.ts ---
const modules = import.meta.glob('./*/*.ts', { eager: true });
const messages: Record<string, { translation: Record<string, string> }> = {};
Object.keys(modules).forEach((path) => {
const match = path.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
if (match) {
const [, lang] = match;
const module = modules[path] as { default?: Record<string, string> };
if (!messages[lang]) messages[lang] = { translation: {} };
if (module.default) messages[lang].translation = { ...messages[lang].translation, ...module.default };
}
});
export default messages;

--- src/pages/NotFound.tsx ---
import { useLocation } from "react-router-dom";
export default function NotFound() {
const location = useLocation();
return (
<div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
<h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">404</h1>
<div className="relative z-10">
<h1 className="text-xl md:text-2xl font-semibold mt-6">This page has not been generated</h1>
<p className="mt-2 text-base text-gray-400 font-mono">{location.pathname}</p>
<p className="mt-4 text-lg md:text-xl text-gray-500">Tell me more about this page, so I can generate it</p>
</div>
</div>
);
}

--- src/pages/home/page.tsx ---
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import ProcessSection from './components/ProcessSection';
import StatsSection from './components/StatsSection';
import ProductsSection from './components/ProductsSection';
import DistributorsSection from './components/DistributorsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
export default function HomePage() {
return (
<div className="min-h-screen bg-white">
<Navbar /><HeroSection /><WelcomeSection /><ProcessSection /><StatsSection />
<ProductsSection /><DistributorsSection /><CTASection /><LocationSection />
<ContactSection /><Footer /><FloatingButtons />
</div>
);
}

================================================================================
## TRADUCCIONES
================================================================================

--- src/i18n/local/es/home.ts ---
const es: Record<string, string> = {
nav_inicio:'Inicio',nav_sobre:'Sobre Nosotros',nav_que:'Que Hacemos',nav_productos:'Productos',nav_contacto:'Contacto',lang_switch:'EN',
hero_title:'Envasado y distribucion de aceites con calidad y seguridad',hero_btn_products:'Ver productos',hero_btn_info:'Solicitar informacion',
about_label:'Sobre Nosotros',about_title:'Comprometidos con la',about_title_accent:'calidad operativa',
about_p1:'Merandia es una empresa Colombia dedicada al envasado, almacenamiento y distribucion de aceites de palma y soya. Nuestra actividad se centra en garantizar que cada producto llegue al cliente en condiciones optimas, cumpliendo con los mas altos estandares de inocuidad y trazabilidad.',
about_p2:'Contamos con instalaciones especializadas para el manejo seguro de aceites en volumen, aplicando protocolos rigurosos de control de calidad en cada etapa del proceso logistico: recepcion, envasado, almacenamiento y despacho.',
about_feat1:'Control de calidad certificado',about_feat2:'Distribucion nacional',about_feat3:'Almacenamiento especializado',about_feat4:'Trazabilidad completa',
process_label:'Nuestras Operaciones',process_title:'Que hacemos?',process_subtitle:'Nos especializamos en tres actividades clave que garantizan que el aceite llegue a tu negocio en perfectas condiciones',process_service:'Servicio',
process_1_title:'Envasado',process_1_desc:'Envasamos aceites de palma y soya en diversas presentaciones: botellas de 250ml, 430ml, 500ml, 830ml, 900ml, 1L, 9L y garrafas de 20L, bajo estrictos protocolos de higiene y seguridad alimentaria.',
process_1_d1:'Lineas de envasado de alta capacidad',process_1_d2:'Control de hermeticidad y peso',process_1_d3:'Etiquetado segun normativas nacionales',process_1_d4:'Trazabilidad por lote de produccion',
process_2_title:'Almacenamiento',process_2_desc:'Disponemos de bodegas climatizadas y adecuadas para el manejo seguro de aceites en volumen, con control de temperatura, humedad y condiciones sanitarias certificadas.',
process_2_d1:'Bodegas de temperatura controlada',process_2_d2:'Sistema FIFO para rotacion de inventario',process_2_d3:'Monitoreo continuo de condiciones',process_2_d4:'Capacidad para almacenamiento a granel',
process_3_title:'Distribucion',process_3_desc:'Distribuimos nuestros productos a distribuidores, comercios, supermercados y mayoristas en todo Honduras, garantizando tiempos de entrega y condiciones de transporte adecuadas.',
process_3_d1:'Cobertura nacional en Honduras',process_3_d2:'Flota de transporte adecuada',process_3_d3:'Seguimiento logistico de pedidos',process_3_d4:'Distribucion a mayoristas y minoristas',
stats_label:'Nuestras Fortalezas',stats_title:'Por que elegirnos?',stats_subtitle:'Somos un aliado confiable para distribuidores y negocios que necesitan abastecerse de aceites con garantia de calidad',
stats_1_value:'Calidad',stats_1_label:'Garantizada',stats_1_desc:'Cada lote pasa por controles de calidad rigurosos antes de ser despachado, asegurando que el producto cumpla con las normativas alimentarias vigentes.',
stats_2_value:'Cumplimiento',stats_2_label:'Normativo',stats_2_desc:'Operamos bajo estrictas normativas de inocuidad alimentaria, con procesos documentados y trazables en cada etapa de nuestra cadena operativa.',
stats_3_value:'Eficiencia',stats_3_label:'Logistica',stats_3_desc:'Nuestra capacidad operativa nos permite responder con agilidad a los pedidos, asegurando entregas a tiempo y en condiciones optimas a nivel nacional.',
stats_feat1:'Cobertura nacional en Honduras',stats_feat2:'Aceites de palma y soya',stats_feat3:'Multiples presentaciones',stats_feat4:'Atencion comercial directa',
products_label:'Catalogo',products_title:'Nuestros Productos',products_subtitle:'Explora nuestro portafolio de marcas y presentaciones disponibles para distribucion',products_all_brands:'Todas las marcas',products_presentations:'Presentaciones',products_available:'Disponible en',products_request_btn:'Solicitar informacion',products_view_btn:'Ver detalle',products_close:'Cerrar',products_vegetal:'Aceite Vegetal',products_soya:'Aceite de Soya',
brand_mia_name:'Mi Aceite',brand_mia_desc:'Marca hondurena de aceites envasados para el mercado domestico y comercial.',
mia_veg_1_name:'Mi Aceite Vegetal 250ml',mia_veg_1_pres:'250ml',mia_veg_2_name:'Mi Aceite Vegetal 500ml',mia_veg_2_pres:'500ml',mia_veg_3_name:'Mi Aceite Vegetal 830ml',mia_veg_3_pres:'830ml',mia_veg_4_name:'Mi Aceite Vegetal 900ml',mia_veg_4_pres:'900ml',mia_veg_5_name:'Mi Aceite Vegetal 1L',mia_veg_5_pres:'1L',mia_veg_6_name:'Mi Aceite Vegetal 9L',mia_veg_6_pres:'9L',mia_veg_7_name:'Mi Aceite Vegetal 20L',mia_veg_7_pres:'20L',
mia_soy_1_name:'Mi Aceite Soya 250ml',mia_soy_1_pres:'250ml',mia_soy_2_name:'Mi Aceite Soya 500ml',mia_soy_2_pres:'500ml',mia_soy_3_name:'Mi Aceite Soya 830ml',mia_soy_3_pres:'830ml',mia_soy_4_name:'Mi Aceite Soya 900ml',mia_soy_4_pres:'900ml',mia_soy_5_name:'Mi Aceite Soya 1L',mia_soy_5_pres:'1L',mia_soy_6_name:'Mi Aceite Soya 9L',mia_soy_6_pres:'9L',mia_soy_7_name:'Mi Aceite Soya 20L',mia_soy_7_pres:'20L',
brand_del_name:'Delsarten',brand_del_desc:'Linea de aceites envasados con estandares de calidad para el sector comercial y mayorista.',
del_veg_1_name:'Delsarten Vegetal 250ml',del_veg_1_pres:'250ml',del_veg_2_name:'Delsarten Vegetal 500ml',del_veg_2_pres:'500ml',del_veg_3_name:'Delsarten Vegetal 830ml',del_veg_3_pres:'830ml',del_veg_4_name:'Delsarten Vegetal 900ml',del_veg_4_pres:'900ml',del_veg_5_name:'Delsarten Vegetal 1L',del_veg_5_pres:'1L',del_veg_6_name:'Delsarten Vegetal 9L',del_veg_6_pres:'9L',del_veg_7_name:'Delsarten Vegetal 20L',del_veg_7_pres:'20L',
del_soy_1_name:'Delsarten Soya 250ml',del_soy_1_pres:'250ml',del_soy_2_name:'Delsarten Soya 500ml',del_soy_2_pres:'500ml',del_soy_3_name:'Delsarten Soya 830ml',del_soy_3_pres:'830ml',del_soy_4_name:'Delsarten Soya 900ml',del_soy_4_pres:'900ml',del_soy_5_name:'Delsarten Soya 1L',del_soy_5_pres:'1L',del_soy_6_name:'Delsarten Soya 9L',del_soy_6_pres:'9L',del_soy_7_name:'Delsarten Soya 20L',del_soy_7_pres:'20L',
product_btn:'Solicitar informacion',
cta_quality_label:'Calidad operativa',cta_quality_title:'Envasado\ncon estandares\nindustriales',cta_title:'Necesitas un proveedor confiable?',cta_desc:'Contactanos y cuentanos las necesidades de tu negocio. Estamos listos para atender pedidos de distribuidores, comercios y mayoristas.',cta_btn_info:'Solicitar informacion',cta_btn_products:'Ver productos',
sectors_label:'Mercado',sectors_title:'A quien distribuimos?',sectors_subtitle:'Atendemos distintos sectores del mercado hondureno con soluciones de suministro adaptadas a cada necesidad',
sector_1_title:'Distribuidores Mayoristas',sector_1_desc:'Proveemos a distribuidores que abastecen multiples puntos de venta a nivel regional y nacional.',
sector_2_title:'Supermercados y Tiendas',sector_2_desc:'Abastecemos supermercados, pulperias y negocios de abarrotes con presentaciones adecuadas para venta al detalle.',
sector_3_title:'Industria Alimentaria',sector_3_desc:'Suministramos aceite a granel y en presentaciones grandes para empresas del sector alimentario que lo usan como insumo.',
sector_4_title:'Restaurantes y Hoteles',sector_4_desc:'Atendemos al sector de alimentos y hospitalidad con presentaciones en garrafa de 20L para uso intensivo.',
sector_5_title:'Mayoristas',sector_5_desc:'Trabajamos con mayoristas que requieren volumenes altos de producto con condiciones comerciales especificas.',
sector_6_title:'Instituciones y Programas',sector_6_desc:'Abastecemos programas sociales, instituciones publicas y privadas con aceites bajo especificaciones requeridas.',
sectors_cta_title:'Tu negocio no esta en la lista?',sectors_cta_desc:'Contactanos y evalua con nuestro equipo comercial si podemos atender tu necesidad de suministro de aceites',sectors_cta_btn:'Solicitar informacion',
location_label:'Nuestra Ubicacion',location_title:'Nuestra Ubicacion',location_subtitle:'Encuentranos facilmente y contactanos',location_address_label:'Direccion',location_email_label:'Correo',location_phone_label:'Telefono',location_desc:'Visitenos o contactenos para conocer mas sobre nuestros productos. Estamos disponibles para brindarte la mejor atencion.',location_btn:'Ver en Google Maps',
contact_title:'Contactanos',contact_subtitle:'Estamos aqui para ayudarte',contact_name:'Nombre',contact_email:'Correo Electronico',contact_phone:'Telefono',contact_message:'Mensaje',contact_submit:'Enviar Mensaje',contact_sending:'Enviando...',contact_success:'Mensaje enviado exitosamente! Nos pondremos en contacto pronto.',contact_error:'Ocurrio un error al enviar. Por favor intenta nuevamente.',contact_chars:'Maximo 500 caracteres',
footer_tagline:'Envasado, almacenamiento y distribucion de aceites de calidad en Honduras.',footer_products_title:'Productos',footer_palm:'Aceite de Palma',footer_soya:'Aceite de Soya',footer_presentations:'Presentaciones',footer_company_title:'Empresa',footer_about:'Sobre Nosotros',footer_what:'Que Hacemos',footer_why:'Por Que Elegirnos',footer_contact_title:'Contacto',footer_sectors:'Sectores atendidos',footer_copyright:'2025 Merandia. Todos los derechos reservados.',footer_privacy:'Privacidad',footer_terms:'Terminos',
};
export default es;

--- src/i18n/local/en/home.ts ---
const en: Record<string, string> = {
nav_inicio:'Home',nav_sobre:'About Us',nav_que:'What We Do',nav_productos:'Products',nav_contacto:'Contact',lang_switch:'ES',
hero_title:'Oil packaging and distribution with quality and safety',hero_btn_products:'View products',hero_btn_info:'Request information',
about_label:'About Us',about_title:'Committed to',about_title_accent:'operational quality',
about_p1:'Merandia is a Honduran company dedicated to the packaging, storage, and distribution of palm and soybean oils. Our activity focuses on ensuring that each product reaches the customer in optimal conditions, meeting the highest standards of food safety and traceability.',
about_p2:'We have specialized facilities for the safe handling of oils in volume, applying rigorous quality control protocols at every stage of the logistics process: reception, packaging, storage, and dispatch.',
about_feat1:'Certified quality control',about_feat2:'National distribution',about_feat3:'Specialized storage',about_feat4:'Full traceability',
process_label:'Our Operations',process_title:'What do we do?',process_subtitle:'We specialize in three key activities that ensure oil reaches your business in perfect condition',process_service:'Service',
process_1_title:'Packaging',process_1_desc:'We package palm and soybean oils in various presentations: 250ml, 430ml, 500ml, 830ml, 900ml, 1L, 9L bottles and 20L jugs, under strict hygiene and food safety protocols.',
process_1_d1:'High-capacity packaging lines',process_1_d2:'Seal integrity and weight control',process_1_d3:'Labeling per national regulations',process_1_d4:'Traceability per production batch',
process_2_title:'Storage',process_2_desc:'We have climate-controlled warehouses suitable for the safe handling of bulk oils, with temperature, humidity, and certified sanitary condition controls.',
process_2_d1:'Temperature-controlled warehouses',process_2_d2:'FIFO system for inventory rotation',process_2_d3:'Continuous condition monitoring',process_2_d4:'Bulk storage capacity',
process_3_title:'Distribution',process_3_desc:'We distribute our products to distributors, retailers, supermarkets, and wholesalers throughout Honduras, ensuring timely delivery and proper transport conditions.',
process_3_d1:'Nationwide coverage in Honduras',process_3_d2:'Suitable transport fleet',process_3_d3:'Order logistics tracking',process_3_d4:'Distribution to wholesalers and retailers',
stats_label:'Our Strengths',stats_title:'Why choose us?',stats_subtitle:'We are a reliable partner for distributors and businesses that need quality-guaranteed oil supply',
stats_1_value:'Quality',stats_1_label:'Guaranteed',stats_1_desc:'Each batch goes through rigorous quality controls before dispatch, ensuring the product meets current food regulations.',
stats_2_value:'Regulatory',stats_2_label:'Compliance',stats_2_desc:'We operate under strict food safety regulations, with documented and traceable processes at every stage of our operational chain.',
stats_3_value:'Logistics',stats_3_label:'Efficiency',stats_3_desc:'Our operational capacity allows us to respond to orders swiftly, ensuring timely deliveries in optimal conditions nationwide.',
stats_feat1:'Nationwide coverage in Honduras',stats_feat2:'Palm and soybean oils',stats_feat3:'Multiple presentations',stats_feat4:'Direct commercial support',
products_label:'Catalog',products_title:'Our Products',products_subtitle:'Explore our brand portfolio and available presentations for distribution',products_all_brands:'All brands',products_presentations:'Presentations',products_available:'Available in',products_request_btn:'Request information',products_view_btn:'View detail',products_close:'Close',products_vegetal:'Vegetable Oil',products_soya:'Soybean Oil',
brand_mia_name:'Mi Aceite',brand_mia_desc:'Honduran brand of packaged oils for the domestic and commercial market.',
mia_veg_1_name:'Mi Aceite Vegetable 250ml',mia_veg_1_pres:'250ml',mia_veg_2_name:'Mi Aceite Vegetable 500ml',mia_veg_2_pres:'500ml',mia_veg_3_name:'Mi Aceite Vegetable 830ml',mia_veg_3_pres:'830ml',mia_veg_4_name:'Mi Aceite Vegetable 900ml',mia_veg_4_pres:'900ml',mia_veg_5_name:'Mi Aceite Vegetable 1L',mia_veg_5_pres:'1L',mia_veg_6_name:'Mi Aceite Vegetable 9L',mia_veg_6_pres:'9L',mia_veg_7_name:'Mi Aceite Vegetable 20L',mia_veg_7_pres:'20L',
mia_soy_1_name:'Mi Aceite Soybean 250ml',mia_soy_1_pres:'250ml',mia_soy_2_name:'Mi Aceite Soybean 500ml',mia_soy_2_pres:'500ml',mia_soy_3_name:'Mi Aceite Soybean 830ml',mia_soy_3_pres:'830ml',mia_soy_4_name:'Mi Aceite Soybean 900ml',mia_soy_4_pres:'900ml',mia_soy_5_name:'Mi Aceite Soybean 1L',mia_soy_5_pres:'1L',mia_soy_6_name:'Mi Aceite Soybean 9L',mia_soy_6_pres:'9L',mia_soy_7_name:'Mi Aceite Soybean 20L',mia_soy_7_pres:'20L',
brand_del_name:'Delsarten',brand_del_desc:'Line of packaged oils with quality standards for the commercial and wholesale sector.',
del_veg_1_name:'Delsarten Vegetable 250ml',del_veg_1_pres:'250ml',del_veg_2_name:'Delsarten Vegetable 500ml',del_veg_2_pres:'500ml',del_veg_3_name:'Delsarten Vegetable 830ml',del_veg_3_pres:'830ml',del_veg_4_name:'Delsarten Vegetable 900ml',del_veg_4_pres:'900ml',del_veg_5_name:'Delsarten Vegetable 1L',del_veg_5_pres:'1L',del_veg_6_name:'Delsarten Vegetable 9L',del_veg_6_pres:'9L',del_veg_7_name:'Delsarten Vegetable 20L',del_veg_7_pres:'20L',
del_soy_1_name:'Delsarten Soybean 250ml',del_soy_1_pres:'250ml',del_soy_2_name:'Delsarten Soybean 500ml',del_soy_2_pres:'500ml',del_soy_3_name:'Delsarten Soybean 830ml',del_soy_3_pres:'830ml',del_soy_4_name:'Delsarten Soybean 900ml',del_soy_4_pres:'900ml',del_soy_5_name:'Delsarten Soybean 1L',del_soy_5_pres:'1L',del_soy_6_name:'Delsarten Soybean 9L',del_soy_6_pres:'9L',del_soy_7_name:'Delsarten Soybean 20L',del_soy_7_pres:'20L',
product_btn:'Request information',
cta_quality_label:'Operational quality',cta_quality_title:'Packaging\nto industrial\nstandards',cta_title:'Do you need a reliable supplier?',cta_desc:'Contact us and tell us about your business needs. We are ready to serve distributors, retailers, and wholesalers.',cta_btn_info:'Request information',cta_btn_products:'View products',
sectors_label:'Market',sectors_title:'Who do we supply?',sectors_subtitle:'We serve different sectors of the Honduran market with supply solutions tailored to each need',
sector_1_title:'Wholesale Distributors',sector_1_desc:'We supply distributors who serve multiple points of sale at regional and national level.',
sector_2_title:'Supermarkets & Stores',sector_2_desc:'We supply supermarkets, convenience stores, and grocery businesses with presentations suitable for retail.',
sector_3_title:'Food Industry',sector_3_desc:'We supply bulk oil and large-format presentations to food sector companies that use it as an ingredient.',
sector_4_title:'Restaurants & Hotels',sector_4_desc:'We serve the food and hospitality sector with 20L jug presentations for intensive use.',
sector_5_title:'Wholesalers',sector_5_desc:'We work with wholesalers that require high product volumes under specific commercial terms.',
sector_6_title:'Institutions & Programs',sector_6_desc:'We supply social programs, public and private institutions with oils meeting required specifications.',
sectors_cta_title:'Is your business not on the list?',sectors_cta_desc:'Contact us and evaluate with our commercial team if we can meet your oil supply needs',sectors_cta_btn:'Request information',
location_label:'Our Location',location_title:'Our Location',location_subtitle:'Find us easily and get in touch',location_address_label:'Address',location_email_label:'Email',location_phone_label:'Phone',location_desc:'Visit us or contact us to learn more about our products. We are available to provide you with the best service.',location_btn:'View on Google Maps',
contact_title:'Contact Us',contact_subtitle:'We are here to help you',contact_name:'Name',contact_email:'Email Address',contact_phone:'Phone',contact_message:'Message',contact_submit:'Send Message',contact_sending:'Sending...',contact_success:'Message sent successfully! We will get in touch soon.',contact_error:'An error occurred while sending. Please try again.',contact_chars:'Maximum 500 characters',
footer_tagline:'Packaging, storage, and distribution of quality oils in Honduras.',footer_products_title:'Products',footer_palm:'Palm Oil',footer_soya:'Soybean Oil',footer_presentations:'Presentations',footer_company_title:'Company',footer_about:'About Us',footer_what:'What We Do',footer_why:'Why Choose Us',footer_contact_title:'Contact',footer_sectors:'Sectors served',footer_copyright:'2025 Merandia. All rights reserved.',footer_privacy:'Privacy',footer_terms:'Terms',
};
export default en;

================================================================================
## COMPONENTES (src/pages/home/components/)
================================================================================

--- Navbar.tsx ---
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
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1B5E20] shadow-lg' : 'bg-[#1B5E20] shadow-lg'}`}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center">
<img alt="Merandia Logo" className="h-12 w-auto object-contain cursor-pointer brightness-0 invert" src="https://public.readdy.ai/ai/img_res/e7bfb264-c527-4e3e-894a-ffc0f976cd6f.png" onClick={() => handleNavClick('#home')} />
</div>
<div className="hidden lg:flex items-center gap-10">
{navLinks.map((link) => (
<button key={link.labelKey} onClick={() => handleNavClick(link.href)} className="text-white hover:text-[#FFD700] transition-colors duration-300 font-medium cursor-pointer whitespace-nowrap">{t(link.labelKey)}</button>
))}
<button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700] text-[#2C2C2C] hover:bg-[#FFC107] transition-all duration-300 font-semibold text-sm cursor-pointer whitespace-nowrap shadow-md"><i className="ri-translate-2 text-base"></i>{t('lang_switch')}</button>
</div>
<div className="flex lg:hidden items-center gap-3">
<button onClick={toggleLanguage} className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#FFD700] text-[#2C2C2C] hover:bg-[#FFC107] transition-all duration-300 font-semibold text-sm cursor-pointer whitespace-nowrap shadow-md"><i className="ri-translate-2 text-base"></i>{t('lang_switch')}</button>
<button className="w-10 h-10 flex items-center justify-center text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}><i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i></button>
</div>
</div>
{menuOpen && (
<div className="lg:hidden bg-[#1B5E20] border-t border-white/10 px-6 pb-4">
{navLinks.map((link) => (
<button key={link.labelKey} onClick={() => handleNavClick(link.href)} className="block w-full text-left py-3 text-white hover:text-[#FFD700] transition-colors duration-300 font-medium cursor-pointer border-b border-white/10">{t(link.labelKey)}</button>
))}
</div>
)}
</nav>
);
}

--- HeroSection.tsx ---
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
<img alt="Merandia Hero Background" className="w-full h-full object-cover object-top" src="https://static.readdy.ai/image/20c82946e4b055a084f66b494c31755d/084b4f8cfb97b9777c8cfc4c23fdda0f.jpeg" />
<div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 py-24">
<div className="max-w-xl">
<h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-8 drop-shadow-lg">{t('hero_title')}</h1>
<div className="flex flex-wrap gap-4">
<button onClick={scrollToProducts} className="group px-10 py-4 bg-[#FFD700] text-[#2C2C2C] rounded-full hover:bg-white hover:text-[#2C2C2C] transition-all duration-300 font-semibold flex items-center gap-3 hover:-translate-y-1 cursor-pointer whitespace-nowrap">{t('hero_btn_products')}<i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i></button>
<button onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="group px-10 py-4 bg-white/10 border border-white/40 text-white rounded-full hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-3 hover:-translate-y-1 cursor-pointer whitespace-nowrap backdrop-blur-sm">{t('hero_btn_info')}</button>
</div>
</div>
</div>
</section>
);
}

--- WelcomeSection.tsx ---
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
<h2 className="text-5xl font-bold text-[#2C2C2C] leading-tight mb-10">{t('about_title')} <span className="text-[#2E7D32]">{t('about_title_accent')}</span></h2>
<p className="text-lg text-[#2C2C2C] leading-relaxed mb-6">{t('about_p1')}</p>
<p className="text-base text-[#555] leading-relaxed mb-8">{t('about_p2')}</p>
<div className="grid grid-cols-2 gap-4">
{features.map((item) => (
<div key={item.key} className="flex items-center gap-3">
<div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2E7D32]/10 shrink-0"><i className={`${item.icon} text-[#2E7D32] text-lg`}></i></div>
<span className="text-sm text-[#2C2C2C] font-medium">{t(item.key)}</span>
</div>
))}
</div>
</div>
<div className="lg:col-span-2">
<div className="rounded-3xl overflow-hidden w-full h-[420px]">
<img alt="Instalaciones Merandia" className="w-full h-full object-cover object-top" src="https://readdy.ai/api/search-image?query=industrial%20food%20packaging%20facility%20interior%20with%20stainless%20steel%20equipment%20large%20storage%20tanks%20oil%20bottling%20machinery%20workers%20in%20safety%20equipment%20modern%20clean%20industrial%20warehouse%20Honduras%20Latin%20America%20professional%20industrial%20photography%20with%20natural%20lighting%20orderly%20and%20organized%20facility%20showing%20food%20safety%20standards%20and%20quality%20control%20processes&width=570&height=630&seq=about-facility-001&orientation=portrait" />
</div>
</div>
</div>
</div>
</section>
);
}

--- ProcessSection.tsx ---
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
{ icon: 'ri-flask-line', titleKey: 'process_1_title', descKey: 'process_1_desc', detailKeys: ['process_1_d1','process_1_d2','process_1_d3','process_1_d4'] },
{ icon: 'ri-archive-drawer-line', titleKey: 'process_2_title', descKey: 'process_2_desc', detailKeys: ['process_2_d1','process_2_d2','process_2_d3','process_2_d4'] },
{ icon: 'ri-truck-line', titleKey: 'process_3_title', descKey: 'process_3_desc', detailKeys: ['process_3_d1','process_3_d2','process_3_d3','process_3_d4'] },
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
<div key={service.titleKey} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
<div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#2E7D32]/10"><i className={`${service.icon} text-3xl text-[#2E7D32]`}></i></div>
<div>
<span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">{t('process_service')} 0{idx + 1}</span>
<h3 className="text-3xl font-bold text-[#2C2C2C]">{t(service.titleKey)}</h3>
</div>
</div>
<p className="text-base text-[#555] leading-relaxed mb-6">{t(service.descKey)}</p>
<ul className="space-y-3">
{service.detailKeys.map((key) => (
<li key={key} className="flex items-start gap-3 text-gray-700 text-sm">
<div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"><i className="ri-checkbox-circle-fill text-[#2E7D32] text-lg"></i></div>
{t(key)}
</li>
))}
</ul>
</div>
<div className={`rounded-3xl overflow-hidden w-full h-[360px] ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
<img alt={t(service.titleKey)} className="w-full h-full object-cover object-top" src={serviceImages[idx]} />
</div>
</div>
))}
</div>
</div>
</section>
);
}

--- StatsSection.tsx ---
import { useTranslation } from 'react-i18next';
import '../../../i18n';
export default function StatsSection() {
const { t } = useTranslation();
const advantages = [
{ icon: 'ri-shield-check-line', valueKey: 'stats_1_value', labelKey: 'stats_1_label', descKey: 'stats_1_desc' },
{ icon: 'ri-award-line', valueKey: 'stats_2_value', labelKey: 'stats_2_label', descKey: 'stats_2_desc' },
{ icon: 'ri-route-line', valueKey: 'stats_3_value', labelKey: 'stats_3_label', descKey: 'stats_3_desc' },
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
<div key={adv.valueKey} className="bg-white rounded-2xl p-10 text-center group hover:-translate-y-2 transition-all duration-300">
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
<div className="w-9 h-9 flex items-center justify-center shrink-0"><i className={`${feat.icon} text-[#2E7D32] text-xl`}></i></div>
<span className="text-sm text-[#2C2C2C] font-medium leading-snug">{t(feat.key)}</span>
</div>
))}
</div>
</div>
</section>
);
}

--- ProductsSection.tsx ---
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
interface Product { id: string; nameKey: string; presKey: string; image: string; }
interface ProductType { typeKey: string; products: Product[]; }
interface Brand { id: string; nameKey: string; descKey: string; color: string; accentColor: string; types: ProductType[]; }
const BRANDS: Brand[] = [
{ id: 'mia', nameKey: 'brand_mia_name', descKey: 'brand_mia_desc', color: '#F5A623', accentColor: '#2E7D32', types: [
{ typeKey: 'products_vegetal', products: [
{ id: 'mia-v1', nameKey: 'mia_veg_1_name', presKey: 'mia_veg_1_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20250ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v1&orientation=portrait' },
{ id: 'mia-v2', nameKey: 'mia_veg_2_name', presKey: 'mia_veg_2_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20500ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v2&orientation=portrait' },
{ id: 'mia-v3', nameKey: 'mia_veg_3_name', presKey: 'mia_veg_3_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20830ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v3&orientation=portrait' },
{ id: 'mia-v4', nameKey: 'mia_veg_4_name', presKey: 'mia_veg_4_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20900ml%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v4&orientation=portrait' },
{ id: 'mia-v5', nameKey: 'mia_veg_5_name', presKey: 'mia_veg_5_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%201%20liter%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v5&orientation=portrait' },
{ id: 'mia-v6', nameKey: 'mia_veg_6_name', presKey: 'mia_veg_6_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20jug%209%20liter%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v6&orientation=portrait' },
{ id: 'mia-v7', nameKey: 'mia_veg_7_name', presKey: 'mia_veg_7_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20container%2020%20liter%20yellow%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-v7&orientation=portrait' },
] },
{ typeKey: 'products_soya', products: [
{ id: 'mia-s1', nameKey: 'mia_soy_1_name', presKey: 'mia_soy_1_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20250ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s1&orientation=portrait' },
{ id: 'mia-s2', nameKey: 'mia_soy_2_name', presKey: 'mia_soy_2_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20500ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s2&orientation=portrait' },
{ id: 'mia-s3', nameKey: 'mia_soy_3_name', presKey: 'mia_soy_3_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20830ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s3&orientation=portrait' },
{ id: 'mia-s4', nameKey: 'mia_soy_4_name', presKey: 'mia_soy_4_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20900ml%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s4&orientation=portrait' },
{ id: 'mia-s5', nameKey: 'mia_soy_5_name', presKey: 'mia_soy_5_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%201%20liter%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s5&orientation=portrait' },
{ id: 'mia-s6', nameKey: 'mia_soy_6_name', presKey: 'mia_soy_6_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20jug%209%20liter%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s6&orientation=portrait' },
{ id: 'mia-s7', nameKey: 'mia_soy_7_name', presKey: 'mia_soy_7_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20container%2020%20liter%20green%20label%20clean%20white%20background%20product%20photography%20professional%20food%20packaging%20Honduras%20brand&width=400&height=500&seq=mia-s7&orientation=portrait' },
] },
] },
{ id: 'del', nameKey: 'brand_del_name', descKey: 'brand_del_desc', color: '#2E7D32', accentColor: '#F5A623', types: [
{ typeKey: 'products_vegetal', products: [
{ id: 'del-v1', nameKey: 'del_veg_1_name', presKey: 'del_veg_1_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20250ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v1&orientation=portrait' },
{ id: 'del-v2', nameKey: 'del_veg_2_name', presKey: 'del_veg_2_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20500ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v2&orientation=portrait' },
{ id: 'del-v3', nameKey: 'del_veg_3_name', presKey: 'del_veg_3_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20830ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v3&orientation=portrait' },
{ id: 'del-v4', nameKey: 'del_veg_4_name', presKey: 'del_veg_4_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20900ml%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v4&orientation=portrait' },
{ id: 'del-v5', nameKey: 'del_veg_5_name', presKey: 'del_veg_5_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%201%20liter%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v5&orientation=portrait' },
{ id: 'del-v6', nameKey: 'del_veg_6_name', presKey: 'del_veg_6_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20jug%209%20liter%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v6&orientation=portrait' },
{ id: 'del-v7', nameKey: 'del_veg_7_name', presKey: 'del_veg_7_pres', image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20large%20container%2020%20liter%20elegant%20green%20white%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-v7&orientation=portrait' },
] },
{ typeKey: 'products_soya', products: [
{ id: 'del-s1', nameKey: 'del_soy_1_name', presKey: 'del_soy_1_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20250ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s1&orientation=portrait' },
{ id: 'del-s2', nameKey: 'del_soy_2_name', presKey: 'del_soy_2_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20500ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s2&orientation=portrait' },
{ id: 'del-s3', nameKey: 'del_soy_3_name', presKey: 'del_soy_3_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20830ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s3&orientation=portrait' },
{ id: 'del-s4', nameKey: 'del_soy_4_name', presKey: 'del_soy_4_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%20900ml%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s4&orientation=portrait' },
{ id: 'del-s5', nameKey: 'del_soy_5_name', presKey: 'del_soy_5_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20bottle%201%20liter%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s5&orientation=portrait' },
{ id: 'del-s6', nameKey: 'del_soy_6_name', presKey: 'del_soy_6_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20jug%209%20liter%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s6&orientation=portrait' },
{ id: 'del-s7', nameKey: 'del_soy_7_name', presKey: 'del_soy_7_pres', image: 'https://readdy.ai/api/search-image?query=soybean%20cooking%20oil%20large%20container%2020%20liter%20elegant%20dark%20green%20label%20clean%20background%20product%20photography%20professional%20food%20packaging%20commercial%20brand&width=400&height=500&seq=del-s7&orientation=portrait' },
] },
] },
];
function ProductCarousel({ products, accentColor, onImageClick }: { products: Product[]; accentColor: string; onImageClick: (product: Product) => void }) {
const { t } = useTranslation();
const [currentIndex, setCurrentIndex] = useState(0);
const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
const visibleCount = 4;
const maxIndex = Math.max(0, products.length - visibleCount);
const next = useCallback(() => { setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)); }, [maxIndex]);
const prev = useCallback(() => { setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1)); }, [maxIndex]);
useEffect(() => { autoplayRef.current = setInterval(next, 3200); return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); }; }, [next]);
const resetAutoplay = () => { if (autoplayRef.current) clearInterval(autoplayRef.current); autoplayRef.current = setInterval(next, 3200); };
return (
<div className="relative">
<div className="overflow-hidden">
<div className="flex transition-transform duration-500 ease-in-out gap-4" style={{ transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 16 / visibleCount}px))` }}>
{products.map((product) => (
<div key={product.id} className="flex-shrink-0 cursor-pointer group" style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 16 / visibleCount}px)` }} onClick={() => onImageClick(product)}>
<div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
<div className="bg-gradient-to-b from-gray-50 to-white p-4 flex items-center justify-center h-44 relative overflow-hidden">
<img src={product.image} alt={t(product.nameKey)} className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center"><i className="ri-zoom-in-line text-sm" style={{ color: accentColor }}></i></div>
</div>
</div>
<div className="px-3 py-3 border-t border-gray-50">
<p className="text-xs font-semibold text-[#2C2C2C] leading-tight mb-1 truncate">{t(product.nameKey)}</p>
<span className="inline-block text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>{t(product.presKey)}</span>
</div>
</div>
</div>
))}
</div>
</div>
{products.length > visibleCount && (<>
<button onClick={() => { prev(); resetAutoplay(); }} className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer z-10"><i className="ri-arrow-left-s-line text-[#2C2C2C]"></i></button>
<button onClick={() => { next(); resetAutoplay(); }} className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer z-10"><i className="ri-arrow-right-s-line text-[#2C2C2C]"></i></button>
</>)}
{products.length > visibleCount && (
<div className="flex justify-center gap-1.5 mt-4">
{Array.from({ length: maxIndex + 1 }).map((_, i) => (
<button key={i} onClick={() => { setCurrentIndex(i); resetAutoplay(); }} className="w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer" style={{ backgroundColor: i === currentIndex ? accentColor : '#D1D5DB' }} />
))}
</div>
)}
</div>
);
}
function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
const { t } = useTranslation();
useEffect(() => {
const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
if (product) { document.addEventListener('keydown', handleKey); document.body.style.overflow = 'hidden'; }
return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
}, [product, onClose]);
if (!product) return null;
return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }} onClick={onClose}>
<div className="bg-white rounded-2xl overflow-hidden max-w-sm w-full relative" onClick={(e) => e.stopPropagation()}>
<button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/90 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"><i className="ri-close-line text-[#2C2C2C]"></i></button>
<div className="bg-gradient-to-b from-gray-50 to-white p-8 flex items-center justify-center h-72"><img src={product.image} alt={t(product.nameKey)} className="h-full w-auto object-contain" /></div>
<div className="px-6 py-5 border-t border-gray-100">
<h4 className="text-base font-bold text-[#2C2C2C] mb-2">{t(product.nameKey)}</h4>
<div className="flex items-center gap-2"><span className="text-xs text-[#777]">{t('products_presentations')}:</span><span className="text-xs font-semibold text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-full">{t(product.presKey)}</span></div>
</div>
</div>
</div>
);
}
export default function ProductsSection() {
const { t } = useTranslation();
const [activeBrand, setActiveBrand] = useState<string>('mia');
const [modalProduct, setModalProduct] = useState<Product | null>(null);
const scrollToContact = () => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
const currentBrand = BRANDS.find((b) => b.id === activeBrand) ?? BRANDS[0];
return (
<section id="products" className="bg-[#FAFAF8] py-20">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-10">
<p className="text-xs text-[#8C8C8C] mb-2 font-light uppercase tracking-widest">{t('products_label')}</p>
<h2 className="text-4xl font-bold text-[#2C2C2C] mb-3">{t('products_title')}</h2>
<p className="text-base text-[#8C8C8C] max-w-lg mx-auto">{t('products_subtitle')}</p>
</div>
<div className="flex justify-center mb-8">
<div className="inline-flex bg-white border border-gray-200 rounded-full p-1 gap-1">
{BRANDS.map((brand) => (
<button key={brand.id} onClick={() => setActiveBrand(brand.id)} className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap" style={activeBrand === brand.id ? { backgroundColor: brand.color, color: '#fff' } : { color: '#555', backgroundColor: 'transparent' }}>{t(brand.nameKey)}</button>
))}
</div>
</div>
<div className="text-center mb-8"><p className="text-sm text-[#777]">{t(currentBrand.descKey)}</p></div>
<div className="space-y-10" data-product-shop>
{currentBrand.types.map((type) => (
<div key={type.typeKey} className="bg-white rounded-2xl border border-gray-100 p-6">
<div className="flex items-center gap-3 mb-6"><div className="w-1 h-6 rounded-full" style={{ backgroundColor: currentBrand.color }} /><h3 className="text-base font-bold text-[#2C2C2C] uppercase tracking-wide">{t(type.typeKey)}</h3><span className="text-xs text-[#999] ml-1">- {type.products.length} {t('products_presentations').toLowerCase()}</span></div>
<div className="px-5"><ProductCarousel products={type.products} accentColor={currentBrand.accentColor} onImageClick={setModalProduct} /></div>
</div>
))}
</div>
<div className="text-center mt-10">
<button onClick={scrollToContact} className="group px-10 py-3.5 bg-[#2C2C2C] text-white rounded-full hover:bg-[#F5A623] hover:text-[#2C2C2C] transition-all duration-300 font-semibold flex items-center gap-3 mx-auto cursor-pointer whitespace-nowrap text-sm">{t('product_btn')}<i className="ri-arrow-right-line text-base group-hover:translate-x-1 transition-transform"></i></button>
</div>
</div>
<ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
</section>
);
}

--- DistributorsSection.tsx ---
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
const scrollToContact = () => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
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
<div key={sector.titleKey} className="bg-[#FAFAF8] rounded-2xl p-8 group hover:bg-[#2E7D32] transition-all duration-300 hover:-translate-y-1 cursor-default">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2E7D32]/10 mb-5 group-hover:bg-white/20 transition-colors duration-300"><i className={`${sector.icon} text-2xl text-[#2E7D32] group-hover:text-white transition-colors duration-300`}></i></div>
<h3 className="text-lg font-bold text-[#2C2C2C] mb-3 group-hover:text-white transition-colors duration-300">{t(sector.titleKey)}</h3>
<p className="text-sm text-[#777] leading-relaxed group-hover:text-white/80 transition-colors duration-300">{t(sector.descKey)}</p>
</div>
))}
</div>
<div className="bg-[#2E7D32] rounded-2xl p-12 text-center">
<h3 className="text-3xl font-bold text-white mb-4">{t('sectors_cta_title')}</h3>
<p className="text-white/80 mb-8 max-w-xl mx-auto">{t('sectors_cta_desc')}</p>
<button onClick={scrollToContact} className="px-10 py-4 bg-[#FFD700] text-[#2C2C2C] rounded-full font-bold hover:bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer whitespace-nowrap">{t('sectors_cta_btn')}</button>
</div>
</div>
</section>
);
}

--- CTASection.tsx ---
import { useTranslation } from 'react-i18next';
import '../../../i18n';
export default function CTASection() {
const { t } = useTranslation();
const scrollToContact = () => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
const scrollToProducts = () => { const el = document.querySelector('#products'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
return (
<section className="bg-[#FAFAF8] py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative min-h-[500px] bg-[#F5F1E8]">
<img alt="Merandia Operaciones" className="w-full h-full object-cover object-top" src="https://readdy.ai/api/search-image?query=professional%20food%20industry%20worker%20in%20white%20lab%20coat%20and%20safety%20helmet%20inspecting%20bottles%20of%20cooking%20oil%20on%20production%20line%20quality%20control%20in%20modern%20food%20processing%20facility%20clean%20industrial%20environment%20Honduras%20food%20packaging%20company%20professional%20corporate%20photography&width=700&height=700&seq=cta-operations-002&orientation=squarish" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white z-10">
<p className="text-xs tracking-[0.3em] mb-2 uppercase font-semibold text-[#FFD700]">{t('cta_quality_label')}</p>
<h3 className="text-4xl font-extrabold leading-tight whitespace-pre-line">{t('cta_quality_title')}</h3>
</div>
</div>
<div className="flex flex-col items-center justify-center p-12 lg:p-16 text-center">
<h3 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] leading-tight mb-6">{t('cta_title')}</h3>
<p className="text-lg text-[#8C8C8C] leading-relaxed mb-10 max-w-md">{t('cta_desc')}</p>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
<button onClick={scrollToContact} className="group flex-1 px-8 py-4 bg-[#2C2C2C] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2C2C2C] transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:-translate-y-1 cursor-pointer whitespace-nowrap">{t('cta_btn_info')}</button>
<button onClick={scrollToProducts} className="group flex-1 px-8 py-4 border border-[#2C2C2C] text-[#2C2C2C] rounded-full hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:-translate-y-1 cursor-pointer whitespace-nowrap">{t('cta_btn_products')}</button>
</div>
</div>
</div>
</div>
</div>
</section>
);
}

--- LocationSection.tsx ---
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
export default function LocationSection() {
const { t } = useTranslation();
const [mapHovered, setMapHovered] = useState(false);
const mapsUrl = 'https://www.google.com/maps/place/45+Anne+Ave,+Jacksonville,+FL+32254,+USA/@30.3232149,-81.7556088,17z/data=!3m1!4b1!4m6!3m5!1s0x88e5b919bc9baea9:0x391dc2864d86a558!8m2!3d30.3232149!4d-81.7530339!16s%2Fg%2F11c1zqw10p?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D';
const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1733.6!2d-81.7543213!3d30.3232149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b919bc9baea9%3A0x391dc2864d86a558!2s45%20Anne%20Ave%2C%20Jacksonville%2C%20FL%2032254%2C%20USA!5e0!3m2!1sen!2sus!4v1713200000001!5m2!1sen!2sus';
const contactItems = [
{ icon: 'ri-map-pin-2-fill', label: t('location_address_label'), content: (<><p className="text-sm font-semibold text-[#2C2C2C] leading-snug">45 ANNE AV JACKSONVILLE, FL 32254</p><p className="text-sm text-[#8C8C8C] mt-0.5">Jacksonville, United States</p></>) },
{ icon: 'ri-mail-line', label: t('location_email_label'), content: (<a href="mailto:merandiallc@gmail.com" className="text-sm font-medium text-[#2C2C2C] hover:text-[#B8860B] transition-colors duration-200">merandiallc@gmail.com</a>) },
{ icon: 'ri-phone-line', label: t('location_phone_label'), content: (<a href="tel:+17869123424" className="text-sm font-medium text-[#2C2C2C] hover:text-[#B8860B] transition-colors duration-200">+1 786 9123424</a>) },
];
return (
<section id="location" className="bg-[#FAFAF8] py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-14">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#B8860B] mb-3">{t('location_label')}</span>
<h2 className="text-4xl font-bold text-[#2C2C2C] mb-3">{t('location_title')}</h2>
<p className="text-base text-[#8C8C8C]">{t('location_subtitle')}</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-stretch">
<div className="relative rounded-2xl overflow-hidden cursor-pointer group" style={{ minHeight: '420px' }} onMouseEnter={() => setMapHovered(true)} onMouseLeave={() => setMapHovered(false)} onClick={() => window.open(mapsUrl, '_blank', 'noopener,noreferrer')}>
<iframe title="Merandia Location Map" src={embedUrl} width="100%" height="100%" style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '420px', pointerEvents: mapHovered ? 'none' : 'auto' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
<div className={`absolute inset-0 bg-[#2C2C2C]/40 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${mapHovered ? 'opacity-100' : 'opacity-0'}`}>
<div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFD700]"><i className="ri-external-link-line text-[#2C2C2C] text-2xl" /></div>
<span className="text-white text-sm font-semibold tracking-wide">{t('location_btn')}</span>
</div>
<div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 rounded-full px-3 py-1.5 pointer-events-none"><div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" /><span className="text-xs font-semibold text-[#2C2C2C]">Jacksonville, FL</span></div>
</div>
<div className="bg-white rounded-2xl border border-gray-100 flex flex-col justify-between px-8 py-9">
<div className="space-y-6">
{contactItems.map((item) => (
<div key={item.icon} className="flex items-start gap-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD700]/15 shrink-0 mt-0.5"><i className={`${item.icon} text-[#B8860B] text-lg`} /></div>
<div><p className="text-xs font-semibold uppercase tracking-widest text-[#8C8C8C] mb-1">{item.label}</p>{item.content}</div>
</div>
))}
</div>
<div className="border-t border-gray-100 my-7" />
<p className="text-sm text-[#8C8C8C] leading-relaxed mb-7">{t('location_desc')}</p>
<a href={mapsUrl} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#FFD700] text-[#2C2C2C] font-semibold rounded-full hover:bg-[#e6c200] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap text-sm"><i className="ri-map-pin-2-line text-base" />{t('location_btn')}</a>
</div>
</div>
</div>
</section>
);
}

--- ContactSection.tsx ---
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
const res = await fetch('https://readdy.ai/api/form/d71eu7rk1jkj467r5f60', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
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
{status === 'success' && (<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center font-medium">{t('contact_success')}</div>)}
{status === 'error' && (<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center font-medium">{t('contact_error')}</div>)}
<form id="contact-form" data-readdy-form="true" onSubmit={handleSubmit} className="bg-[#FAFAF8] rounded-3xl p-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div><label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_name')}</label><input id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all text-sm" /></div>
<div><label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_email')}</label><input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all text-sm" /></div>
</div>
<div className="mb-6"><label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_phone')}</label><input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all text-sm" /></div>
<div className="mb-6"><label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">{t('contact_message')}</label><textarea id="message" name="message" rows={6} maxLength={500} required onChange={(e) => setCharCount(e.target.value.length)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all resize-none text-sm" /><p className="text-xs text-[#8C8C8C] mt-1">{t('contact_chars')} ({charCount}/500)</p></div>
<button type="submit" disabled={loading} className="w-full px-8 py-4 bg-[#2C2C2C] text-white rounded-full hover:bg-[#FFD700] hover:text-[#2C2C2C] transition-all duration-300 font-medium cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">{loading ? t('contact_sending') : t('contact_submit')}</button>
</form>
</div>
</section>
);
}

--- Footer.tsx ---
import { useTranslation } from 'react-i18next';
import '../../../i18n';
export default function Footer() {
const { t } = useTranslation();
const handleNavClick = (href: string) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
return (
<footer className="bg-[#1A3A3A] text-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
<div className="lg:col-span-2">
<img alt="Merandia" className="h-12 w-auto object-contain mb-8 brightness-0 invert" src="https://public.readdy.ai/ai/img_res/640feccf-06d7-46a9-9dca-1cafade361d5.png" />
<p className="text-xl font-light leading-relaxed text-white/80 mb-8">{t('footer_tagline')}</p>
<div className="flex gap-3">
{[{ icon: 'ri-facebook-fill', href: 'https://facebook.com/merandia' },{ icon: 'ri-instagram-line', href: 'https://instagram.com/merandia' },{ icon: 'ri-whatsapp-line', href: 'https://wa.me/50400000000' }].map((s) => (
<a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-[#FFD700] hover:border-[#FFD700] transition-all cursor-pointer group"><i className={`${s.icon} text-white group-hover:text-[#2C2C2C]`}></i></a>
))}
</div>
</div>
<div>
<h3 className="text-white font-semibold mb-6">{t('footer_products_title')}</h3>
<ul className="space-y-4">
{(['footer_palm','footer_soya','footer_presentations'] as const).map((key) => (
<li key={key}><button onClick={() => handleNavClick('#products')} className="text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer">{t(key)}</button></li>
))}
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-6">{t('footer_company_title')}</h3>
<ul className="space-y-4">
{[{ key: 'footer_about', href: '#about' },{ key: 'footer_what', href: '#what-we-do' },{ key: 'footer_why', href: '#why-us' }].map((item) => (
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

--- FloatingButtons.tsx ---
const floatingButtons = [
{ href: 'https://wa.me/50498765432', bg: 'bg-[#25D366]', icon: 'ri-whatsapp-fill', label: 'WhatsApp' },
{ href: 'https://facebook.com/merandia', bg: 'bg-[#1877F2]', icon: 'ri-facebook-fill', label: 'Facebook' },
{ href: 'https://instagram.com/merandia', bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', icon: 'ri-instagram-fill', label: 'Instagram' },
];
export default function FloatingButtons() {
return (
<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
{floatingButtons.map((btn) => (
<div key={btn.label} className="relative">
<a href={btn.href} target="_blank" rel="noopener noreferrer" aria-label={btn.label} className={`flex items-center justify-center w-14 h-14 ${btn.bg} rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
<i className={`${btn.icon} text-white text-2xl`}></i>
</a>
</div>
))}
</div>
);
}

================================================================================
## REFERENCIA RAPIDA
================================================================================

PALETA DE COLORES:
- Verde principal: #2E7D32 (botones, acentos, iconos)
- Verde oscuro: #1B5E20 (navbar)
- Amarillo dorado: #FFD700 (CTAs, botones destacados)
- Texto principal: #2C2C2C
- Texto secundario: #8C8C8C
- Fondo claro: #FAFAF8
- Fondo footer: #1A3A3A

SECCIONES (en orden):
1. Navbar 2. Hero 3. Welcome 4. Process 5. Stats 6. Products 7. Distributors 8. CTA 9. Location 10. Contact 11. Footer 12. FloatingButtons

IDIOMAS: Espanol (default) / Ingles (toggle EN/ES)

DATOS DE CONTACTO:
- Direccion: 45 ANNE AV JACKSONVILLE, FL 32254
- Email: merandiallc@gmail.com
- Telefono: +1 786 9123424

TECNOLOGIA: React 19 + TypeScript + TailwindCSS + Vite + i18next
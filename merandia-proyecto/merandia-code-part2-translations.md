# MERANDIA - PARTE 2: TRADUCCIONES (ES/EN)

---

## src/i18n/local/es/home.ts

```typescript
const es: Record<string, string> = {
  // Navbar
  nav_inicio: 'Inicio',
  nav_sobre: 'Sobre Nosotros',
  nav_que: 'Qué Hacemos',
  nav_productos: 'Productos',
  nav_contacto: 'Contacto',
  lang_switch: 'EN',

  // Hero
  hero_title: 'Envasado y distribución de aceites con calidad y seguridad',
  hero_btn_products: 'Ver productos',
  hero_btn_info: 'Solicitar información',

  // About
  about_label: 'Sobre Nosotros',
  about_title: 'Comprometidos con la',
  about_title_accent: 'calidad operativa',
  about_p1: 'Merandia es una empresa Colombia dedicada al envasado, almacenamiento y distribución de aceites de palma y soya. Nuestra actividad se centra en garantizar que cada producto llegue al cliente en condiciones óptimas, cumpliendo con los más altos estándares de inocuidad y trazabilidad.',
  about_p2: 'Contamos con instalaciones especializadas para el manejo seguro de aceites en volumen, aplicando protocolos rigurosos de control de calidad en cada etapa del proceso logístico: recepción, envasado, almacenamiento y despacho.',
  about_feat1: 'Control de calidad certificado',
  about_feat2: 'Distribución nacional',
  about_feat3: 'Almacenamiento especializado',
  about_feat4: 'Trazabilidad completa',

  // Process
  process_label: 'Nuestras Operaciones',
  process_title: '¿Qué hacemos?',
  process_subtitle: 'Nos especializamos en tres actividades clave que garantizan que el aceite llegue a tu negocio en perfectas condiciones',
  process_service: 'Servicio',

  process_1_title: 'Envasado',
  process_1_desc: 'Envasamos aceites de palma y soya en diversas presentaciones: botellas de 250ml, 430ml, 500ml, 830ml, 900ml, 1L, 9L y garrafas de 20L, bajo estrictos protocolos de higiene y seguridad alimentaria.',
  process_1_d1: 'Líneas de envasado de alta capacidad',
  process_1_d2: 'Control de hermeticidad y peso',
  process_1_d3: 'Etiquetado según normativas nacionales',
  process_1_d4: 'Trazabilidad por lote de producción',

  process_2_title: 'Almacenamiento',
  process_2_desc: 'Disponemos de bodegas climatizadas y adecuadas para el manejo seguro de aceites en volumen, con control de temperatura, humedad y condiciones sanitarias certificadas.',
  process_2_d1: 'Bodegas de temperatura controlada',
  process_2_d2: 'Sistema FIFO para rotación de inventario',
  process_2_d3: 'Monitoreo continuo de condiciones',
  process_2_d4: 'Capacidad para almacenamiento a granel',

  process_3_title: 'Distribución',
  process_3_desc: 'Distribuimos nuestros productos a distribuidores, comercios, supermercados y mayoristas en todo Honduras, garantizando tiempos de entrega y condiciones de transporte adecuadas.',
  process_3_d1: 'Cobertura nacional en Honduras',
  process_3_d2: 'Flota de transporte adecuada',
  process_3_d3: 'Seguimiento logístico de pedidos',
  process_3_d4: 'Distribución a mayoristas y minoristas',

  // Stats / Why us
  stats_label: 'Nuestras Fortalezas',
  stats_title: '¿Por qué elegirnos?',
  stats_subtitle: 'Somos un aliado confiable para distribuidores y negocios que necesitan abastecerse de aceites con garantía de calidad',

  stats_1_value: 'Calidad',
  stats_1_label: 'Garantizada',
  stats_1_desc: 'Cada lote pasa por controles de calidad rigurosos antes de ser despachado, asegurando que el producto cumpla con las normativas alimentarias vigentes.',

  stats_2_value: 'Cumplimiento',
  stats_2_label: 'Normativo',
  stats_2_desc: 'Operamos bajo estrictas normativas de inocuidad alimentaria, con procesos documentados y trazables en cada etapa de nuestra cadena operativa.',

  stats_3_value: 'Eficiencia',
  stats_3_label: 'Logística',
  stats_3_desc: 'Nuestra capacidad operativa nos permite responder con agilidad a los pedidos, asegurando entregas a tiempo y en condiciones óptimas a nivel nacional.',

  stats_feat1: 'Cobertura nacional en Honduras',
  stats_feat2: 'Aceites de palma y soya',
  stats_feat3: 'Múltiples presentaciones',
  stats_feat4: 'Atención comercial directa',

  // Products
  products_label: 'Catálogo',
  products_title: 'Nuestros Productos',
  products_subtitle: 'Explora nuestro portafolio de marcas y presentaciones disponibles para distribución',
  products_all_brands: 'Todas las marcas',
  products_presentations: 'Presentaciones',
  products_available: 'Disponible en',
  products_request_btn: 'Solicitar información',
  products_view_btn: 'Ver detalle',
  products_close: 'Cerrar',
  products_vegetal: 'Aceite Vegetal',
  products_soya: 'Aceite de Soya',

  // Mi Aceite brand
  brand_mia_name: 'Mi Aceite',
  brand_mia_desc: 'Marca hondureña de aceites envasados para el mercado doméstico y comercial.',
  mia_veg_1_name: 'Mi Aceite Vegetal 250ml',
  mia_veg_1_pres: '250ml',
  mia_veg_2_name: 'Mi Aceite Vegetal 500ml',
  mia_veg_2_pres: '500ml',
  mia_veg_3_name: 'Mi Aceite Vegetal 830ml',
  mia_veg_3_pres: '830ml',
  mia_veg_4_name: 'Mi Aceite Vegetal 900ml',
  mia_veg_4_pres: '900ml',
  mia_veg_5_name: 'Mi Aceite Vegetal 1L',
  mia_veg_5_pres: '1L',
  mia_veg_6_name: 'Mi Aceite Vegetal 9L',
  mia_veg_6_pres: '9L',
  mia_veg_7_name: 'Mi Aceite Vegetal 20L',
  mia_veg_7_pres: '20L',
  mia_soy_1_name: 'Mi Aceite Soya 250ml',
  mia_soy_1_pres: '250ml',
  mia_soy_2_name: 'Mi Aceite Soya 500ml',
  mia_soy_2_pres: '500ml',
  mia_soy_3_name: 'Mi Aceite Soya 830ml',
  mia_soy_3_pres: '830ml',
  mia_soy_4_name: 'Mi Aceite Soya 900ml',
  mia_soy_4_pres: '900ml',
  mia_soy_5_name: 'Mi Aceite Soya 1L',
  mia_soy_5_pres: '1L',
  mia_soy_6_name: 'Mi Aceite Soya 9L',
  mia_soy_6_pres: '9L',
  mia_soy_7_name: 'Mi Aceite Soya 20L',
  mia_soy_7_pres: '20L',

  // Delsarten brand
  brand_del_name: 'Delsarten',
  brand_del_desc: 'Línea de aceites envasados con estándares de calidad para el sector comercial y mayorista.',
  del_veg_1_name: 'Delsarten Vegetal 250ml',
  del_veg_1_pres: '250ml',
  del_veg_2_name: 'Delsarten Vegetal 500ml',
  del_veg_2_pres: '500ml',
  del_veg_3_name: 'Delsarten Vegetal 830ml',
  del_veg_3_pres: '830ml',
  del_veg_4_name: 'Delsarten Vegetal 900ml',
  del_veg_4_pres: '900ml',
  del_veg_5_name: 'Delsarten Vegetal 1L',
  del_veg_5_pres: '1L',
  del_veg_6_name: 'Delsarten Vegetal 9L',
  del_veg_6_pres: '9L',
  del_veg_7_name: 'Delsarten Vegetal 20L',
  del_veg_7_pres: '20L',
  del_soy_1_name: 'Delsarten Soya 250ml',
  del_soy_1_pres: '250ml',
  del_soy_2_name: 'Delsarten Soya 500ml',
  del_soy_2_pres: '500ml',
  del_soy_3_name: 'Delsarten Soya 830ml',
  del_soy_3_pres: '830ml',
  del_soy_4_name: 'Delsarten Soya 900ml',
  del_soy_4_pres: '900ml',
  del_soy_5_name: 'Delsarten Soya 1L',
  del_soy_5_pres: '1L',
  del_soy_6_name: 'Delsarten Soya 9L',
  del_soy_6_pres: '9L',
  del_soy_7_name: 'Delsarten Soya 20L',
  del_soy_7_pres: '20L',

  product_btn: 'Solicitar información',

  // CTA
  cta_quality_label: 'Calidad operativa',
  cta_quality_title: 'Envasado\ncon estándares\nindustriales',
  cta_title: '¿Necesitas un proveedor confiable?',
  cta_desc: 'Contáctanos y cuéntanos las necesidades de tu negocio. Estamos listos para atender pedidos de distribuidores, comercios y mayoristas.',
  cta_btn_info: 'Solicitar información',
  cta_btn_products: 'Ver productos',

  // Sectors
  sectors_label: 'Mercado',
  sectors_title: '¿A quién distribuimos?',
  sectors_subtitle: 'Atendemos distintos sectores del mercado hondureño con soluciones de suministro adaptadas a cada necesidad',

  sector_1_title: 'Distribuidores Mayoristas',
  sector_1_desc: 'Proveemos a distribuidores que abastecen múltiples puntos de venta a nivel regional y nacional.',

  sector_2_title: 'Supermercados y Tiendas',
  sector_2_desc: 'Abastecemos supermercados, pulperías y negocios de abarrotes con presentaciones adecuadas para venta al detalle.',

  sector_3_title: 'Industria Alimentaria',
  sector_3_desc: 'Suministramos aceite a granel y en presentaciones grandes para empresas del sector alimentario que lo usan como insumo.',

  sector_4_title: 'Restaurantes y Hoteles',
  sector_4_desc: 'Atendemos al sector de alimentos y hospitalidad con presentaciones en garrafa de 20L para uso intensivo.',

  sector_5_title: 'Mayoristas',
  sector_5_desc: 'Trabajamos con mayoristas que requieren volúmenes altos de producto con condiciones comerciales específicas.',

  sector_6_title: 'Instituciones y Programas',
  sector_6_desc: 'Abastecemos programas sociales, instituciones públicas y privadas con aceites bajo especificaciones requeridas.',

  sectors_cta_title: '¿Tu negocio no está en la lista?',
  sectors_cta_desc: 'Contáctanos y evalúa con nuestro equipo comercial si podemos atender tu necesidad de suministro de aceites',
  sectors_cta_btn: 'Solicitar información',

  // Location
  location_label: 'Nuestra Ubicación',
  location_title: 'Nuestra Ubicación',
  location_subtitle: 'Encuéntranos fácilmente y contáctanos',
  location_address_label: 'Dirección',
  location_email_label: 'Correo',
  location_phone_label: 'Teléfono',
  location_desc: 'Visítanos o contáctanos para conocer más sobre nuestros productos. Estamos disponibles para brindarte la mejor atención.',
  location_btn: 'Ver en Google Maps',

  // Contact
  contact_title: 'Contáctanos',
  contact_subtitle: 'Estamos aquí para ayudarte',
  contact_name: 'Nombre',
  contact_email: 'Correo Electrónico',
  contact_phone: 'Teléfono',
  contact_message: 'Mensaje',
  contact_submit: 'Enviar Mensaje',
  contact_sending: 'Enviando...',
  contact_success: '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.',
  contact_error: 'Ocurrió un error al enviar. Por favor intenta nuevamente.',
  contact_chars: 'Máximo 500 caracteres',

  // Footer
  footer_tagline: 'Envasado, almacenamiento y distribución de aceites de calidad en Honduras.',
  footer_products_title: 'Productos',
  footer_palm: 'Aceite de Palma',
  footer_soya: 'Aceite de Soya',
  footer_presentations: 'Presentaciones',
  footer_company_title: 'Empresa',
  footer_about: 'Sobre Nosotros',
  footer_what: 'Qué Hacemos',
  footer_why: 'Por Qué Elegirnos',
  footer_contact_title: 'Contacto',
  footer_sectors: 'Sectores atendidos',
  footer_copyright: '© 2025 Merandia. Todos los derechos reservados.',
  footer_privacy: 'Privacidad',
  footer_terms: 'Términos',
};

export default es;
```

---

## src/i18n/local/en/home.ts

```typescript
const en: Record<string, string> = {
  // Navbar
  nav_inicio: 'Home',
  nav_sobre: 'About Us',
  nav_que: 'What We Do',
  nav_productos: 'Products',
  nav_contacto: 'Contact',
  lang_switch: 'ES',

  // Hero
  hero_title: 'Oil packaging and distribution with quality and safety',
  hero_btn_products: 'View products',
  hero_btn_info: 'Request information',

  // About
  about_label: 'About Us',
  about_title: 'Committed to',
  about_title_accent: 'operational quality',
  about_p1: 'Merandia is a Honduran company dedicated to the packaging, storage, and distribution of palm and soybean oils. Our activity focuses on ensuring that each product reaches the customer in optimal conditions, meeting the highest standards of food safety and traceability.',
  about_p2: 'We have specialized facilities for the safe handling of oils in volume, applying rigorous quality control protocols at every stage of the logistics process: reception, packaging, storage, and dispatch.',
  about_feat1: 'Certified quality control',
  about_feat2: 'National distribution',
  about_feat3: 'Specialized storage',
  about_feat4: 'Full traceability',

  // Process
  process_label: 'Our Operations',
  process_title: 'What do we do?',
  process_subtitle: 'We specialize in three key activities that ensure oil reaches your business in perfect condition',
  process_service: 'Service',

  process_1_title: 'Packaging',
  process_1_desc: 'We package palm and soybean oils in various presentations: 250ml, 430ml, 500ml, 830ml, 900ml, 1L, 9L bottles and 20L jugs, under strict hygiene and food safety protocols.',
  process_1_d1: 'High-capacity packaging lines',
  process_1_d2: 'Seal integrity and weight control',
  process_1_d3: 'Labeling per national regulations',
  process_1_d4: 'Traceability per production batch',

  process_2_title: 'Storage',
  process_2_desc: 'We have climate-controlled warehouses suitable for the safe handling of bulk oils, with temperature, humidity, and certified sanitary condition controls.',
  process_2_d1: 'Temperature-controlled warehouses',
  process_2_d2: 'FIFO system for inventory rotation',
  process_2_d3: 'Continuous condition monitoring',
  process_2_d4: 'Bulk storage capacity',

  process_3_title: 'Distribution',
  process_3_desc: 'We distribute our products to distributors, retailers, supermarkets, and wholesalers throughout Honduras, ensuring timely delivery and proper transport conditions.',
  process_3_d1: 'Nationwide coverage in Honduras',
  process_3_d2: 'Suitable transport fleet',
  process_3_d3: 'Order logistics tracking',
  process_3_d4: 'Distribution to wholesalers and retailers',

  // Stats / Why us
  stats_label: 'Our Strengths',
  stats_title: 'Why choose us?',
  stats_subtitle: 'We are a reliable partner for distributors and businesses that need quality-guaranteed oil supply',

  stats_1_value: 'Quality',
  stats_1_label: 'Guaranteed',
  stats_1_desc: 'Each batch goes through rigorous quality controls before dispatch, ensuring the product meets current food regulations.',

  stats_2_value: 'Regulatory',
  stats_2_label: 'Compliance',
  stats_2_desc: 'We operate under strict food safety regulations, with documented and traceable processes at every stage of our operational chain.',

  stats_3_value: 'Logistics',
  stats_3_label: 'Efficiency',
  stats_3_desc: 'Our operational capacity allows us to respond to orders swiftly, ensuring timely deliveries in optimal conditions nationwide.',

  stats_feat1: 'Nationwide coverage in Honduras',
  stats_feat2: 'Palm and soybean oils',
  stats_feat3: 'Multiple presentations',
  stats_feat4: 'Direct commercial support',

  // Products
  products_label: 'Catalog',
  products_title: 'Our Products',
  products_subtitle: 'Explore our brand portfolio and available presentations for distribution',
  products_all_brands: 'All brands',
  products_presentations: 'Presentations',
  products_available: 'Available in',
  products_request_btn: 'Request information',
  products_view_btn: 'View detail',
  products_close: 'Close',
  products_vegetal: 'Vegetable Oil',
  products_soya: 'Soybean Oil',

  // Mi Aceite brand
  brand_mia_name: 'Mi Aceite',
  brand_mia_desc: 'Honduran brand of packaged oils for the domestic and commercial market.',
  mia_veg_1_name: 'Mi Aceite Vegetable 250ml',
  mia_veg_1_pres: '250ml',
  mia_veg_2_name: 'Mi Aceite Vegetable 500ml',
  mia_veg_2_pres: '500ml',
  mia_veg_3_name: 'Mi Aceite Vegetable 830ml',
  mia_veg_3_pres: '830ml',
  mia_veg_4_name: 'Mi Aceite Vegetable 900ml',
  mia_veg_4_pres: '900ml',
  mia_veg_5_name: 'Mi Aceite Vegetable 1L',
  mia_veg_5_pres: '1L',
  mia_veg_6_name: 'Mi Aceite Vegetable 9L',
  mia_veg_6_pres: '9L',
  mia_veg_7_name: 'Mi Aceite Vegetable 20L',
  mia_veg_7_pres: '20L',
  mia_soy_1_name: 'Mi Aceite Soybean 250ml',
  mia_soy_1_pres: '250ml',
  mia_soy_2_name: 'Mi Aceite Soybean 500ml',
  mia_soy_2_pres: '500ml',
  mia_soy_3_name: 'Mi Aceite Soybean 830ml',
  mia_soy_3_pres: '830ml',
  mia_soy_4_name: 'Mi Aceite Soybean 900ml',
  mia_soy_4_pres: '900ml',
  mia_soy_5_name: 'Mi Aceite Soybean 1L',
  mia_soy_5_pres: '1L',
  mia_soy_6_name: 'Mi Aceite Soybean 9L',
  mia_soy_6_pres: '9L',
  mia_soy_7_name: 'Mi Aceite Soybean 20L',
  mia_soy_7_pres: '20L',

  // Delsarten brand
  brand_del_name: 'Delsarten',
  brand_del_desc: 'Line of packaged oils with quality standards for the commercial and wholesale sector.',
  del_veg_1_name: 'Delsarten Vegetable 250ml',
  del_veg_1_pres: '250ml',
  del_veg_2_name: 'Delsarten Vegetable 500ml',
  del_veg_2_pres: '500ml',
  del_veg_3_name: 'Delsarten Vegetable 830ml',
  del_veg_3_pres: '830ml',
  del_veg_4_name: 'Delsarten Vegetable 900ml',
  del_veg_4_pres: '900ml',
  del_veg_5_name: 'Delsarten Vegetable 1L',
  del_veg_5_pres: '1L',
  del_veg_6_name: 'Delsarten Vegetable 9L',
  del_veg_6_pres: '9L',
  del_veg_7_name: 'Delsarten Vegetable 20L',
  del_veg_7_pres: '20L',
  del_soy_1_name: 'Delsarten Soybean 250ml',
  del_soy_1_pres: '250ml',
  del_soy_2_name: 'Delsarten Soybean 500ml',
  del_soy_2_pres: '500ml',
  del_soy_3_name: 'Delsarten Soybean 830ml',
  del_soy_3_pres: '830ml',
  del_soy_4_name: 'Delsarten Soybean 900ml',
  del_soy_4_pres: '900ml',
  del_soy_5_name: 'Delsarten Soybean 1L',
  del_soy_5_pres: '1L',
  del_soy_6_name: 'Delsarten Soybean 9L',
  del_soy_6_pres: '9L',
  del_soy_7_name: 'Delsarten Soybean 20L',
  del_soy_7_pres: '20L',

  product_btn: 'Request information',

  // CTA
  cta_quality_label: 'Operational quality',
  cta_quality_title: 'Packaging\nto industrial\nstandards',
  cta_title: 'Do you need a reliable supplier?',
  cta_desc: 'Contact us and tell us about your business needs. We are ready to serve distributors, retailers, and wholesalers.',
  cta_btn_info: 'Request information',
  cta_btn_products: 'View products',

  // Sectors
  sectors_label: 'Market',
  sectors_title: 'Who do we supply?',
  sectors_subtitle: 'We serve different sectors of the Honduran market with supply solutions tailored to each need',

  sector_1_title: 'Wholesale Distributors',
  sector_1_desc: 'We supply distributors who serve multiple points of sale at regional and national level.',

  sector_2_title: 'Supermarkets & Stores',
  sector_2_desc: 'We supply supermarkets, convenience stores, and grocery businesses with presentations suitable for retail.',

  sector_3_title: 'Food Industry',
  sector_3_desc: 'We supply bulk oil and large-format presentations to food sector companies that use it as an ingredient.',

  sector_4_title: 'Restaurants & Hotels',
  sector_4_desc: 'We serve the food and hospitality sector with 20L jug presentations for intensive use.',

  sector_5_title: 'Wholesalers',
  sector_5_desc: 'We work with wholesalers that require high product volumes under specific commercial terms.',

  sector_6_title: 'Institutions & Programs',
  sector_6_desc: 'We supply social programs, public and private institutions with oils meeting required specifications.',

  sectors_cta_title: "Is your business not on the list?",
  sectors_cta_desc: 'Contact us and evaluate with our commercial team if we can meet your oil supply needs',
  sectors_cta_btn: 'Request information',

  // Location
  location_label: 'Our Location',
  location_title: 'Our Location',
  location_subtitle: 'Find us easily and get in touch',
  location_address_label: 'Address',
  location_email_label: 'Email',
  location_phone_label: 'Phone',
  location_desc: 'Visit us or contact us to learn more about our products. We are available to provide you with the best service.',
  location_btn: 'View on Google Maps',

  // Contact
  contact_title: 'Contact Us',
  contact_subtitle: 'We are here to help you',
  contact_name: 'Name',
  contact_email: 'Email Address',
  contact_phone: 'Phone',
  contact_message: 'Message',
  contact_submit: 'Send Message',
  contact_sending: 'Sending...',
  contact_success: 'Message sent successfully! We will get in touch soon.',
  contact_error: 'An error occurred while sending. Please try again.',
  contact_chars: 'Maximum 500 characters',

  // Footer
  footer_tagline: 'Packaging, storage, and distribution of quality oils in Honduras.',
  footer_products_title: 'Products',
  footer_palm: 'Palm Oil',
  footer_soya: 'Soybean Oil',
  footer_presentations: 'Presentations',
  footer_company_title: 'Company',
  footer_about: 'About Us',
  footer_what: 'What We Do',
  footer_why: 'Why Choose Us',
  footer_contact_title: 'Contact',
  footer_sectors: 'Sectors served',
  footer_copyright: '© 2025 Merandia. All rights reserved.',
  footer_privacy: 'Privacy',
  footer_terms: 'Terms',
};

export default en;
```
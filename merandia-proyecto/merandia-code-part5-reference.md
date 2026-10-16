# MERANDIA - PARTE 5: REFERENCIA RÁPIDA

---

## 📁 ESTRUCTURA DEL PROYECTO

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── i18n/
│   ├── index.ts
│   └── local/
│       ├── index.ts
│       ├── es/home.ts
│       └── en/home.ts
├── pages/
│   ├── NotFound.tsx
│   └── home/
│       ├── page.tsx
│       └── components/
│           ├── Navbar.tsx
│           ├── HeroSection.tsx
│           ├── WelcomeSection.tsx
│           ├── ProcessSection.tsx
│           ├── StatsSection.tsx
│           ├── ProductsSection.tsx
│           ├── DistributorsSection.tsx
│           ├── CTASection.tsx
│           ├── LocationSection.tsx
│           ├── ContactSection.tsx
│           ├── Footer.tsx
│           └── FloatingButtons.tsx
├── router/
│   ├── index.ts
│   └── config.tsx
```

---

## 🎨 PALETA DE COLORES

| Color | Hex | Uso |
|-------|-----|-----|
| Verde principal | `#2E7D32` | Botones, acentos, iconos |
| Verde oscuro | `#1B5E20` | Navbar |
| Amarillo dorado | `#FFD700` | CTAs, botones destacados |
| Amarillo hover | `#FFC107` | Hover de botones amarillos |
| Texto principal | `#2C2C2C` | Títulos, texto principal |
| Texto secundario | `#8C8C8C` | Subtítulos, descripciones |
| Fondo claro | `#FAFAF8` | Secciones alternadas |
| Fondo footer | `#1A3A3A` | Footer principal |
| Fondo footer bottom | `#0F2525` | Copyright bar |

---

## 📱 SECCIONES DE LA PÁGINA (en orden)

1. **Navbar** - Navegación fija con logo, links y switch de idioma
2. **HeroSection** - Imagen de fondo con título y botones CTA
3. **WelcomeSection** - Sobre nosotros con imagen y features
4. **ProcessSection** - 3 servicios: Envasado, Almacenamiento, Distribución
5. **StatsSection** - ¿Por qué elegirnos? + fortalezas
6. **ProductsSection** - Catálogo con 2 marcas (Mi Aceite, Delsarten) + carrusel
7. **DistributorsSection** - Sectores atendidos (6 tarjetas) + CTA
8. **CTASection** - Banner de calidad + llamada a la acción
9. **LocationSection** - Mapa de Google Maps + info de contacto
10. **ContactSection** - Formulario de contacto funcional
11. **Footer** - Links, redes sociales, dirección, copyright
12. **FloatingButtons** - WhatsApp, Facebook, Instagram flotantes

---

## 🌐 IDIOMAS SOPORTADOS

- **Español (es)** - Idioma por defecto
- **Inglés (en)** - Toggle con botón EN/ES en navbar

---

## 📋 NOTAS TÉCNICAS

- React 19 + TypeScript + TailwindCSS + Vite
- i18next para internacionalización (ES/EN)
- Remix Icon + Font Awesome (CDN)
- Google Fonts: Inter + Playfair Display
- Todas las imágenes generadas con Readdy AI Search Image
- Formulario de contacto conectado a Readdy Form API
- Mapa embebido de Google Maps en LocationSection
- Diseño responsive (mobile-first con breakpoints lg:)
- Sin sombras (diseño minimalista)
- 2 marcas de productos: Mi Aceite (naranja) + Delsarten (verde)
- 14 productos por marca (7 vegetal + 7 soya)
- Carrusel automático de productos con navegación manual

---

## 🔗 DATOS DE CONTACTO (hardcoded)

- **Dirección:** 45 ANNE AV JACKSONVILLE, FL 32254
- **Email:** merandiallc@gmail.com
- **Teléfono:** +1 786 9123424
- **Google Maps:** https://www.google.com/maps/place/45+Anne+Ave,+Jacksonville,+FL+32254,+USA

---

## 📦 DEPENDENCIAS PRINCIPALES

```
react ^19.1.2
react-dom ^19.1.2
react-router-dom ^7.6.3
react-i18next ^15.6.0
i18next ^25.3.2
i18next-browser-languagedetector ^8.2.0
tailwindcss ^3.4.17
vite ^7.0.3
```
# MERANDIA - PARTE 1: CONFIGURACIÓN Y ARCHIVOS BASE

> React 19 + TypeScript + TailwindCSS + Vite
> Idiomas: Español / Inglés

---

## 1. index.html

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Merandia - Aceites y Margarinas Premium | Calidad que acompaña cada preparación</title>
    <meta name="description" content="Merandia ofrece aceites premium y margarinas suaves de la más alta calidad para tu cocina. Productos elaborados con ingredientes seleccionados que garantizan frescura y sabor excepcional en cada preparación." />
    <meta name="keywords" content="Merandia, aceites premium, margarinas, productos de cocina, aceites de calidad, margarinas suaves, ingredientes premium" />
    <meta name="last-modified" content="2026-03-24" />
    <meta property="og:title" content="Merandia - Aceites y Margarinas Premium" />
    <meta property="og:description" content="Calidad que acompaña cada preparación. Descubre nuestros aceites premium y margarinas suaves." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://merandia.com/" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Merandia - Aceites y Margarinas Premium" />
    <meta name="twitter:description" content="Calidad que acompaña cada preparación" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 2. package.json

```json
{
  "name": "react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit --project tsconfig.app.json"
  },
  "dependencies": {
    "i18next": "^25.3.2",
    "react": "^19.1.2",
    "react-dom": "^19.1.2",
    "react-i18next": "^15.6.0",
    "react-router-dom": "^7.6.3",
    "i18next-browser-languagedetector": "^8.2.0",
    "firebase": "12.0.0",
    "@supabase/supabase-js": "2.57.4",
    "@stripe/react-stripe-js": "4.0.2",
    "recharts": "3.2.0",
    "lucide-react": "^0.469.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.30.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.35.1",
    "vite": "^7.0.3",
    "unplugin-auto-import": "^19.3.0",
    "source-map": "^0.7.6",
    "jiti": "^2.6.1"
  }
}
```

---

## 3. vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

const base = process.env.BASE_PATH || "/";
const isPreview = process.env.IS_PREVIEW ? true : false;

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
    __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || ""),
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          react: [
            "React", "useState", "useEffect", "useContext", "useReducer",
            "useCallback", "useMemo", "useRef", "useImperativeHandle",
            "useLayoutEffect", "useDebugValue", "useDeferredValue", "useId",
            "useInsertionEffect", "useSyncExternalStore", "useTransition",
            "startTransition", "lazy", "memo", "forwardRef", "createContext",
            "createElement", "cloneElement", "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate", "useLocation", "useParams", "useSearchParams",
            "Link", "NavLink", "Navigate", "Outlet",
          ],
        },
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),
  ],
  base,
  build: {
    sourcemap: true,
    outDir: "out",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
```

---

## 4. tailwind.config.ts

```typescript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 5. src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 6. src/main.tsx

```typescript
import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 7. src/App.tsx

```typescript
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
```

---

## 8. src/router/index.ts

```typescript
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    navigateResolver(window.REACT_APP_NAVIGATE);
  });
  return element;
}
```

---

## 9. src/router/config.tsx

```typescript
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
```

---

## 10. src/i18n/index.ts

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'es',
    debug: false,
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

---

## 11. src/i18n/local/index.ts

```typescript
const modules = import.meta.glob('./*/*.ts', { eager: true });

const messages: Record<string, { translation: Record<string, string> }> = {};

Object.keys(modules).forEach((path) => {
  const match = path.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
  if (match) {
    const [, lang] = match;
    const module = modules[path] as { default?: Record<string, string> };
    
    if (!messages[lang]) {
      messages[lang] = { translation: {} };
    }
    
    if (module.default) {
      messages[lang].translation = {
        ...messages[lang].translation,
        ...module.default
      };
    }
  }
});

export default messages;
```

---

## 12. src/pages/NotFound.tsx

```typescript
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold mt-6">This page has not been generated</h1>
        <p className="mt-2 text-base text-gray-400 font-mono">{location.pathname}</p>
        <p className="mt-4 text-lg md:text-xl text-gray-500">Tell me more about this page, so I can generate it</p>
      </div>
    </div>
  );
}
```

---

## 13. src/pages/home/page.tsx

```typescript
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
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ProcessSection />
      <StatsSection />
      <ProductsSection />
      <DistributorsSection />
      <CTASection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
```
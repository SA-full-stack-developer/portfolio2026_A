# Full-Stack Professional Portfolio & API Ecosystem 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://csrangulardeveloper.nom.es)
[![API Documentation](https://img.shields.io/badge/Swagger-OpenAPI-blue?style=for-the-badge)](https://api.csrangulardeveloper.nom.es/api/v1/docs)

Repositorio oficial de mi portfolio profesional. Este proyecto no es solo una vitrina de trabajos, sino una demostración técnica de una arquitectura desacoplada, escalable y moderna utilizando el ecosistema completo de TypeScript — incluyendo micro-frontends, Signals, SSR y funcionalidades de IA generativa.

## 🏗️ Arquitectura del Sistema

El proyecto es un **monorepo Nx** dividido en tres aplicaciones independientes más un conjunto de librerías compartidas:

1. **`portfolio` (host):** Single Page Application principal en Angular, con SSR activo en producción.
2. **`lab001` (remote):** Micro-frontend cargado dinámicamente vía **Native Federation**, que aloja una sección de "Lab" con experimentos y componentes interactivos independientes del host.
3. **`backend`:** API REST en NestJS, proyecto npm independiente dentro del monorepo (con su propio `package.json`/lockfile), que gestiona la persistencia de datos, la lógica de negocio y la integración con IA generativa.
4. **Librerías compartidas (`libs/`):** `models` (interfaces/tipos compartidos entre frontend y backend), `shared-styles` (SCSS/design tokens), `shared-libs` (servicios y utilidades comunes, ej. `PlatformService`, `GsapService`).

Esta arquitectura de micro-frontends permite desplegar, versionar y escalar cada pieza (host, remote, API) de forma independiente, manteniendo un único punto de entrada para quien visita el portfolio.

---

## 🛠️ Stack Tecnológico

### Frontend

- **Framework:** Angular 22, **standalone y zoneless** — sin `NgModules`, sin `Zone.js`.
- **Gestión de estado y reactividad:** arquitectura basada íntegramente en **Signals** (`signal`, `computed`, `effect`), con `inject()` en lugar de inyección por constructor.
- **Datos asíncronos:** peticiones HTTP reactivas resueltas con la **Resource API** (`httpResource`), no con `HttpClient` + RxJS manual. RxJS se reserva para casos puntuales no reactivos (guards, streams de animación).
- **Formularios:** **Signal Forms + Submission API** para la gestión de estado y validación de formularios (ej. formulario de contacto).
- **Micro-frontends:** **Native Federation** (`@angular-architects/native-federation`) para cargar `lab001` dinámicamente desde `portfolio`.
- **Renderizado:** **SSR** activo en producción con hidratación incremental (`hydrate on viewport` en contenido diferido con `@defer`).
- **Animaciones:** GSAP con ScrollTrigger, con limpieza explícita en `ngOnDestroy` para evitar fugas de memoria.
- **Estilos:** SCSS con metodología BEM y sistema de variables/mixins propio.
- **Internacionalización:** soporte multiidioma (ES/EN) mediante `ngx-translate`.
- **Testing:** Jest, con cobertura mantenida y 0 fallos exigido antes de cualquier commit.

### Backend

- **Framework:** NestJS (Node.js), con arquitectura modular (Skills, Experience, Companies, Projects, Stats, Status, Auth, AI).
- **Documentación:** Swagger/OpenAPI servido en `/api/v1/docs`, generado automáticamente desde los DTOs y controladores.
- **IA generativa:** integración con la API de Gemini (`@google/generative-ai`) para funcionalidades como chat sobre el CV, generación de cartas de presentación y un asistente de contacto conversacional.
- **Validación y normalización:** `ValidationPipe` global (whitelist + transform) sobre los DTOs de entrada, e interceptor global (`TransformInterceptor`) que envuelve todas las respuestas en un esquema consistente `{ data, timestamp }`.
- **Seguridad:** CORS restringido a los orígenes de producción/desarrollo conocidos, validación de tokens para rutas administrativas.

### Herramientas y calidad de código

- **Monorepo:** Nx, sin `angular.json` (configuración por proyecto vía `project.json`).
- **TypeScript** fijado a una versión concreta en todo el workspace para garantizar compatibilidad entre `portfolio`, `lab001` y `backend`.
- **ESLint** con reglas estrictas de tipado (`no-explicit-any`, `no-unsafe-*`), sin excepciones injustificadas — los tipos dinámicos se modelan con uniones discriminadas o `unknown`, nunca con `any`.
- **Node 22**, gestionado con Volta para fijar la versión exacta por proyecto.

---

## 🚀 Despliegue y DevOps

El proyecto implementa un flujo de **Continuous Deployment (CD)** vía GitHub Actions:

- **Pipeline:** `lint` → `test` → build y deploy independientes para `portfolio`, `lab001` y `backend` (en paralelo tras pasar los tests).
- **Deploy condicional:** los jobs de despliegue solo se ejecutan en la rama `develop`; cada aplicación se publica en su propia rama de despliegue (`deploy` para el frontend, `deploy-api` para el backend, `deploy-lab1` para el micro-frontend del Lab).
- **Hosting:** entorno gestionado con Plesk, con Git Hooks para el despliegue automático de cada rama de destino.
- **Normalización de respuestas:** el interceptor global del backend asegura que toda la API responda con el mismo esquema, facilitando el consumo desde el frontend y la documentación en Swagger.

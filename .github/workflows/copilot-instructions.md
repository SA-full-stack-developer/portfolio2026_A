# Copilot Instructions

## Stack

- Angular 22 standalone zoneless — nunca usar NgModules
- NX monorepo — estructura `apps/portfolio` (frontend) y `apps/backend` (backend)
- Native Federation con `@angular-architects/native-federation` 22
- SCSS con alias `v` para variables, `m` para mixins
- BEM, rem para espaciados, px para bordes
- Signals y inject() — nunca constructor injection
- Path aliases: @core, @shared, @features
- SSR activo en producción — desactivado en desarrollo
- Node 22 requerido — gestionado con Volta

## Convenciones

- Smart/Dumb components
- ngOnDestroy obligatorio en componentes con ScrollTrigger
- No modificar lógica GSAP existente sin indicación explícita
- animationInitialized flag en componentes con animaciones
- Los pipes que dependan de locales de Angular deben evitarse — hay un bug conocido con `LOCALE_ID` + `isolatedModules`. Usar `Intl` nativo del browser como alternativa: crear un pipe personalizado que use `Intl.DateTimeFormat`, `Intl.NumberFormat`, etc. según el caso.

## Tests

- Jest — mantener cobertura existente
- 0 fallos obligatorio antes de cualquier commit
- Mover los mocks de frontend a archivos individuales bajo `src/app/core/mocks/`
- Cada spec debe importar el mock específico desde `@core/mocks/...` en lugar de definir mocks inline cuando sea posible

## Pages y SEO

- Al crear un componente `page`, además de registrar la ruta, revisar siempre el archivo `ts` y aplicar el SEO correspondiente
- En un componente `page` se debe inyectar `SeoService` con `inject(SeoService)` y definir `ngOnInit()`
- Dentro de `ngOnInit()` debe llamarse:
  - `this.seoService.update(PAGE_SEO['<page>']);`
  - `this.seoService.updateSchemas([BREADCRUMB_<PAGE>]);` cuando exista el breadcrumb
- Si una página no tiene breadcrumb definido, al menos debe actualizar su SEO con `PAGE_SEO['<page>']`
- Si la página es nueva, añadirla también al sitemap.xml

## SSR

- En desarrollo SSR está desactivado — `initNodeFederation` solo se ejecuta en producción (`NODE_ENV === 'production'`)
- `provideClientHydration` solo en producción — en desarrollo usar array vacío para evitar errores de hidratación
- Código que accede a `window`, `document` o `localStorage` debe protegerse siempre con `PlatformService.isBrowser`

## Native Federation

- `federation.config.js` en `apps/portfolio/`
- Los path aliases internos (`@core`, `@shared`, `@features`) deben estar en el array `skip` — no son libs federadas
- `initFederation()` en `main.ts` solo se ejecuta en browser — guard con `typeof window !== 'undefined'`

## CI/CD

- Pipeline en GitHub Actions — se ejecuta en push a `develop` y `feature/**`
- Jobs: lint → test → build-backend → deploy-backend → wait-for-backend → build-frontend → deploy-frontend
- Deploy solo en rama `develop`
- Node 22 en todos los jobs
- Frontend desplegado en rama `deploy`, backend en rama `deploy-api`

## Backend

- NestJS en `apps/backend/`
- API en https://api.csrangulardeveloper.nom.es/api/v1

## Idioma

Responder siempre en castellano.

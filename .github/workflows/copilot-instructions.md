# Copilot Instructions

## Stack

- Angular 21 standalone zoneless — nunca usar NgModules
- SCSS con alias `v` para variables, `m` para mixins
- BEM, rem para espaciados, px para bordes
- Signals y inject() — nunca constructor injection
- Path aliases: @core, @shared, @features
- SSR activo — tener en cuenta compatibilidad servidor/cliente

## Convenciones

- Smart/Dumb components
- ngOnDestroy obligatorio en componentes con ScrollTrigger
- No modificar lógica GSAP existente sin indicación explícita
- animationInitialized flag en componentes con animaciones

## Tests

- Jest — mantener cobertura existente
- 0 fallos obligatorio antes de cualquier commit
- Mover los mocks de frontend a archivos individuales bajo `src/app/core/mocks/`.
- Cada spec debe importar el mock específico desde `@core/mocks/...` en lugar de definir mocks inline cuando sea posible.

## Pages y SEO

- Al crear un componente `page`, además de registrar la ruta, revisar siempre el archivo `ts` y aplicar el SEO correspondiente.
- En un componente `page` se debe inyectar `SeoService` con `inject(SeoService)` y definir `ngOnInit()`.
- Dentro de `ngOnInit()` debe llamarse:
  - `this.seoService.update(PAGE_SEO['<page>']);`
  - `this.seoService.updateSchemas([BREADCRUMB_<PAGE>]);` cuando exista el breadcrumb.
- Si una página no tiene breadcrumb definido, al menos debe actualizar su SEO con `PAGE_SEO['<page>']`.

## Backend

- NestJS en carpeta backend/
- API en https://api.csrangulardeveloper.nom.es/api/v1

## Idioma

Responder siempre en castellano.

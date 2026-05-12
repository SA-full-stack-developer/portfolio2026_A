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

## Backend

- NestJS en carpeta backend/
- API en https://api.csrangulardeveloper.nom.es/api/v1

## Idioma

Responder siempre en castellano.

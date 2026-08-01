# Portfolio Backend API

API REST en **NestJS** que da servicio al [portfolio profesional](https://csrangulardeveloper.nom.es), gestionando la persistencia de datos (skills, experiencia, empresas, proyectos, estadísticas) y funcionalidades de **IA generativa** (chat sobre el CV, generación de cartas de presentación, asistente de contacto).

📄 Documentación interactiva (Swagger/OpenAPI): **https://api.csrangulardeveloper.nom.es/api/v1/docs**

> Este proyecto es una app independiente dentro de un **monorepo Nx** (`apps/backend`), con su propio `package.json`/lockfile/`node_modules` — no comparte dependencias con el frontend (`apps/portfolio`, `apps/lab001`).

## Módulos

| Módulo       | Descripción                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `skills`     | Listado de habilidades técnicas, con filtro por categoría y por destacadas (`onlyHighlighted`)                                                               |
| `companies`  | Empresas asociadas a la experiencia profesional                                                                                                              |
| `experience` | Experiencia profesional, con empresa y skills resueltas (relaciones pobladas en la respuesta)                                                                |
| `projects`   | Proyectos del portfolio                                                                                                                                      |
| `stats`      | Estadísticas calculadas dinámicamente (ej. años de experiencia, contador de cafés) a partir de una configuración interna                                     |
| `status`     | Estado actual del sistema/disponibilidad                                                                                                                     |
| `auth`       | Validación de tokens para rutas administrativas                                                                                                              |
| `ai`         | Integración con la API de **Gemini** (`@google/generative-ai`): chat sobre el CV, generación de cartas de presentación, asistente de contacto conversacional |

## Setup del proyecto

```bash
npm install
```

## Compilar y ejecutar

```bash
# desarrollo (watch mode)
npm run start:dev

# producción
npm run start:prod
```

> En Windows, `start:dev` requiere comillas dobles en el flag `--exec` (`cmd.exe` no interpreta comillas simples como agrupador) — ya está así en el script del `package.json`.

## Tests

```bash
# unitarios
npm run test

# unitarios con cobertura
npm run test:cov

# end-to-end (supertest contra la app real)
npm run test:e2e

# lint
npm run lint
```

Los tests unitarios (`*.spec.ts`) están incluidos en el `tsconfig.json` base (para que ESLint y el editor los reconozcan con tipado completo); la exclusión de specs para el build de producción vive por separado en `tsconfig.build.json`, siguiendo el patrón estándar de Nest.

## Variables de entorno

| Variable         | Descripción                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| `GEMINI_API_KEY` | API key de Google Generative AI, usada por el módulo `ai`                                                    |
| `GEMINI_MODEL`   | Modelo de Gemini a usar (ej. `gemini-pro`)                                                                   |
| `PORT`           | Puerto de escucha (por defecto `3000` en desarrollo; `3000` también en producción vía `ecosystem.config.js`) |

## Arquitectura y convenciones

- **Prefijo global de API:** `/api/v1`
- **Validación:** `ValidationPipe` global con `whitelist` + `forbidNonWhitelisted` + `transform`, aplicado a todos los DTOs de entrada
- **Respuestas normalizadas:** `TransformInterceptor` global envuelve toda respuesta exitosa en `{ data, timestamp }`
- **CORS:** restringido a los orígenes conocidos de producción y desarrollo local
- **Documentación:** generada automáticamente con `@nestjs/swagger` a partir de los DTOs y controladores, servida en `/api/v1/docs`
- **Tipado estricto:** sin `any` — los datos con forma variable (ej. la configuración de cada stat calculada) se modelan con uniones discriminadas por una propiedad `kind`

## Despliegue

El backend se despliega de forma independiente desde GitHub Actions (`build-backend` → `deploy-backend`) a la rama `deploy-api`, servido en producción con PM2 (`ecosystem.config.js`). El despliegue solo se dispara en la rama `develop`. Ver el [README principal del monorepo](../../README.md) para el detalle completo del pipeline de CI/CD.

## Stack

- [NestJS](https://nestjs.com/) sobre Node.js 22
- TypeScript fijado a una versión concreta en todo el workspace (compartida con el frontend)
- Swagger/OpenAPI para documentación de la API
- Jest + Supertest para tests unitarios y e2e

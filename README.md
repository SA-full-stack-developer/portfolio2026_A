# Full-Stack Professional Portfolio & API Ecosistema 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://csrangulardeveloper.nom.es)
[![API Documentation](https://img.shields.io/badge/Swagger-OpenAPI-blue?style=for-the-badge)](https://api.csrangulardeveloper.nom.es/api/v1/docs)

Repositorio oficial de mi portfolio profesional. Este proyecto no es solo una vitrina de trabajos, sino una demostración técnica de una arquitectura desacoplada, escalable y moderna utilizando el ecosistema completo de TypeScript.

## 🏗️ Arquitectura del Sistema

El proyecto está dividido en dos grandes bloques independientes:

1.  **Frontend (Angular):** Una Single Page Application (SPA) de alto rendimiento enfocada en la experiencia de usuario y la reactividad.
2.  **Backend (NestJS):** Una API REST robusta que gestiona la persistencia de datos y la lógica de negocio, documentada bajo el estándar OpenAPI.

---

## 🛠️ Stack Tecnológico

### Frontend

- **Framework:** Angular 21+
- **Gestión de Estado:** Arquitectura basada en **Signals** para una detección de cambios eficiente.
- **Programación Reactiva:** RxJS para el manejo de flujos de datos asíncronos.
- **Estilos:** SASS.
- **Internacionalización:** Soporte multiidioma (ES/EN) mediante `ngx-translate`.

### Backend

- **Framework:** NestJS (Node.js)
- **Documentación:** Swagger UI integrada para pruebas de endpoints en tiempo real.
- **Arquitectura:** Modular, facilitando el mantenimiento y la escalabilidad de cada sección (Habilidades, Experiencia).
- **Seguridad:** Configuración de CORS restringida y validación de datos.

---

## 🚀 Despliegue y DevOps

El proyecto implementa un flujo de **Continuous Deployment (CD)** simplificado:

- **Hosting:** Entorno gestionado con Plesk.
- **Automatización:** Git Hooks para el despliegue automático de ramas específicas.
- **Normalización:** Uso de Interceptores globales para asegurar que todas las respuestas de la API sigan un esquema consistente:

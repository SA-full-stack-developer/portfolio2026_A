import { SeoConfig } from '@core/models/seo.model';

export const DEFAULT_SEO: SeoConfig = {
  title: 'Cristian Salcedo - Full Stack Developer',
  description:
    'Full Stack Developer especializado en Angular y NestJS. Portfolio profesional con proyectos y stack tecnológico.',
  keywords: ['Angular', 'NestJS', 'TypeScript', 'Full Stack', 'Frontend', 'Developer'],
  ogTitle: 'Cristian Salcedo - Full Stack Developer',
  ogDescription: 'Full Stack Developer especializado en Angular y NestJS.',
  ogImage: 'https://csrangulardeveloper.nom.es/og-image.jpg',
  ogUrl: 'https://csrangulardeveloper.nom.es',
  twitterCard: 'summary_large_image',
};

export const PAGE_SEO: Record<string, Partial<SeoConfig>> = {
  portfolio: {
    title: 'Cristian Salcedo - Full Stack Developer',
    description: 'Portfolio profesional de Cristian Salcedo. Angular, NestJS, TypeScript.',
    ogUrl: 'https://csrangulardeveloper.nom.es',
  },
  contact: {
    title: 'Contacto | Cristian Salcedo',
    description: 'Contacta con Cristian Salcedo para proyectos freelance o colaboraciones.',
    ogTitle: 'Contacto | Cristian Salcedo',
    ogDescription: 'Contacta con Cristian Salcedo para proyectos freelance o colaboraciones.',
    ogUrl: 'https://csrangulardeveloper.nom.es/contact',
  },
  aboutMe: {
    title: 'Sobre mí | Cristian Salcedo',
    description:
      'Conoce más sobre Cristian Salcedo, Full Stack Developer con más de 8 años de experiencia.',
    ogTitle: 'Sobre mí | Cristian Salcedo',
    ogDescription: 'Full Stack Developer con más de 8 años de experiencia en Angular y NestJS.',
    ogUrl: 'https://csrangulardeveloper.nom.es/about-me',
  },
  lab: {
    title: 'Lab | Cristian Salcedo',
    description: 'Experimentos y componentes experimentales de Cristian Salcedo.',
    ogUrl: 'https://csrangulardeveloper.nom.es/lab',
  },
  legal: {
    title: 'Aviso Legal | Cristian Salcedo',
    description: 'Aviso legal y política de privacidad del portfolio de Cristian Salcedo.',
    ogUrl: 'https://csrangulardeveloper.nom.es/legal',
  },
};

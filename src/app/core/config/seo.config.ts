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

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cristian Salcedo Rodríguez',
  url: 'https://csrangulardeveloper.nom.es',
  image: 'https://csrangulardeveloper.nom.es/assets/images/avatar.webp',
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack Developer especializado en Angular y NestJS.',
  sameAs: [
    'https://github.com/SA-full-stack-developer',
    'https://www.linkedin.com/in/cristian-salcedo-fullstack/',
    'https://www.instagram.com/huntingvg/',
  ],
  knowsAbout: [
    'Angular',
    'TypeScript',
    'NestJS',
    'SCSS',
    'RxJS',
    'Node.js',
    'SSR',
    'Docker',
    'Git',
    'Clean Code',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cristian Salcedo — Full Stack Developer',
  url: 'https://csrangulardeveloper.nom.es',
  description: 'Portfolio profesional de Cristian Salcedo. Angular, NestJS, TypeScript.',
  author: {
    '@type': 'Person',
    name: 'Cristian Salcedo Rodríguez',
  },
};

export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const BREADCRUMB_HOME = buildBreadcrumb([
  { name: 'Home', url: 'https://csrangulardeveloper.nom.es' },
]);

export const BREADCRUMB_ABOUT = buildBreadcrumb([
  { name: 'Home', url: 'https://csrangulardeveloper.nom.es' },
  { name: 'Sobre mí', url: 'https://csrangulardeveloper.nom.es/about-me' },
]);

export const BREADCRUMB_CONTACT = buildBreadcrumb([
  { name: 'Home', url: 'https://csrangulardeveloper.nom.es' },
  { name: 'Contacto', url: 'https://csrangulardeveloper.nom.es/contact' },
]);

export const BREADCRUMB_LEGAL = buildBreadcrumb([
  { name: 'Home', url: 'https://csrangulardeveloper.nom.es' },
  { name: 'Legal & Privacidad', url: 'https://csrangulardeveloper.nom.es/legal' },
]);

export const BREADCRUMB_LAB = buildBreadcrumb([
  { name: 'Home', url: 'https://csrangulardeveloper.nom.es' },
  { name: 'Lab', url: 'https://csrangulardeveloper.nom.es/lab' },
]);

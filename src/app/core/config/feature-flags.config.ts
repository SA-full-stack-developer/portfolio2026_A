import { FeatureFlag } from '@core/models/feature-flag.model';

export const FEATURE_FLAGS: Record<string, FeatureFlag> = {
  HEADER: {
    id: 'HEADER',
    label: 'Header',
    visibility: 'public',
  },
  HEADER_LOGO: {
    id: 'HEADER_LOGO',
    label: 'Header Logo',
    visibility: 'public',
  },
  HEADER_NAV: {
    id: 'HEADER_NAV',
    label: 'Header Nav',
    visibility: 'public',
  },
  HEADER_HAMBURGER: {
    id: 'HEADER_HAMBURGER',
    label: 'Header Hamburger',
    visibility: 'public',
  },
  HERO: {
    id: 'HERO',
    label: 'Hero',
    visibility: 'public',
  },
  HERO_INTRO: {
    id: 'HERO_INTRO',
    label: 'Hero Intro',
    visibility: 'public',
  },
  HERO_STATS: {
    id: 'HERO_STATS',
    label: 'Hero Stats',
    visibility: 'public',
  },
  SKILLS: {
    id: 'SKILLS',
    label: 'Stack Tecnológico',
    visibility: 'public',
  },
  PROJECTS: {
    id: 'PROJECTS',
    label: 'Proyectos',
    visibility: 'hidden', // aún no existe
  },
  EXPERIENCE: {
    id: 'EXPERIENCE',
    label: 'Experiencia',
    visibility: 'public',
  },
  CONTACT: {
    id: 'CONTACT',
    label: 'Contacto',
    visibility: 'public',
  },
  LAB: {
    id: 'LAB',
    label: 'Laboratorio',
    visibility: 'admin', // solo admin
  },
  EXPERIMENTS: {
    id: 'EXPERIMENTS',
    label: 'Experimentos',
    visibility: 'admin',
  },
  LANGUAGE_SWITCHER: {
    id: 'LANGUAGE_SWITCHER',
    label: 'Language Switcher',
    visibility: 'public',
  },
};

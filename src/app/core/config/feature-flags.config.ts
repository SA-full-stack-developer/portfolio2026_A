import { FeatureFlag } from '@core/models/feature-flag.model';

export const FEATURE_FLAGS: Record<string, FeatureFlag> = {
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
    visibility: 'hidden', // aún no existe
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
};

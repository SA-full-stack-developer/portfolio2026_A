import { FeatureFlag } from '@core/models/feature-flag.model';

export const FEATURE_FLAGS: Record<string, FeatureFlag> = {
  SKILLS: {
    id: 'SKILLS',
    label: 'Stack Tecnológico',
    visibility: 'public',
    description: 'Sección de habilidades técnicas',
  },
  PROJECTS: {
    id: 'PROJECTS',
    label: 'Proyectos',
    visibility: 'public',
    description: 'Portfolio de proyectos realizados',
  },
  EXPERIENCE: {
    id: 'EXPERIENCE',
    label: 'Experiencia',
    visibility: 'public',
    description: 'Trayectoria profesional',
  },
  EXPERIMENTS: {
    id: 'EXPERIMENTS',
    label: 'Experimentos',
    visibility: 'admin',
    description: 'Componentes y pruebas en progreso',
  },
  BLOG: {
    id: 'BLOG',
    label: 'Blog',
    visibility: 'hidden',
    description: 'Pendiente de desarrollar',
  },
};

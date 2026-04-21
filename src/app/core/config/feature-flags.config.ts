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
  HERO_AVATAR: {
    id: 'HERO_AVATAR',
    label: 'Hero Avatar',
    visibility: 'public',
  },
  SKILLS: {
    id: 'SKILLS',
    label: 'Stack Tecnológico',
    visibility: 'public',
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
  LANGUAGE_SWITCHER: {
    id: 'LANGUAGE_SWITCHER',
    label: 'Language Switcher',
    visibility: 'public',
  },
  GO_TO_TOP: {
    id: 'GO_TO_TOP',
    label: 'Go to top',
    visibility: 'public',
  },
  FOOTER: {
    id: 'FOOTER',
    label: 'Footer',
    visibility: 'public',
  },
  FOOTER_INFORMATION: {
    id: 'FOOTER_INFORMATION',
    label: 'Footer Information',
    visibility: 'public',
  },
  FOOTER_LINKS: {
    id: 'FOOTER_LINKS',
    label: 'Footer Links',
    visibility: 'public',
  },
  FOOTER_CONTACT: {
    id: 'FOOTER_CONTACT',
    label: 'Footer Contact',
    visibility: 'public',
  },
  COPYRIGHT: {
    id: 'COPYRIGHT',
    label: 'Copyright',
    visibility: 'public',
  },
};

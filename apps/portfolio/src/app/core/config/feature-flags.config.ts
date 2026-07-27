import {
  BORDER_GRADIENT,
  CARD_EFFECT,
  CHAT_CV,
  CHAT_MESSAGE,
  CONTACT,
  CONTACT_ASSISTANT,
  COPYRIGHT,
  COVER_LETTER,
  EXPERIENCE,
  FLIPCARD,
  FOOTER,
  FOOTER_CONTACT,
  FOOTER_INFORMATION,
  FOOTER_LINKS,
  GO_TO_TOP,
  HEADER,
  HEADER_HAMBURGER,
  HEADER_LOGO,
  HEADER_NAV,
  HERO,
  HERO_AVATAR,
  HERO_INTRO,
  HERO_STATS,
  LAB,
  LANGUAGE_SWITCHER,
  LIQUID_PROGRESS_BAR,
  PROJECTS,
  SKILLS,
  SPLITTEXT,
} from '@core/constants/feaute-flags.constants';

import { FeatureFlag } from '@core/models/feature-flag.model';

export const FEATURE_FLAGS: Record<string, FeatureFlag> = {
  HEADER: {
    id: HEADER,
    label: 'Header',
    visibility: 'public',
  },
  HEADER_LOGO: {
    id: HEADER_LOGO,
    label: 'Header Logo',
    visibility: 'public',
  },
  HEADER_NAV: {
    id: HEADER_NAV,
    label: 'Header Nav',
    visibility: 'public',
  },
  HEADER_HAMBURGER: {
    id: HEADER_HAMBURGER,
    label: 'Header Hamburger',
    visibility: 'public',
  },
  HERO: {
    id: HERO,
    label: 'Hero',
    visibility: 'public',
  },
  HERO_INTRO: {
    id: HERO_INTRO,
    label: 'Hero Intro',
    visibility: 'public',
  },
  HERO_STATS: {
    id: HERO_STATS,
    label: 'Hero Stats',
    visibility: 'public',
  },
  HERO_AVATAR: {
    id: HERO_AVATAR,
    label: 'Hero Avatar',
    visibility: 'public',
  },
  SKILLS: {
    id: SKILLS,
    label: 'Stack Tecnológico',
    visibility: 'public',
  },
  EXPERIENCE: {
    id: EXPERIENCE,
    label: 'Experiencia',
    visibility: 'public',
  },
  CONTACT: {
    id: CONTACT,
    label: 'Contacto',
    visibility: 'public',
  },
  LANGUAGE_SWITCHER: {
    id: LANGUAGE_SWITCHER,
    label: 'Language Switcher',
    visibility: 'public',
  },
  GO_TO_TOP: {
    id: GO_TO_TOP,
    label: 'Go to top',
    visibility: 'public',
  },
  FOOTER: {
    id: FOOTER,
    label: 'Footer',
    visibility: 'public',
  },
  FOOTER_INFORMATION: {
    id: FOOTER_INFORMATION,
    label: 'Footer Information',
    visibility: 'public',
  },
  FOOTER_LINKS: {
    id: FOOTER_LINKS,
    label: 'Footer Links',
    visibility: 'public',
  },
  FOOTER_CONTACT: {
    id: FOOTER_CONTACT,
    label: 'Footer Contact',
    visibility: 'public',
  },
  COPYRIGHT: {
    id: COPYRIGHT,
    label: 'Copyright',
    visibility: 'public',
  },
  PROJECTS: {
    id: PROJECTS,
    label: 'Proyectos',
    visibility: 'hidden',
  },
  LAB: {
    id: LAB,
    label: 'Laboratorio',
    visibility: 'admin',
  },
  CHAT_MESSAGE: {
    id: CHAT_MESSAGE,
    label: 'Chat Message',
    visibility: 'hidden',
  },
  CHAT_CV: {
    id: CHAT_CV,
    label: 'Chat sobre mi CV',
    visibility: 'hidden',
  },
  CONTACT_ASSISTANT: {
    id: CONTACT_ASSISTANT,
    label: 'Contact Assistant',
    visibility: 'hidden',
  },
  COVER_LETTER: {
    id: COVER_LETTER,
    label: 'Cover Letter',
    visibility: 'hidden',
  },
  BORDER_GRADIENT: {
    id: BORDER_GRADIENT,
    label: 'Border Gradient',
    visibility: 'public',
  },
  CARD_EFFECT: {
    id: CARD_EFFECT,
    label: 'Card Effect',
    visibility: 'public',
  },
  LIQUID_PROGRESS_BAR: {
    id: LIQUID_PROGRESS_BAR,
    label: 'Liquid Progress Bar',
    visibility: 'admin',
  },
  FLIPCARD: {
    id: FLIPCARD,
    label: 'Flip card',
    visibility: 'public',
  },
  SPLITTEXT: {
    id: SPLITTEXT,
    label: 'Split text',
    visibility: 'public',
  },
};

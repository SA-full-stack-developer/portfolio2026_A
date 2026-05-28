import { BORDER_GRADIENT, FLIPCARD, LIQUID_PROGRESS_BAR } from '@core/constants';

import { LabConfig } from '@core/models/lab.model';

export const LAB_CONFIG: Record<string, LabConfig> = {
  BorderGradient: {
    tag: BORDER_GRADIENT,
    title: 'Border Gradient',
    remoteName: 'lab001',
    exposedModule: './BorderGradient',
    exportName: 'BorderGradient',
    component: null,
    cssVars: {
      '--bg-color': '#161616',
      '--conic-gradient':
        'conic-gradient(#4f8ef7, #7c5cbf, #f44336, #ffb100, #00d26a, #f5c518, #4f8ef7)',
      '--inset': '4px',
      '--border-radius': '8px',
      '--text-color': '#f0f0f0',
      '--animation-time': '3s',
    },
  },
  BorderGradientBlur: {
    tag: BORDER_GRADIENT,
    title: 'Border Gradient Blur',
    remoteName: 'lab001',
    exposedModule: './BorderGradient',
    exportName: 'BorderGradient',
    component: null,
    cssVars: {
      '--bg-color': '#161616',
      '--conic-gradient':
        'conic-gradient(#4f8ef7, #7c5cbf, #f44336, #ffb100, transparent, #4f8ef7)',
      '--inset': '4px',
      '--border-radius': '8px',
      '--text-color': '#f0f0f0',
      '--animation-time': '1s',
    },
  },
  BorderGradienttTest: {
    tag: BORDER_GRADIENT,
    title: 'Border Gradient Mini',
    remoteName: 'lab001',
    exposedModule: './BorderGradient',
    exportName: 'BorderGradient',
    component: null,
    cssVars: {
      '--bg-color': '#161616',
      '--conic-gradient':
        'conic-gradient(#4f8ef7, #7c5cbf, #f44336, #ffb100, #00d26a, #f5c518, #4f8ef7)',
      '--inset': '1px',
      '--border-radius': '8px',
      '--text-color': '#f0f0f0',
      '--animation-time': '3s',
    },
  },
  CardEffects: {
    tag: BORDER_GRADIENT,
    title: 'Tilt - Spotlight Effects',
    remoteName: 'lab001',
    exposedModule: './CardEffects',
    exportName: 'CardEffects',
    component: null,
    cssVars: {
      '--bg-color': '#161616',
      '--text-color': '#f0f0f0',
    },
  },
  CardEffectsBlue: {
    tag: BORDER_GRADIENT,
    title: 'Tilt - Spotlight Effects (blue)',
    remoteName: 'lab001',
    exposedModule: './CardEffects',
    exportName: 'CardEffects',
    component: null,
    cssVars: {
      '--bg-color': '#161616',
      '--text-color': '#f0f0f0',
      '--spotlight-color': '#4f8ef7,transparent, transparent',
    },
  },
  CardEffectsCenterTransparent: {
    tag: BORDER_GRADIENT,
    title: 'Tilt - Spotlight (center transparent)',
    remoteName: 'lab001',
    exposedModule: './CardEffects',
    exportName: 'CardEffects',
    component: null,
    cssVars: {
      '--bg-color': '#161616',
      '--text-color': '#f0f0f0',
      '--spotlight-color': 'transparent,#4f8ef7,transparent',
    },
  },
  LiquidProgressBar: {
    tag: LIQUID_PROGRESS_BAR,
    title: 'Liquid progress bar',
    remoteName: 'lab001',
    exposedModule: './LiquidProgressBar',
    exportName: 'LiquidProgressBar',
    component: null,
    cssVars: {
      '--height': '100px',
      '--fill': '#7c5cbf',
    },
  },
  FlipCard: {
    tag: FLIPCARD,
    title: 'Flip card click',
    remoteName: 'lab001',
    exposedModule: './FlipCard',
    exportName: 'FlipCard',
    component: null,
    cssVars: {
      '--width': '100px',
      '--height': '100px',
      '--bg-color-front': '#161616',
      '--bg-color-back': '#9e9e9e',
      '--border-front': 'solid 2px #4f8ef7',
      '--border-back': 'solid 2px #f44336',
      '--border-radius': '10px',
    },
  },
  FlipCardHover: {
    tag: FLIPCARD,
    title: 'Flip card hover',
    remoteName: 'lab001',
    exposedModule: './FlipCard',
    exportName: 'FlipCard',
    component: null,
    cssVars: {
      '--width': '100px',
      '--height': '100px',
      '--bg-color-front': '#161616',
      '--bg-color-back': '#9e9e9e',
      '--border-front': 'solid 2px #4f8ef7',
      '--border-back': 'solid 2px #f44336',
      '--border-radius': '10px',
    },
  },
};
/*
$primary-hue: #4f8ef7;
$accent-color: #7c5cbf;
$warn-hue: #f44336;
$warn-orange-hue: #ffb100;
$success-hue: #00d26a;
$highlight: #f5c518;

$bg-dark: #0d0d0d;
$bg-surface: #161616;
$bg-card: #1e1e1e;
$text-primary: #f0f0f0;
$text-secondary: #9e9e9e;
$border-subtle: rgba(255, 255, 255, 0.08);
*/

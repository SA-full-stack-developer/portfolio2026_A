import { BORDER_GRADIENT } from '@core/constants';
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
      '--linear-gradient':
        'linear-gradient(45deg, #4f8ef7, #7c5cbf, #f44336, #ffb100, #00d26a, #f5c518)',
      '--blur': '0px',
      '--inset': '-4px',
      '--border-radius': '8px',
      '--text-color': '#f0f0f0',
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
      '--linear-gradient': 'linear-gradient(45deg, #ff6, #787, #4ad, #fac)',
      '--blur': '4px',
      '--inset': '-4px',
      '--border-radius': '8px',
      '--text-color': '#f0f0f0',
    },
  },
  BorderGradienttTest: {
    tag: BORDER_GRADIENT,
    title: 'Border Gradient Blur',
    remoteName: 'lab001',
    exposedModule: './BorderGradient',
    exportName: 'BorderGradient',
    component: null,
    cssVars: {
      '--bg-color': '#161616',
      '--linear-gradient': 'linear-gradient(45deg, #ec4, #3f5, #e80, #c15)',
      '--blur': '4px',
      '--inset': '-4px',
      '--border-radius': '8px',
      '--text-color': '#f0f0f0',
    },
  },
};

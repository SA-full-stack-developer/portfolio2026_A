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
    title: 'Border Gradient Blur.',
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
};

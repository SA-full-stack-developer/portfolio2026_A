import {
  BORDER_GRADIENT,
  CARD_EFFECT,
  FLIPCARD,
  LIQUID_PROGRESS_BAR,
  SPLITTEXT,
  TAG_SELECTOR,
} from '@core/constants';

import { LabConfig } from '@core/models/lab.model';

export const LAB_CONFIG: Record<string, LabConfig> = {
  BorderGradient: {
    tag: BORDER_GRADIENT,
    title: 'Border Gradient',
    remoteName: 'lab001',
    exposedModule: './BorderGradient',
    exportName: 'BorderGradient',
    component: null,
    inputs: {
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
  },
  BorderGradientBlur: {
    tag: BORDER_GRADIENT,
    title: 'Border Gradient Blur',
    remoteName: 'lab001',
    exposedModule: './BorderGradient',
    exportName: 'BorderGradient',
    component: null,
    inputs: {
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
  },
  BorderGradienttTest: {
    tag: BORDER_GRADIENT,
    title: 'Border Gradient Mini',
    remoteName: 'lab001',
    exposedModule: './BorderGradient',
    exportName: 'BorderGradient',
    component: null,
    inputs: {
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
  },
  CardEffects: {
    tag: CARD_EFFECT,
    title: 'Tilt - Spotlight Effects',
    remoteName: 'lab001',
    exposedModule: './CardEffects',
    exportName: 'CardEffects',
    component: null,
    inputs: {
      cssVars: {
        '--bg-color': '#161616',
        '--text-color': '#f0f0f0',
      },
    },
  },
  CardEffectsBlue: {
    tag: CARD_EFFECT,
    title: 'Tilt - Spotlight Effects (blue)',
    remoteName: 'lab001',
    exposedModule: './CardEffects',
    exportName: 'CardEffects',
    component: null,
    inputs: {
      cssVars: {
        '--bg-color': '#161616',
        '--text-color': '#f0f0f0',
        '--spotlight-color': '#4f8ef7,transparent, transparent',
      },
    },
  },
  CardEffectsCenterTransparent: {
    tag: CARD_EFFECT,
    title: 'Tilt - Spotlight (center transparent)',
    remoteName: 'lab001',
    exposedModule: './CardEffects',
    exportName: 'CardEffects',
    component: null,
    inputs: {
      cssVars: {
        '--bg-color': '#161616',
        '--text-color': '#f0f0f0',
        '--spotlight-color': 'transparent,#4f8ef7,transparent',
      },
    },
  },
  LiquidProgressBar: {
    tag: LIQUID_PROGRESS_BAR,
    title: 'Liquid progress bar',
    remoteName: 'lab001',
    exposedModule: './LiquidProgressBar',
    exportName: 'LiquidProgressBar',
    component: null,
    inputs: {
      cssVars: {
        '--height': '100px',
        '--fill': '#7c5cbf',
      },
    },
  },
  FlipCard: {
    tag: FLIPCARD,
    title: 'Flip card click',
    remoteName: 'lab001',
    exposedModule: './FlipCard',
    exportName: 'FlipCard',
    component: null,
    inputs: {
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
  },
  FlipCardHover: {
    tag: FLIPCARD,
    title: 'Flip card hover',
    remoteName: 'lab001',
    exposedModule: './FlipCard',
    exportName: 'FlipCard',
    component: null,
    inputs: {
      cssVars: {
        '--width': '100px',
        '--height': '100px',
        '--bg-color-front': '#161616',
        '--bg-color-back': '#9e9e9e',
        '--border-front': 'solid 2px #4f8ef7',
        '--border-back': 'solid 2px #f44336',
        '--border-radius': '10px',
      },
      isHover: true,
    },
  },
  SplitText: {
    tag: SPLITTEXT,
    title: 'Split text',
    remoteName: 'lab001',
    exposedModule: './SplitTextLab',
    exportName: 'SplitTextLab',
    component: null,
    inputs: {
      cssVars: {
        '--margin': '0.2rem',
        '--bg-color': '#161616',
        '--color': '#9e9e9e',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVivamus ut dolor nec sapien commodo laoreet sit amet eget diam.\nMauris eget arcu in elit tincidunt egestas sed id orci.\nMaecenas in elit nec quam vulputate mollis.\nNullam mollis dolor sed nulla ultricies, porta cursus magna laoreet.\nVivamus facilisis diam vitae leo maximus vestibulum.\nPraesent scelerisque nunc nec erat tincidunt pretium.\nMauris elementum justo sagittis justo lacinia, a tincidunt arcu ultrices.\nQuisque nec purus vitae velit vulputate interdum sit amet nec ligula.\nNulla nec est id sapien malesuada maximus non quis metus.\nNulla elementum velit a imperdiet luctus.\nMauris eleifend nibh in auctor pulvinar.\nNullam vitae magna vel neque finibus feugiat sit amet non eros.\nEtiam hendrerit augue eu lacus maximus, sit amet facilisis nisi ullamcorper.',
    },
  },
  TagSelector: {
    tag: TAG_SELECTOR,
    title: 'Tag Selector',
    remoteName: 'lab001',
    exposedModule: './TagSelector',
    exportName: 'TagSelector',
    component: null,
    inputs: {
      cssVars: {
        '--color-border': '#ccc',
        '--color-accent': '#6366f1',
        '--color-on-accent': '#fff',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVivamus ut dolor nec sapien commodo laoreet sit amet eget diam.\nMauris eget arcu in elit tincidunt egestas sed id orci.\nMaecenas in elit nec quam vulputate mollis.\nNullam mollis dolor sed nulla ultricies, porta cursus magna laoreet.\nVivamus facilisis diam vitae leo maximus vestibulum.\nPraesent scelerisque nunc nec erat tincidunt pretium.\nMauris elementum justo sagittis justo lacinia, a tincidunt arcu ultrices.\nQuisque nec purus vitae velit vulputate interdum sit amet nec ligula.\nNulla nec est id sapien malesuada maximus non quis metus.\nNulla elementum velit a imperdiet luctus.\nMauris eleifend nibh in auctor pulvinar.\nNullam vitae magna vel neque finibus feugiat sit amet non eros.\nEtiam hendrerit augue eu lacus maximus, sit amet facilisis nisi ullamcorper.',
    },
  },
};

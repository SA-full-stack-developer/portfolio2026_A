import { shareAll, withNativeFederation } from '@angular-architects/native-federation/config';

export default withNativeFederation({
  name: 'lab001',

  exposes: {
    './BorderGradient': './apps/lab001/src/app/components/border-gradient/border-gradient.ts',
    './CardEffects': './apps/lab001/src/app/components/cards-effects/cards-effects.ts',
    './LiquidProgressBar':
      './apps/lab001/src/app/components/liquid-progress-bar/liquid-progress-bar.ts',
    './FlipCard': './apps/lab001/src/app/components/flip-card/flip-card.ts',
    './SplitTextLab': './apps/lab001/src/app/components/split-text-lab/split-text-lab.ts',
    './TagSelector': './apps/lab001/src/app/components/tag-selector/tag-selector.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    gsap: { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    'gsap/ScrollTrigger': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
  },

  skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket'],

  features: {
    ignoreUnusedDeps: true,
    ignoreInternalPaths: true,
  },
});

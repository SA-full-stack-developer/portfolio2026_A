const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'lab001',

  exposes: {
    './BorderGradient': './apps/lab001/src/app/components/border-gradient/border-gradient.ts',
    './CardEffects': './apps/lab001/src/app/components/cards-effects/cards-effects.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket'],

  features: {
    ignoreUnusedDeps: true,
    ignoreInternalPaths: true,
  },
});

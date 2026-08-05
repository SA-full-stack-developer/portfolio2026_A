import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@features/(.*)$': '<rootDir>/src/app/features/$1',
    '^@env/(.*)$': '<rootDir>/src/environments/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@portfolio/shared/models': '<rootDir>/../../libs/shared/models/src/index.ts',
    '^@shared-libs/services': '<rootDir>/../../libs/shared/services/src/index.ts',
    '^@shared-libs/services/*': '<rootDir>/../../libs/shared/services/src/lib/*',
    '^@angular-architects/native-federation$':
      '<rootDir>/__mocks__/@angular-architects/native-federation.ts',
    '^@emailjs/browser$': '<rootDir>/__mocks__/@emailjs/browser.ts',
  },
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/**/*.routes.ts',
    '!src/app/**/*.routes.server.ts',
    '!src/app/app.routes.server.ts',
    '!src/app/**/index.ts',
    '!src/app/app.ts',
    '!src/app/app.config.ts',
    '!src/app/app.config.server.ts',
    '!src/main.ts',
    '!src/main.server.ts',
    '!src/server.routes.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  coverageReporters: ['html', 'lcov', 'text-summary'],
  testPathIgnorePatterns: ['/node_modules/', '/backend/'],
};

export default config;

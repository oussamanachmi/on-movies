// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],

  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest', {
      tsconfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    }],
  },

  // Si tu n’as pas besoin de mapper les paths du tsconfig, supprime moduleNameMapper
  // moduleNameMapper: {},

  transformIgnorePatterns: ['node_modules/(?!@ngrx|ngx-socket-io)'],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text-summary'],
};

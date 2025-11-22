/**
 * Jest Configuration for Design System
 * Unit and Integration Tests
 */

module.exports = {
  // Test environment
  testEnvironment: 'jsdom',

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Module paths
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/react-ui/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // Transform files
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  // Test match patterns
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  // Coverage
  collectCoverageFrom: [
    'react-ui/src/**/*.{js,jsx}',
    '!react-ui/src/index.jsx',
    '!react-ui/src/icons/**',
  ],

  // Module file extensions
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // Test timeout
  testTimeout: 10000,

  // Verbose output
  verbose: true,

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};

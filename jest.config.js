export default {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { rootMode: 'upward' }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(yeoman-generator|yosay)/)',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/generators/app/templates'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/generators/app/templates/'
  ]
}; 
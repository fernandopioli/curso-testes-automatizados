module.exports = {
  clearMocks: true,
  // collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
  ],
  testMatch: ['**/*.spec.js'],
  roots: [
    '<rootDir>/src'
  ],
};

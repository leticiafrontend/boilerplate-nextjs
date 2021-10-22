module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!stories/*.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

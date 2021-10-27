module.exports = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: [
    "<rootDir>/src"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts"
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};

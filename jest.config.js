module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/main/**/*",
    "!<rootDir>/src/presentation/components/router/**/*",
    "!<rootDir>/src/**/index.ts",
    '!**/*.d.ts',
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    // DOC - create a null object just for test and make scss dont interf with the test
    "\\.scss$": "identity-obj-proxy",
  },
};

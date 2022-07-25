
export default {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    ".+.ts$": "ts-jest",
  },
};
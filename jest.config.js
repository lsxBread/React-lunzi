module.exports = {
    "roots": [
      "<rootDir>/lib"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
    "coverageDirectory": "coverage",
    "coverageReporters": ['text', 'lcov'],
    "reporters": ["default", "jest-junit"],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|jsx|js|ts)?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "moduleNameMapper":{
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"]
  }
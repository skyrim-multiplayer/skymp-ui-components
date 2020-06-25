module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.ts"
  },
  testRegex: "\\.(test|spec).(ts|tsx|js|jsx)$",
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>node_modules/",
    "<rootDir>.storybook-static/",
    "<rootDir>.storybook-docs/"
  ]
};

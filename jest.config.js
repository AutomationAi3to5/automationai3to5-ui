module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/__tests__/**/*.(js|jsx)", "**/?(*.)+(test|spec).(js|jsx)"],
  transform: { "^.+\\.(js|jsx)$": "babel-jest" }
};

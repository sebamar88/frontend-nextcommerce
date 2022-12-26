module.exports = {
    transform: {
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
        "^.+\\.tsx?$": ["babel-jest", { presets: ["next/babel"] }],
    },
    testMatch: ["**/src/**/*.test.[jt]s?(x)"],
    setupFilesAfterEnv: ["./setupTests.ts"],
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.{scss,css}",
        "!src/enums/**",
        "!src/types/**",
        "!src/constants/**",
        "!**/node_modules/**",
        "!**/*.{json}",
        "!.next/**",
        "!coverage/**",
        "!src/pages/**",
        "!src/types/**",
    ],
    coverageReporters: ["lcov"],
    moduleDirectories: ["node_modules", "src"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    testEnvironment: "jest-environment-jsdom",
    testResultsProcessor: process.env.REQUIERES_REPORT
        ? "jest-sonar-reporter"
        : "",
    moduleNameMapper: {
        "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
            "<rootDir>/__mocks__/fileMock.js",
        "home.module+\\.(scss)$": "<rootDir>/__mocks__/fileMock.js",
        "faq.module+\\.(scss)$": "<rootDir>/__mocks__/fileMock.js",
    },
    setupFiles: ["dotenv/config"],
};

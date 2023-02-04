export default {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};

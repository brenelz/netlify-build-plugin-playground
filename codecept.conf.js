const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./e2e/*_test.js",
  output: "./e2e/output",
  helpers: {
    Puppeteer: {
      url: "http://localhost:3000",
      show: false,
      windowSize: "1200x900",
    },
  },
  include: {
    I: "./e2e/steps/steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "next-netlify-codeceptjs",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};

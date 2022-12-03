import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // @ts-ignore-next-line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

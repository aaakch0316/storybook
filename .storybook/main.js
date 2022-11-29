const path = require("path")
const resolvePath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  "stories": [
    "../packages/components/*.stories.@(js|jsx|ts|tsx)",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    // "../stories/**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // '@storybook/addon-actions', 
    // '@storybook/addon-knobs/register',
    // '@storybook/addon-docs/preset'
  ],
  // "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // "@emotion/styled": resolvePath("node_modules/@emotion/styled"),
        "@emotion/core": resolvePath("node_modules/@emotion/react"),
        // "emotion-theming": resolvePath("node_modules/@emotion/react")
      }
    }
  })
}
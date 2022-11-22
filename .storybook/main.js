module.exports = {
  "stories": [
    // "../packages/components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../packages/test-cra/src/**/*.stories.@(js|jsx|ts|tsx)",
    // "../stories/**/*.stories.mdx",
    "../packages/default/stories/**/*.stories.@(js|jsx|ts|tsx)",
    // "../packages/default/stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}


// const path = require('path');
// module.exports = {
//     stories: ["../src/**/*.stories.(js|jsx|ts|tsx|mdx)"],
//     addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
//     webpackFinal: async config => {
//         config.module.rules.push({
//             test: /\.(js|jsx|ts|tsx|mdx)$/,
//             loader: require.resolve('babel-loader'),
//         }, {
//             test: /\.scss$/,
//             use: ['style-loader', 'css-loader', 'sass-loader'],
//             include: path.resolve(__dirname, '../src'),
//         });
//         config.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx', 'mdx');
//         return config;
//     },
// }
// const path = require("path")
// const fs = require("fs")

// // [Workaround] This logic means `"../packages/components/*/stories/*.stories.tsx"` but it's much faster.
// function getStories(pkg) {
//   const scope = pkg ? [pkg] : fs.readdirSync("packages/components")
//   return scope
//     .map((package) => `packages/components/${package}/stories`)
//     .filter((storyDir) => fs.existsSync(storyDir))
//     .map((storyDir) => `../${storyDir}/*.stories.tsx`)
// }

// module.exports = {
//   core: {
//     builder: "@storybook/builder-webpack5",
//     disableTelemetry: true,
//   },
//   stories: getStories(),
//   addons: [
//     "@storybook/addon-a11y",
//     "@storybook/addon-essentials",
//     "@storybook/addon-storysource",
//     "@chakra-ui/storybook-addon",
//   ],
//   webpackFinal: async (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@chakra-ui/react": path.resolve(
//         __dirname,
//         "../packages/components/react/src",
//       ),
//       "@chakra-ui/theme": path.resolve(
//         __dirname,
//         "../packages/components/theme/src",
//       ),
//     }
//     config.resolve.extensions.push(".ts", ".tsx")
//     return config
//   },
//   typescript: {
//     reactDocgen: false,
//   },
// }
module.exports = {
  stories: ["../src/**/*.stories.(tsx|ts|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-jest",
    "@storybook/addon-docs",
    "@storybook/addon-knobs"
  ],
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("awesome-typescript-loader")
          },
          {
            loader: require.resolve("react-docgen-typescript-loader")
          }
        ]
      },

      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          {
            loader: require.resolve("style-loader")
          },
          {
            loader: require.resolve("css-loader")
          },
          {
            loader: require.resolve("sass-loader")
          }
        ]
      }
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};

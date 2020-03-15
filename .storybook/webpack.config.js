module.exports = ({ config }) => {
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
};

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.plugins.push(new TSDocgenPlugin());

  config.resolve.extensions.push('.ts', '.tsx');

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      formatter: require('react-dev-utils/typescriptFormatter'),
    })
  );

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            singleQuote: true,
            tabWidth: 2,
            trailingComma: 'es5',
            printWidth: 80,
            bracketSpacing: true,
          },
        },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    // test: /\.(s*)css$/,
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: ['absolute/path/a', 'absolute/path/b'],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  });

  return config;
};

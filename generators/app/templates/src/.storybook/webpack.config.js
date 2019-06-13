const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config }) => {
  config.node = {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  };

  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   include: path.resolve(__dirname, '../components'),
  //   use: [
  //     {
  //       loader: require.resolve('babel-loader'),
  //       options: {
  //         presets: [require.resolve('babel-preset-react-app')],
  //       },
  //     },
  //     require.resolve('react-docgen-typescript-loader'),
  //   ],
  // });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      formatter: require('react-dev-utils/typescriptFormatter'),
    })
  );

  config.module.rules.push({
    test: /\.jsx?$/,
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

  return config;
};

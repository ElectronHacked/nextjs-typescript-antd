module.exports = {
  verbose: true,
  rootDir: '.',
  testMatch: [
    '<rootDir>/pages/**/?(*.)test.js?(x)',
    '<rootDir>/components/**/?(*.)test.js?(x)',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/setup/index.js',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/setup/assetsTransformer.js',
    '\\.(css|scss|less)$': '<rootDir>/setup/assetsTransformer.js',
    '^@root(.*)$': '<rootDir>/../..$1',
  },
  setupFiles: ['jest-plugin-context/setup'],
};

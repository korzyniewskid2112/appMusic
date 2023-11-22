const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      atoms: `${__dirname}/src/components/atoms`,
      molecules: `${__dirname}/src/components/molecules`,
      organisms: `${__dirname}/src/components/organisms`,
      templates: `${__dirname}/src/components/templates`,
      navigations: `${__dirname}/src/navigations`,
      pages: `${__dirname}/src/pages`,
      utils: `${__dirname}/src/pages`,
      hooks: `${__dirname}/src/hooks`,
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

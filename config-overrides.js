const { override, useBabelRc: loadBabelRc } = require('customize-cra');

module.exports = override(loadBabelRc());

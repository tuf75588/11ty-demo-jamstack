const lodashGet = require('lodash/get');
const yaml = require('js-yaml');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassThroughCopy('src/site/img');
  eleventyConfig.addPassThroughCopy({
    'src/js': 'js',
    'src/css': 'css',
  });
  const { DateTime } = require('luxon');
};

const lodashGet = require('lodash/get');
const yaml = require('js-yaml');
const Image = require('@11ty/eleventy-img');
const path = require('path');

const imageShortcode = async (
  relativeSrc,
  alt,
  className,
  widths = [null, 400, 800, 1280],
  formats = ['jpeg', 'webp'],
  sizes = '100vw'
) => {
  // we'll fill this in shortly
  const { dir: imageDir } = path.parse(relativeSrc);
  const fullSrc = path.join('src', relativeSrc);
  const imageMetadata = await Image(fullSrc, {
    widths,
    formats,
    outputDir: path.join('_site', imgDir),
    urlPath: imgDir,
  });
  console.log(metadata);
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('image', imageShortcode);
  eleventyConfig.addPassthroughCopy('assets/images');
  return {
    markdownTemplateEngine: 'md',
    htmlTemplateEngine: '.njk',
    dir: {
      input: 'index.njk',
      output: '_site',
      include: '_includes',
    },
  };
};

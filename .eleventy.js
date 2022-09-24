module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('style');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('rs-plugin');
    eleventyConfig.addPassthroughCopy('fonts');
    return {
        passthroughFileCopy: true
    };
};
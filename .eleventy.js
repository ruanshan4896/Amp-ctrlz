const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy favicon to output
  eleventyConfig.addPassthroughCopy("amp.ico");
  
  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if(outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
      return minified;
    }
    return content;
  });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

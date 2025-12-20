const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy favicon to output
  eleventyConfig.addPassthroughCopy("amp.ico");
  
  // Add fixed blue color scheme filter
  eleventyConfig.addFilter("randomColorScheme", function(slug) {
    // Fixed blue color scheme
    return {
      name: "blue",
      bg: "#0a0e27",
      primary: "#00D4FF",
      secondary: "#0099CC",
      accent: "#FF4081"
    };
  });
  
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

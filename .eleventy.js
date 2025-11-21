const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy favicon to output
  eleventyConfig.addPassthroughCopy("amp.ico");
  
  // Add random color scheme filter
  eleventyConfig.addFilter("randomColorScheme", function(slug) {
    const colorSchemes = [
      {
        name: "gold",
        bg: "#0f0f1e",
        primary: "#FFD700",
        secondary: "#FFA500",
        accent: "#FF6B6B"
      },
      {
        name: "blue",
        bg: "#0a0e27",
        primary: "#00D4FF",
        secondary: "#0099CC",
        accent: "#FF4081"
      },
      {
        name: "purple",
        bg: "#1a0f2e",
        primary: "#B794F6",
        secondary: "#9333EA",
        accent: "#F97316"
      },
      {
        name: "green",
        bg: "#0f1e0f",
        primary: "#10B981",
        secondary: "#059669",
        accent: "#EF4444"
      },
      {
        name: "red",
        bg: "#1e0f0f",
        primary: "#FF6B6B",
        secondary: "#DC2626",
        accent: "#FBBF24"
      },
      {
        name: "cyan",
        bg: "#0f1e1e",
        primary: "#06B6D4",
        secondary: "#0891B2",
        accent: "#F59E0B"
      }
    ];
    
    // Use slug to deterministically pick a color (same slug = same color)
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = ((hash << 5) - hash) + slug.charCodeAt(i);
      hash = hash & hash;
    }
    const index = Math.abs(hash) % colorSchemes.length;
    return colorSchemes[index];
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

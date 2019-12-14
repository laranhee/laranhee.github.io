const { execSync } = require('child_process');

module.exports = function(eleventyConfig) {
  // tainwind build
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/styles.css');
  execSync('npx tailwind build ./src/styles.css -o ./_site/styles.css');

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
    htmlTemplateEngine: 'njk', // njk 템플릿이 prettier에 태워지기 위해 파일의 확장자를 html로 변경
  };
};

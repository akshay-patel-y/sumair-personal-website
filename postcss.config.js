/**
 * It’s necessary to install Autoprefixer alongside Tailwind CSS
 * Autoprefixer tracks caniuse.com to see which CSS properties need to be prefixed.
 * Tailwind CSS does not provide any vendor prefixing.
 * PostCSS documentation: https://github.com/postcss/postcss
 *
 */
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    process.env.NODE_ENV === "production" && require("autoprefixer"),
    process.env.NODE_ENV === "production" && cssnano({ preset: "default" }),
    process.env.NODE_ENV === "production" &&
      purgecss({
        content: [
          "./src/**/*.html",
          "./src/**/*.js",
          "./src/**/*.jsx",
          "./src/**/*.ts",
          "./src/**/*.tsx",
          "./dist/index.html",
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ].filter(Boolean), // This removes any false, null, or undefined values from the plugins array
};

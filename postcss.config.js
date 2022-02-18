module.exports = {
  plugins: [
    require("postcss-mixins"),
    require("postcss-custom-media"),
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("postcss-color-rgba-fallback"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};

const copy = require("rollup-plugin-copy");
const json = require("@rollup/plugin-json");

module.exports = {
  input: "./base.json",
  output: {
    file: "./dist/base.json",
    format: "cjs",
  },
  plugins: [
    json(),
    copy({
      targets: [
        { src: "./next.json", dest: "./dist/" },
        { src: "./node.json", dest: "./dist/" },
        { src: "./react.json", dest: "./dist/" },
        { src: "./CHANGELOG.md", dest: "./dist/" },
        { src: "./package.json", dest: "./dist/" },
      ],
    }),
  ],
};

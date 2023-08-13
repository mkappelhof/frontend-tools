const copy = require("rollup-plugin-copy");
const json = require("@rollup/plugin-json");

module.exports = {
  input: "./index.json",
  output: {
    file: "./dist/index.json",
    format: "cjs",
  },
  plugins: [
    json(),
    copy({
      targets: [
        { src: "./CHANGELOG.md", dest: "./dist/" },
        { src: "./package.json", dest: "./dist/" },
      ],
    }),
  ],
};

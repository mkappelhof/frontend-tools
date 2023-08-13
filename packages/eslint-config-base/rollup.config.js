const copy = require('rollup-plugin-copy');

module.exports = {
  input: './index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  plugins: [
    copy({
      targets: [
        { src: './.eslintrc.yml', dest: './dist/' },
        { src: './prettier', dest: './dist/' },
        { src: './CHANGELOG.md', dest: './dist/' },
        { src: './package.json', dest: './dist/' },
      ],
    }),
  ],
};

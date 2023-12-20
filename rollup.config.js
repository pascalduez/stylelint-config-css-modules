export default [
  {
    input: 'index.js',
    output: {
      file: 'dist/index.js',
      format: 'es',
    },
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
  },
];

const presets = [
  ['@babel/preset-env', { corejs: 3, useBuiltIns: 'usage' }],
  '@babel/preset-typescript',
];

module.exports = () => ({
  presets,
});

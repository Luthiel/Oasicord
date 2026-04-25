module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@store': './src/store',
            '@api': './src/api',
            '@types': './src/types',
            '@config': './src/config',
          },
        },
      ],
    ],
  };
};

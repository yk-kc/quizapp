module.exports = {
  presets: [['module:metro-react-native-babel-preset']],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
        alias: {
          '@quizapp': './src/',
        },
      },
    ],
  ],
};

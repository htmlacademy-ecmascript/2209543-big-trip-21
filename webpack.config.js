const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // Точка входа
  entry: './src/main.js',
  output: {
    // Имя бандла
    filename: 'bundle.js',
    // Директория для файлов сборки
    path: path.resolve(__dirname, 'build'),
    // Удаляем предыдущую сборку перед созданием новой
    clean: true,
  },
  // Генерируем карту исходного кода
  devtool: 'source-map',
  // Подключаем плагины
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};

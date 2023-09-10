const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  // Точка входа
  entry: './src/main.js',
  output: {
    // Имя бандла
    filename: 'bundle.[contenthash].js',
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
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ]
     }),
    new HtmlPlugin({
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
};

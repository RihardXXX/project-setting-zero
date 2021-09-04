const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
  console.log('env', env);
  console.log('argv', argv);
  // if (argv.mode === 'development') {
  //   // config.devtool = 'source-map';
  //   console.log('режим development');
  // }

  // if (argv.mode === 'production') {
  //   //...
  //   console.log('режим production');
  // }

  const isProd = argv.mode === 'production';
  const isDevelopment = argv.mode === 'development';

  return {
    mode: isProd ? 'production' : isDevelopment && 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-][sha1:hash:7].[ext]',
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        // Also generate a test.html
        dateBuild: new Date().toString(),
        // filename: 'index.html',
        template: 'public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style-[hash:5].css',
      }),
    ],
    devServer: {
      open: true,
    },
  };
};

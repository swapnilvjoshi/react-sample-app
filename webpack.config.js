const path = require('path');
const webpack = require('webpack');

module.exports = (env, { mode = 'development' }) => {
  const config = {
    mode,
    entry: {
      app: './lib/components/App.tsx',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                // '@babel/plugin-external-helpers',
                // 'babel-plugin-styled-components',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        },
        {
          loader: 'source-map-loader',
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: 'pre',
        }
      ],
    },
    output: {
      path: path.resolve(__dirname, 'public/src'),
      filename: 'bundle.js',
      libraryTarget: 'umd',
      publicPath: '/src',
      umdNamedDefine: true,
    },
    optimization: {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      nodeEnv: 'development',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  }

  return config;
}
// webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/main.ts', // 页面入口文件配置，可以是一个或多个入口文件
  output: {
    // 指定打包后的输出文件，这个文件会被引入到index.html中
    filename: './bundle.js'
  },

  resolve: { // 定义了解析模块路径
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.ts', '.js'] // extensions用来指定模块的后缀，这样就可以在引入模块时不需要写后缀了，会自动补全
  },

  module: {
    loaders: [ // 最关键的配置项，表明Webpack每一类文件需要使用加载器处理
      {
        test: /\.ts$/, 
        loader: 'ts-loader'
      }
    ]
  }
};
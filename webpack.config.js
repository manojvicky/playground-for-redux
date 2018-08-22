var config = {
   entry: './src/main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8000
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                plugins: [
                  'transform-decorators-legacy',
                ],
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;
const path = require('path')

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'script.js',
      path: path.resolve(__dirname, 'dist/assets/js'),
      assetModuleFilename: '../images/[name].[ext]' // Para versão atual do Webpack 5 onde o [name] é o nome do arquivo e o [ext] é a sua extensão 
   },
   mode: 'production',
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
         },
         {
            test: /\.(png|jpg|gif|svg)$/i,
            // use: [ 'file-loader' ]
            type: 'asset/resource',
            /*use: [{ // Para versão antiga do Webpack
               options: {
                  name: 'assets/images/[name].[ext]'
               }
            }]*/
         },
         {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
         }
      ]
   }
}
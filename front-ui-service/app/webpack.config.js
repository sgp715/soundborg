var config = {

    entry: [
	'webpack-dev-server/client?http://0.0.0.0:8080',
	'./main.js'
	],

    output: {
        path:'./',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 8080,
    },

    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel',

             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
   }
}

module.exports = config;

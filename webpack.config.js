module.exports = {
     devtool: 'eval-source-map',
     entry: {
         main: [
             './src/main.js',
         ]
     },
     output: {
         filename: './public/[name].js' 
     },

     module: {
         loaders: [
             {
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ['react', 'es2015', 'es2016','es2017']
                }

             }
         ]
     }
 }
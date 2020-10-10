//eport this configuration
//4 core concepts entry, output,loaders,plugins
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:{
        //need absolute path, use path package 
        //__dirname is current absolute path, join with dist/js
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        })
    ],
    module{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_moddules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }


};
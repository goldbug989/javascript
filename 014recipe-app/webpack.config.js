//eport this configuration
//4 core concepts entry, output,loaders,plugins
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output:{
        //need absolute path, use path package 
        //__dirname is current absolute path, join with dist/js
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },


};
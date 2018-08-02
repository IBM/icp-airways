var path = require('path');
var webpack = require('webpack');


module.exports = {  
  entry: { 
    index: "./src/main.ts"
  },
  target: 'node'
  ,
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'lib'),
    filename: '[name].js'
  },
};
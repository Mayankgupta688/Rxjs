const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/main.ts'),
    output: {
        filename: "app.js",
        path: __dirname
    }, 
    module: {
        rules: [
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            }
          ]
    },
    resolve: {
        extensions: [".ts"]
    }
}
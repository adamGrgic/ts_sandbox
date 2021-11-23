const path = require('path');
module.exports = {
 "mode": "none",
 "entry": "./ts",
 "output": {
   "path": __dirname + '/js',
   "filename": "bundle.js"
 },
devServer: {
   contentBase: path.join(__dirname, 'dist')
 }
}
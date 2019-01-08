//Configurations of babel to transform our code to code understandable by all browsers
require("babel-core/register");
require("babel-polyfill");
require('babel-register')({
    presets: [ 'env', "es2015", "stage-0" ]
});
module.exports = require('./src/index.js');

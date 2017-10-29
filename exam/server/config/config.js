var express = require('express');
var app = express();
var path = require('path'), 
rootPath = path.normalize(__dirname + '/..'), 
env = process.env.NODE_ENV || 'development';
var config = { 
development: { 
root: rootPath, 
app: { name: 'Test' }, 
port: 5000, 
db: 'mongodb://127.0.0.1/todo-dev'
}, 
production: { 
root: rootPath, 
app: { name: 'Test' }, 
port: 80, }
};
module.exports = config[env];
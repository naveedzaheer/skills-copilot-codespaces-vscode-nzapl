// Create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {}; // Cache file content
var chatServer = require('./lib/chat_server');

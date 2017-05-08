'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = JSON.parse(_fs2.default.readFileSync(_path2.default.join(__dirname, '../package.json')));
var help = require(_path2.default.join(__dirname, 'help.js'));

module.exports = {
  version: pkg.version,
  help: help,
  badRequest: function badRequest(command) {
    return command + ' is not valid command!';
  }
};
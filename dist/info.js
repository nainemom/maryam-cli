'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = JSON.parse(_fs2.default.readFileSync('package.json'));
var help = _fs2.default.readFileSync('src/help.txt', { encoding: 'utf8' });

exports.default = {
  version: pkg.version,
  help: help,
  badRequest: function badRequest(command) {
    return command + ' is not valid command!';
  }
};
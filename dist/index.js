#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var helper = require(_path2.default.join(__dirname, 'helper.js'));
var info = require(_path2.default.join(__dirname, 'info.js'));

var modules = {
  'translate': require(_path2.default.join(__dirname, 'modules/translate.js')),
  'fixsub': require(_path2.default.join(__dirname, 'modules/fixsub.js')),
  'renamesubs': require(_path2.default.join(__dirname, 'modules/renamesubs.js'))
};

if (process.argv.length > 2) {
  var moduleName = process.argv[2];
  if (['--version', '-v'].indexOf(moduleName) > -1) {
    helper.output(info.version);
  } else if (['--help', '-h'].indexOf(moduleName) > -1) {
    helper.output(info.help);
  } else if (!modules[moduleName]) {
    helper.output(info.badRequest(moduleName));
  } else {
    modules[moduleName].apply(modules, _toConsumableArray(process.argv.slice(3)));
  }
}
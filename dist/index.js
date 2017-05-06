#!/usr/bin/env node
'use strict';

var _helper = require('./helper.js');

var _helper2 = _interopRequireDefault(_helper);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _info = require('./info.js');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var modules = {
  'translate': require('./modules/translate.js'),
  'fixsub': require('./modules/fixsub.js')
};

if (process.argv.length > 2) {
  var moduleName = process.argv[2];
  if (['--version', '-v'].indexOf(moduleName) > -1) {
    _helper2.default.output(_info2.default.version);
  } else if (['--help', '-h'].indexOf(moduleName) > -1) {
    _helper2.default.output(_info2.default.help);
  } else if (!modules[moduleName]) {
    _helper2.default.output(_info2.default.badRequest(moduleName));
  } else {
    modules[moduleName].apply(modules, _toConsumableArray(process.argv.slice(3)));
  }
}
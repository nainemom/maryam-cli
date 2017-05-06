'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _iconv = require('iconv');

var _iconv2 = _interopRequireDefault(_iconv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helper = require(_path2.default.join(__dirname, '../helper.js'));

module.exports = function () {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var dst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  helper.spinner(true);
  try {
    var content = _fs2.default.readFileSync(src);
    var iconv = new _iconv2.default.Iconv('WINDOWS-1256', 'UTF-8');
    var result = iconv.convert(content).toString('utf8');
    var saveDir = dst ? dst : src;
    _fs2.default.writeFileSync(saveDir, result, 'UTF-8');
    helper.spinner(false);
    helper.ok('File \'' + saveDir + '\' saved!');
  } catch (err) {
    helper.spinner(false);
    helper.error(err);
  }
};
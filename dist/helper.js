'use strict';

var _logUpdate = require('log-update');

var _logUpdate2 = _interopRequireDefault(_logUpdate);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  _spinner: null,
  spinner: function spinner() {
    var set = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (set) {
      var i = 0;
      var frames = ['|', '/', '-', '\\'];
      this._spinner = setInterval(function () {
        (0, _logUpdate2.default)(frames[i = ++i % frames.length]);
      }, 170);
    } else {
      clearInterval(this._spinner);
      this._spinner = null;
      _logUpdate2.default.clear();
      _logUpdate2.default.done();
    }
  },
  output: function output() {
    var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    console.log(txt);
  },
  ok: function ok() {
    var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    console.log('OK:'.bold.green, txt);
  },
  error: function error() {
    var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    console.log('ERROR:'.bold.red, txt);
  }
};
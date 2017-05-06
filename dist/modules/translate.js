'use strict';

var _helper = require('../helper.js');

var _helper2 = _interopRequireDefault(_helper);

var _googleTranslateApi = require('google-translate-api');

var _googleTranslateApi2 = _interopRequireDefault(_googleTranslateApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  txt = txt.trim();
  var to = {
    code: 'fa',
    name: 'Persian'
  };
  if (/^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF7\u200C\u200F ]+$/.test(txt)) {
    to = {
      code: 'en',
      name: 'English'
    };
  }

  _helper2.default.spinner(true);
  (0, _googleTranslateApi2.default)(txt, {
    to: to.code
  }).then(function (res) {
    _helper2.default.spinner(false);
    _helper2.default.ok(res.text.trim());
  }).catch(function (err) {
    _helper2.default.spinner(false);
    switch (err.code) {
      case 'BAD_NETWORK':
        _helper2.default.error('Bad network!');
        break;
      default:
        _helper2.default.error('Unhandled error!');
    }
  });
};
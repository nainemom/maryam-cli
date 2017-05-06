'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _googleTranslateApi = require('google-translate-api');

var _googleTranslateApi2 = _interopRequireDefault(_googleTranslateApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helper = require(_path2.default.join(__dirname, '../helper.js'));

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

  helper.spinner(true);
  (0, _googleTranslateApi2.default)(txt, {
    to: to.code
  }).then(function (res) {
    helper.spinner(false);
    helper.ok(res.text.trim());
  }).catch(function (err) {
    helper.spinner(false);
    switch (err.code) {
      case 'BAD_NETWORK':
        helper.error('Bad network!');
        break;
      default:
        helper.error('Unhandled error!');
    }
  });
};
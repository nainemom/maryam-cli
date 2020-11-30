'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _jsLevenshtein = require('js-levenshtein');

var _jsLevenshtein2 = _interopRequireDefault(_jsLevenshtein);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helper = require(_path2.default.join(__dirname, '../helper.js'));
module.exports = function () {
  var srcPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  helper.spinner(true);
  var cwd = _process2.default.cwd();
  var dir = _path2.default.resolve(cwd, srcPath);
  try {
    var files = _fs2.default.readdirSync(dir);
    var movies = files.filter(function (file) {
      return file.endsWith('.mkv') || file.endsWith('.mp4');
    });
    var subs = files.filter(function (file) {
      return file.endsWith('.srt') || file.endsWith('.txt');
    });

    movies.forEach(function (movie) {
      var best = 99999;
      var theSub = null;
      subs.forEach(function (sub) {
        var level = (0, _jsLevenshtein2.default)(movie, sub);
        if (level < best) {
          best = level;
          theSub = srt;
        } else if (level === best) {
          theSub = null;
        }
      });
      if (theSub) {
        var originalPath = _path2.default.resolve(dir, theSub);
        var newPath = _path2.default.resolve(dir, _path2.default.basename(movie, _path2.default.extname(movie)) + '.srt');
        _fs2.default.renameSync(originalPath, newPath);
      } else {
        helper.error('Can\'t find any srt for \'' + movie + '\'');
      }
    });

    helper.spinner(false);
    helper.ok('Done!');
  } catch (err) {
    helper.spinner(false);
    helper.error(err);
  }
};
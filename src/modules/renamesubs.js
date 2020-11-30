import path from 'path';
import process from 'process';
import fs from 'fs';
import levenshtein from 'js-levenshtein';

const helper = require(path.join(__dirname, '../helper.js'));
module.exports = function (srcPath = null) {
  helper.spinner(true);
  const cwd = process.cwd();
  const dir = path.resolve(cwd, srcPath);
  try {
    const files = fs.readdirSync(dir);
    const movies = files.filter(file => file.endsWith('.mkv') || file.endsWith('.mp4'));
    const subs = files.filter(file => file.endsWith('.srt') || file.endsWith('.txt'));

    movies.forEach(movie => {
      let best = 99999;
      let theSub = null;
      subs.forEach(sub => {
          const level = levenshtein(movie, sub);
          if (level < best) {
              best = level;
              theSub = srt;
          } else if (level === best) {
            theSub = null;
          }
      });
      if (theSub) {
          const originalPath = path.resolve(dir, theSub);
          const newPath = path.resolve(dir, `${path.basename(movie, path.extname(movie))}.srt`);
          fs.renameSync(originalPath, newPath);
      } else {
        helper.error(`Can't find any srt for '${movie}'`)
      }
    });

    helper.spinner(false);
    helper.ok(`Done!`);
  }
  catch (err) {
    helper.spinner(false);
    helper.error(err);
  }


}
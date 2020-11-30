import path from 'path';
import process from 'process';
import fs from 'fs';
import Iconv from 'iconv';
const helper = require(path.join(__dirname, '../helper.js'));
module.exports = function (src = null, dst = null) {
  helper.spinner(true);
  const cwd = process.cwd();
  try {
    const content = fs.readFileSync(path.resolve(cwd, src));
    const iconv = new Iconv.Iconv('WINDOWS-1256', 'UTF-8');
    const result = iconv.convert(content).toString('utf8').replace(/<\/?[^>]+(>|$)/g, "");
    const saveDir = path.resolve(cwd, dst || src);
    fs.writeFileSync(saveDir, result, 'UTF-8');
    helper.spinner(false);
    helper.ok(`File '${saveDir}' saved!`);
  }
  catch (err) {
    helper.spinner(false);
    helper.error(err);
  }


}
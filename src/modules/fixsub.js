import helper from '../helper.js';
import path from 'path';
import fs from 'fs';
import Iconv from 'iconv';
module.exports = function (src = null, dst = null) {
  helper.spinner(true);
  try {
    const content = fs.readFileSync(src);
    const iconv = new Iconv.Iconv('WINDOWS-1256', 'UTF-8');
    const result = iconv.convert(content).toString('utf8');
    const saveDir = dst ? dst : src;
    fs.writeFileSync(saveDir, result, 'UTF-8');
    helper.spinner(false);
    helper.ok(`File '${saveDir}' saved!`);
  }
  catch (err) {
    helper.spinner(false);
    helper.error(err);
  }


}
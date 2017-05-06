import fs from 'fs';
import path from 'path';
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));
const help = fs.readFileSync(path.join(__dirname, 'help.js'), { encoding: 'utf8' });

module.exports = {
  version: pkg.version,
  help: help,
  badRequest(command) {
    return `${command} is not valid command!`;
  }
}
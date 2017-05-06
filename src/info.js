import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('package.json'));
const help = fs.readFileSync('src/help.txt', { encoding: 'utf8' });

export default {
  version: pkg.version,
  help: help,
  badRequest(command) {
    return `${command} is not valid command!`;
  }
}
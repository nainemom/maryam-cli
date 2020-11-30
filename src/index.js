#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
const helper = require(path.join(__dirname, 'helper.js'));
const info = require(path.join(__dirname, 'info.js'));

const modules = {
  'translate': require(path.join(__dirname, 'modules/translate.js')),
  'fixsub': require(path.join(__dirname, 'modules/fixsub.js')),
  'renamesubs': require(path.join(__dirname, 'modules/renamesubs.js'))
}

if (process.argv.length > 2) {
  const moduleName = process.argv[2];
  if (['--version', '-v'].indexOf(moduleName) > -1) {
    helper.output(info.version);
  }
  else if (['--help', '-h'].indexOf(moduleName) > -1) {
    helper.output(info.help);
  }
  else if (!modules[moduleName]) {
    helper.output(info.badRequest(moduleName));
  }
  else {
    modules[moduleName](...process.argv.slice(3));
  }
}
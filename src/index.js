#!/usr/bin/env node
import helper from './helper.js';
import fs from 'fs';
import path from 'path';
import info from './info.js';
const modules = {
  'translate': require('./modules/translate.js')
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
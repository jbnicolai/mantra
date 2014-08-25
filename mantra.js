#!/usr/bin/env node

'use strict';

var fs = require('fs');
var HOME = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

fs.readFile(HOME + '/.mantra.txt', function(err, data) {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('Could not read ~/.mantra.txt, please create that file.');
      return;
    }
    console.log(err.toString());
    return;
  }
  data.toString().split('\n').filter(function(line) {
    console.log('    ' + line);
  });
});

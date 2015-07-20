#!/usr/bin/env node

// above line (MUST BE VERY FIRST LINE) lets you run from command line without typing 'node'.
// ...if you chmod, that is.
// for this one it'd be chmod +x app.js

var fs = require('fs');
var argv = require('yargs').argv;
var prompt = require('prompt');

var help = require('./app/help');
var zipFile = require('./app/zipfile');
// var csvToJSON = require('./app/csvToJSON');

if (argv.help) {
  help();
}

if (argv.file) {
  zipFile(argv.file);
}

// if (argv.csvfile) {
//   csvToJSON(argv.csvfile);
// }

// if argv has a .name property, use it instead of issuing a prompt and using the result object
// (still runs through prompt.get function, just with different input).
prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();

prompt.get('name', function (err, result) {
  printHelloMessage(result.name);
});

function printHelloMessage(name) {
  console.log('Hello ' + name);
  // print the big file
  // include options object or do .toString() or do process.stdout.write();
  // var options = {encoding: 'utf8'};
  // var stream= fs.createReadStream('./app/bigfile', options);
  // stream.pipe(process.stdout);

  process.stdout.write('Hello ' + name + ' Again!\n');
}

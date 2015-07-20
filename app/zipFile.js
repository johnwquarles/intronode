var fs = require('fs');
var zlib = require('zlib');

module.exports = function (filePath) {
  fs
    .createReadStream(filePath)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(filePath + '.zip'));
  console.log("file has been zipped");
}

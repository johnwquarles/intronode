var fs = require('fs');

function printHelp () {
  // readFileSync is synchronous (will wait to complete before moving on).
  //var message = fs.readFileSync('./app/help.txt', {encoding: 'utf8'});

  //readFile is asynchronous.
  // var message = fs.readFile('./app/help.txt', {encoding: 'utf8'}, function(err, data){
  //   console.log(data);
  // });

  // below two: if no options object (encoding: 'utf8'), can print text file as such:
  //console.log(message.toString());
  //process.stdout.write(message);

  var options = {encoding: 'utf8'};
  var message = fs.readFileSync('./app/help.txt', options);
  console.log(message);
}

// module.exports is an object by default; can be made a function, as in here.
 module.exports = function() {
  printHelp();
  // note that if you were to use the asynchronous function .readFile, you couldn't process exit below
  // since it'd exit the program before the callback fired.
  process.exit(1);
 };

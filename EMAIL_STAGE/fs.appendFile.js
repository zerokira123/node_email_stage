var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my Text', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

var path = require('path');
var fs = require('fs');

module.exports = (req, res) => {
  var filePath = path.join(__dirname, '../public', 'unicorn.png');
  var stat = fs.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': stat.size
  });
  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
}

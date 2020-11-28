var path = require('path');
var parser = require('ua-parser-js');

module.exports = (req, res) => {
  var ua = parser(req.headers['user-agent']);
  res.json({
    ...ua,
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    dir: __dirname,
    rootx: path.join(__dirname, '../public'),
  })
}

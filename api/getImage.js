module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    ipa: req.connection.remoteAddress,
    ipb: req.headers['x-forwarded-for'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  })
}

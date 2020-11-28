module.exports = (req, res) => {
  
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  })
}

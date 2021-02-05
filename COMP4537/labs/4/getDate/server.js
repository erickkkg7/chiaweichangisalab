const http = require('http');
const url = require('url');
const utils = require('./modules/utils');

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<p>Hello ${q.query.name}, Here is the server's current date and time: ${utils.getDate()}</p>`);
  })
  .listen(process.env.PORT || 3000);


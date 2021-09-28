const express = require('express');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3333;
const responseStatus = +(process.env.RESPONSE_STATUS || 200);

const app = express();

app.use(bodyParser.raw({ type: "*/*" }))

app.get('/inspeq-chunked-response', (req, res) => {
  logRequest(req);

  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.setHeader('Cache-Control', 'no-cache');

  res.write(`Streaming response…\n`);

  let chunkCount = 0;
  intervalSig = setInterval(function() {
    chunkCount += 1;
    res.write(`Chunk ${chunkCount}\n`);
    if (chunkCount === 10) {
      clearInterval(intervalSig);
      res.write(`Response complete.\n`);
      res.end();
    }
  }, 1000);
});

app.all('*', (req, res) => {
  logRequest(req);

  // Always respond successful.
  res.sendStatus(responseStatus);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on http://localhost:${port}`);
});

function logRequest(req) {
  // Collect querystring & headers for output.
  const headers = []
  for (let k in req.headers) {
    headers.push(`${k}: ${req.headers[k]}`)
  }
  const query = []
  for (let k in req.query) {
    query.push(`${k}=${req.query[k]}`)
  }

  // Output request details as a single log write.
  console.log(`
➡️  ${req.method} ${req.path}${query.length > 0 ? `?${query.join("&")}` : ""}
${headers.join("\n")}${req.body.constructor === Object && Object.keys(req.body).length === 0 ? "" : `\n\n${req.body}`}
`);
}

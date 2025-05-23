const express = require('express');
const morgan = require('morgan');
const app  = express();
const port = 3000;

app.use(morgan('combined'));
app.get('/home', (req, res) => {
  res.send('Hello World!');
});
//127.0.0.1 - localhost
app.get('/about', (req, res) => {
  res.send('Testing git repository');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
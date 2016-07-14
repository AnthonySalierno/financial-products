const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/'));

app.get('/api/data', (req, res) => {
  console.log('hello');
});

app.listen(3000);

const express = require('express');
const app = express();
const products = require('./data.js')

app.use(express.static(__dirname + '/'));

app.get('/api/data', (req, res) => {
  let query = Object.keys(req.query)[0];
  let listOfProducts = products.findProducts(query);
  console.log(listOfProducts);
  res.status(200).send(listOfProducts);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

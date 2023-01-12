const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/calc', function(req, res) {
  const { a, b } = req.body;

  const result = a + b; 

  res.send({
    result
  });
});

app.listen(3000, () => {
  console.log('App is started');
})
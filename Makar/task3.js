const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/calc/:operator', function(req, res) {
  const operator = req.params.operator;
  const { a, b } = req.body;

  console.log(operator);
  const result = a + b;


  res.send({
    result,
    operator,
  });
});
app.listen(3000, () => {
  console.log('App is started');
})
const express = require('express');

const app = express();

app.use(express.json());

function calc(a, b, operator) {
  switch (operator) {
    case "plus":
      return a + b
    case "minus":
      return a - b
    case "multiply":
      return a * b
    case "divide":
      return a / b
    case "involve":
      return Math.pow(a, b);
    case "remainder":
      return a % b;
    default: throw new Error('operator not found')
  }
}
app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/calc/:operator', function(req, res) {
  const operator = req.params.operator;
  const { a, b } = req.body;
  let result;
  
  try {
    result = calc(a, b, operator);
  } catch(err) {
    result = err.message;
  }
  
  res.send({
    result,
    operator,
  });
});

app.listen(3000, () => {
  console.log('App is started');
})
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('hello world');
});


function calculator(a, b, operand) {

  switch(operand) {
    case "-":
      return  a - b;
    case "+":
      return  a + b;
    case "*":
      return  a * b;
    case "/":
      return a / b;
    case "%":
      return  a % b;
  }
  return 'Incorect operand';
}



app.post('/calc/:operator', function(req, res) {
  const operator = req.params.operator;
  const { a, b } = req.body;

  console.log(operator);
  const result = calculator(a,b, operator);


  res.send({
    result,
    operator,
  });
});

app.listen(3000, () => {
  console.log('App is started');
})
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send('hello world');
});


function calculator(a, b, operand) {

  switch(operand) {
    case "plus":
      return  a + b;
    case "minus":
      return  a - b;
    case "multi":
      return  a * b;
    case "divide":
      return a / b;
    case "divRemainder":
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

app.listen(3001, () => {
  console.log('App is started');
})
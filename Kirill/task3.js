const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('helloooooo world');
});

app.post('/calc/:operator', function(req, res) {
  const operator = req.params.operator;
  const { a, b } = req.body;

  var result;
  switch (operator) {
    case 'plus': 
        result = a + b
        break;
    case 'minus': 
        result = a - b
        break;
    case 'del':
        if ((a == 0) || (b == 0)) {
            result = 'ne delim na 0'
        } else {
            result = a / b
        }
        break;
    case 'umnojenie':
        result = a * b
        break;
    case 'koren':
        result = a ** b
        break; 
    case 'procent':
        result = a % b
        break; 
  }

  res.send({
    result,
    operator,
  });
});

app.listen(3000, () => {
  console.log('App is started');
})
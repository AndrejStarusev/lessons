const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('helloo world');
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
    case 'division':
        if ((b == 0)) {
            result = 'ne delim na 0'
        } else {
            result = a / b
        }
        break;
    case 'multiply':
        result = a * b
        break;
    case 'degree':
        result = a ** b
        break; 
    case 'remainder':
        result = a % b
        break; 
  }

  res.send({
    result,
  });
});

app.listen(3001, () => {
  console.log('App is started');
})
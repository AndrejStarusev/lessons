const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/resCalc/:operator', function(req, res) {
  const { a, b} = req.body;
  const operator = req.params.operator;
  let result = 0;
  switch(operator) {
    case 'minus':
      result = a - b;
    break;
    case 'plus':
      result = a + b;
    break;
    case 'multi':
      result = a * b;
    break;
    case 'divide':
      result = a / b;
    break;
  }

 


  res.send({
    result,
    operator
  });
});
app.listen(3001, () => {
  console.log('App is started');
})
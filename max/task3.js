const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

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

app.listen(3001, () => {
  console.log('App is started');
})
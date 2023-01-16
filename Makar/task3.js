const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/calc/:command', function(req, res) {
  const { a, b} = req.body;
  const command = req.params.command;
  let result = 0;
  switch(command) {
    case "minus":
      result = a - b;
    break;
    case "plus":
      result = a + b;
    break;
    case "multi":
      result = a * b;
    break;
    case "divide":
      result = a / b;
    break;
  }

 


  res.send({
    result,
    command
  });
});
app.listen(3000, () => {
  console.log('App is started');
})
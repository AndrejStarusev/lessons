const express = require("express");

function calculate(a, b, operator) {
  switch (operator) {
    case "plus":
      return a + b;
      break;
    case "minus":
      return a - b;
      break;
    case "multiply":
      return a * b;
      break;
    case "division":
      return a / b;
      break;
    case "degree":
      return a ** b;
      break;
    case "remainder":
      return a % b;
      break;
    default:
      return false;
      break;
  }
}

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/calc/:operator", function (req, res) {
  const operator = req.params.operator;
  const { a, b } = req.body;

  const result = calculate(a, b, operator);

  res.send({
    result,
  });
});

app.listen(3000, () => {
  console.log("App is started");
});

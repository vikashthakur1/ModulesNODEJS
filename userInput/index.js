const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter number:", (num1) => {
  rl.question("Enter an operater (+, -, *, /, ^,): ", (operater) => {
    rl.question("Enter another number:", (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let result;
      switch (operater) {
        case "+":
          result = num1 + num2;
          break;

        case "-":
          result = num1 - num2;
          break;

        case "*":
          result = num1 * num2;
          break;

        case "/":
          result = num1 / num2;
          break;

        case "^":
          result = Math.pow(num1, num2);
          break;

        default:
          result = "Invalid operator";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});

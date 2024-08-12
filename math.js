function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    // Check for valid numeric input
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Perform the selected operation
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                document.getElementById("result").innerHTML = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        case "exponent":
            result = Math.pow(num1, num2);
            break;
        case "sqrt":
            if (num1 < 0) {
                document.getElementById("result").innerHTML = "Cannot calculate square root of a negative number.";
                return;
            }
            result = Math.sqrt(num1);
            break;
        case "log":
            if (num1 <= 0) {
                document.getElementById("result").innerHTML = "Cannot calculate logarithm of a non-positive number.";
                return;
            }
            result = Math.log(num1) / Math.log(num2);
            break;
        default:
            document.getElementById("result").innerHTML = "Invalid operation.";
            return;
    }

    document.getElementById("result").innerHTML = `Result: ${result}`;
}
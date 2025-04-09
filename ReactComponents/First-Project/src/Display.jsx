import { add, subtract, multiply, divide } from "./Math";

function Display() {
  return (
    <div>
        <h1>Addition is {add(5, 3)}</h1>
        <h2>Subtraction is {subtract(10, 4)}</h2>
        <h3>Multiplication is {multiply(6, 7)}</h3>
        <h4>Division is {divide(20, 4)}</h4>
    </div>
  );
}

export default Display;

import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));
  const divide = () => setResult(Number(num2) !== 0 ? Number(num1) / Number(num2) : "Cannot divide by 0");
  const clear = () => {
    setNum1 ("");
    setNum2 ("");
    setResult("")
        
    }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={clear}>Clear</button>
      </div>
      <h3>Result: {result !== null ? result : "No calculation yet"}</h3>
    </div>
  );
}

export default Calculator;

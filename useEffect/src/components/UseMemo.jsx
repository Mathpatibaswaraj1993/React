import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      // just delay
    }
    return num * 4;
  };

  const result = useMemo(() => expensiveCalculation(count), [data]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h4>Result: {result}</h4>

      <h4>Data: {data}</h4>
      <button onClick={() => setData(data + "1")}>Data</button>
    </div>
  );
}

export default UseMemo;

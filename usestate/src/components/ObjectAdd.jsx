// clear example of using useState with an object that has properties a, b, and result. We use the spread operator to update the object without using prev.

//  Example: Addition using useState object with a, b, and result

import React, { useState } from 'react';

function ObjectAdd() {
  const [data, setData] = useState({
    a: 0,
    b: 0,
    result: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,           // spread the current state
      [name]: Number(value)  // dynamically update a or b
    });
  };

  const calculate = () => {
    setData({
      ...data,               // spread the current a and b
      result: data.a + data.b  // calculate the result
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Addition</h2>
      <input
        type="number"
              name="a"
        placeholder="Enter A"
        onChange={handleChange}
      />
      <br /><br />
      <input
        type="number"
              name="b"
        placeholder="Enter B"
        onChange={handleChange}
      />
      <br /><br />
      <button className='btn btn-primary' onClick={calculate}>Add</button>
      <h3>Result: {data.result}</h3>
    </div>
  );
}

export default ObjectAdd;

// Notes:

// data is an object with keys: a, b, and result.

// We use [name]: value to dynamically set a or b using the input's name.

// ...data keeps the other properties intact when updating one.


// Let me know if you want subtraction, multiplication, or more operations too!

import React, { useState } from 'react'

function Cube() {



    var [cube, setCube] = useState(0)
    function cub() {
        let i = 5;
        setCube (i ** 3);
    }

  

  return (
      <div style={{textAlign:"center"}}>
          <p>{cube}</p>
          <button className='btn btn-check' onClick={cub}>Cube</button>
    </div>
  )
}

export default Cube
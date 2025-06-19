import React from 'react'

function Child(props) {
  return (
    <div className='container'>
      {/* <h1>Hello,{props.uname}</h1> */}
      <button className='btn-primary' onClick={()=>props.f("Hello from Child...")}>Send Data From Child to Parent</button>
    </div>
  )
}

export default Child
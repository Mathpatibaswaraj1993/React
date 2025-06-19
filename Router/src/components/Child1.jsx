import React from 'react'

function Child1(props) {
    
  return (
      <div>
          <button className='btn-primary' onClick={()=>props.b("Welcome to Child Component ")}>Enter The Child Component</button>
      </div>
      

  )
}

export default Child1
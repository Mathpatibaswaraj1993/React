import React, { useState } from 'react'

function StateExamples() {

   const [info,setInfo] = useState({
      uname:"ABC",
      email:"abc@gmail.com",
      age : 23

   })

    function clickHandler() {
        setInfo({ ...info,uname:"abc",email:"xyz@gmail.com"})
   }
  

  return (
    <>
    <div className='container'>
     <p>{info.uname}</p>
     <p>{info.email}</p>
     <p>{info.age}</p>
     <br></br>

     <button className='btn btn-outline-primary' onClick={clickHandler}>Update State</button>


    

     </div>
    
    </>
   
  )
}

export default StateExamples
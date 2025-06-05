import React, { useState } from 'react'

function FactState() {
   
    const [fact,setFact]= useState(5)
    function factorial() {
          if (fact < 0)
            {
              console.log("value can't be 0");
              alert("Value can't be 0")
            } 
          let result = 1;
          for (let i = 2; i <= fact; i++) {
            result *= i;
          
               setFact(fact)
              setFact(result)
      }  
      }
   

  return (
      <div style={{textAlign:"center", backgroundColor:"green"}}>
          
          <p>{fact}</p>
          <button className='btn btn-primary' onClick={factorial}>Factorial</button>
      </div>
      
  )
}

export default FactState
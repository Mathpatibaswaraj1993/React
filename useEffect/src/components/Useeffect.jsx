/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [data, setData] = useState(0)

    const [count,setCount]=useState(10)
    
    useEffect(() => {
        console.log("Component Mount"); //Mounting
        
         //Unmounting Phase
         return function () {
            console.log("Component Unmounting");
            
        }
    }, [])
    
    useEffect(() => {
        //updation phase
        console.log("Component Updated...!!"); 
       
    }, [data])
    

  return (
      <div className='container text-center'>
          
          <h1 className='text-primary'>Counter Component</h1>

          <p>{data}</p>
          <button className='btn btn-danger' onClick={() => setData(data + 1)}>Data</button>&nbsp;&nbsp;
          <p>{count}</p>
          <button className='btn btn-danger' onClick={() => setCount(count + 1)}>Count</button>&nbsp;&nbsp;

    </div>
  )
}

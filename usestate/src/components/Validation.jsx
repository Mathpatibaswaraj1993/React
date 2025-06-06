/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Validation() {

    const [uname, setUname] = useState()
    const [mno, setMno] = useState()
    const [error, setError] = useState(false)
    
    function uHandler(e) {
        // const { value, name } = e.target
              //OR
        let value = e.target.value  //this entering input (value)
        let len = e.target.value.length //this is checking value length
        
        if (len < 4)
        {
            setError(true)
        }
        else {
            setError(false)
        }
    }
  return (
      <div className='container m-4'>
          <table>
              <tr>
                  <td>UserName:-</td>
                  <td><input type='text' name="uname" onChange={uHandler} placeholder='off'/></td>
              </tr>
              <tr>
                  <td>{error && <p style={{}}></p>}</td>
              </tr>
              <tr>
                  <td>UserName:-</td>
                  <td><input type='text' name="mno" onChange={uHandler} placeholder='off'/></td>
              </tr>
          </table>
    </div>
  )
}

export default Validation
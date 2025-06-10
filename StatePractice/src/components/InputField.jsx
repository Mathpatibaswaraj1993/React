/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function InputField() {

    const [name,setName] =useState("")
    return (
        <>
            <div className='container m-4'>
                <input type="text"
                    placeholder='Enter Your name'
                    onChange={(e) => setName(e.target.value)}
                />
               
                <p>Your name is :{name}</p>
            
            </div>
        </>
  )
}

export default InputField
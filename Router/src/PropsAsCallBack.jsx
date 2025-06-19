/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Child from './components/Child'

function PropsAsCallBack() {
    const [info, setInfo] = useState()
    
  function showMsgFromChild(msg)
  {
    setInfo(msg)
  }
  return (
    <>
      <div className='container'>
        <Child f={showMsgFromChild}></Child>

        <br /><br />
        <h3 className='container'>{info}</h3>
      </div>
    </>
  )
}

export default PropsAsCallBack
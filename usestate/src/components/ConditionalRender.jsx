/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ObjectState from './ObjectState'
import Calculator from './Calculator'


function ConditionalRender() {
    
    const [status,setStatus] = useState(false)
    if(status)
        return <ObjectState></ObjectState>
    else 
        return <Calculator></Calculator>
 
}

export default ConditionalRender
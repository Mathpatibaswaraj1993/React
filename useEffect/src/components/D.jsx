import React, { useContext } from 'react'
import { data1,data2,data3 } from './A'


function D() {
    const u = useContext(data1)
    const a = useContext(data2)
    const e = useContext(data3)
    return (
      <>
      <div> D Component</div>
      
            <p>username{u}</p>
            <p>age{a}</p>
            <p>Email{e}</p>
            </>
  )
}

export default  D 
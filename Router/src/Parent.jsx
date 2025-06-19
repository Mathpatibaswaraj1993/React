import React, { useState } from 'react'
import Child1 from './components/Child1'



function Parent() {

    const [send, setSend] = useState()


    function ShowData(msg) {
        setSend(msg)
    }

      
    return (
        <>
            

            <Child1 b={ShowData}></Child1>

            <br /><br />
            <div>
                <h3>{ send}</h3>
            </div>
        </>
    )
}


export default Parent
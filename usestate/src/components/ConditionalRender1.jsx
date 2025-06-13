import React, { useState } from 'react'

function ConditionalRender1() {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const clickHandler = () =>{
        if(isLoggedIn)
        setIsLoggedIn(false)
       else
        setIsLoggedIn(true)

    }

  return (
   
    <>
    <div className="bg-slate-900">
    {
        isLoggedIn?<h2 style={{color:'green'}}>Welcome User !!</h2> : <h2 style={{color:'red'}}>Please Log in....</h2>
        
    }
    <br></br>
    <button className='btn btn-warning' onClick={clickHandler}>{isLoggedIn?"Logout":"Login"} </button>
    </div>
    </>
  )
}

export default ConditionalRender1
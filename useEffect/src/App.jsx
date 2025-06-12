
// import { useState } from 'react'
import './App.css'
import Useeffect from './components/Useeffect'
import UseRef from './components/UseRef'

import A from './components/A'
import UseMemo from './components/UseMemo'
function App() {


  // const [status,setStatus]=useState(true)
  return (
    <>
      <div>
        {/* <button className='btn btn-warning' onClick={() => setStatus(!status)}>Toogle Button</button>
        
        {status ? <Useeffect></Useeffect> : ""} */}
        
        {/* <UseRef></UseRef> */}
        {/* <A></A> */}
        <UseMemo></UseMemo>
        </div>

    </>
  )
}

export default App

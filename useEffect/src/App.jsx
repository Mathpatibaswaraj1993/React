
import { useState } from 'react'
import './App.css'
import Useeffect from './components/Useeffect'
import UseRef from './components/UseRef'

function App() {


  const [status,setStatus]=useState(true)
  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={() => setStatus(!status)}>Toogle Button</button>
        
        {status ? <Useeffect></Useeffect> : ""}
        
        <UseRef></UseRef>
        </div>

    </>
  )
}

export default App

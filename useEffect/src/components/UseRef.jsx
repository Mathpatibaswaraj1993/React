
import { useRef } from "react"

function UseRef() {
   const refElement = useRef()


    const clickhandler=()=>
    {
        refElement.current.style.color = "pink"
        refElement.current.style.fontSize = "20px"
        refElement.current.style.FontFamily="monospace"

    }
    return (
      <>
      <div>UseRef</div>
      
            <button className='btn btn-danger' onClick={clickhandler}>Click </button>
            </>
  )
}

export default UseRef
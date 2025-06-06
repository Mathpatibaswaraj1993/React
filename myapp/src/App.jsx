import First from "./components/First"
import ArrayRendering from "./components/ArrayRendering"
import MapFilterExample from "./components/MapFilterExample"
import MapExample from "./components/MapExample"
import MapExProduct from "./components/MapExProduct"
import PropsDemo from "./components/PropsDemo"
import Square from "./components/Square"
import Addition from "./components/Addition"
import Factorial from "./components/Factorial"
import ChildComp from "./components/ChildComp"
import Greeting from "./components/Greeting"
import FactState from "./FactState"
import Cube from "./Cube"

import EventDemo from "./components/EventDemo"
import { useState } from "react"

export default function App() {

  const [A, setA] = useState(0)
  // const [fact,setFact] = useState(5)
  // const [cube, setCube] = useState(0)

  function Increment()
  {
    if (A < 10)
    {
      setA (A+1)

    }
    else {
      alert("U can't Increase a value")
    }
  }

  function Decrement()
  {
    if (A > 0)
      {
        setA (A-1)
  
      }
      else {
        alert("U can't Decrease a value")
      }
  }

 
  

  // let a = 34
  // let b = 32
  // let uname = "baswaraj"


  // let info = [
  //   {
  //     m1: 23,
  //     m2: 22,
  //     m3: 67,
  //     m4: 12
  //   },
  //   {
  //     m1: 34,
  //     m2: 56,
  //     m3: 78,
  //     m4: 75
  //   },
  // ];

  // const emp = [
  //   { id: 1, name: 'Alice', role: 'Developer' },
  //   { id: 2, name: 'Bob', role: 'Designer' },
  //   { id: 3, name: 'Charlie', role: 'Developer' },
  //   { id: 4, name: 'David', role: 'Manager' },
  //   { id: 5, name: 'Eve', role: 'Developer' },
  //   { id: 6, name: 'Frank', role: 'Tester' },
  //   { id: 7, name: 'Grace', role: 'Designer' },
  //   { id: 8, name: 'Heidi', role: 'Manager' },
  //   { id: 9, name: 'Ivan', role: 'Tester' },
  //   { id: 10, name: 'Judy', role: 'Developer' },
  // ];


  return (
    <>

      {/* <First></First> */}
      <hr />
      {/* <ArrayRendering></ArrayRendering> */}
      <hr />
      {/* <MapFilterExample></MapFilterExample> */}
      {/* <MapExample></MapExample> */}
      {/* <MapExProduct></MapExProduct> */}
      {/* Props */}
      {/* <PropsDemo name="john" age={23} country="US"></PropsDemo> */}
      {/* <PropsDemo data={info}></PropsDemo>
      <Square square={2 * 8} ></Square>
      <Addition add={15 + 20}></Addition>
      <Factorial num={5}></Factorial>
      <ChildComp emp={emp}></ChildComp> */}
      {/* <EventDemo></EventDemo> */}
      <FactState></FactState>
      <div className="text-center mt-3">
        <br /><br />
        <h3>{A}</h3>
        <button className="btn btn-outline-primary" onClick={Increment}>Increment</button>
        <br></br><br></br>
        <button className="btn btn-outline-primary" onClick={Decrement}>Decrement</button>
        <br></br><br></br>
        {/* <button className="btn btn-info" onClick={Fact}>factorial</button> */}
        {/* <p className="mt-5">Factorial:- {fact}</p> */}
        {/* <p className="mt-5">Cube:- {cube}</p> */}
            
      </div>
      <Greeting></Greeting>

      <FactState></FactState>
      <Cube></Cube>
      {/* // <hr />
       <div style={{ 'textAlign': 'center' }}>
         <h1>Hello World</h1>
         <p style={{ 'color': 'red', 'fontFamily': 'monospace', 'fontSize': '25px' }}>Welcome, {uname}</p>
         <p>Addition:-{a + b}</p>
         <p>Today's Date:-{new Date().toLocaleDateString()}</p>
         <p>current Time:-{new Date().toLocaleTimeString()}</p>
         <hr />
       </div> */}
    </>
  )
}







//App - predefined component ---root component 

//jsx always return a single element
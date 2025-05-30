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

import EventDemo from "./components/EventDemo"

export default function App() {
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
      <EventDemo></EventDemo>
      <Greeting></Greeting>
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
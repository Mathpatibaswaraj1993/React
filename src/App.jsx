import First from "./components/First"
import ArrayRendering from "./components/ArrayRendering"
export default function App() {
  let a = 34
  let b = 32
  let uname = "baswaraj"
  return (
    <>

      <First></First>
      <hr />
      <ArrayRendering></ArrayRendering>

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
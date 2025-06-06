
import './App.css'
import Props1 from './components/Props1'
function App() {

  const data = {
    name: "John",
    hobbies: ["Reading", "Gaming", "Hiking"],
    Playing:["Cricket","vollyboll","Badmintan"]
  };



  return (
    <>
      {/* <Props1 greeting="Hello World"></Props1> */}
      <Props1 obj={data}></Props1>
    </>
  )
}

export default App

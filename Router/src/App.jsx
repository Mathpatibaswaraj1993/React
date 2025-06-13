import {Link, Route, Routes, useNavigate,Navigate} from 'react-router-dom'
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import PageNotFound from './components/PageNotFound'
import Profile from './components/Profile'
import User from './components/User'
import Admin from './components/Admin'
import User1 from './components/User1'
function App() {

  const navigate = useNavigate()
  
  const clickHandler =()=>{
      navigate('ser')
  }

  // const navigate1 = useNavigate()

  const clickHandler1 = () => {
    console.log("click");
    
    navigate('user1')
  }
  
  return (
    <>
      <div className='container mt-' >
        {/* Linking of pages */}
       <Link to="">Home</Link>&nbsp;&nbsp;
       <Link to="about">About</Link>&nbsp;&nbsp;
       <Link to="contact">Contact</Link>&nbsp;&nbsp;
        <Link to="ser">Services</Link>&nbsp;&nbsp;
        <Link to="profile">Profile</Link>&nbsp;&nbsp;
        <Link to="user1">User1</Link>&nbsp;&nbsp;
        <Link to="err">Page-NotFound</Link>&nbsp;&nbsp;
         <br /><br />
  <button className='btn btn-primary' onClick={clickHandler} >Show Services</button>&nbsp;
  <button className='btn btn-primary' onClick={clickHandler1} >User Show</button>
      </div>
<br />
      {/* Routes of Pages */}
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='ser' element={<Services></Services>}></Route>
        <Route path='user1' element={<User1></User1>}></Route>
        <Route path='profile' element={<Profile></Profile>}>
        <Route path='user' element={<User></User>}></Route>
        <Route path='admin' element={<Admin></Admin>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
   </Routes>
    </>
  )
}

export default App

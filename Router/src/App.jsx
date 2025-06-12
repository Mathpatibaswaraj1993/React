import {Link, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import PageNotFound from './components/PageNotFound'
import Profile from './Profile'
import User from './components/User'
import Admin from './components/Admin'
function App() {

  return (
    <>
      <div className='container mt-' >
        {/* Linking of pages */}
       <Link to="">Home</Link>&nbsp;&nbsp;
       <Link to="about">About</Link>&nbsp;&nbsp;
       <Link to="contact">Contact</Link>&nbsp;&nbsp;
        <Link to="ser">Services</Link>&nbsp;&nbsp;
        <Link to="profile">Profile</Link>&nbsp;&nbsp;
        <Link to="err">Page-NotFound</Link>&nbsp;&nbsp;


      </div>
      {/* Routes of Pages */}
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='ser' element={<Services></Services>}></Route>
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

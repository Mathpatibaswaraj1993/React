import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import Employee from './Employee'
import Product from './Product'
import Book from './Book'
import BookDetail1 from './BookDetail1'
function App2() {
  // const [search, setSerach] = useState("")
  // const [txt,setTxt] = useState("")

  const [bk,setBk] = useState("")
  const navigate = useNavigate();

  // const searchHandler = () => {
  //   navigate(search)
  // }
  const searchHandler = () => {
    // navigate(`/${txt}`)
    // navigate(search)
    navigate(`/book/${bk}`)
  }

    return (
      <>
      <div className='container'>
          <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <Link className="navbar-brand" to="h">Web Application</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="p">Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="e">Employee</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="b">Book</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="pac">PropsAsCallBack</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="pa">Parent</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setSerach(e.target.value.trim())}/> */}
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setTxt(e.target.value.trim())}/> */}
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setBk(e.target.value.trim())}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={searchHandler}>Search</button>
    </form>
  </div>
</nav>
          </header>
      </div>
             
            

              
            </>
  )
}

export default App2
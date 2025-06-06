import React, { useState } from 'react'

function ObjectState2() {
    const [user, setUser] = useState({
        uname:"",
        email: "",
        age:""
    })
    
    const [status, setStatus] = useState(false)
    


    function inputHandler(e) {
       
        // let name = e.target.name
        // let value = e.target.value
       
        
        // setUser({ ...user, [name]: value })or 
        setUser({...user,[e.target.name]:e.target.value})//spread operator
    }
    function clickHandler()
    {
        setStatus(true)
    }

    return (
      

        <div class="container mt-5">
  <h3 class="mb-4">User Form</h3>
  
  <form>
    <table class="table table-bordered align-middle">
      <thead class="table-light">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" class="form-control"  placeholder="Enter username" name="uname"  onChange={inputHandler} required/>
          </td>
          <td>
            <input type="email" class="form-control"  placeholder="Enter email" name="email"  onChange={inputHandler} required/>
          </td>
          <td>
            <input type="number" class="form-control"  placeholder="Enter age" name="age" onChange={inputHandler}  required/>
          </td>
          <td>
             <input type="button" className='btn btn-primary' value="show User's Data" onClick={clickHandler}/>&nbsp;&nbsp;
                            </td>
        </tr>
      </tbody>
    </table>
            </form>
            {
                status ?<>
            <p>Uname:-{user.uname}</p>
            <p>Email:-{user.email}</p>
            <p>Age:-{user.age}</p></>:"" 
           
        }
    </div>
           


  )
}

export default ObjectState2
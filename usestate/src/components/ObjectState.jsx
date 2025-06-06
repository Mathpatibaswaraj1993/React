import React, { useState } from 'react'

function ObjectState() {
    const [uname, setUname] = useState()
    const [email, setEmail] = useState()
    const [age,setAge]=useState()
    const [status,setStatus]=useState(false)

    function inputHandler(e) {
        setAge(e.target.value)
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
            <input type="text" class="form-control"  placeholder="Enter username" name="uname"  onChange={(e)=>setUname(e.target.value)} required/>
          </td>
          <td>
            <input type="email" class="form-control"  placeholder="Enter email" name="email"  onChange={(e)=>setEmail(e.target.value)} required/>
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
            <p>Uname:-{uname}</p>
            <p>Email:-{email}</p>
            <p>Age:-{age}</p></>:"" 
           
        }
            </div>
           


  )
}

export default ObjectState
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function FormValidation() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    let pattern =/\S+@\S+\.\S+/
    let upattern = /^([A-Z]{1,1})+([a-z]{2,6})$/
    
    const [error, setError] = useState({})
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


  
    function handlesubmit(e)
    {
      e.preventDefault()
      
      const validation = {}
      if (!form.username)
      {
        validation.username="UserName is Required..."
      }
      else if (!upattern.test(form.username))
      {
        validation.username="Invalid UserName.."
      }
      if (!form.email)
      {
        validation.email="Email is Required.."
      }
      else if (!upattern.test(form.email))
        {
          validation.email="Wrong Pattern.."
      }
      if (!form.password)
        {
          validation.password="Email is Required.."
        }
        
        if (!form.confirmPassword)
          {
            validation.cpassword="Email is Required.."
          }
    }
  return (
      <>
          <div class="container mt-5">
  <h2 class="text-center mb-4">Register</h2>
  <form onSubmit={handlesubmit}>
    {/* <!-- Username --> */}
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" name="username" placeholder="Enter username"  autoComplete='off' onChange={handleChange}/>
    </div>

    {/* <!-- Email --> */}
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" name="email" placeholder="Enter email"  autoComplete='off' onChange={handleChange}/>
    </div>

    {/* <!-- Password --> */}
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" name="password" placeholder="Password"  autoComplete='off'  onChange={handleChange}/>
    </div>

    {/* <!-- Confirm Password --> */}
    <div class="form-group">
      <label for="confirmPassword">Confirm Password</label>
      <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password" autoComplete='off'  onChange={handleChange}/>
    </div>

    {/* <!-- Submit Button --> */}
    <button type="submit" class="btn btn-primary btn-block">Register</button>
  </form>
</div>

      </>

)
}

export default FormValidation
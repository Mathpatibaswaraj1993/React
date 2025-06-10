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
      else if (!pattern.test(form.email))
        {
          validation.email="Wrong Pattern.."
      }
      if (!form.password)
        {
          validation.password="Password is Required.."
        }
        
        if (!form.confirmPassword)
          {
            validation.cpassword="Confirm password is Required.."
      }
      else if(! form.password.match(form.confirmPassword))
        {
          validation.cpassword="Confirm password does not matched"
      }
      
      setError(validation)
      if (Object.keys(validation).length === 0)
      {
        alert("Form Submitted Successfully..")
      }

      setForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  return (
      <>
          <div className="container mt-5">
  <h2 className="text-center mb-4">Register</h2>
  <form onSubmit={handlesubmit}>
    {/* <!-- Username --> */}
    <div className="form-group">
      <label>Username</label>
            <input type="text"
              className="form-control"
              name="username"
              placeholder="Enter username"
              autoComplete='off'
              onChange={handleChange}
              value={form.username}
/>
            {error.username && <p className='text-danger'>{ error.username}</p>}
    </div>

    {/* <!-- Email --> */}
    <div className="form-group">
      <label>Email address</label>
            <input type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              autoComplete='off'
              onChange={handleChange}
              value={form.email}
/>
              {error.email && <p className='text-danger'>{ error.email}</p>}

    </div>

    {/* <!-- Password --> */}
    <div className="form-group">
      <label>Password</label>
            <input type="password"
              className="form-control"
              name="password"
              placeholder="******"
              autoComplete='off'
              onChange={handleChange}
              value={form.password}
/>
            {error.password && <p className='text-danger'>{ error.password}</p>}

    </div>

    {/* <!-- Confirm Password --> */}
    <div className="form-group">
      <label>Confirm Password</label>
            <input type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="******"
              autoComplete='off'
              onChange={handleChange}
              value={form.confirmPassword}
/>
              {error.cpassword && <p className='text-danger'>{ error.cpassword}</p>}

    </div>

    {/* <!-- Submit Button --> */}
    <button type="submit" className="btn btn-primary btn-block">Register</button>
  </form>
</div>

      </>

)
}

export default FormValidation
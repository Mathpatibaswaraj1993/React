import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Profile() {
  return (
      <div>
          <h3 className='bg-secondary rounded-bottom' >Profile Component</h3>
                  <Link to="user">User</Link>&nbsp;&nbsp;
          <Link to="admin">Admin</Link>
          <Outlet></Outlet>
    </div>
  )
}

export default Profile
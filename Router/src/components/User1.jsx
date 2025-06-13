import React from 'react'

function User1() {
  return (
    <div className="container mt-5">
    <h3 className="mb-4">User Table</h3>
    <table className="table table-bordered table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th>User Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>alice</td>
          <td>alice@example.com</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>2</td>
          <td>bob</td>
          <td>bob@example.com</td>
          <td>User</td>
        </tr>
        <tr>
          <td>3</td>
          <td>charlie</td>
          <td>charlie@example.com</td>
          <td>Editor</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  )
}

export default User1
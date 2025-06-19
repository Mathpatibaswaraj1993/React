import React, { useEffect, useState } from 'react'

function UserList() {
   
    const [users, setUsers] = useState([]);
     
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')//Sample API
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err))
            
    },[]);
   
    return (
      <>
      <div>UserList</div>
      <ul>
                {users.map((u) => (
                  <li key={u.id}>
                    {u.name}</li>
          ))}    
        </ul>
        </>
  )
}

export default UserList
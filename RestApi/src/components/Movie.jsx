import React, { useEffect, useState } from 'react'

function Movie() {
   
    const [movies, setMovies] = useState([]);
     
        const apiUrl ="https://jsonplaceholder.typicode.com/albums"
    function fetchMovie() {
       axios.get()   
      }

    useEffect(() => {
        fetch('https://jsonfakery.com/movies/random')//Sample API
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((err) => console.log(err))
            
    },[]);
    
    return (
      <>
      <div>UserList</div>
      <ul>
             {movies.map((u) => (
                  <li key={u.movie_id}>
                   {u.name}</li>
          ))}    
        </ul>
        </>
  )
}

export default Movie
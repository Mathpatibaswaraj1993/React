/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';

function Comments() {
  const apiUrl = "https://jsonplaceholder.typicode.com/photos";

  function fetchComment() {
    axios.get(apiUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Done....!");
      });
  }

  // useEffect must be at the top level of the component
  useEffect(() => {
    fetchComment();
  }, []); // empty dependency array = run once after mount

  return (
    <div>Comments</div>
  );
}

export default Comments;

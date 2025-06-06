import React from 'react'

function Props1({obj}) {
    return (
        <>
      <p>Name: {obj.name}</p>
            <h3>Hobbies:</h3>
            <ul>
                {
                    obj.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))
                },
                {

                  obj.Playing.map((hobby,index)=>(
                 <li key={index}>{ hobby}</li>
                  ))
                    
                }
                
                
            </ul>

        </>
)
}

export default Props1
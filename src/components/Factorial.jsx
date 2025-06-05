import React from 'react'



function Factorial({num}) {
    let g = 1
    for (let i = 1; i <= parseInt(num); i++) {
        g = g * i
    }
    return (
        <div>Factorial
            <p>Hello world {num}:-{g}</p>
        </div>
    )
}


export default Factorial
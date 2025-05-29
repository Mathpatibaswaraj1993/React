import React from 'react'
//props Destructure
function PropsDemo({ data }) {
    console.log(data);
    let arr = data.map((e) => {
        return `${e.m1} ${e.m2} ${e.m3}`
    })
    return (
        <div className='container text-center'>

            <h1 className='text-center text-primary'>Props Example</h1>
            <hr />

            <p>{arr}</p>

            {/* props */}
            {/* <p>Name:-{ props.name}</p>
            <p>Age:-{ props.age}</p>
            <p>Country:-{props.country}</p> */}

            {/* <p>Name:-{data.m1}</p>
            <p>Age:-{data.m2}</p>
            <p>Country:-{data.m3}</p> */}





        </div>


    )
}

export default PropsDemo
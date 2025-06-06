import React from 'react'

function EventDemo() {

    function clickHandler() {
        alert("I am i React")
    }

    function fun() {
        alert("this is mouse over")
    }
    return (
        <div className='container'>
            <button className='btn btn-primary mt-4' onClick={clickHandler}>Click Me </button>


            <br />

            <p onMouseOver={fun}>This is Para</p>

        </div>
    )
}

export default EventDemo
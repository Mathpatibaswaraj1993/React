import React from 'react';

function Greeting() {
    let date = new Date().toLocaleDateString();  // ✅ Removed the stray `?`
    let ctime = new Date(2025, 4, 5, 14).getHours();  // Note: Months are 0-indexed in JS (4 = May)
    let newStyle = {};
    let greet = "";

    if (ctime >= 12 && ctime <= 16) {
        greet = "Good Afternoon";
        newStyle = {
            color: "red",
            fontSize: "30px",
            fontFamily: "Arial",
            fontWeight: "bold"
        };
    } else if (ctime >= 17 && ctime <= 19) {
        greet = "Good Evening";
        newStyle = {
            color: "black",
            fontSize: "30px",
            fontFamily: "Arial",
            fontWeight: "bold"
        };
    } else if (ctime >= 20 && ctime <= 24) {
        greet = "Good Night";
        newStyle = {
            color: "brown",
            fontSize: "30px",
            fontFamily: "Arial",
            fontWeight: "bold"
        };
    } else {
        greet = "Good Morning";
        newStyle = {
            color: "green",
            fontSize: "30px",
            fontFamily: "Arial",
            fontWeight: "bold"
        };
    }

    return (
        <div style={{
            width: '800px',
            margin: 'auto',
            border: '5px solid blue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '150px',
            padding: '20px'
        }}>
            <h3 style={{ color: 'magenta' }}>Today's Date: {date}</h3>
            <h3 className='text-primary'>
                <span style={newStyle}>Welcome Students, {greet}</span>
            </h3>
            <h3 style={{ color: 'orange' }}>Current Hour: {ctime}</h3>
        </div>
    );
}

export default Greeting;

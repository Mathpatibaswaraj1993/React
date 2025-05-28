// import Second from "./Second"
import '../App.css'


export default function First() {
    let newStyle = {
        color: 'blue',
        fontFamily: 'Arial',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
    let student = {
        rno: 1,
        sname: "Rohit",
        marks: 56,
        stream: "BCA",
        City: "Pune"
    }

    return (
        <>
            <div>

                <h2 style={newStyle}>This is First Component </h2>
                <hr />
                {/* <Second></Second> */}
            </div>
            <div className="app">
                <h1>First Component</h1>
                <hr />
            </div>
            <div className="c2">
                <p>Roll No:{student.rno}</p>
                <p>Sname:{student.sname}</p>
                <p>Marks:{student.marks}</p>
                <p>Stream:{student.stream}</p>
                <p>City:{student.city}</p>
            </div>
        </>
    )
}
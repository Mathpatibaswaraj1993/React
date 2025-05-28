import "../App.css"

function ArrayRendering() {
    let fruits = ["Apple", "Banana", "Mango", "Orange", "kiwi"]

    let studInfo = [

        {
            id: 1,
            name: "ABC",
            age: 23,
            subject: "Physics"
        },
        {
            id: 2,
            name: "XYZ",
            age: 24,
            subject: "Chemistry"

        },
        {
            id: 3,
            name: "POR",
            age: 25,
            subject: "Math"
        },
        {
            id: 4,
            name: "POR",
            age: 27,
            subject: "English"
        }
    ]

    var newArr = studInfo.map((e) => {
        return <li>{e.id}{e.name}{e.age}</li>
    })

    return (
        <>
            <div className="c2">
                <ul>
                    {
                        fruits.map((e) => {
                            return (
                                <>
                                    <li>{e}</li>
                                </>

                            )
                        })

                    }
                </ul>
            </div>

            <hr /><hr />
            {
                studInfo.map((d) => {
                    return (
                        <>
                            <div className="c3">
                                <p>{d.id} {d.name} {d.age}{d.subject}</p>

                            </div>

                        </>

                    )
                })
            }
            <hr /><hr />
            {
                <table border="2" width='400px' align="center" cellPadding="7">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>SUbject</th>
                    </tr>
                    {
                        studInfo.map((e) => {
                            return (
                                <>

                                    <tr>

                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.age}</td>
                                        <td>{e.subject}</td>
                                    </tr>


                                </>
                            )
                        })
                    }
                </table>

            }
            <hr /><hr />
            <ul>{newArr}</ul>
        </>
    )
}

export default ArrayRendering
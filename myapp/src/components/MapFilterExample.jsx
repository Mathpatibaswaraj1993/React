import React from 'react'

function MapFilterExample() {

    const employees = [
        { empId: 101, name: "Alice Johnson", profession: "Software Engineer", salary: 75000 },
        { empId: 102, name: "Bob Smith", profession: "DevOps Engineer", salary: 90000 },
        { empId: 103, name: "Charlie Brown", profession: "UI/UX Designer", salary: 68000 },
        { empId: 104, name: "Diana King", profession: "Software Engineer", salary: 72000 },
        { empId: 105, name: "Ethan Wright", profession: "DevOps Engineer", salary: 82000 },
        { empId: 106, name: "Fiona Lee", profession: "Quality Assurance", salary: 67000 },
        { empId: 107, name: "George Hall", profession: "Software Engineer", salary: 74000 },
        { empId: 108, name: "Hannah Scott", profession: "Project Manager", salary: 95000 },
        { empId: 109, name: "Ian Clark", profession: "DevOps Engineer", salary: 100000 },
        { empId: 110, name: "Julia Adams", profession: "Project Manager", salary: 85000 }
    ];
    //   Array Filter
    // let filterdArr = employees.filter((e) => (e).profession == "DevOps Engineer")
    let filterdArr = employees.filter((e) => {
        return e.profession == 'DevOps Engineer'
    })


    // using Filter getting salary gratere than 85000

    const highEarners = employees.filter(empId => empId.salary > 85000);


    return (

        <div className=''>
            <div className='text-center text-danger'>MapFilterExample
                <h2 className='text-primary'>Show Employee Info using Map</h2>
                <table class="table table-striped w-50 p-4 m-auto">
                    <thead>
                        <tr>
                            <th scope="col">Emp Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Profession</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            employees.map((e) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{e.empId}</td>
                                            <td>{e.name}</td>
                                            <td>{e.profession}</td>
                                            <td>{e.salary}</td>
                                        </tr>
                                    </>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>

            {/* filter */}

            <hr />
            <div>
                <h2 className='text-warning text-center'>Show Employee Info as per Condition Using Filter</h2>
                <br />
                <table class="table table-striped w-50 p-4 m-auto bg-warning table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Emp Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Profession</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filterdArr.map((e) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{e.empId}</td>
                                            <td>{e.name}</td>
                                            <td>{e.profession}</td>
                                            <td>{e.salary}</td>
                                        </tr>
                                    </>
                                )
                            })

                        }
                    </tbody>
                </table>

            </div>




            {/* Filter Salary */}

            <div className='text-primary text-center table-bordered'>
                <h2 className='text-warning text-center bg-success'>Show Employee Info as per Condition salary </h2>
                <br />
                <table class="table table-striped w-50 p-4 m-auto table table-hover bg-success ">
                    <thead>
                        <tr>
                            <th scope="col">Emp Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Profession</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            highEarners.map((e) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{e.empId}</td>
                                            <td>{e.name}</td>
                                            <td>{e.profession}</td>
                                            <td>{e.salary}</td>
                                        </tr>
                                    </>
                                )
                            })

                        }
                    </tbody>
                </table>

            </div>
        </div>


    )
}

export default MapFilterExample
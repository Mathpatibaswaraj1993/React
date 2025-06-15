import React from 'react'
import { Link } from 'react-router-dom';
function Employee() {

    const employees = [
        { empId: 101, name: "Alice Johnson", profession: "Software Engineer", salary: 75000 },
        { empId: 102, name: "Bob Smith", profession: "DevOps Engineer", salary: 90000 },
        { empId: 103, name: "Charlie Brown", profession: "UI/UX Designer", salary: 68000 },
        { empId: 104, name: "Diana King", profession: "Software Engineer", salary: 72000 },
        { empId: 105, name: "Ethan Wright", profession: "DevOps Engineer", salary: 82000 }
      
       
    ];
    
  return (
    <>
    <div className='container'>
                <div className='text-center text-danger'>MapFilterExample
                    <h2 className='text-primary mt-5 d-flex justify-content-center'>Show Employee Info using Map</h2>
                    <table class="table table-striped w-70 p-4 d-block table-striped">
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
                                            <tr>
                                            <td><Link to={`${e.empId}`}>{e.empId}</Link></td>
                                                {/* <td>{e.name}</td>
                                                <td>{e.profession}</td>
                                                <td>{e.salary}</td> */}
                                            </tr>
                                    )
                                })
    
                            }
                        </tbody>
                    </table>
        </div>
        </div>
                
   </>
  )
}

export default Employee
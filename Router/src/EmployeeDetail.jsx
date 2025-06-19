/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

function EmployeeDetail() {
    const { empId } = useParams()
    
    const employees = [
        { empId: 101, name: "Alice Johnson", profession: "Software Engineer", salary: 75000 },
        { empId: 102, name: "Bob Smith", profession: "DevOps Engineer", salary: 90000 },
        { empId: 103, name: "Charlie Brown", profession: "UI/UX Designer", salary: 68000 },
        { empId: 104, name: "Diana King", profession: "Software Engineer", salary: 72000 },
        { empId: 105, name: "Ethan Wright", profession: "DevOps Engineer", salary: 82000 } 
    ];

    let filterdEmp = employees.filter((e)=>e.empId==empId)
    return (
      <>
      <div className='container my-5 text-center shadow rounded-5 '>

                <br /><br />
                <div>
                  {
                                                 filterdEmp.map((e) => {
                                                     return (
                                                         <div class="card bg-primary"  style={{ width: "18rem" }}>
                                                        <div class="card-body">
                                                                     <p class="card-text">{e.empId }</p>
                                                                     <p class="card-text">{e.name }</p>
                                                                     <p class="card-text">{e.profession }</p>
                                                                     <p class="card-text">{e.salary }</p>                                                   
                                                             </div>
                                                             <a href="Home" style={{color:'green'}}>Back to Home</a>
                                                      </div>
                                                     )
                                                 })
                     
                                             }
                </div>
                
      </div>
      </>
            )
}

export default EmployeeDetail      

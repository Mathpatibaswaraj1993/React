import React from 'react'
import { useParams } from 'react-router-dom'

function EmpDetail() {
    const { name } = useParams();

    const employees = [
        { empId: 101, name: "Alice Johnson", profession: "Software Engineer", salary: 75000 },
        { empId: 102, name: "Bob Smith", profession: "DevOps Engineer", salary: 90000 },
        { empId: 103, name: "Charlie Brown", profession: "UI/UX Designer", salary: 68000 },
        { empId: 104, name: "Diana King", profession: "Software Engineer", salary: 72000 },
        { empId: 105, name: "Ethan Wright", profession: "DevOps Engineer", salary: 82000 }
    ];

    const filteredEmp = employees.filter((e) => e.name === name);

    return (
        <div className='container my-5 d-flex'>
        {filteredEmp.length !== 0 ? (
          <div className='text-center border border-success p-4 rounded' style={{ width: '300px', textAlign:'center' }}>
            {filteredEmp.map((e) => (
              <div key={e.empId}>
                <h3>Emp Id: {e.empId}</h3>
                <p>Emp Name: {e.name}</p>
                <p>Profession: {e.profession}</p>
                <p>Salary: {e.salary}</p>
              </div>
            ))}
          </div>
        ) : (
<center><div className="d-flex justify-content-center align-items-center m-auto" style={{ height: '80vh' }}>
  <h4 className="text-danger">Employee Not Found</h4>
                </div></center> 
  )}
</div>
      
                    )

                    
}

export default EmpDetail;

import React from 'react'

function ChildComp({ emp }) {
    const developers = emp.filter((e) => e.role === 'Developer')
    return (
        <div>ChildComp

            <ul>
                {developers.map((g) => (
                    <li >
                        {g.name}-{g.role}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChildComp
import React, { createContext } from 'react'
import B from './B'

const data1 = createContext()
const data2 = createContext()
const data3 = createContext()

function A() {
    const uname = "ABC"
    const age = 23
    const email ="baswaraj@gmail.com"
    
    return (
      <>
            <div>A Component</div>
           
            <data1.Provider value={uname}>
                <data2.Provider value={age}>
                    <data3.Provider value={email}>
                    <B></B>
                        
            </data3.Provider>
            </data2.Provider>

            </data1.Provider>
            </>
  )
}
export {data1,data2,data3}
export default A

import { Component } from "react";


export default class Fiveclass extends Component {
    render() {
        let a=10
        let b=20
                return (
            <>
                        <hr />
                        
                        <h2>Add:{a+b}</h2>
                        <h2>sub:{a-b}</h2>
                        <h2>mul:{a*b}</h2>
                        <h2>div:{ a/b}</h2>
            </>
        )
    }
}

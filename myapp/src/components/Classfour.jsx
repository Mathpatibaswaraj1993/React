
import { Component } from "react";

import Fiveclass from "./Fiveclass";
export default class Classfour extends Component {
    render() {
        let name = "john"
        let age = 34
        return (
            <>
                <h2>My name is :{name}</h2>
                <p>Age:{age}</p>
                <hr />
                <Fiveclass></Fiveclass>
            </>
        )
    }
}


import React from "react";
import {Link} from "react-router";
class Singleroom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arr :[]
        }
    }
    render(){
        return (
            <div className="page">
                <header>单人房</header>
            </div>
        )
    }
}

export default Singleroom;
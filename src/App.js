import React from "react";
import './App.css';

const { Component } = require("react");


// create your App component here

class App extends Component {

    state = {
        people: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then(data => {
            this.setState({
                people: data.people
            })
        })
    }

    render() {
        return (
            <div className="main">
             <h1>Mounting</h1>
             <ul>
             {this.state.people.map(personObj => 
                <li>{personObj.name}</li>
             )}
             </ul>
             </div>
        );
    }
}
 
export default App;


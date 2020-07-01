import React, { Component } from 'react'

class App extends Component {
    
    state={
        data: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(info =>{
            this.setState({
                data: info
            })
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App

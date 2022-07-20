import React, { Component } from 'react'

class Greeter extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Greeter



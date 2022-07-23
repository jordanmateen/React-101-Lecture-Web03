import React, { Component } from 'react'
import ClickyThing  from './Button'
import Display from './Display'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.initValue
        }

        /**
         * binding the "this" keyword that belongs to the scope if the Counter component to the handleIncrement method
         * 
         * this.handleIncrement = this.handleIncrement.bind(this) 
         * .bind(): The bind() method creates a new function that, when called, has its this keyword set to the provided value
         **/

    }

    // Lifecycle Method : 

    componentDidMount(){}
    componentDidUpdate(){}
    componentWillUnmount(){}

    /**When using this syntax. We need to bound manually so that we can have access to correct value "this" **see constructor for reference** */
    _handleIncrement(){
        this.setState({
            count: this.state.count + 1
        }) 
    }

    /** This current syntax  of "handleIncrement" and "handleDecrement" will automatically bind the "this" to the Counter component. 
     *  The reason we have access to the "this" keyword here is bc of Lexical Scoping
     *  Lexical scope: is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.
     *  
     *  note: We can bind our eventHandler to the parent directly on the element as well via the syntax below: 
     *  given a button: -> <Button onClick={()=>{this.eventHanlder()})}>btnName</Button>
     * **/
    handleIncrement = () =>{
        this.setState({
            count: this.state.count + 1
        }) 
    }

    handleDecrement = () =>{
        this.setState({
            count: this.state.count - 1
        }) 
    }

    render() {
        return (
            <>
                <Display display={this.state.count} />
                <ClickyThing handleEvent= {this.handleIncrement} btnName="Increase" variant="success" />
                <ClickyThing  handleEvent= {this.handleDecrement} btnName="Decrease" variant="warning" />
            </>
        )
    }
}

export default Counter
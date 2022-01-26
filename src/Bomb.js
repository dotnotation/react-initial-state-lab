import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
            // passed in from index.js
        }
    }
    render(){
        if (this.state.secondsLeft > 0){
            return <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
        } else {
            return <h1>Boom!</h1>
        }
        
    }
}

export default Bomb
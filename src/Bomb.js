// your Bomb code here!
import React, { Component } from 'react';
class Bomb extends Component {
    constructor(props)
    {
        super ()
        this.state = 
        {secondsLeft : props.initialCount}
    }
       
render (){
    const generateTimer = this.state.secondsLeft === 120 
    ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'

    return (
        <div>
          {generateTimer}
        </div>
    )
    }
 }

 export default Bomb
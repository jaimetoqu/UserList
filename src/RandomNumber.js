import React, { Component }  from 'react';

export default class RandomNumber extends Component{
  render(){
    return (
        <div>
            <br></br>
            <button onClick={this.props.updateNumber}> CHANGE NUMBER</button>
            <h4>Random number: {Math.random()}</h4>
        </div>
    );
  }
}
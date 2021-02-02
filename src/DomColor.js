import React, { Component }  from 'react';

export default class DomColor extends Component{
    render(){
      return (
          <div>
            <button onClick={this.props.changeColor}>CHANGE COLOR</button>
            <div id = "myDiv">AVATAR</div>
         </div>
      );
    }
  }
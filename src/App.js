import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList.js';
import UserForm from './UserForm.js';
import RandomNumber from './RandomNumber';
import ReactDOM from 'react-dom';
import DomColor from './DomColor';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "miguel", email: "test@miguelgomez.io"},
        {id: 2, name: "test", email: "test@test.es"}
      ]
    };
  }

  handleOnAddUser (event) {
    // prevents that the behavior is executed by default (in this case that the page updates) 
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  onUpdateNumber () {
    // to update the component manually (react method)
    this.forceUpdate();
  }

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    // finds de id of the html element in this case myDiv and sets the color 
    ReactDOM.findDOMNode(myDiv).style.color = color;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Users</h2>
        </div>
        <UserList users={this.state.users} />
        <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        <RandomNumber updateNumber={this.onUpdateNumber.bind(this)}></RandomNumber>
        <DomColor changeColor={this.findDomNodeHandler.bind(this)}></DomColor>
      </div>
    );
  }
}

export default App;

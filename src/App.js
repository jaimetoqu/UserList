import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList.js';
import UserForm from './UserForm.js';
import RandomNumber from './RandomNumber';


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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <UserList users={this.state.users} />
        <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        <RandomNumber updateNumber={this.onUpdateNumber.bind(this)}></RandomNumber>
      </div>
    );
  }
}

export default App;

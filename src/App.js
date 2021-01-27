import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList.js';
import UserForm from './UserForm.js';


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
    // evita que se ejecute su comportamiento por defecto (en este caso que cargue la pagina) 
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
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
      </div>
    );
  }
}

export default App;

import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList.js';
import UserForm from './UserForm.js';
import RandomNumber from './RandomNumber';
import ReactDOM from 'react-dom';
import DomColor from './DomColor';
import axios from 'axios';


class App extends Component {

  state = {
    users: []
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     users: [
  //       {id: 1, name: "miguel", email: "test@miguelgomez.io"},
  //       {id: 2, name: "test", email: "test@test.es"}
  //     ]
  //   };
  // }

  handleOnAddUser (event) {
    // prevents that the behavior is executed by default (in this case that the page updates) 
    event.preventDefault();
    var idNumber = Math.floor(Math.random() * 6000) + 100;
    console.log(idNumber);
    let user = {
      name: event.target.name.value,
      email: event.target.email.value,
      id: idNumber
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

  componentWillUpdate() {
    console.log(" segundo componentWillUpdate")
  }

  componentDidMount() {
    console.log("primero componentDidMount")

    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      // const persons = res.data;
      // this.setState({ persons });
      console.log('Axiosss', response.data);
      // this.state = {
      //   users: response.data
      // };
      this.setState({
        users: response.data
      });
    })
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

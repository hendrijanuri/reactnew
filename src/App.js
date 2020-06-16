import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading'

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      users: [],
      loading: false
    };
    // bind
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUsers() {
    this.setState({
      loading: true
    });
    axios('https://randomuser.me/api/?nat=US&results=1')
    .then(res => 
      this.setState({
        users: [...this.state.users, ...res.data.results],
        loading: false
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    // console.log('more users loaded');
  }

  componentDidMount() {
    this.getUsers();
  }

  render() { 
    const { loading, users } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          <input type="submit" value="add users" />
        </form>
        <hr />
        {!loading ? (
          users.map(user => (
            <div>
              <h3>{user.name.first} {user.name.last}</h3>
              <p>{user.email}</p>
              <p>{user.cell}</p>
              <hr />
              
            </div>
          ))
        ) : (<Loading message='Loadinggg...' />)
        }
      </div>
    );
  }
}
 
export default App;


import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
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
    axios('https://randomuser.me/api/?nat=US&results=5')
    .then(res => 
      this.setState({
        users: res.data.results,
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
    return (
      <div className="App">
        {!this.state.loading ? (
          this.state.users.map(user => (
            <div>
              <h3>{user.name.first} {user.name.last}</h3>
              <p>{user.email}</p>
              <p>{user.cell}</p>
              <hr/>
              <form onSubmit={this.handleSubmit} >
                <input type="submit" value="load users" />
              </form>
            </div>
          ))
        ) : (<Loading message='Loadinggg...' />)
        }
      </div>
    );
  }
}
 
export default App;

// function App() {
//   // state
//   const [users] = useState([]);

//   useEffect(() => {

//   }, []);

//   return (
    
//   );
// }

// export default App;

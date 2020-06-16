import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      users: []
    }
  }

  getUsers() {
    axios('https://randomuser.me/api/?nat=US&results=5')
    .then(res => 
      this.setState({
        users: res.data.results
      })
    );
  }

  componentDidMount() {
    this.getUsers();
  }

  render() { 
    return (
      <div className="App">
        {this.state.users.map(user => 
          <div>
            <h3>{user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>
            <p>{user.cell}</p>
            <hr/>
            
          </div>)
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

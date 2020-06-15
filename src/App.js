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

  componentDidMount(){
    axios('https://randomuser.me/api/?nat=US&results=5')
    .then(res => 
      this.setState({
        users: res.data.results
      })
    );
  }

  render() { 
    return (
      <div className="App">
        we will be back
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

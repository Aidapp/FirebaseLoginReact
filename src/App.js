import React, { Component } from "react";
//SIGNIN Form using Basic REST API Signin
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <center>
          <h1>Sign In REST API Login</h1>
        </center>
        <input placeholder="Email" type="email"/>
        <br />
        <input placeholder="Password" type="password" />
        <button type="submit" >Submit</button>
      </div>
    );
  }
}

export default App;

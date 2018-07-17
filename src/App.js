import React, { Component } from 'react';
import firebase from "firebase";
import { auth } from './firebase/firebase.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <center><h1>Firebase Login</h1></center>
      <input placeholder="Email"/><br/>
      <input placeholder="Password" type="password"/>
      <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;

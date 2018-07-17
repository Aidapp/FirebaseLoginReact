import React, { Component } from 'react';
import firebase from "firebase";
import { auth } from './firebase/firebase.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Firebase Login</h1>
      </div>
    );
  }
}

export default App;

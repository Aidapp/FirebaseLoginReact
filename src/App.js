import React, { Component } from "react";
import superagent from "superagent";
//SIGNIN Form using Basic REST API Signin
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.MailChange = this.MailChange.bind(this);
    this.PasswordChange = this.PasswordChange.bind(this);
  }
  // we console to check if it is working or not
  MailChange(e) {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
  }
  // we console to check if it is working or not
  PasswordChange(e) {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  }
  //Post Request API Callback 
  // TODO: URL WILL BE GIVEN AT THE TIME OF WORKSHOP
  SignIn() {
    var URL='';              
    superagent
      .post(URL)
      .send({ email: this.state.email, password: this.state.password })
      .end((err, res) => {
        if (err) {
          console.log(res.body.message);
          alert(res.body.message);
        } else if (res && res.body && res.body.success) {
          alert(res.body.message);
          console.log(err, res);
        }
      });
  }
  render() {
    return (
      <div className="App">
        <center>
          <h1>Sign In REST API Login</h1>
        </center>
        <input placeholder="Email" type="email" onChange={this.MailChange} />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={this.PasswordChange}
        />
        <button type="submit" onClick={this.SignIn.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

export default App;

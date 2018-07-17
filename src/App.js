import React, { Component } from "react";
//SIGNIN Form using Basic REST API Signin
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {email:"",password:""};
    this.MailChange = this.MailChange.bind(this);
    this.PasswordChange = this.PasswordChange.bind(this);
  }
  // we console to check if it is working or not
  MailChange(e)
  {
    console.log(e.target.value);
    this.setState({email:e.target.value});
  }
  // we console to check if it is working or not
  PasswordChange(e)
  {
     console.log(e.target.value);
     this.setState({password:e.target.value});
  }
  render() {
    return (
      <div className="App">
        <center>
          <h1>Sign In REST API Login</h1>
        </center>
        <input placeholder="Email" type="email" onChange={this.MailChange}/>
        <br />
        <input placeholder="Password" type="password"  onChange={this.PasswordChange}/>
        <button type="submit" >Submit</button>
      </div>
    );
  }
}

export default App;

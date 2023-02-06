import React, { useState } from "react";
import './Login.css';

function Login() {
  const [submitForm, setsubmitForm] = useState(false);
  const [error, seterror] = useState({});
  const idPassword = [
    {
      username: "admin",
      password: "admin"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const submitEvent = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userInput = idPassword.find((user) => user.username === uname.value);
    if (userInput) 
    {
      if (userInput.password !== pass.value) 
      {
        seterror({ name: "pass", message: errors.pass });
      } 
      else
      {
        setsubmitForm(true);
      }
    }
    else
    {
      seterror({ name: "uname", message: errors.uname });
    }
  };
  const errorMessage = (name) =>
    name === error.name && (
      <div className="error">{error.message}</div>
    );
  const formElement = (
    <div className="form">
      <form onSubmit={submitEvent}>
        <div className="input-con">
          <label>Username </label>
          <input type="text" name="uname" required />
          {errorMessage("uname")}
        </div>
        <div className="input-con">
          <label>Password </label>
          <input type="password" name="pass" required />
          {errorMessage("pass")}
        </div>
        <div className="button-con">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    
    <div className="app">
      <div className="login">
        <div className="title"> <h2>BidMyRide</h2> </div>
        <div className="title">Login</div>
        {submitForm ? <div>You are successfully logged in. Welcome to Dashboard</div> : formElement}
      </div>
    </div>
    
  );
}

export default Login;

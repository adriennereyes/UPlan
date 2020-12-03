import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Login = ({ setAuth }) => {
  // sets up the variable username and password to be changed once entered
  // use useState, imported above, to set their default state as an empty string
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //validates that the user has entered something in the inputs
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  //function for where data will be sent from what the user enters
  const Login = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      //fetch request for the login handler. sends the username and password that
      // the user entered in a JSON body
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parsedResponse = await response.json();

      if (parsedResponse.token) {
        localStorage.setItem("token", parsedResponse.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
      //console.log(parsedResponse);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="userPassDiv">
      <form className="registerForm" onSubmit={Login}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel id="label">Username</ControlLabel>
          <FormControl
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel id="label">Password</ControlLabel>
          <FormControl
            id="password"
            type="password"
            className="mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

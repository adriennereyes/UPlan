import React, { useState } from "react";
import { Button, FormGroup, FormControl, Form, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/Register.css";

const Register = ({ setAuth }) => {
  // sets up the variable username and password to be changed once entered
  // use useState, imported above, to set their default state as an empty string
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //validates that the user has entered something in the inputs
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  //function for where data will be sent from what the user enters
  const Register = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password, passwordConfirm };
      //fetch request for the login handler. sends the username and password that
      // the user entered in a JSON body
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parsedResponse = await response.json();

      if (parsedResponse.token) {
        localStorage.setItem("token", parsedResponse.token);
        setAuth(true);
        toast.success(parsedResponse.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } else {
        setAuth(false);
        toast.error(parsedResponse.error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
      console.log(parsedResponse);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="userPassDiv">
      <Form className="registerForm" onSubmit={Register}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel id="label">Create Username</ControlLabel>
          <FormControl
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel id="label">Create Password</ControlLabel>
          <FormControl
            id="password"
            type="password"
            className="mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel id="label">Confirm Password</ControlLabel>
          <FormControl
            id="password"
            type="password"
            className="mt-2"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </FormGroup>

        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Register
        </Button>
        <Link to="/login">Already have an account?</Link>
      </Form>
    </div>
  );
};

export default Register;

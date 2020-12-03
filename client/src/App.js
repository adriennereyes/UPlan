import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//imports for login components
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Nav from "./components/Nav";
import Planner from "./components/pages/Planner";
import Event from "./components/pages/Event";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (bool) => {
    setIsAuthenticated(bool);
  };

  const checkAuth = async () => {
    try {
      const response = await fetch("http://localhost:3001/verify", {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const parsedResponse = await response.json();

      parsedResponse === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Fragment>
      <Router>
        <Nav />
        <div className="App-container">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) =>
                !isAuthenticated ? (
                  <Home {...props} />
                ) : (
                  <Redirect to="/planner" />
                )
              }
            />
            <Route
              path="/login"
              exact
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/planner" />
                )
              }
            />
            <Route
              path="/register"
              exact
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/planner/event"
              exact
              render={(props) =>
                isAuthenticated ? (
                  <Event {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/planner"
              exact
              render={(props) =>
                isAuthenticated ? (
                  <Planner {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

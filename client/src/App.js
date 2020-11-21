

////////////////////////////////////////
import React, {Fragment} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//imports for login components
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Nav from "./Nav";
import Empty from "./empty";
import Event from "./Event";
import Planner from "./planner";

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <div className = "App container" > 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login}  />
            <Route path="/register" component={Register} />
            <Route path="/empty" component={Empty} />
            <Route path="/event" component={Event} />
            <Route path="/planner" component={Planner} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

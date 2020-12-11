import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Jumbotron>
        <h1>Introducing UPlan!</h1>
        <h5 className="mt-2">
          This is a simple planner for college students to keep them organized
          throughout their day and school year.
        </h5>
        <Link to="/register"><h4 className="mt-4">Create an account now!</h4></Link>
      </Jumbotron>
    </>
  );
};

export default Home;

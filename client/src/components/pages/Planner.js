import React from "react";
import { Link } from "react-router-dom";

function Planner() {
  return (
    <>
      <h1>Planner Holder</h1>
      <Link to="/planner/event">
        <p>Add event</p>
      </Link>
    </>
  );
}

export default Planner;

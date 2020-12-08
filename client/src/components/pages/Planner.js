import React from "react";
import { Link } from "react-router-dom";

const getEvents = async () => {
  try {
    const response = await fetch("http://localhost:3001/planner", {
      method: "GET",
      headers: { token: localStorage.token },
    });
    const parseData = await response.json();
    return parseData;
  } catch (err) {
    console.log(err.message);
  }
};

getEvents().then((data) => console.log(data));

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

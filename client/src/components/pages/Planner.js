import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


//Planner component where table will be displayed
function Planner() {
  //Set up GET request to get events for a user
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/planner", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseData = await response.json();
      setUsers(parseData.events);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <h1>Planner Holder</h1>
      <Link to="/planner/event">
        <p>Add event</p>
      </Link>
      <ul>{loading ? <p>Loading...</p> : <p>{users[1].title}</p>}</ul>
    </>
  );
}

export default Planner;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import "../styles/planner.css";
//Planner component where table will be displayed
function Planner() {
  //Set up state variables for use with the component
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (e) => {
    console.log(`${e.target.value}`);
  };
  function renderTable(event) {
    return (
      <tr onClick={handleClick}>
        <td>{event.title}</td>
        <td>{event.type}</td>
        <td>{event.description}</td>
        <td>{event.start_date.toDateString()}</td>
        <td>{event.end_date.toDateString()}</td>
      </tr>
    );
  }
  //Converts ISO string dates to objects
  function formatDate(event) {
    event.start_date = new Date(event.start_date.toString());
    event.end_date = new Date(event.end_date.toString());
  }

  //Set up GET request to get events for a user
  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/planner", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseData = await response.json();
      parseData.events.map(formatDate);
      setEvents(parseData.events);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  //Updates the state of the events array
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <div id="button-div" class="flex">
        <Link to="/planner/event">
          <Button className="bg-primary text-light">Add event</Button>
        </Link>
        <div class="delete-div">
          <Button className="bg-danger text-light">Delete</Button>
        </div>
      </div>
      <div id="table-div">
        <h1>Planner</h1>
        <Table bordered hover>
          <thead>
            <th>Title</th>
            <th>Type</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
          </thead>
          <tbody>{loading ? <p>Loading...</p> : events.map(renderTable)}</tbody>
        </Table>
      </div>
    </>
  );
}

export default Planner;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function renderTable(event) {
  return (
    <tr>
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
//Planner component where table will be displayed
function Planner() {
  //Set up state variables for use with the component

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <h1>Planner Holder</h1>
      <Link to="/planner/event">
        <p>Add event</p>
      </Link>
      <div id="tableContainer">
        <Table>
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

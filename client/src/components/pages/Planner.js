import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import "../styles/planner.css";
//Planner component where table will be displayed
function Planner() {
  //Set up state variables for use with the component
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletedEvent, setDeletedEvent] = useState("");

  const handleChange = (e) => {
    setDeletedEvent(e.target.value);
    console.log(e.target.value);
  };
  //Generates tbody row components
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

  //Searches array for event to delete
  function searchArray(arr, value) {
    const foundIndex = arr.find((element) => element.title === value);
    console.log(foundIndex);
    return foundIndex;
  }
  //Delete request to delete the event from table
  const deleteEvent = async (e) => {
    e.preventDefault();
    let event;
    if (typeof event != undefined) {
      try {
        const response = await fetch(
          `http://localhost:3001/planner/:${0}`,
          {
            method: "DELETE",
            headers: { token: localStorage.token },
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  // searchArray(events, "Sandra's Birthday Party");
  //Updates the state of the events array
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <div class="button-div flex">
        <Link to="/planner/event">
          <Button className="bg-primary text-light">Add event</Button>
        </Link>
        <div class="delete-div flex">
          <FormGroup bsSize="large">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              controlId="deletedEvent"
              name="deletedEvent"
              type="text"
              value={deletedEvent}
              onChange={handleChange}
            ></FormControl>
          </FormGroup>
          <Button
            type="submit"
            onClick={deleteEvent}
            className="bg-danger text-light"
          >
            Delete
          </Button>
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { toast } from "react-toastify";
import "../styles/Planner.css";
//Planner component where table will be displayed
function Planner() {
  //Set up state variables for use with the component
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [deletedEvent, setDeletedEvent] = useState("");

  const handleChange = (e) => {
    setDeletedEvent(e.target.value);
  };
  //Generates tbody row components
  function renderTable(event) {
    return (
      <tr key={event.event_id}>
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
    return foundIndex;
  }
  //Delete request to delete the event from table
  const deleteEvent = async (e) => {
    e.preventDefault();
    let event = searchArray(events, deletedEvent);
    let eventList = [...events];
    //If event is found, fetch DELETE
    if (typeof event != undefined) {
      try {
        const response = await fetch(
          `http://localhost:3001/planner/${event.event_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.token,
            },
          }
        );
        const JSONResponse = await response.json();

        if (JSONResponse.hasOwnProperty("message")) {
          toast.success(JSONResponse.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(JSONResponse.error, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }

        //Update the events array, and change state
        let updatedEvents = eventList.filter(
          (selectedEvent) => selectedEvent.event_id !== event.event_id
        );
        setEvents(updatedEvents);
      } catch (err) {
        console.log(err);
      }
    }
  };
  //Updates the state of the events array
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <div className="button-div flex">
        <Link to="/planner/event">
          <Button className="bg-primary text-light">Add event</Button>
        </Link>
        <div className="delete-div flex">
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
          <tbody>{isLoading ? <div></div> : events.map(renderTable)}</tbody>
        </Table>
      </div>
    </>
  );
}

export default Planner;

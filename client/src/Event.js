import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
} from "react-bootstrap";

import "./event.css";

//Function that creates Event component

function Event() {
  //Sets the original state of the form fields
  const [fields, setfields] = useState({
    title: "",
    type: "",
    startMonth: "",
    startDay: "",
    startYear: "",
    startTime: "",
    endMonth: "",
    endDay: "",
    endYear: "",
    endTime: "",
    description: "",
  });

  //Updates the text input in the fields
  const handleChange = (e) => {
    setfields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  //Validates User Input to see if anything was entered
  function validateInput() {
    let formValid = true;

    for (const field in fields) {
      if (fields[field].length === 0) {
        formValid = false;
      }
    }
    return formValid;
  }

  //Sends a POST request to the server of all of the form data
  const submitEvent = async (e) => {
    e.preventDefault();

    const body = {
      title: fields.title,
      description: fields.description,
      startDate: `${fields.startMonth}/${fields.startDay}/${fields.startYear}`,
      endDate: `${fields.endMonth}/${fields.endDay}/${fields.endYear}`,
      type: fields.type,
    };

    //If input is valid, send a POST request
    if (validateInput()) {
      console.log("Yay!");
      
      fetch("/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => {
          console.log(response.json);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //The HTML form loaded to the webpage
  return (
    <>
      <div class="eventDiv">
        <div class="header text-center">
          <h1>Add Event</h1>
        </div>
        <Form onSubmit={submitEvent}>
          <Row>
            <Col sm="12">
              <FormGroup bsSize="large">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  controlId="title"
                  name="title"
                  type="text"
                  value={fields.title}
                  onChange={handleChange}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup bsSize="large">
                <ControlLabel>Event Type</ControlLabel>
                <select
                  className="form-control"
                  id="type"
                  name="type"
                  value={fields.type}
                  onChange={handleChange}
                >
                  <option selected value="">
                    Choose..
                  </option>
                  <option value="School">School</option>
                  <option value="Work">Work</option>
                  <option value="Appointment">Appointment</option>
                  <option value="Party">Party</option>
                </select>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>Start Month</ControlLabel>
                <select
                  className="form-control"
                  name="startMonth"
                  id="startMonth"
                  value={fields.startMonth}
                  onChange={handleChange}
                >
                  <option selected></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>Start Day</ControlLabel>
                <select
                  className="form-control"
                  id="start-day"
                  name="startDay"
                  value={fields.startDay}
                  onChange={handleChange}
                >
                  <option selected></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">21</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>Start Year</ControlLabel>
                <FormControl
                  controlId="start-year"
                  type="text"
                  name="startYear"
                  value={fields.startYear}
                  onChange={handleChange}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>Start Time</ControlLabel>
                <FormControl
                  controlId="start-time"
                  type="time"
                  name="startTime"
                  value={fields.startTime}
                  onChange={handleChange}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>End Month</ControlLabel>
                <select
                  className="form-control"
                  id="end-month"
                  name="endMonth"
                  value={fields.endMonth}
                  onChange={handleChange}
                >
                  <option selected> </option>

                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>End Day</ControlLabel>
                <select
                  className="form-control"
                  id="end-day"
                  name="endDay"
                  value={fields.endDay}
                  onChange={handleChange}
                >
                  <option selected value="Choose"></option>

                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">21</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>End Year</ControlLabel>
                <FormControl
                  controlId="end-year"
                  type="text"
                  name="endYear"
                  value={fields.endYear}
                  onChange={handleChange}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>End Time</ControlLabel>
                <FormControl
                  controlId="end-time"
                  type="time"
                  name="endTime"
                  value={fields.endTime}
                  onChange={handleChange}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup bsSize="large">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  controlId="description"
                  type="text"
                  name="description"
                  value={fields.description}
                  onChange={handleChange}
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Button blockbSize="large" variant="primary" type="submit">
            Add Event
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Event;

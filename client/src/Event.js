import React, { useState } from "react";
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

//Function that handles Event component
function Event() {
  //Sets the original state of the form fields
  const [title, setTitle] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startDay, setStartDay] = useState("");
  const [startYear, setStartYear] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endDay, setEndDay] = useState("");
  const [endYear, setEndYear] = useState("");
  const [endTime, setEndTime] = useState("");

  const [description, setDescription] = useState("");
  //Sends a POST request to the server of all of the form data
  function add() {
    console.log("Great!");
  }
  return (
    <>
      <div class="eventDiv">
        <div class="header text-center">
          <h1>Add Event</h1>
        </div>
        <Form onSubmit={add}>
          <Row>
            <Col sm="12">
              <FormGroup bsSize="large">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  controlId="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>Start Month</ControlLabel>
                <select
                  className="form-control"
                  id="start-month"
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
                >
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
                  value={startDay}
                  onChange={(e) => setStartDay(e.target.value)}
                >
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
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>Start Time</ControlLabel>
                <FormControl
                  controlId="start-time"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>End Month</ControlLabel>
                <select
                  className="form-control"
                  id="end-month"
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
                >
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
                  value={endDay}
                  onChange={(e) => setEndDay(e.target.value)}
                >
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
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup bsSize="large">
                <ControlLabel>End Time</ControlLabel>
                <FormControl
                  controlId="end-time"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup bsSize="large">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  controlId="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Button blockbSize="large" variant="secondary" type="submit">
            Add Event
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Event;

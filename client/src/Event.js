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

function Event() {
  const [title, setTitle] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startDay, setStartDay] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endDay, setEndDay] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  function add() {
    alert("The form was sent");
    console.log("startMonth");
  }
  return (
    // <>
    //   <h1>Add Event</h1>
    //   <form>
    //     <div class="form-row">
    //       <div class="labels form-group row col-sm-12">
    //         <label for="title" class="col-sm-1 col-form-label">
    //           Title
    //         </label>
    //         <div class="col-sm-12">
    //           <input
    //             type="text"
    //             class="form-control"
    //             id="title"
    //             placeholder="Title"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div class="form-row justify-content-between">
    //       <div class="labels row col-sm-3">
    //         <label for="start-time" class="col-sm-1 col-form-label">
    //           Start Month
    //         </label>
    //         <div class="col-sm-12">
    //           <select id="inputState" class="form-control">
    //             <option selected>Choose...</option>
    //             <option>01</option>
    //             <option>02</option>
    //             <option>03</option>
    //             <option>04</option>
    //             <option>05</option>
    //             <option>06</option>
    //             <option>07</option>
    //             <option>08</option>
    //             <option>09</option>
    //             <option>10</option>
    //             <option>11</option>
    //             <option>12</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div class="labels row col-sm-3">
    //         <label for="start-time" class="col-sm-1 col-form-label">
    //           Start Day
    //         </label>
    //         <div class="col-sm-12">
    //           <select id="inputState" class="form-control">
    //             <option selected>Choose...</option>
    //             <option>01</option>
    //             <option>02</option>
    //             <option>03</option>
    //             <option>04</option>
    //             <option>05</option>
    //             <option>06</option>
    //             <option>07</option>
    //             <option>08</option>
    //             <option>09</option>
    //             <option>10</option>
    //             <option>11</option>
    //             <option>12</option>
    //             <option>13</option>
    //             <option>14</option>
    //             <option>15</option>
    //             <option>16</option>
    //             <option>17</option>
    //             <option>18</option>
    //             <option>19</option>
    //             <option>20</option>
    //             <option>21</option>
    //             <option>22</option>
    //             <option>23</option>
    //             <option>24</option>
    //             <option>25</option>
    //             <option>26</option>
    //             <option>27</option>
    //             <option>28</option>
    //             <option>29</option>
    //             <option>30</option>
    //             <option>31</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div class="labels row col-sm-3">
    //         <label for="start-time" class="col-sm-1 col-form-label">
    //           Start Year
    //         </label>
    //         <div class="col-sm-12">
    //           <input
    //             type="text"
    //             class="form-control"
    //             id="start-year"
    //             placeholder="Year"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div class="form-row justify-content-between">
    //       <div class="labels row col-sm-3">
    //         <label for="start-time" class="col-sm-1 col-form-label">
    //           End Month
    //         </label>
    //         <div class="col-sm-12">
    //           <select id="inputState" class="form-control">
    //             <option selected>Choose...</option>
    //             <option>01</option>
    //             <option>02</option>
    //             <option>03</option>
    //             <option>04</option>
    //             <option>05</option>
    //             <option>06</option>
    //             <option>07</option>
    //             <option>08</option>
    //             <option>09</option>
    //             <option>10</option>
    //             <option>11</option>
    //             <option>12</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div class="labels row col-sm-3">
    //         <label for="start-time" class="col-sm-1 col-form-label">
    //           End Day
    //         </label>
    //         <div class="col-sm-12">
    //           <select id="inputState" class="form-control">
    //             <option selected>Choose...</option>
    //             <option>01</option>
    //             <option>02</option>
    //             <option>03</option>
    //             <option>04</option>
    //             <option>05</option>
    //             <option>06</option>
    //             <option>07</option>
    //             <option>08</option>
    //             <option>09</option>
    //             <option>10</option>
    //             <option>11</option>
    //             <option>12</option>
    //             <option>13</option>
    //             <option>14</option>
    //             <option>15</option>
    //             <option>16</option>
    //             <option>17</option>
    //             <option>18</option>
    //             <option>19</option>
    //             <option>20</option>
    //             <option>21</option>
    //             <option>22</option>
    //             <option>23</option>
    //             <option>24</option>
    //             <option>25</option>
    //             <option>26</option>
    //             <option>27</option>
    //             <option>28</option>
    //             <option>29</option>
    //             <option>30</option>
    //             <option>31</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div class="labels row col-sm-3">
    //         <label for="start-time" class="col-sm-1 col-form-label">
    //           End Year
    //         </label>
    //         <div class="col-sm-12">
    //           <input
    //             type="text"
    //             class="form-control"
    //             id="end-year"
    //             placeholder="Year"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div class="form-row">
    //       <div class="labels row col-sm-12">
    //         <label for="description" class=" labels col-sm-1 col-form-label">
    //           Description
    //         </label>
    //         <div class="col-sm-12">
    //           <p>
    //             <input
    //               class="form-action form-control"
    //               type="text"
    //               id="description"
    //               placeholder="Description"
    //             />
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    // </>
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
            <Col sm="4">
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
            <Col sm="4">
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
            <Col sm="4">
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
            <Col sm="4">
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
            <Col sm="4">
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
            <Col sm="4">
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

          <Button variant="secondary" type="submit">
            Add Event
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Event;

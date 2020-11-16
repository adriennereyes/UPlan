import React from "react";
import "./event.css";

export default function Event() {
  return (
    <form>
      <div class="form-row">
        <div class="labels form-group row col-sm-12">
          <label for="title" class="col-sm-1 col-form-label">
            Title
          </label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
        </div>
      </div>
      <div class="form-row justify-content-between">
        <div class="labels row col-sm-3">
          <label for="start-time" class="col-sm-1 col-form-label">
            Start Month
          </label>
          <div class="col-sm-12">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
        </div>
        <div class="labels row col-sm-3">
          <label for="start-time" class="col-sm-1 col-form-label">
            Start Day
          </label>
          <div class="col-sm-12">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
          </div>
        </div>
        <div class="labels row col-sm-3">
          <label for="start-time" class="col-sm-1 col-form-label">
            Start Year
          </label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="start-year"
              placeholder="Year"
            />
          </div>
        </div>
      </div>
      <div class="form-row justify-content-between">
        <div class="labels row col-sm-3">
          <label for="start-time" class="col-sm-1 col-form-label">
            End Month
          </label>
          <div class="col-sm-12">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
        </div>
        <div class="labels row col-sm-3">
          <label for="start-time" class="col-sm-1 col-form-label">
            End Day
          </label>
          <div class="col-sm-12">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
          </div>
        </div>
        <div class="labels row col-sm-3">
          <label for="start-time" class="col-sm-1 col-form-label">
            End Year
          </label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="end-year"
              placeholder="Year"
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="labels row col-sm-12">
          <label for="description" class=" labels col-sm-1 col-form-label">
            Description
          </label>
          <div class="col-sm-12">
            <p>
              <input
                class="form-action form-control"
                type="text"
                id="description"
                placeholder="Description"
              />
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

import React from "react";
import "./empty.css";

//Component that displays empty message if there are no plans.

export default function Empty() {
  return (
    
    <div class="empty">
      <h1>Your planner is empty!</h1>
      <button class="btn" >Add a planner!</button>
    </div>
  );
}

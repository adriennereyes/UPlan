const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use(express.json());

// Create an event
router.post("/create", (req, res) => {
  let body = req.body;
  let userId = body.userId;
  let eventName = body.name;
  let eventDescription = body.description;
  let eventDate = body.date;

  if (
    !body.hasOwnProperty("name") ||
    !body.hasOwnProperty("description") ||
    !body.hasOwnProperty("date")
  ) {
    return res.sendStatus(400);
  }

  pool
    .query(
      "INSERT INTO events(user_id, name, description, date) VALUES($1, $2, $3, $4) RETURNING *",
      [userId, eventName, eventDescription, eventDate]
    )
    .then((response) => {
      res.status(200).send();
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

// TODO: Display all events
router.get("/", (req, res, next) => {
  res.send("working");
  next();
});

module.exports = router;

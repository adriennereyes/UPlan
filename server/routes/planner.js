const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use(express.json());

// Create an event
router.post("/create", (req, res) => {
  let body = req.body;
  let {
    eventId,
    userId,
    title: eventTitle,
    description: eventDescription,
    startDate: eventStartDate,
    endDate: eventEndDate,
    deleted,
    type: eventType,
  } = req.body;

  if (
    !body.hasOwnProperty("eventId") ||
    !body.hasOwnProperty("title") ||
    !body.hasOwnProperty("description") ||
    !body.hasOwnProperty("startDate") ||
    !body.hasOwnProperty("endDate") ||
    !body.hasOwnProperty("type")
  ) {
    return res.sendStatus(400);
  }

  pool
    .query(
      "INSERT INTO events(event_id, user_id, title, description, start_date, end_date, deleted, type) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [eventId, userId, eventTitle, eventDescription, eventStartDate, eventEndDate, deleted, eventType]
    )
    .then((response) => {
      res.status(200).send();
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

// Display all events
router.get("/:userId", (req, res, next) => {
  let body = req.body;
  let { userId } = req.params;

  pool
    .query("SELECT * FROM EVENTS WHERE user_id = $1", [userId])
    .then((response) => {
      res.status(200).json({ events: response.rows });
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

module.exports = router;

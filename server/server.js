const express = require("express");
const pool = require("./db");
const authRouter = require("./routes/auth");
const eventRouter = require("./routes/planner");

const app = express();

const hostname = "localhost";
const port = 3000;

// Middleware //
app.use(express.json());

// ROUTES //
app.use('/', authRouter);
app.use('/planner', eventRouter);



app.listen(port, hostname, () => {
  console.log(`Listening at: http://${hostname}:${port}`);
});

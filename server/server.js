const express = require("express");
const pool = require("./db");
const authRouter = require("./routes/auth");
const plannerRouter = require("./routes/planner");
const cors = require("cors");

const app = express();

const hostname = "localhost";
const port = 3001;

// Middleware //
app.use(cors());
app.use(express.json());

// MIDDLEWARE ROUTES //
app.use('/', authRouter);
app.use('/planner', plannerRouter);



app.listen(port, hostname, () => {
  console.log(`Listening at: http://${hostname}:${port}`);
});

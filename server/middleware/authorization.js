require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("token");

  // Checks if request has a token
  if (!token) {
    return res.status(403).json({ error: "User not authorized" });
  }
  //Verifies if the token is valid
  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = payload.user;
    next();
  } catch (error) {
    return res.status(403).json({ error: "User not authorized" });
  }
};

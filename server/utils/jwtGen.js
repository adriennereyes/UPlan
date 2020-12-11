require("dotenv").config();

const jwt = require("jsonwebtoken");

function jwtGen(user_id) {
  const payload = {
    user: {
      id: user_id
    }
  };

  // Creates jwt token for a new user
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2h" });
}

module.exports = jwtGen;

const express = require('express');
const router = express.Router();

// TODO: Authenticate user
router.post('/login', (req, res) => {
    res.send("Working");
})

// TODO: Sign up new user
router.post('/signup', (req, res) => {
    res.send("working")
})


module.exports = router;
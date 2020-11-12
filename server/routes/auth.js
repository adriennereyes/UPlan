const express = require('express');
const router = express.Router();

// TODO: Authenticate user
router.post('/login', (req, res) => {
    res.send("Working");
})

// TODO: Register new user
router.post('/register', (req, res) => {
    res.send("working")
})


module.exports = router;
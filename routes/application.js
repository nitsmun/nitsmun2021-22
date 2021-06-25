var express = require('express');
var router = express.Router();

//example backend route
router.get('/hello', (req, res) => {
    res.json({"message":"Hello world!"})
})

module.exports = router;
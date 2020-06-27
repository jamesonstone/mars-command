var express = require('express');
var router = express.Router();

const testObject = {
    "hello": "world"
}

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.json(testObject)
});

module.exports = router;

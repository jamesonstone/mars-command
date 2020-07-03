var express = require('express');
var router = express.Router();

const testObject = {
    "hello": "world"
}

/* GET register page. */
router.get('/', (req, res, next) => {
  res.json(testObject)
});

module.exports = router;

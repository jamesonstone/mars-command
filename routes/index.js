var express = require('express');
var router = express.Router();
const main = require('../service/main')

router.get('/', function(req, res, next) {
  res.json(main.getServiceList())
});

router.get('/functions', function(req, res, next) {
  res.json(main.getAvailableFunctions())
});

module.exports = router;

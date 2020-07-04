var express = require('express');
var router = express.Router();
const main = require('../service/main')

let serviceList = []

const statusReceived = {
    "status": "received"
}

router.get('/', (req, res, next) => {
  availableService = main.getServiceList();
  res.json(availableService);
});

router.post('/', (req, res, next) => {
  const service = req.body;
  main.addServiceToList(service);
  res.json(statusReceived);
})

module.exports = router;

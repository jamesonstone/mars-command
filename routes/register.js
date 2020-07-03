var express = require('express');
var router = express.Router();

const statusReceived = {
    "status": "received"
}

/*
* GET register page.
*/
router.get('/', (req, res, next) => {
  res.json(statusReceived)
});

router.post('/', (req, res, next) => {
  const service = req.body
  console.log(service.spec.paths['/health'])
  res.json(statusReceived)
})

module.exports = router;

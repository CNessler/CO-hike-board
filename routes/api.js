var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/co-hike-board')
var Hike = db.get('hike')

router.get('/hikes', function(req, res, next) {
  Hike.find({}).then(function (hikes) {
    console.log(hikes, "HIKES SERVER SIDE");
    res.json(hikes)
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/co-hike-board')
var Hike = db.get('hike')

router.get('/hikes', function(req, res, next) {
  Hike.find({}).then(function (hikes) {
    res.json(hikes)
  })
});

router.post('/hikes', function (req, res, next) {
  Hike.insert(req.body);
})

router.post('/comment', function (req, res, next) {
    console.log(req.body, 'this is the body');
    Hike.update({_id: req.body.post}, {$push: {comment: {user: req.body.user, comment: req.body.comment}}});
})



module.exports = router;

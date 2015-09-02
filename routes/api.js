var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI)
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
  Hike.update({_id: req.body.post}, {$push: {comment: {user: req.body.user, comment: req.body.comment}}});
})

router.post('/upvote', function (req, res, next) {
  Hike.update({_id: req.body._id}, {$set: {votes: req.body.votes}})
})
router.post('/downvote', function (req, res, next) {
  Hike.update({_id: req.body._id}, {$set: {votes: req.body.votes}})
})



module.exports = router;

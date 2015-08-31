var express = require('express');
var router = express.Router();

get.router("/", function (res, req, next) {
  res.json({ message: "hello"});
})



module.exports = router;

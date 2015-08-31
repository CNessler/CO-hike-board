var express = require('express');
var router = express.Router();

router.get("/", function (res, req, next) {
  res.json({ message: "hello"});
})



module.exports = router;

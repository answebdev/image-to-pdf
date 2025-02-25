var express = require('express');
var router = express.Router();

var path = require('path');

//create a '/' GET route that'll return the index.html file stored in the public/html folder
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/html/index.html'));
});

module.exports = router;

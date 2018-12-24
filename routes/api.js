var express = require('express');
var router = express.Router();

var test = require('./api/test.js');

router.use('/test', test);

module.exports = router;


var express = require('express');
var router = express.Router();
var controllerMP = require('../controllers/mainPage');

/* GET home page. */
router.get('/', controllerMP.renderPage);

module.exports = router;

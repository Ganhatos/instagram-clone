var express = require('express');
const postsController = require('../controllers/postsController');
var router = express.Router();

/* GET home page. */
router.get('/', postsController.index);

module.exports = router;

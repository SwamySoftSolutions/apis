const express = require('express');
const router = express.Router();

const commonCtrl = require('../controllers/common');

router.get('/apiTest', commonCtrl.getApiTest);

module.exports = router;